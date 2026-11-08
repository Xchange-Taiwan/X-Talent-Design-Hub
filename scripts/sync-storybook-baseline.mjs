#!/usr/bin/env node
/**
 * Sync latest Storybook component index from https://x-talent-storybook.x-talent.workers.dev/index.json
 * into public/storybook-baseline.json so AI agents (ChatGPT Codex / Aside) always reference current components.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const STORYBOOK_URL = process.env.STORYBOOK_URL || 'https://x-talent-storybook.x-talent.workers.dev';

async function main() {
  console.log(`[sync-storybook-baseline] Fetching ${STORYBOOK_URL}/index.json ...`);
  const res = await fetch(`${STORYBOOK_URL}/index.json`);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} from ${STORYBOOK_URL}/index.json`);
  }
  const indexData = await res.json();
  const entries = Object.values(indexData.entries || {});
  const stories = entries.filter(e => e.type === 'story').map(e => ({
    id: e.id,
    title: e.title,
    name: e.name,
    importPath: e.importPath,
    iframeUrl: `${STORYBOOK_URL}/iframe.html?id=${encodeURIComponent(e.id)}&viewMode=story`
  }));

  const outPath = path.resolve(process.cwd(), 'public', 'storybook-baseline.json');
  await fs.writeFile(
    outPath,
    JSON.stringify({
      syncedAt: new Date().toISOString(),
      storybookUrl: STORYBOOK_URL,
      totalStories: stories.length,
      stories
    }, null, 2),
    'utf8'
  );
  console.log(`✅ Synced ${stories.length} Storybook stories to public/storybook-baseline.json`);
}

main().catch(err => {
  console.warn('[sync-storybook-baseline] Warning:', err.message);
  process.exit(0);
});
