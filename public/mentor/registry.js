// Only these screen/scenario pairs may use the mentor prototype.
// All other scenarios keep their original module and URL.
(() => {
 const entries = {
  'mentor-form': {
   role:'mentor', ticket:'#830',
   scenes:{fresh:'fresh',partial:'partial',complete:'complete','work-empty':'work-empty','education-empty':'education-empty','save-error':'save-error','owner-edit':'owner-edit'}
  },
  'mentor-calendar': {role:'mentor',ticket:'#830',sourceScreen:'public-profile',scenes:{owner:'owner-filled','owner-return':'owner-filled','owner-empty':'owner-empty','owner-reviews':'owner-reviews','owner-reviews-expanded':'owner-reviews-expanded'}},
  'public-profile':{role:'mentor',ticket:'#840',scenes:{"default": "public-plans", "guest": "public-plans", "login": "public-plans", "saved": "public-plans", "failure": "public-plans", "reviews": "public-reviews", "no-reviews": "public-no-reviews", "public-mentor": "public-mentor", "public-no-plans": "public-no-plans", "public-unavailable": "public-unavailable", "booking-paid": "booking-paid", "booking-no-questions": "booking-no-questions", "booking-free": "booking-free"}},
  'mentor-welcome': {role:'mentor',ticket:'#830',scenes:{welcome:'welcome','card-back':'card-back'}},
  'mentee-profile': {role:'mentee',ticket:'#828',scenes:{default:'mentee-profile',empty:'mentee-profile-empty'}},
  'mentee-edit': {role:'mentee',ticket:'#828',scenes:{default:'mentee-edit',empty:'mentee-edit',avatar:'mentee-avatar'}}
 };
 const flows=[
  {id:'mentor-growth',name:'成長總覽',role:'mentor',ticket:'#746',icon:'chart-no-axes-combined',scenarios:[
   ["growth-l2","L2 · 成長總覽"],
   ["growth-intro","首次進入 · 等級制度介紹"],
   ["growth-empty","L1 · 尚無會談"],
   ["growth-l1","L1 · 成長中"],
   ["growth-l3","L3 · 成長總覽"],
   ["growth-l4","L4 · 成長總覽"],
   ["growth-l5","L5 · 最高等級"],
   ["growth-loading","載入中"],
   ["growth-error","載入失敗"],
   ["growth-updating","完成會談 · 時數更新中"],
   ["growth-refund","時數扣回 · 保留已取得等級"],
   ["growth-boundary","邊界 · 49.99 小時仍為 L1"],
   ["growth-promoted","邊界 · 50 小時升為 L2"],
  ]},
  {id:'mentor-bookings',name:'預約管理',role:'mentor',ticket:'#842',icon:'calendar-check',scenarios:[
   ['bookings-upcoming','即將到來'],['bookings-pending','待您回覆'],['bookings-history','歷史紀錄']
  ]},
  {id:'mentor-plans',name:'方案時段',role:'mentor',ticket:'#837',icon:'calendar-days',scenarios:[
   ["plans-filled","方案列表 · 有方案"],
   ["plans-empty","方案列表 · 空白"],
   ["plan-new","新增方案 · 免費"],
   ["plan-paid","新增方案 · 收費／問卷"],
   ["plan-paid-no-bank","收費上架 · 未設定收款帳戶"],
   ["plan-edit","原地編輯方案"],
   ["plan-custom","指定開放時段 · 後續版本設計預覽"],
   ["plans-migrated","原有時段 · 一般預約"],
   ["plan-schedule","設定可預約時段"],
   ["plan-schedule-empty","尚未設定可預約時段"],
  ]},
  {id:'mentor-income',name:'收入統計',role:'mentor',ticket:'#843',icon:'wallet',scenarios:[
   ["income","F-3 · 收入總覽"],
   ["income-above-ceiling","F-3 · 累積 NT$6,240／進度滿格"],
   ["income-below-threshold","F-3 · 尚未達提領門檻"],
   ["income-empty","F-3 · 尚無收入"],
   ["income-transactions","F-3 · 交易紀錄"],
   ["income-transactions-empty","F-3 · 交易紀錄空狀態"],
   ["income-payouts","F-3 · 提領紀錄"],
   ["income-payouts-empty","F-3 · 提領紀錄空狀態"],
   ["income-settings","F-3 · 收款設定／已驗證"],
   ["income-settings-missing","F-3 · 尚未設定帳戶"],
   ["income-settings-reviewing","F-3 · 帳戶審核中"],
   ["income-settings-rejected","F-3 · 審核退件"],
  ]},
  {id:'booking-payment',name:'方案付款與預約結果',role:'mentee',ticket:'#841',icon:'credit-card',scenarios:[
   ["checkout","G-4 · 付款／15 分鐘保留"],
   ["checkout-failed","G-4 · 付款失敗／時段釋放"],
   ["checkout-closed","G-4 · 取消付款／時段釋放"],
   ["checkout-expired","G-4 · 保留逾時／重選時段"],
   ["checkout-refunded","G-4 · 逾時扣款／全額退刷"],
   ["payment-processing","G-5 · 處理中／通知尚未送達"],
   ["payment-return","G-5 · 自動查詢 → 預約成功"],
   ["booking-success","G-5 · 收費預約成功"],
   ["booking-waiting","G-5 · 免費等待導師回覆"],
  ]},
  {id:'team-support',name:'支持開發團隊',role:'visitor',ticket:'#829',icon:'heart',scenarios:[
   ["support","C-2 · 選擇支持金額"],
   ["support-guest","C-2 · 訪客支持／不需登入"],
   ["support-checkout","C-3 · 確認支持付款"],
   ["support-failed","C-3 · 付款失敗／保留內容"],
   ["support-cancelled","C-3 · 外部取消／保留內容"],
   ["support-timeout","C-3 · 外部付款逾時／保留內容"],
   ["support-success","C-3 · 支持完成"],
  ]},
  {id:'feedback-tip',name:'回饋贊助與同職能推薦',version:'v72 · dbc28b1',date:'2026-11-23',role:'mentee',ticket:'#834',icon:'messages-square',scenarios:[
   ["mentee-history","H-1 · 歷史紀錄／同職能推薦"],
   ["mentee-empty","H-1 · 尚無預約"],
   ["mentee-auto-cancelled","H-1 · 系統自動取消／不可評價"],
   ["tip-feedback","H-2 · 免費場次回饋與贊助"],
   ["tip-feedback-paid","H-2 · 收費場次回饋"],
   ["tip-checkout","H-3 · 確認贊助付款"],
   ["tip-failed","H-3 · 付款失敗／僅當下重試"],
   ["tip-success","H-1 · 已評價／已贊助"],
  ]},
 ];
 for(const flow of flows){
  entries[flow.id]={role:flow.role,ticket:flow.ticket,flow:true,scenes:Object.fromEntries(flow.scenarios.map(([scene])=>[scene,scene]))};
 }
 window.MENTOR_SCREENS = entries;
 window.mentorEntryPath = (screen, scenario) => {
  if(screen==='mentee-profile')return 'mentor/profile/100/';
  if(screen==='mentee-edit')return 'mentor/profile/100/edit/';
  if(screen==='mentor-form'&&scenario==='owner-edit')return 'mentor/profile/1/edit/';
  if(screen==='public-profile')return 'mentor/public/';
  if(screen==='mentor-calendar')return 'mentor/profile/1/';
  return 'mentor/';
 };
 if (!window.HUB_DATA) return;
 const data=window.HUB_DATA;
 const calendar=data.screens.find(s=>s.id==='mentor-calendar');
 calendar.name='我的導師頁面';
 for(const flow of flows){
  if(data.screens.some(s=>s.id===flow.id))throw Error('Duplicate screen: '+flow.id);
  data.screens.push({id:flow.id,name:flow.name,module:'mentor',group:flow.role==='mentor'?'導師管理後台':'付款與贊助',icon:flow.icon,tickets:[flow.ticket.slice(1)],date:flow.date||'2026-11-19',version:flow.version||'751c9d7',sourceKind:'design',source:'https://xtalent-mentor-742.bonny80.chatgpt.site/?scene='+flow.scenarios[0][0],scenarios:flow.scenarios,components:['header','button'],note:flow.name});
 }
 const ticketLinks={
  'public-profile':['830','840','736','758','654','862','962'], 'mentor-calendar':['830','837','962'],
  'mentor-form':['830','961','959'], 'mentor-welcome':['830','961'],
  'mentee-edit':['828','959','862'], 'mentee-profile':['828','960','862'],
  'mentor-bookings':['842','746'], 'booking-payment':['841','872']
 };
 const extraScenarios={
  'owner-edit':'D-5 · 編輯導師資料','owner-return':'D-4 · 從導師編輯返回','owner-empty':'本人頁 · 無方案／無評價',
  'owner-reviews':'本人頁 · 評價','owner-reviews-expanded':'本人頁 · 展開長評價',
  empty:'尚未補齊選填資料',avatar:'編輯學員頭像','public-mentor':'導師身分瀏覽',
  'public-no-plans':'尚未開放預約','public-unavailable':'方案皆未上架','booking-paid':'收費方案與問卷',
  'booking-free':'免費方案與問卷','booking-no-questions':'無事前問卷'
 };
 for(const [id,entry] of Object.entries(entries)){
  const matches=data.screens.filter(s=>s.id===id);
  if(matches.length!==1)throw Error('Ambiguous Design Hub screen: '+id);
  const screen=matches[0];
  screen.tickets=[...new Set([...(ticketLinks[id]||[]),...screen.tickets])];
  for(const [key,label] of Object.entries(extraScenarios)){
   if(entry.scenes[key]&&!screen.scenarios.some(([value])=>value===key))screen.scenarios.push([key,label]);
  }
 }
 for(const [id,name] of Object.entries({...Object.fromEntries(flows.map(f=>[f.ticket.slice(1),f.name])),840:'導師公開頁與方案預約',872:'付款結果確認',962:'導師本人頁與公開頁',828:'學員個人頁與整頁編輯',862:'個人連結新增 GitHub',959:'方案 A 共用編輯頁',960:'學員個人顯示頁',961:'導師申請與建立完成'})){
  if(!data.tickets.some(t=>t.id===id))data.tickets.push({id,name,date:'2026-11-19'});
 }
})();
