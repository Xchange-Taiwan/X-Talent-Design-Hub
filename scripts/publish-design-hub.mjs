#!/usr/bin/env node
/**
 * One-command publisher for X-Talent Design Hub (used by Bonny via ChatGPT Codex or Aside Skill).
 *
 * Usage:
 *   node scripts/publish-design-hub.mjs --mode preview --ticket 737 [--file public/screens/mentor-card-737.html --title "搜尋頁導師卡片"]
 *   node scripts/publish-design-hub.mjs --mode prod --ticket 737
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';

function parseArgs(argv) {
  const out = { mode: 'preview', ticket: '', file: '', title: '', notes: '', status: '' };
  for (let i = 2; i < argv.length; i++) {
    const k = argv[i];
    const v = argv[i + 1];
    if (k === '--mode' && v) { out.mode = v; i++; }
    else if (k === '--ticket' && v) { out.ticket = v.replace(/^#/, ''); i++; }
    else if (k === '--file' && v) { out.file = v; i++; }
    else if (k === '--title' && v) { out.title = v; i++; }
    else if (k === '--notes' && v) { out.notes = v; i++; }
    else if (k === '--status' && v) { out.status = v; i++; }
  }
  return out;
}

function run(cmd) {
  console.log(`> ${cmd}`);
  return execSync(cmd, { stdio: 'inherit' });
}

async function main() {
  const args = parseArgs(process.argv);
  const isProd = args.mode === 'prod' || args.mode === 'production' || args.mode === 'main';
  const ticketLabel = args.ticket ? `#${args.ticket}` : 'update';

  // 1. Sync latest Storybook baseline first so we don't drift
  try {
    execSync('node scripts/sync-storybook-baseline.mjs', { stdio: 'inherit' });
  } catch {}

  // 2. If --file is provided, auto-register in public/hub-manifest.json
  const manifestPath = path.resolve(process.cwd(), 'public', 'hub-manifest.json');
  try {
    const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
    manifest.updatedAt = new Date().toISOString();
    if (args.file) {
      const relPath = './' + path.relative(path.resolve(process.cwd(), 'public'), path.resolve(process.cwd(), args.file)).replace(/\\/g, '/');
      const screenId = path.basename(args.file, path.extname(args.file));
      const existingIdx = manifest.screens.findIndex(s => s.id === screenId || s.path === relPath);
      const entry = {
        id: screenId,
        title: args.title || screenId,
        ticket: ticketLabel,
        status: args.status || (isProd ? 'Approved' : 'Design Review'),
        author: 'Bonny (@bonny8000)',
        updatedAt: new Date().toISOString().slice(0, 10),
        path: relPath,
        notes: args.notes || (isProd ? '已確認定案並發佈至正式 Design Hub' : '預覽審核中 (待 Jack 與 PM 確認)')
      };
      if (existingIdx >= 0) manifest.screens[existingIdx] = { ...manifest.screens[existingIdx], ...entry };
      else manifest.screens.unshift(entry);
    }
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n', 'utf8');
  } catch (e) {
    console.warn('Could not update hub-manifest.json:', e.message);
  }

  // 3. Git branch & push workflow
  if (isProd) {
    run('git checkout main || git checkout -b main');
    run('git add -A');
    try {
      run(`git commit -m "feat(design-hub): publish approved design ${ticketLabel} to production"`);
    } catch {
      console.log('No new file diffs to commit, pushing current main...');
    }
    run('git push -u origin main');
    console.log('\n============================================================');
    console.log('✅ 已推送至 main！Cloudflare 正在自動更新正式站 (約 30 秒生效)：');
    console.log('👉 正式站網址：https://x-talent-design-hub.x-talent.workers.dev');
    console.log('============================================================\n');
  } else {
    const branchName = `preview/ticket-${args.ticket || 'draft'}`;
    run(`git checkout -B ${branchName}`);
    run('git add -A');
    try {
      run(`git commit -m "chore(preview): update design preview for ${ticketLabel}"`);
    } catch {
      console.log('No new file diffs to commit, pushing current preview branch...');
    }
    run(`git push -u origin ${branchName} --force`);
    console.log('\n============================================================');
    console.log(`🔍 已推送至預覽分支 (${branchName})！Cloudflare 正在自動更新預覽站 (約 30 秒生效)：`);
    console.log('👉 預覽站網址：https://x-talent-design-hub-preview.x-talent.workers.dev');
    console.log('請將上方預覽網址貼給 Jack 與 PM 確認無舊版畫面衝突後，再執行 --mode prod 正式發佈！');
    console.log('============================================================\n');
  }
}

main().catch(err => {
  console.error('❌ 發佈失敗:', err.message);
  process.exit(1);
});
