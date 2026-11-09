window.HUB_COMPONENT_MAP = {
  "verifiedAt": "2026-11-07",
  "indexSource": "https://x-talent-storybook.x-talent.workers.dev/index.json",
  "entries": 386,
  "existing": {
    "header": {
      "name": "Header",
      "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/佈局元件-header-header--unresolved-state"
    },
    "button": {
      "name": "Button",
      "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-button--default"
    },
    "avatar": {
      "name": "Avatar",
      "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-avatar--with-image"
    },
    "reservation": {
      "name": "ReservationCard",
      "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/業務模組元件-預約管理-reservation-reservationcard--pending"
    },
    "input": {
      "name": "Input",
      "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-input--default"
    },
    "textarea": {
      "name": "Textarea",
      "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-textarea--default"
    },
    "profile": {
      "name": "Section",
      "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/業務模組元件-個人檔案-profile-edit-section--default"
    },
    "toast": {
      "name": "Toast",
      "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-toast--default"
    }
  },
  "newDesigns": {
    "feedback": {
      "level": "組合元件",
      "scope": "出席確認、未進行原因、評分與送出狀態一起維護。",
      "reuse": [
        {
          "name": "Dialog",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-dialog--default"
        },
        {
          "name": "Button",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-button--default"
        },
        {
          "name": "Input",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-input--default"
        },
        {
          "name": "Textarea",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-textarea--default"
        },
        {
          "name": "Select",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-select--default"
        }
      ]
    },
    "queue": {
      "level": "組合元件",
      "scope": "卡疊、場次進度、換場動畫與略過規則一起維護；內容沿用會談回饋表單。",
      "reuse": [
        {
          "name": "Dialog",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-dialog--default"
        },
        {
          "name": "Button",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-button--default"
        }
      ]
    },
    "rating": {
      "level": "基礎元素",
      "scope": "十顆星的選取、Hover、鍵盤及停用狀態共用；套用在 #730、#740。",
      "reuse": []
    },
    "member": {
      "level": "組合元件",
      "scope": "小卡正反面、翻轉動畫、陰影與編輯入口一起維護。",
      "reuse": [
        {
          "name": "Avatar",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-avatar--with-image"
        },
        {
          "name": "Button",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-button--default"
        },
        {
          "name": "Badge",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-badge--default"
        }
      ]
    },
    "booking": {
      "level": "組合元件",
      "scope": "圖示、文案、設定時段與稍後再設定的排列一起維護。",
      "reuse": [
        {
          "name": "Button",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-button--default"
        },
        {
          "name": "Card",
          "url": "https://x-talent-storybook.x-talent.workers.dev/?path=/story/基礎-原子元件-card--default"
        }
      ]
    }
  }
};

for(const [id,scope] of Object.entries({'mentor-profile':'個人資訊、評分摘要與右側操作一起維護。','mentor-reviews':'評價列、分頁與空白狀態一起維護。','mentor-booking':'日曆與時段區的三裝置排列一起維護。'})){window.HUB_COMPONENT_MAP.newDesigns[id]={level:'組合元件',scope,reuse:[window.HUB_COMPONENT_MAP.existing.button,...(id==='mentor-profile'?[window.HUB_COMPONENT_MAP.existing.avatar]:[])]};}

for(const [id,level,scope] of [["favorite-toggle", "基礎元素", "只保留一個獨立書籤按鈕；與卡片導覽分開。 / 未收藏外框、已收藏品牌色實心；hover、focus 與 aria-pressed 共用。"], ["favorite-card", "組合元件", "沿用 #753 已交付三欄／單欄卡片、原始照片與資訊層級。 / 點卡片進入對應導師個人頁；點書籤只改收藏。"], ["favorites-header", "組合元件", "10/13 交付：中文導覽；訪客顯示登入與註冊。 / 帳號選單的我的收藏位於我的預約下方。"], ["account-menu", "組合元件", "Desktop 264px 浮層；Mobile 滿版。 / 我的收藏顯示目前收藏數，點擊進入清單。"], ["favorite-login", "組合元件", "訪客收藏顯示登入攔截，登入後回到同一位導師並完成收藏。 / 使用既有 Dialog 的焦點管理、Escape 與關閉控制。"], ["favorites-empty", "組合元件", "取消最後一位收藏立即顯示空狀態。 / 尋找導師回到導師池。"]]){window.HUB_COMPONENT_MAP.newDesigns[id]={level,scope,reuse:[window.HUB_COMPONENT_MAP.existing.button,...(id==="favorite-card"?[window.HUB_COMPONENT_MAP.existing.avatar]:[])]};}

// Audited frontend controls: reuse existing Storybook, never list them as new designs.
Object.assign(window.HUB_COMPONENT_MAP.existing, {
  'mentor-filter': {name:'MentorFilterDropdown',url:'https://x-talent-storybook.x-talent.workers.dev/?path=/story/業務模組元件-篩選器-filter-mentorfilterdropdown--default'},
  'booking-form': {name:'BookingForm',url:'https://x-talent-storybook.x-talent.workers.dev/?path=/story/業務模組元件-個人檔案-profile-reservation-bookingform--mentee-profile-view'},
  'notification-bell': {name:'NotificationBell',url:'https://x-talent-storybook.x-talent.workers.dev/?path=/story/佈局元件-header-notificationbell--default'}
});
window.HUB_COMPONENT_MAP.newDesigns['mentor-booking'].reuse.push(window.HUB_COMPONENT_MAP.existing['booking-form']);
window.HUB_COMPONENT_MAP.newDesigns['favorites-header'].reuse.push(window.HUB_COMPONENT_MAP.existing['notification-bell']);
for (const [id,code,screens,rules] of [
  ['mentor-filter','src/components/filter/MentorFilterDropdown.tsx',['mentor-search'],['直接使用前端篩選浮層、Select 與條件套用流程。','此處選項與結果為本地模擬資料。']],
  ['booking-form','src/components/profile/reservation/BookingForm.tsx',['public-profile','mentor-calendar'],['直接使用前端預約表單、訪客提示與導師時段控制。','沿用原有驗證；示範預約不送出 API。']],
  ['notification-bell','src/components/layout/Header/NotificationBell.tsx',['mentor-search','public-profile','favorites'],['直接使用前端通知元件；本示範呈現空狀態。']]
]) {
 const item=window.HUB_COMPONENT_MAP.existing[id];
 window.HUB_DATA.components.push({id,name:item.name,label:item.name,kind:'既有前端元件',code,screens,rules,changes:[],mapping:'已直接引用前端元件，Storybook 已有對應。'});
}
