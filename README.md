# X-Talent Design Hub

X-Talent 團隊最新定案設計畫面總覽與即時 Storybook 元件參照中心（部署於 X-Talent 官方 Cloudflare CDN，零 Vercel 額度消耗）。

## 線上入口

- **正式站 (Production, `main`)**：https://x-talent-design-hub.x-talent.workers.dev
- **預覽站 (Preview, `preview/*`)**：https://x-talent-design-hub-preview.x-talent.workers.dev
- **即時 Storybook 元件庫 (`X-Talent-Frontend` `develop`)**：https://x-talent-storybook.x-talent.workers.dev
- **全站 Figma Source of Truth (`#826`)**：https://www.figma.com/design/caZJl0JBnxn0KZunPev0fX/

## 設計師一鍵使用方式（ChatGPT Work with Codex / Aside）

本專案已內建 `AGENTS.md` 與 `.agents/skills/design-hub/SKILL.md`，在 ChatGPT 桌面版（Work with Codex）或 Aside 開啟此資料夾後，直接用中文對 AI 說：

1. **「幫我把這次 #737 的設計推到預覽站給 Jack 看」**
   - 自動執行：`node scripts/publish-design-hub.mjs --mode preview --ticket 737`
   - 產出預覽網址：https://x-talent-design-hub-preview.x-talent.workers.dev
2. **「Jack 確認沒問題了，幫我正式發佈到 Design Hub」**
   - 自動執行：`node scripts/publish-design-hub.mjs --mode prod --ticket 737`
   - 自動更新正式站：https://x-talent-design-hub.x-talent.workers.dev
