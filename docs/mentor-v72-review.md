# 導師站 v72 與 Design Hub 對照

核對來源為導師站公開版本 v72，原始 commit 為 `dbc28b1984955a6f3f1b8686e7555c9b3cc01259`。Hub 保留原型互動，並將跨頁入口接入 Hub 導覽。每個匯入情境可以在檢視模式開啟同一個導師站情境。

| 驗收項目 | 結果 |
| --- | --- |
| 原型情境選單 | 114 個來源情境皆有入口。產品與驗收情境在畫面目錄，導師元件展示收錄於元件庫。 |
| 原型正式登記的元件 | 23 個元件逐一對應唯一一筆 Hub 紀錄，核對 ID、匯出名稱、來源檔、票號與情境。 |
| 操作驗證 | 三種裝置共 342 組導師情境。另點測身分切換、搜尋導師、方案與時段、付款返回預約、免費與收費回饋、贊助、元件定位及拖曳。 |
| Storybook | 直接對應的案例連到該案例；組合元件可另外列出沿用的元素。 |
| 待設計 | #836／#830 D-1 的分角色多步驟與中斷續填，以及 #972 學員完成翻卡。檢視模式列出舊版畫面與 PM 決議。 |

[元件庫 · 導師元件](https://xtalent-design-hub.bonny80.chatgpt.site/?view=library&catalog=mentor) · [導師規格對照](https://xtalent-design-hub.bonny80.chatgpt.site/?screen=mentor-audit&scenario=audit) · [原型來源](https://xtalent-mentor-742.bonny80.chatgpt.site/?scene=components)

## 重新核對

從 Hub repo 執行下列命令。最後一項需要導師原型 checkout 與該專案原有的 esbuild 依賴。

```sh
node scripts/check-mentor-integration.mjs
node scripts/check-chat-integration.mjs
node scripts/check-component-library.mjs
node scripts/check-mentor-source-parity.mjs ../sites/xtalent-mentor-742
```

## 既有入口與共用帳號選單

「尋找導師」的預設網址、舊情境與 G-1 入口共用導師搜尋。搜尋、收藏清單和公開頁使用同一份導師資料。會員從共用的尋找導師頁切換身分會留在原頁；從專屬頁切換會前往新身分可使用的頁面。帳號選單展開時會保留新的身分與選項。

| 入口 | 實際核對 |
| --- | --- |
| 尋找導師、我的收藏 | 從左欄預設頁開啟頭像、來回切換、篩選、收藏／取消收藏及進入同一位導師個人頁。 |
| 個人頁、預約與回饋 | 導師與學員兩組預約入口對應各自的預約卡，取消及婉拒原因依填寫者顯示。免費場次提供贊助，編輯回饋可修改評分與文字。 |
| 聊聊、成長紀錄 | 帳號切換、即時未讀數、通知、行動版對話、從預約開啟指定聊天室。 |
| 首頁、帳號與其他共用頁 | 核對登入／訪客呈現，從登入頁面進入關於與政策頁時延續身分。 |
| 導師資料舊連結 | 姓名、服務選項、工作經驗、教育經歷對應現行編輯器，建立完成後的個人頁與時段入口連到實際頁面。 |

v72 首輪驗收涵蓋 260 個情境，在桌機、平板及手機共檢查 780 次，核對載入、執行錯誤及水平溢位。這批入口現分為 40 個畫面的 259 個情境，以及元件庫中的 1 個導師元件參考。元件的「使用畫面」列出實際採用該元件的頁面。

獨立的早期回饋測試仍可重現單筆表單、評分與送出失敗。已登入原型中的共用頁首直接由導師 v72 的 `MentorHeader` 及 `IdentityTrack` 建出。站內資料、未讀數、通知和導覽由各頁提供。可用 `node scripts/build-account-header.mjs <導師原型路徑>` 重建嵌入版本，用 `node scripts/check-account-entrypoints.browser.mjs <Hub 網址>` 操作桌機、平板及手機的預設入口。瀏覽器測試使用 Playwright，並支援 `HUB_PLAYWRIGHT_MODULE` 指定既有安裝位置。
