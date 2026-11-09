window.HUB_DATA = {
  revision:'review-2026-11-07',
  figma:'https://www.figma.com/design/s7OigEUhn72fkQen2S7tXv/Xchange-Library',
  repo:'https://github.com/Xchange-Taiwan/X-Talent-Frontend',
  commit:'c6c3660ae6c89263b15135e36060f43f162c01db',
  storybook:'https://x-talent-storybook.x-talent.workers.dev/',
  tickets:[
    {id:'742',name:'導師資料建立與完成',date:'2026-11-03'},
    {id:'740',name:'登入後填寫回饋',date:'2026-10-31'},
    {id:'710',name:'首頁推薦語輪播',date:'2026-10-26'},
    {id:'730',name:'歷史紀錄與會談回饋',date:'2026-10-26'},
    {id:'274',name:'導師個人頁與評價',date:'2026-10-15'},
    {id:'753',name:'收藏導師',date:'2026-10-13'},
    {id:'709',name:'首頁 CTA',date:'2026-10-06'}
  ],
  screens:[
    {id:'home',name:'首頁',group:'探索與首頁',description:'首頁 CTA、推薦語輪播',module:'home',tickets:['710','709'],date:'2026-10-26',version:4,node:'218:35328',source:'https://x-talent-prototype-20261006.bonny80.chatgpt.site/',scenarios:[['default','完整首頁'],['quotes','推薦語輪播'],['cta','首頁 CTA']],components:['header','hero','quote','avatar'],note:'沿用首頁 v4。#709 修改 CTA，#710 修改推薦語頭像；兩張 ticket 共用這一頁。'},
    {id:'history',name:'歷史紀錄與回饋',group:'預約與回饋',description:'單場回饋、查看紀錄',module:'730',tickets:['730'],date:'2026-10-26',version:4,node:'165:17232',source:'https://xtalent-feedback-730.bonny80.chatgpt.site/',scenarios:[['default','歷史紀錄'],['form','填寫回饋 · 第一步'],['rating','評分與文字回饋'],['failure','送出失敗 · 可重試']],components:['header','reservation','feedback','rating','textarea','toast','button'],note:'沿用 #730 v4。可填寫、送出及查看回饋。情境切換會重設這一段示範資料。'},
    {id:'login-feedback',name:'登入回饋',group:'預約與回饋',description:'登入彈窗、逐場填寫',module:'740',tickets:['740'],date:'2026-10-31',version:2,node:'197:37620',source:'https://xtalent-feedback-740.bonny80.chatgpt.site/',scenarios:[['default','Mentee · 三場待回饋'],['single','Mentee · 只有一場'],['mentor','Mentor · 三場待回饋'],['peer','對方已回答未進行']],components:['header','queue','feedback','rating','textarea','toast','button'],note:'沿用 #740 v2 的交付快照；表單設計來源為 #730，登入觸發與佇列屬於 #740。此處未重新驗收最新 PRD。'},
    {id:'mentor-form',name:'導師資料建立',group:'導師與個人頁',description:'FR-01 · 表單與主要狀態',module:'742',tickets:['742'],date:'2026-11-03',version:7,node:null,source:'https://xtalent-mentor-742.bonny80.chatgpt.site/',scenarios:[['fresh','首次建立 · 只有姓名'],['partial','部分完成'],['complete','資料完整'],['name-edit','編輯姓名'],['service-open','服務選單展開'],['work-empty','工作經驗 · 尚未新增'],['work-filled','工作經驗 · 已新增'],['education-empty','教育經歷 · 尚未新增'],['education-filled','教育經歷 · 已新增'],['save-error','儲存失敗 · 內容保留']],components:['header','avatar','profile','input','textarea','chip','button','toast'],note:'沿用 #742 v7，保留既有元件與字距。最新 PM 調整已在原 site，尚未同步至 Figma。'},
    {id:'mentor-welcome',name:'導師建立完成',group:'導師與個人頁',description:'FR-02 · 導師卡與設定時段',module:'742',tickets:['742'],date:'2026-11-03',version:7,node:null,source:'https://xtalent-mentor-742.bonny80.chatgpt.site/',scenarios:[['welcome','建立成功 · 小卡正面'],['card-back','導師小卡背面'],['personal-profile','返回個人頁'],['booking-settings','設定預約時段']],components:['header','member','booking','button'],note:'沿用 #742 v7 的導師小卡、翻面及後續設定；點「編輯資料」可以回到既有表單。'}
  ],
  components:[
    {id:'header',name:'Header',label:'頁首導覽',kind:'共用區塊',node:'80:352',code:'src/components/layout/Header/Header.tsx',screens:['home','history','login-feedback','mentor-form'],rules:['訪客與登入狀態依各交付畫面呈現。','桌面與行動版沿用各原型的既有導覽。'],changes:[],mapping:'分類位置已找到；各版本狀態尚未逐一核對。'},
    {id:'button',name:'Button',label:'按鈕',kind:'基礎元件',node:'81:4518',code:'src/components/ui/button.tsx',screens:['history','login-feedback','mentor-form'],rules:['保留既有 primary、outline、ghost 樣式。','Hover、focus 與 disabled 由各來源元件呈現。'],changes:[{ticket:'742',date:'2026-11-03',text:'稍後再設定：淺灰文字、與區塊拉開距離、水平置中。'},{ticket:'730',date:'2026-10-26',text:'移除稍後再填；保留關閉及上一步。'}],mapping:'已找到 Figma 目錄與前端檔案；不是自動同步。'},
    {id:'hero',name:'Homepage CTA',label:'首頁行動區',kind:'頁面區塊',node:'106:2585',code:null,screens:['home'],scenario:'cta',rules:['沿用已交付首頁 CTA 與 hover 互動。'],changes:[{ticket:'709',date:'2026-10-06',text:'首頁主 CTA 與 Mentor／Mentee 共用加入入口。'}],mapping:'既有設計交付；前端一對一對照待核對。'},
    {id:'quote',name:'QuoteCard',label:'推薦語卡片',kind:'業務元件',node:'218:35328',code:null,screens:['home'],scenario:'quotes',rules:['保留輪播與原卡片尺寸。','有照片使用照片；未上傳使用姓名縮寫。'],changes:[{ticket:'710',date:'2026-10-26',text:'補照片／姓名縮寫兩種 Avatar；字母置中且不換行。'}],mapping:'本次取自首頁公開 v4；前端元件位置待核對。'},
    {id:'avatar',name:'Avatar',label:'頭像',kind:'基礎元件',node:'81:4425',code:'src/components/ui/avatar.tsx',screens:['home','mentor-form'],rules:['#710：照片或姓名縮寫，縮寫置中。','#742：沿用既有預設插畫，可點擊更換照片。'],changes:[{ticket:'742',date:'2026-10-29',text:'建立資料使用既有預設頭像，直接點擊上傳。'},{ticket:'710',date:'2026-10-26',text:'推薦語卡片加入照片及姓名縮寫狀態。'}],mapping:'兩種產品情境的 fallback 有別，不合併成同一預設規則。'},
    {id:'reservation',name:'ReservationCard',label:'歷史紀錄卡片',kind:'業務元件',node:'80:358',code:'src/components/reservation/ReservationCard.tsx',screens:['history'],rules:['展開內容維持原卡片寬度。','狀態保留右上，內部不重複顯示。'],changes:[{ticket:'730',date:'2026-10-26',text:'保留回饋入口、移除重複狀態並對齊內部內容。'}],mapping:'前端有同名元件；本畫面來自交付 site，尚未宣稱實作一致。'},
    {id:'feedback',name:'FeedbackForm',label:'會談回饋表單',kind:'業務元件',node:'165:17232',code:null,screens:['history','login-feedback'],scenario:'form',rules:['先確認會談是否進行，再填評分或未進行原因。','#730 單場表單；#740 共用設計並加上登入與佇列規則。'],changes:[{ticket:'740',date:'2026-10-31',text:'原因文字「對方未出席」改成「未出席」。'},{ticket:'730',date:'2026-10-26',text:'單場表單移除稍後再填。'}],mapping:'共用設計關係已確認；未找到一對一的前端元件對照。'},
    {id:'rating',name:'FeedbackStarRating',label:'十顆星評分',kind:'業務元件',node:'189:34409',code:null,screens:['history','login-feedback'],scenario:'rating',rules:['沿用十顆星與 1–10 分。','可點選分數，也可用鍵盤調整。'],changes:[{ticket:'730',date:'2026-10-23',text:'評分滑桿改成十顆星，沿用至 #740。'}],mapping:'Figma 已有星星版；舊 Slider 留作歷史，不作本次示範。'},
    {id:'queue',name:'FeedbackQueue',label:'登入回饋卡疊',kind:'互動模式',node:'197:37620',code:null,screens:['login-feedback'],rules:['多場顯示進度與後方卡片；單場不顯示進度條。','關閉只略過當前場次，進入下一場。'],changes:[{ticket:'740',date:'2026-10-24',text:'完成三裝置、Mentor／Mentee、單場／多場的登入回饋示範。'}],mapping:'交付原型；程式實作對照待補。'},
    {id:'input',name:'Input',label:'文字輸入框',kind:'基礎元件',node:'81:6260',code:'src/components/ui/input.tsx',screens:['mentor-form'],scenario:'name-edit',rules:['沿用 #742 既有字級、字重及焦點樣式。','姓名上限與字數顯示依原 v7。'],changes:[{ticket:'742',date:'2026-11-03',text:'依 PM 清單：姓名 1–20 字，欄位尾端字數顯示。'}],mapping:'已找到來源；設計稿與前端 responsive 字級仍待完整核對。'},
    {id:'textarea',name:'Textarea',label:'多行輸入框',kind:'基礎元件',node:'81:7110',code:'src/components/ui/textarea.tsx',screens:['mentor-form','history'],scenario:'partial',rules:['保留原型的內容字級與正常字重。','檢視模式切換不清除已輸入文字。'],changes:[{ticket:'742',date:'2026-10-29',text:'調整內容字級、字重，字距設定為 5%。'},{ticket:'730',date:'2026-10-23',text:'縮小 Mobile 提示文字，與原 site 保持一致。'}],mapping:'保留各交付範圍；5% 字距沒有直接擴大成全站規則。'},
    {id:'chip',name:'Chip',label:'已選項目標籤',kind:'基礎元件',node:'80:356',code:null,screens:['mentor-form'],scenario:'partial',rules:['沿用既有淺青底、關閉按鈕及文字間距。'],changes:[{ticket:'742',date:'2026-10-29',text:'調整左右留白、文字與叉叉間距及字距。'}],mapping:'沿用 #742 的實際標籤；canonical master 待核對。'},
    {id:'profile',name:'ProfileSection',label:'個人資料區塊',kind:'業務元件',node:'80:356',code:'src/components/profile/edit/Section.tsx',screens:['mentor-form'],rules:['沿用個人頁雙欄，在內容位置編輯。','依原型保留空白、部分完成與完整資料狀態。'],changes:[{ticket:'742',date:'2026-11-03',text:'保留教育經歷必填，Mentor 不顯示交流偏好。'}],mapping:'原型已使用前端元件來源；最新畫面未同步 Figma。'},
    {id:'member',name:'MentorMemberCard',label:'導師小卡',kind:'業務元件',node:null,code:null,screens:['mentor-welcome'],scenario:'welcome',rules:['保留正反面翻轉與自然陰影。','卡片底部編輯資料可回到表單。'],changes:[{ticket:'742',date:'2026-11-03',text:'PM 規格調整後保留小卡與翻面；完成後只留下設定時段。'}],mapping:'既有 site 設計；尚無已核對的 Figma／前端實作連結。'},
    {id:'booking',name:'BookingSetupAction',label:'設定預約時段',kind:'業務元件',node:null,code:null,screens:['mentor-welcome'],scenario:'welcome',rules:['保留縮小後的區塊與右側主要按鈕。','稍後再設定置中，維持與區塊的距離。'],changes:[{ticket:'742',date:'2026-11-03',text:'縮小設定時段區塊，調整稍後再設定的顏色、間距與對齊。'}],mapping:'來自 #742 v7；時段頁為原交付的銜接示意。'},
    {id:'toast',name:'Toast',label:'提示通知',kind:'基礎元件',node:'165:17878',code:'src/components/ui/toast.tsx',screens:['history','mentor-form'],scenario:'failure',rules:['原交付：top bar 下方覆蓋顯示，不推動表單。','關閉叉叉保持清楚可見。'],changes:[{ticket:'742',date:'2026-10-29',text:'延用表單失敗時保留內容與提示。'},{ticket:'730',date:'2026-10-23',text:'通知改為 top bar 下方的浮層，不改變表單位置。'}],mapping:'待同步差異：查核的前端預設定位／關閉樣式與此交付不同。'}
  ]
};

