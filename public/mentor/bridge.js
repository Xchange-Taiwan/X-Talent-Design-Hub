// The imported app owns its forms. Keep its React tree mounted across approved routes.
(() => {
 const initial = new URLSearchParams(location.search);
 const registry = window.MENTOR_SCREENS;
 const token = initial.get('token');
 let screen = initial.get('screen'), scenario = initial.get('scenario');
 let verified = false, openingEmptyEditor = screen === 'mentee-edit' && scenario === 'empty';
 const send = (type, payload = {}) => parent.postMessage({channel:'xt-hub', type, token, ...payload}, location.origin);
 const matches = (product, id, scene) => {
  const entry = registry[id];
  if (!entry) return false;
  const root = product.querySelector('main[data-hub-screen]');
  const expected = entry.sourceScreen || id;
  return [product, root].every(el => el && el.dataset.role === entry.role && el.dataset.ticket === entry.ticket && el.dataset.hubScreen === expected)
   && (id !== 'mentor-form' || root.classList.contains('is-creating') === (scene !== 'owner-edit'))
   && (id !== 'mentor-calendar' || !!root.querySelector('.mp-owner-actions [aria-label="編輯資料"]'));
 };
 const selectors = {
  header:'.xt-topbar', member:'.xt-member-card', booking:'.xt-welcome-next', input:'main input:not([type=hidden])',
  textarea:'main textarea', chip:'.xt-compact-chip', profile:'main[data-hub-screen]', avatar:'.fr-portrait,.xt-profile-identity img',
  toast:'[role=status]', button:'main button'
 };
 let inspect = false, outline, lastIds = '', queued = false, outbound = '';
 function clear(){outline?.remove(); outline=null;}
 function locate(id, scroll){
  const el = document.querySelector(selectors[id] || ':not(*)');
  if(!el)return;
  if(scroll)el.scrollIntoView({block:'center'});
  clear();
  const r=el.getBoundingClientRect();outline=document.createElement('div');outline.className='mentor-inspect';
  Object.assign(outline.style,{left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px'});
  document.body.append(outline);send('selected',{id});
 }
 function refresh(){
  const product=document.querySelector('.xt-product');
  if(!product)return;
  const current=new URLSearchParams(location.search).get('scene');
  if(openingEmptyEditor && current==='mentee-profile-empty' && matches(product,'mentee-profile')){
   const edit=product.querySelector('.mp-backend-action');
   if(edit){openingEmptyEditor=false;edit.click();}
   return;
  }
  if(!verified && !(registry[screen]?.scenes[scenario]===current && matches(product,screen,current)))return;
  const next = registry[screen]?.scenes[scenario]===current && matches(product,screen,current) ? [screen,scenario]
   : Object.entries(registry).flatMap(([id,entry])=>Object.entries(entry.scenes).filter(([,scene])=>scene===current&&matches(product,id,current)).map(([key])=>[id,key]))[0];
  const redirect={plans:['mentor-calendar','schedule'],'mentor-search':['mentor-search','default'] }[product.dataset.page];
  if(redirect && !next){
   if(outbound!==product.dataset.page){outbound=product.dataset.page;send('navigate',{screen:redirect[0],scenario:redirect[1]});}
   return;
  }
  if(!next){
   // The prototype can open an unlisted downstream page (e.g. the growth dashboard).
   // Mark it outside the catalog instead of attributing it to the previous role/screen.
   const page=product.dataset.page;
   if(verified && !product.dataset.hubScreen && page!==outbound){
    outbound=page;send('mentor-extension');
   }
   return;
  }
  const returning=!!outbound;
  outbound='';
  if(returning || !verified || next[0]!==screen || next[1]!==scenario){
   [screen,scenario]=next;
   const url=new URL('/'+window.mentorEntryPath(screen,scenario),location.origin);
   for(const [key,value] of Object.entries({screen,scenario,scene:current,token}))url.searchParams.set(key,value);
   history.replaceState(history.state,'',url);
   if(!verified){verified=true;document.documentElement.classList.add('verified');send('ready');}
   send('mentor-view',{screen,scenario});
  }
  const ids=Object.entries(selectors).filter(([,s])=>product.querySelector(s)).map(([id])=>id);
  if(lastIds!==ids.join()){lastIds=ids.join();send('available',{ids});}
 }
 const observer=new MutationObserver(()=>{if(!queued){queued=true;requestAnimationFrame(()=>{queued=false;refresh();});}});
 observer.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['data-hub-screen','data-page','data-role']});
 window.addEventListener('message',e=>{
  if(e.origin!==location.origin||e.source!==parent||e.data?.channel!=='xt-hub')return;
  const m=e.data;
  if(m.type==='device')Array.from(document.querySelectorAll('.fr-device-controls button')).find(b=>b.textContent.toLowerCase()===m.device&&b.getAttribute('aria-pressed')!=='true')?.click();
  if(m.type==='mode'){inspect=m.mode==='inspect';clear();}
  if(m.type==='locate')locate(m.id,true);
  if(m.type==='clear')clear();
 });
 document.addEventListener('click',e=>{
  if(!inspect)return;
  const id=Object.entries(selectors).filter(([,s])=>e.target.closest(s)).sort((a,b)=>a[0]==='profile'?1:b[0]==='profile'?-1:0)[0]?.[0];
  if(id){e.preventDefault();e.stopImmediatePropagation();locate(id,false);}
 },true);
 document.addEventListener('keydown',e=>{if(inspect&&e.key==='Escape')send('exit-inspect');});
 setTimeout(()=>{if(!verified)send('error',{screen,scenario,reason:'Imported profile markers do not match'});},6500);
})();
