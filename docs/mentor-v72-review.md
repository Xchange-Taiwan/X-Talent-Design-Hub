# 導師站 v72 與 Design Hub 對照

核對來源為導師站公開版本 v72，原始 commit 為 `dbc28b1984955a6f3f1b8686e7555c9b3cc01259`。Hub 保留原型互動，並將跨頁入口接入 Hub 導覽。每個匯入情境可以在檢視模式開啟同一個導師站情境。

| 驗收項目 | 結果 |
| --- | --- |
| 原型情境選單 | 114 個來源情境皆有入口，涵蓋原有名稱與 Hub 對照名稱。 |
| 原型正式登記的元件 | 23 個元件逐一對應唯一一筆 Hub 紀錄，核對 ID、匯出名稱、來源檔、票號與情境。 |
| 操作驗證 | 三種裝置共 342 組導師情境。另點測身分切換、搜尋導師、方案與時段、付款返回預約、免費與收費回饋、贊助、元件定位及拖曳。 |
| Storybook | 直接對應的案例連到該案例；組合元件可另外列出沿用的元素。 |
| 待設計 | #836／#830 D-1 的分角色多步驟與中斷續填，以及 #972 學員完成翻卡。檢視模式列出舊版畫面與 PM 決議。 |

[導師元件展示](https://xtalent-design-hub.bonny80.chatgpt.site/?view=library&screen=mentor-components&scenario=components) · [導師規格對照](https://xtalent-design-hub.bonny80.chatgpt.site/?screen=mentor-audit&scenario=audit) · [原型來源](https://xtalent-mentor-742.bonny80.chatgpt.site/?scene=components)

## 重新核對

從 Hub repo 執行下列命令。最後一項需要導師原型 checkout 與該專案原有的 esbuild 依賴。

```sh
node scripts/check-mentor-integration.mjs
node scripts/check-chat-integration.mjs
node scripts/check-component-library.mjs
node scripts/check-mentor-source-parity.mjs ../sites/xtalent-mentor-742
```