// Delivered design is canonical where source implementations overlap.
for(const [id,code] of Object.entries({home:'src/app/(landing)/page.tsx',history:'src/app/reservation/mentee/page.tsx','mentor-form':'src/app/profile/[pageUserId]/edit/page.tsx','mentor-welcome':'src/app/profile/card/page.tsx'})){const s=window.HUB_DATA.screens.find(x=>x.id===id);s.frontendCode=code;s.note='以你的交付設計為主。'+s.note;}

window.HUB_DATA.components.push(
 {id:'mentor-profile',name:'MentorProfileWithMetrics',label:'導師個人資訊',kind:'組合元件',code:null,screens:['public-profile','mentor-calendar'],rules:['沿用 #274 已交付的頭像、姓名、職稱與摘要排列。','保留 #753 右側收藏按鈕；導師查看自己的頁面時顯示編輯資料。'],changes:[{ticket:'274',date:'2026-10-15',text:'補齊 Desktop、Tablet、Mobile 個人頁與簡介／評價分頁。'},{ticket:'753',date:'2026-10-13',text:'共用收藏控制與訪客狀態。'}],mapping:'已交付設計補入平台；人物與數據為模擬資料。'},
 {id:'mentor-reviews',name:'MentorReviewList',label:'導師評價清單',kind:'組合元件',code:null,screens:['public-profile','mentor-calendar'],rules:['評價呈現在原有分頁，使用遮罩姓名、分數與日期。','保留每頁十則、分頁及尚無評價情境。'],changes:[{ticket:'274',date:'2026-10-15',text:'導師評價與空白狀態的三裝置設計。'}],mapping:'沿用 #274 交付稿。'},
 {id:'mentor-booking',name:'ResponsiveBookingPanel',label:'導師頁預約區',kind:'組合元件',code:null,screens:['public-profile','mentor-calendar'],rules:['Desktop、Tablet 在右欄，Mobile 接在內容下方。','訪客預約與導師設定時段的操作分開。'],changes:[{ticket:'274',date:'2026-10-15',text:'沿用交付稿的日曆與時段區排列。'}],mapping:'日曆側欄依交付設計；設定時段彈窗沿用現行前端功能。'}
);

