# 聊聊整合交付 · 2026-11-13

## 來源與發布位置

- 原型：`xtalent-chat-654`，來源 commit `43efad0e76b8d29e6d8ece24169a904b48a28fcc`。
- [Julie 11/13 確認](https://discord.com/channels/1387270551927787540/1551599059456884736/1570649433199345716)。
- [Jack 的 Design Hub 發布規則 #848](https://github.com/Xchange-Taiwan/X-Talent-Tracker/issues/848#issuecomment-6717864053)。
- 專用 repo：`Xchange-Taiwan/X-Talent-Design-Hub`；預覽分支 `preview/ticket-654`，正式分支 `main`。
- [正式站聊聊入口](https://x-talent-design-hub.x-talent.workers.dev/?view=screens&screen=chat&ticket=654&scenario=list)。
- [預覽站聊聊入口](https://x-talent-design-hub-preview.x-talent.workers.dev/?view=screens&screen=chat&ticket=654&scenario=list)。

## 本次整合

保留已交付原型的畫面與互動，以完整靜態包加入 `public/chat/`。Hub 新增 60 個情境、11 張聊聊 ticket 關聯，以及對話列表、聊天室、訊息輸入、附件檔案條四個組合元件入口。原型來源站與 Figma 未修改。

`chat/hub-bridge.js` 只處理 Hub 的檢視模式、元件定位與選取；操作模式直接使用原型。舊 `screens/chat-654.html` 交付入口同步同一版本，供既有連結使用。KB 產生器亦讀取聊聊 registry。

## 驗證紀錄

| 範圍 | 結果 |
| --- | --- |
| 來源原型測試 | 19 個 domain checks、60 個 scenario checks 通過 |
| Desktop：進入未選取對話、切換情境 | 通過 Aside 實際操作 |
| 傳送失敗 → 重新傳送／刪除選單 → 重試 | 通過 Aside 實際操作 |
| #727 已刪除導師 | 保留歷史、不能傳訊、無「搜尋導師」按鈕 |
| #774 導師從預約卡首次聯絡 | 進入空白對話，送出後出現在列表 |
| Tablet 附件 | 三個附件均為黑色檔案條，無圖片預覽 |
| Mobile | 列表與聊天室分頁；返回入口在上方 |
| 檢視模式 | 點擊送出只選取元件，不會發送；草稿保留 |
| 元件庫 | 顯示四個新增組合元件，保留既有 Storybook 入口 |

此交付為模擬資料的可互動設計原型；未接真實訊息、附件上傳、Email、金流或資料庫。
