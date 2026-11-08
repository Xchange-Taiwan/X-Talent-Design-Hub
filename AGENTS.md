# AGENTS.md — X-Talent Design Hub (ChatGPT Work with Codex / Aside / Claude 專用指令)

你正在操作 `Xchange-Taiwan/X-Talent-Design-Hub` 專案。使用者（Bonny）透過自然語言請你更新設計畫面、預覽或發佈時，請**全自動代為執行指令**，不要要求使用者手動敲 Git 指令。

## 核心網址
- **Design Hub 正式站**：`https://x-talent-design-hub.x-talent.workers.dev`
- **Design Hub 預覽站**：`https://x-talent-design-hub-preview.x-talent.workers.dev`
- **即時 Storybook 元件庫**：`https://x-talent-storybook.x-talent.workers.dev`

## 標準操作步驟
1. **同步最新 Storybook 基準**：
   每次開始改圖前，先執行 `node scripts/sync-storybook-baseline.mjs` 更新 `public/storybook-baseline.json`，確保元件與 `X-Talent-Frontend` 最新 `develop` 一致。
2. **要把整包現有 Design Hub 網站放進來**：
   將你的靜態網站檔案放在 `public/` 目錄下（或單一頁面放在 `public/screens/<ticket>.html`）。
3. **當使用者說「先發預覽給 Jack 看」**：
   執行 `node scripts/publish-design-hub.mjs --mode preview --ticket <票號>`，並回覆預覽網址 `https://x-talent-design-hub-preview.x-talent.workers.dev`。
4. **當使用者說「確認沒問題，正式發佈到 Design Hub」**：
   執行 `node scripts/publish-design-hub.mjs --mode prod --ticket <票號>`，並回覆正式站網址 `https://x-talent-design-hub.x-talent.workers.dev`。