window.HUB_DATA.components.push(...[{"id": "favorite-toggle", "name": "FavoriteToggle", "label": "收藏按鈕", "kind": "基礎元素", "code": null, "screens": ["mentor-search", "public-profile", "favorites"], "rules": ["只保留一個獨立書籤按鈕；與卡片導覽分開。", "未收藏外框、已收藏品牌色實心；hover、focus 與 aria-pressed 共用。", "導師池、個人頁、收藏清單同步；失敗維持原狀態。"], "changes": [{"ticket": "753", "date": "2026-10-13", "text": "已交付收藏流程；補入平台並保留原設計。"}], "mapping": "Figma 已有交付元件；未找到 Storybook 一對一實作，不將同名基礎元素視為整組已實作。"}, {"id": "favorite-card", "name": "FavoriteMentorCard", "label": "可收藏導師卡片", "kind": "組合元件", "code": null, "screens": ["mentor-search", "favorites"], "rules": ["Desktop 卡片上限 414px、照片 412:292；Mobile 卡片上限 334px、照片 332:292（扣除邊框）。照片隨寬度等比縮放。", "Desktop／Tablet 欄距 20px；Mobile 列距 24px。內容左右 16px、底部 24px；高度隨內容。", "Tablet 沿用桌機比例做雙欄；剩一、兩位時不拉寬卡片。", "點卡片進入對應導師個人頁；點書籤只改收藏。"], "changes": [{"ticket": "753", "date": "2026-10-13", "text": "已交付收藏流程；補入平台並保留原設計。"}], "mapping": "Figma 已有交付元件；未找到 Storybook 一對一實作，不將同名基礎元素視為整組已實作。"}, {"id": "favorites-header", "name": "FavoritesHeader", "label": "含收藏入口的頁首", "kind": "組合元件", "code": null, "screens": ["mentor-search", "public-profile", "favorites"], "rules": ["10/13 交付：中文導覽；訪客顯示登入與註冊。", "帳號選單的我的收藏位於我的預約下方。", "Mobile 帳號選單滿版，保留提供回饋。"], "changes": [{"ticket": "753", "date": "2026-10-13", "text": "已交付收藏流程；補入平台並保留原設計。"}], "mapping": "Figma 已有交付元件；未找到 Storybook 一對一實作，不將同名基礎元素視為整組已實作。"}, {"id": "account-menu", "name": "AccountMenu", "label": "帳號選單", "kind": "組合元件", "code": null, "screens": ["mentor-search", "favorites"], "rules": ["Desktop 264px 浮層；Mobile 滿版。", "我的收藏顯示目前收藏數，點擊進入清單。"], "changes": [{"ticket": "753", "date": "2026-10-13", "text": "已交付收藏流程；補入平台並保留原設計。"}], "mapping": "Figma 已有交付元件；未找到 Storybook 一對一實作，不將同名基礎元素視為整組已實作。"}, {"id": "favorite-login", "name": "FavoriteLoginDialog", "label": "登入並收藏", "kind": "組合元件", "code": null, "screens": ["mentor-search", "public-profile"], "rules": ["訪客收藏顯示登入攔截，登入後回到同一位導師並完成收藏。", "使用既有 Dialog 的焦點管理、Escape 與關閉控制。"], "changes": [{"ticket": "753", "date": "2026-10-13", "text": "已交付收藏流程；補入平台並保留原設計。"}], "mapping": "Figma 已有交付元件；未找到 Storybook 一對一實作，不將同名基礎元素視為整組已實作。"}, {"id": "favorites-empty", "name": "FavoritesEmptyState", "label": "收藏空狀態", "kind": "組合元件", "code": null, "screens": ["favorites"], "rules": ["取消最後一位收藏立即顯示空狀態。", "尋找導師回到導師池。"], "changes": [{"ticket": "753", "date": "2026-10-13", "text": "已交付收藏流程；補入平台並保留原設計。"}], "mapping": "Figma 已有交付元件；未找到 Storybook 一對一實作，不將同名基礎元素視為整組已實作。"}]);

