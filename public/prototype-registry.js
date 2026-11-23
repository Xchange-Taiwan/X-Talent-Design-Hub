// Local prototype entries that have no equivalent route in the original frontend.
(() => {
  const data = window.HUB_DATA;
  const mentor=window.MENTOR_RELEASE;
  const roleCases = [
    ['role-shared','雙身分 · 尋找導師'], ['role-public','他人的導師頁'],
    ['role-missing-mentor','只有學員身分'], ['role-missing-mentee','只有導師身分'],
    ['role-mentor-only','導師管理後台'], ['role-mentee-only','我的預約'],
    ['role-notice-mentor','通知 · 導師待回覆'], ['role-notice-mentee','通知 · 學員預約'],
    ['role-mentee-unread','學員 · 導師信箱未讀'], ['role-mentee-clear','學員 · 無未讀'],
    ['role-mentor-unread','導師 · 學員信箱未讀'], ['role-mentor-clear','導師 · 無未讀'],
    ['role-own','雙身分 · 本人頁']
  ];
  const growth = 'https://xtalent-mentee-growth.bonny80.chatgpt.site/';
  function register(id, name, module, ticket, scenarios, source, version, group) {
    if (data.screens.some(s => s.id === id)) throw Error('Duplicate prototype screen: '+id);
    if (!data.tickets.some(t => t.id === ticket)) data.tickets.push({id:ticket, name, date:'2026-11-23'});
    data.screens.push({id,name,module,group,tickets:[ticket],date:'2026-11-23',version,
      sourceKind:'design',source:source+'?scene='+scenarios[0][0],note:name,scenarios,components:[]});
  }
  for(const [id,name] of Object.entries({
    731:'Mentee 編輯回饋',735:'導師歷史紀錄收到的回饋',754:'帳號選單我的收藏',755:'收藏清單與空狀態',
    756:'收藏登入攔截與狀態同步',758:'書籤收藏'
  })) if(!data.tickets.some(t=>t.id===id))data.tickets.push({id,name});
  const home=data.screens.find(s=>s.id==='home');
  home.note='首頁依身分呈現 CTA。推薦語輪播使用六款專屬插畫，雙軌說明提供註冊入口。';
  home.tickets=[...new Set([...home.tickets,'836'])];
  if(!data.tickets.some(t=>t.id==='836'))data.tickets.push({id:'836',name:'首頁雙軌與新手引導',date:'2026-11-23'});
  const form=data.screens.find(s=>s.id==='mentor-form');
  form.note='D-1 與 D-5 的原型情境採用導師中心 v72；原交付的欄位操作範例獨立保留。';
  register('role-switch','身分切換','identity','890',roleCases,
    mentor.url,'v'+mentor.version+' · '+mentor.commit.slice(0,7),'帳號與身分');
  register('mentee-growth','學員成長紀錄','growth','844',[
    ['growth','已有紀錄'],['growth-empty','尚未開始'],['growth-first','首次里程碑']
  ],growth,'a790d7b','學員成長');
  register('milestones','學員里程碑','growth','845',[['milestone','新增里程碑'],['growth','從時間軸編輯與刪除']],growth,'a790d7b','學員成長');
  register('growth-report','學員成長報告','growth','846',[
    ['report-owner','本人預覽'],['report-shared','已登入 · 分享頁'],['report-private','未公開'],['report-login','分享連結 · 登入攔截']
  ],growth,'a790d7b','學員成長');
})();
