#!/usr/bin/env node
/**
 * Build structured public/design-hub-kb.json from Design Hub registry files
 * (public/registry.js, public/frontend-registry.js, public/component-map.js,
 *  public/hub-manifest.json, public/storybook-baseline.json)
 * so Cloudflare KV and AI agents can consume Design Hub directly as the Single Source of Truth.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';

const DESIGN_HUB_PROD_URL = process.env.DESIGN_HUB_URL || 'https://x-talent-design-hub.x-talent.workers.dev';
const DESIGN_HUB_PREVIEW_URL = process.env.DESIGN_HUB_PREVIEW_URL || 'https://x-talent-design-hub-preview.x-talent.workers.dev';
const STORYBOOK_URL = process.env.STORYBOOK_URL || 'https://x-talent-storybook.x-talent.workers.dev';

async function readTextIfExists(filePath) {
  try {
    return await fs.readFile(filePath, 'utf8');
  } catch {
    return '';
  }
}

async function readJsonIfExists(filePath, fallback = {}) {
  try {
    return JSON.parse(await fs.readFile(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

async function main() {
  const pubDir = path.resolve(process.cwd(), 'public');
  const regJs = await readTextIfExists(path.join(pubDir, 'registry.js'));
  const feRegJs = await readTextIfExists(path.join(pubDir, 'frontend-registry.js'));
  const chatRegJs = await readTextIfExists(path.join(pubDir, 'chat-registry.js'));
  const cmpMapJs = await readTextIfExists(path.join(pubDir, 'component-map.js'));
  const manifestJson = await readJsonIfExists(path.join(pubDir, 'hub-manifest.json'), { screens: [] });
  const sbBaselineJson = await readJsonIfExists(path.join(pubDir, 'storybook-baseline.json'), { totalStories: 0 });

  const sandbox = {
    window: {
      HUB_DATA: { tickets: [], screens: [], components: [] },
      HUB_COMPONENT_MAP: { existing: {}, newDesigns: {} },
    },
    Object,
    Array,
    String,
    Number,
    Boolean,
    Date,
    Math,
    JSON,
    console,
  };
  sandbox.globalThis = sandbox.window;

  vm.createContext(sandbox);
  if (regJs) vm.runInContext(regJs, sandbox);
  if (feRegJs) vm.runInContext(feRegJs, sandbox);
  if (cmpMapJs) vm.runInContext(cmpMapJs, sandbox);
  if (chatRegJs) vm.runInContext(chatRegJs, sandbox);

  const HUB_DATA = sandbox.window.HUB_DATA || { tickets: [], screens: [], components: [] };
  const HUB_COMPONENT_MAP = sandbox.window.HUB_COMPONENT_MAP || { existing: {}, newDesigns: {} };

  const screensCatalog = (HUB_DATA.screens || []).map((s) => ({
    id: s.id,
    name: s.name,
    group: s.group,
    description: s.description || undefined,
    module: s.module,
    route: s.route || undefined,
    tickets: s.tickets || [],
    date: s.date,
    version: String(s.version ?? ''),
    sourceKind: s.sourceKind || (s.module === 'frontend' ? 'frontend' : 'delivery-snapshot'),
    sourceUrl: s.source,
    frontendCode: s.frontendCode || undefined,
    scenarios: (s.scenarios || []).map(([key, label]) => ({ key, label })),
    components: s.components || [],
    note: s.note,
    hubUrl: `${DESIGN_HUB_PROD_URL}/?view=screens&screen=${encodeURIComponent(s.id)}`,
  }));

  for (const ms of manifestJson.screens || []) {
    if (!screensCatalog.some((x) => x.id === ms.id)) {
      screensCatalog.push({
        id: ms.id,
        name: ms.title,
        group: '獨立探索原型 (Standalone Screens)',
        module: 'standalone',
        tickets: String(ms.ticket || '')
          .replace(/#/g, '')
          .split(/[\/\s,]+/)
          .filter(Boolean),
        date: ms.updatedAt,
        version: ms.status || 'Prototype',
        sourceKind: 'standalone-prototype',
        sourceUrl: `${DESIGN_HUB_PROD_URL}/${String(ms.path || '').replace(/^\.\//, '')}`,
        scenarios: [{ key: 'default', label: ms.title }],
        components: [],
        note: ms.notes,
        hubUrl: `${DESIGN_HUB_PROD_URL}/${String(ms.path || '').replace(/^\.\//, '')}`,
      });
    }
  }

  const componentsCatalog = (HUB_DATA.components || []).map((c) => {
    const existingSb = HUB_COMPONENT_MAP.existing?.[c.id];
    const newDesignComp = HUB_COMPONENT_MAP.newDesigns?.[c.id];
    return {
      id: c.id,
      name: c.name,
      label: c.label,
      kind: c.kind,
      code: c.code || null,
      commit: c.commit || HUB_DATA.commit,
      screens: c.screens || [],
      scenario: c.scenario || undefined,
      rules: c.rules || [],
      changes: c.changes || [],
      mapping: c.mapping || '',
      storybookUrl: existingSb?.url || null,
      composition: newDesignComp
        ? {
            level: newDesignComp.level,
            scope: newDesignComp.scope,
            reuse: newDesignComp.reuse || [],
          }
        : undefined,
    };
  });

  const screenGroupsMap = new Map();
  for (const s of screensCatalog) {
    if (!screenGroupsMap.has(s.group)) screenGroupsMap.set(s.group, []);
    screenGroupsMap.get(s.group).push({
      id: s.id,
      name: s.name,
      route: s.route,
      tickets: s.tickets,
      version: s.version,
      scenariosCount: s.scenarios.length,
      hubUrl: s.hubUrl,
    });
  }
  const screenGroups = [...screenGroupsMap.entries()].map(([group, screens]) => ({
    group,
    count: screens.length,
    screens,
  }));

  const tickets = [...(HUB_DATA.tickets || [])];
  if (!tickets.some((t) => t.id === '654')) {
    tickets.push({ id: '654', name: '聊聊設計探索 (Mentee 發起對話與聊天室)', date: '2026-11-07' });
  }

  const kb = {
    syncedAt: new Date().toISOString(),
    revision: HUB_DATA.revision || 'latest',
    designHubProductionUrl: DESIGN_HUB_PROD_URL,
    designHubPreviewUrl: DESIGN_HUB_PREVIEW_URL,
    storybookUrl: STORYBOOK_URL,
    repository: 'Xchange-Taiwan/X-Talent-Design-Hub',
    frontendRepo: HUB_DATA.repo || 'https://github.com/Xchange-Taiwan/X-Talent-Frontend',
    frontendBaselineCommit: HUB_DATA.commit || '',
    summary: {
      totalScreens: screensCatalog.length,
      totalComponents: componentsCatalog.length,
      existingStorybookMappedCount: Object.keys(HUB_COMPONENT_MAP.existing || {}).length,
      newCompositeDesignsCount: Object.keys(HUB_COMPONENT_MAP.newDesigns || {}).length,
      totalStorybookStories: sbBaselineJson.totalStories || 0,
      trackedTicketsCount: tickets.length,
    },
    tickets,
    screenGroups,
    screens: screensCatalog,
    components: componentsCatalog,
    componentMap: HUB_COMPONENT_MAP,
  };

  const outPath = path.join(pubDir, 'design-hub-kb.json');
  await fs.writeFile(outPath, JSON.stringify(kb, null, 2) + '\n', 'utf8');
  console.log(`✅ Built public/design-hub-kb.json (${screensCatalog.length} screens, ${componentsCatalog.length} components, ${tickets.length} tickets)`);
}

main().catch((err) => {
  console.error('[build-design-hub-kb] Error:', err);
  process.exit(1);
});