// Human-confirmed changes audited on 2026-11-07. Frozen delivery snapshots remain intact.
(() => {
 const d=window.HUB_DATA,component=id=>d.components.find(x=>x.id===id),screen=id=>d.screens.find(x=>x.id===id);
 d.revision='github-alignment-2026-11-07';
 d.tickets.unshift({id:'737',name:'導師卡平均分與完成場次',date:'2026-11-07'});
 for(const id of ['709','710','730','740'])d.tickets.find(t=>t.id===id).date='2026-11-07';
 d.tickets.sort((a,b)=>b.date.localeCompare(a.date));
 Object.assign(screen('home'),{tickets:['709','710'],date:'2026-11-07',version:'GitHub 核對 11/07',sourceKind:'confirmed-update',source:'https://github.com/Xchange-Taiwan/X-Talent-Tracker/issues/710#issuecomment-6642719422',scenarios:[['default','訪客 · 完整首頁'],['quotes','推薦語輪播'],['cta','訪客 · 首頁 CTA'],['mentee-cta','Mentee · 首頁 CTA'],['mentor-cta','Mentor · 首頁 CTA']],note:'#710 依會議結論使用既有輪播，六則獨立文案、Carolina 真人照片與五張插畫。元件與資產取自 PR #1184（尚未合併），不是宣稱正式站已上線。#709 角色 CTA 依已合併 PR #1205；保留既有交付按鈕樣式。'});
 Object.assign(component('quote'),{name:'HomePageSlider',label:'推薦語輪播',code:'src/components/landing/HomePageSlider.tsx',commit:'b9e79681a72d59f68667fa774395c0352775acc2',rules:['依前端既有版型：寬度 >1024px 同時顯示兩則，其餘顯示一則。','六則獨立文案；Carolina 保留真人照片，其他五位使用已交付插畫。圖片失敗也回退至插畫。','沿用 Swiper 的圓點、滑動、5 秒自動輪播；檢視模式暫停，返回操作後繼續。'],mapping:'直接引用 PR #1184 的 HomePageSlider 與資料、六個 WebP 資產。PR 尚未合併，平台先展示已確認需求的測試版本。'});
 component('quote').changes.unshift({ticket:'710',date:'2026-11-07',text:'依最新前端回覆保留既有輪播，移除舊三張卡與姓名縮寫，改用六則文案、真人／插畫頭像。'});
 component('avatar').rules=['#710：真人照片優先，未提供／載入失敗使用插畫。','#742：沿用既有預設插畫，可點擊更換照片。'];
 component('avatar').changes.unshift({ticket:'710',date:'2026-11-07',text:'輪播採用 Bonny 提供的插畫，不再使用姓名縮寫 fallback。'});
 component('hero').rules=['保留已交付 CTA 的字級、留白與箭頭互動。','Hero／頁尾：訪客加入→註冊；登入後尋找導師→導師池。','中段：訪客成為 Mentor/Mentee→註冊；Mentee 成為 Mentor→建立頁；Mentor 開放預約時段→自己的行事曆並開啟設定。'];
 component('hero').code='src/components/landing/HomePageCtaButton.tsx';component('hero').commit='9de3a203cfde4fba687bdd526e75313b561e708d';
 component('hero').mapping='角色分流取自已合併 PR #1205；帳號使用本地模擬資料。';
 component('hero').changes.unshift({ticket:'709',date:'2026-11-07',text:'對齊已合併前端的 Visitor／Mentee／Mentor 文案及目的頁。'});
 component('favorite-card').rules.push('#737 B：姓名左、平均分右；純數字，無星星／評價則數。尚無評價不顯示評分；職稱公司滿寬一列，完成場次下一列靠左。');
 component('favorite-card').changes.unshift({ticket:'737',date:'2026-11-07',text:'依 Bonny 確認的 B 版統一卡片資訊排列，保留 #753 尺寸與收藏操作。'});
 component('favorite-card').mapping='依 #737 issuecomment-6648566371 批准 B 版整合至 #753 共用卡片；尚未找到對應程式 PR，不標示為已上線。';
 Object.assign(screen('login-feedback'),{date:'2026-11-07',version:'GitHub 核對 11/07',sourceKind:'confirmed-update',source:'https://github.com/Xchange-Taiwan/X-Talent-Tracker/issues/740#issuecomment-6582813408',note:'沿用 #740 卡疊與 #730 表單。依 PM 決議，X 只略過本次登入的當前場次，下次重新登入仍提醒未回答場次；Mentor 取消 14 天截止。可關完彈窗後從帳號選單登出，再登入驗證。'});
 screen('login-feedback').scenarios.push(['signin','從登入前開始'],['answered','已完成回饋 · 不彈窗'],['empty','沒有待回饋 · 不彈窗']);
 component('queue').rules=['多場顯示進度與後方卡片；單場不顯示進度條。','X 只略過當前場次並顯示下一場；本次登入不重複，重新登入後仍提醒未填寫場次。','Mentor 已取消 14 天回覆截止。已回答場次不再彈出。'];
 component('queue').changes.unshift({ticket:'740',date:'2026-11-07',text:'對齊 PM：關閉後下次重新登入仍提醒，取消 Mentor 14 天截止；完成者不再彈出。'});
 component('feedback').rules.push('Mentee 送出即公開；不顯示冷凍期／尚未公開狀態。未進行原因統一使用「未出席」。');
 component('feedback').changes.unshift({ticket:'730',date:'2026-11-07',text:'共用未進行原因統一「未出席」；保留送出後不可編輯。'});
 for(const id of ['mentor-form','mentor-welcome'])screen(id).note+=' 11/07 #742 新增雙軌導師規劃，涉及新增方案／後台（#830–#832），尚無本平台已交付畫面；本次保留已 review 的 v7，待新流程設計。';
})();
