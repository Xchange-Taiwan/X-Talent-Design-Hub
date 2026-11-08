---
name: design-hub
description: 在 X-Talent-Design-Hub 同步最新線上 Storybook 元件基準、新增或更新定案設計畫面 HTML，並一鍵發佈至 Cloudflare 預覽站 (Preview) 或正式站 (Production)，無需手動操作 Git 或消耗 Vercel 額度。
---

# X-Talent Design Hub 自動化發佈與 Storybook 同步技能 (`design-hub`)

當設計師（Bonny）或開發者要求「更新 Design Hub」、「把這頁設計推上預覽給 Jack 看」、「把設計正式發佈到 Design Hub」或「同步最新 Storybook 元件庫」時，請直接遵循以下工作流（完全不需使用者手動操作 Git）。

## 1. 線上網址與環境資訊

- **GitHub Repository**：`https://github.com/Xchange-Taiwan/X-Talent-Design-Hub`（公開 Repo）
- **Design Hub 正式站 (`main` 分支自動部署)**：`https://x-talent-design-hub.x-talent.workers.dev`
- **Design Hub 預覽站 (`preview/*` 分支自動部署)**：`https://x-talent-design-hub-preview.x-talent.workers.dev`
- **前端即時 Storybook 元件庫 (`X-Talent-Frontend` `develop` 自動部署)**：`https://x-talent-storybook.x-talent.workers.dev`
- **全站 Figma Source of Truth (`#826`)**：`https://www.figma.com/design/caZJl0JBnxn0KZunPev0fX/`

## 2. 防呆規則：禁止腦補舊版前端畫面

1. 產製或修改任何頁面 HTML 前，**必須先執行**：
   ```bash
   node scripts/sync-storybook-baseline.mjs
   ```
   讀取 `public/storybook-baseline.json`（來自 `https://x-talent-storybook.x-talent.workers.dev/index.json` 的最新真實元件清單），以及對照測試站 `https://xtalentdev.vercel.app` 或全站 Figma (`#826`) 的最新結構，**嚴禁拿半年前的舊版畫面（如舊版 Expertise 區塊）拼湊新功能**。
2. 所有單頁或模組 HTML 請放在 `public/screens/<name>.html`（或將現有 Design Hub 完整靜態檔放於 `public/` 目錄下）。

## 3. 兩階段一鍵發佈指令（Preview -> Production）

### 階段 A：先發佈 Preview 給 Jack 與 PM 檢查（預設優先使用）
當新畫面剛完成、尚未給 Jack 確認是否有新舊畫面衝突時，執行：
```bash
node scripts/publish-design-hub.mjs --mode preview --ticket <Ticket號碼> --file public/screens/<檔名>.html --title "<畫面標題>"
```
- 此指令會自動切換至 `preview/ticket-<Ticket號碼>` 分支並推送到 GitHub。
- GitHub Actions 會在約 30 秒內自動部署至 **`https://x-talent-design-hub-preview.x-talent.workers.dev`**（完全不消耗 Vercel 每日部署額度）。
- 執行完成後，請直接把預覽網址貼給使用者。

### 階段 B：確認定案後正式發佈至 Design Hub 主站
當 Jack 與 PM Review 確認預覽畫面沒問題後，執行：
```bash
node scripts/publish-design-hub.mjs --mode prod --ticket <Ticket號碼> --file public/screens/<檔名>.html --title "<畫面標題>"
```
- 此指令會自動將變更合入 `main` 分支並推送到 GitHub。
- GitHub Actions 會在約 30 秒內自動更新正式站 **`https://x-talent-design-hub.x-talent.workers.dev`**。
