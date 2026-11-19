// Only these screen/scenario pairs may use the mentor prototype.
// All other scenarios keep their original module and URL.
(() => {
 const entries = {
  'mentor-form': {
   role:'mentor', ticket:'#830',
   scenes:{fresh:'fresh',partial:'partial',complete:'complete','work-empty':'work-empty','education-empty':'education-empty','save-error':'save-error','owner-edit':'owner-edit'}
  },
  'mentor-calendar': {role:'mentor',ticket:'#830',sourceScreen:'public-profile',scenes:{'owner-return':'owner-filled'}},
  'mentor-welcome': {role:'mentor',ticket:'#830',scenes:{welcome:'welcome','card-back':'card-back'}},
  'mentee-profile': {role:'mentee',ticket:'#828',scenes:{default:'mentee-profile',empty:'mentee-profile-empty'}},
  'mentee-edit': {role:'mentee',ticket:'#828',scenes:{default:'mentee-edit',empty:'mentee-edit',avatar:'mentee-avatar'}}
 };
 window.MENTOR_SCREENS = entries;
 window.mentorEntryPath = (screen, scenario) => {
  if(screen==='mentee-profile')return 'mentor/profile/100/';
  if(screen==='mentee-edit')return 'mentor/profile/100/edit/';
  if(screen==='mentor-form'&&scenario==='owner-edit')return 'mentor/profile/1/edit/';
  if(screen==='mentor-calendar')return 'mentor/profile/1/';
  return 'mentor/';
 };
 if (!window.HUB_DATA) return;
 const data=window.HUB_DATA;
 for(const [id,entry] of Object.entries(entries)){
  const matches=data.screens.filter(s=>s.id===id);
  if(matches.length!==1) throw Error('Ambiguous Design Hub screen: '+id);
  const screen=matches[0];
  const extra=id==='mentor-calendar'?['830']:id==='mentor-form'?['830','961','959']:id==='mentor-welcome'?['830','961']:id==='mentee-edit'?['828','959','862']:['828','960','862'];
  screen.tickets=[...new Set([...screen.tickets,...extra])];
  for(const [key,label] of Object.entries({'owner-return':'D-4 · 從導師編輯返回','owner-edit':'D-5 · 編輯導師資料',empty:'尚未補齊選填資料',avatar:'編輯學員頭像'})){
   if(entry.scenes[key]&&!screen.scenarios.some(([value])=>value===key))screen.scenarios.push([key,label]);
  }
 }
 for(const [id,name] of Object.entries({828:'學員個人頁與整頁編輯',862:'個人連結新增 GitHub',959:'方案 A 共用編輯頁',960:'學員個人顯示頁',961:'導師申請與建立完成'})){
  if(!data.tickets.some(t=>t.id===id))data.tickets.push({id,name,date:'2026-11-19'});
 }
})();
