// The imported app owns its forms. Keep its React tree mounted across approved routes.
(() => {
 const initial = new URLSearchParams(location.search);
 const registry = window.MENTOR_SCREENS;
 const token = initial.get('token');
 let screen = initial.get('screen'), scenario = initial.get('scenario');
 // Each catalog scenario opens in its named state; the welcome dialog has a separate entry.
 if(screen==='mentor-growth' && scenario!=='growth-intro') {
   try {localStorage.setItem('xtalent-level-intro-v1','seen');} catch {}
 }
 let identityFixture = screen === 'role-switch';
 let verified = false, openingEmptyEditor = screen === 'mentee-edit' && scenario === 'empty';
 const send = (type, payload = {}) => parent.postMessage({channel:'xt-hub', type, token, ...payload}, location.origin);
 const matches = (product, id, scene) => {
  const entry = registry[id];
  if (!entry) return false;
  // The design review pages and the native search page have a stable page root, rather
  // than the profile/commerce role markers provided by the imported product.
  if (entry.nativePage) return product.dataset.page===entry.nativePage && !!product.querySelector(entry.marker);
  if(!entry.flow&&currentFlow(product))return false;
  if(entry.flow){
   const marker='[data-hub-screen="'+id+'"][data-role="'+entry.role+'"][data-ticket="'+entry.ticket+'"]';
   return product.matches(marker)&&!!product.querySelector(marker)&&currentFlow(product)?.screen===id;
  }
  const root = product.querySelector('main[data-hub-screen]');
  const expected = entry.sourceScreen || id;
  return [product, root].every(el => el && el.dataset.role === entry.role && el.dataset.ticket === entry.ticket && el.dataset.hubScreen === expected)
   && (id !== 'mentor-form' || root.classList.contains('is-creating') === (scene !== 'owner-edit'))
   && (id !== 'mentor-calendar' || !!root.querySelector('.mp-owner-actions [aria-label="編輯資料"]'));
 };
 const selectors = {
  'favorite-toggle':'.mp-actions [aria-pressed]', 'favorite-login':'[role=dialog]:has(.f753-primary)', 'mentor-reviews':'.mp-reviews', 'mentor-booking':'.xc-plan-rail', 'mentor-profile':'.mp-identity-section', header:'.xt-topbar', member:'.xt-member-card', booking:'.xt-welcome-next', input:'main input:not([type=hidden])',
  textarea:'main textarea', chip:'.xt-compact-chip', profile:'main[data-hub-screen]', avatar:'.fr-portrait,.xt-profile-identity img',
  toast:'[role=status]', button:'main button'
 };
 let inspect = false, outline, lastIds = '', queued = false, outbound = '', lastPerson = '';
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
 const backendFlows={growth:['mentor-growth','growth-l2'],plans:['mentor-plans','plans-filled'],income:['mentor-income','income']};
 function currentFlow(product){
  const {page,currentScene,contribution,contributionScene}=product.dataset;
  const pending=product.querySelector('[data-payment-stage]')?.dataset.paymentStage;
  if(contribution && pending){
   const team=contribution==='team', screen=team?'team-support':'feedback-tip';
   let scene=contributionScene;
   if(pending==='choose')scene=contributionScene==='support-guest'?'support-guest':'support';
   else if(pending==='success')scene='support-success';
   else if(!/failed|timeout|cancelled/.test(scene))scene=team?'support-checkout':'tip-checkout';
   return {screen,scene};
  }
  if(page==='mentee-bookings'&&product.dataset.bookingTab!=='history'&&currentScene!=='mentee-empty')return null;
  if(page==='bookings'){
   const tab=product.dataset.bookingTab;
   const fixtureTab={'bookings-empty':'upcoming','bookings-auto-cancelled':'history'}[currentScene];
   return {screen:'mentor-bookings',scene:fixtureTab===tab?currentScene:'bookings-'+tab};
  }
  const dest=backendFlows[page] || ({
   checkout:['booking-payment','checkout'],'payment-return':['booking-payment','payment-return'],
   'booking-result':['booking-payment','booking-success'],'mentee-bookings':['feedback-tip','mentee-history']
  })[page];
  if(!dest)return null;
  const [screen,fallback]=dest;
  const scenes=registry[screen].scenes;
  // Closing a checkout returns to the underlying booking list.
  const closedTip=page==='mentee-bookings'&&['tip-checkout','tip-failed'].includes(currentScene);
  return {screen,scene:!closedTip&&scenes[currentScene]?currentScene:fallback};
 }
 function refresh(){
  const product=document.querySelector('.xt-product');
  if(!product)return;
  // #890 keeps its account popover mounted while switching the underlying page.
  // #840 deliberately demonstrates the booking guard on the preceding search page.
  if(identityFixture||(screen==='public-profile'&&scenario==='public-mentor'&&product.dataset.page==='mentor-search')){
    if(!verified){verified=true;document.documentElement.classList.add('verified');send('ready');}return;
  }
  const flow=currentFlow(product);
  let current=flow?.scene||product.dataset.currentScene;
  if(!flow&&product.dataset.page==='public-booking'&&!Object.values(registry['public-profile'].scenes).includes(current))current='public-plans';
  const person=product.dataset.person||'';

  if(openingEmptyEditor && current==='mentee-profile-empty' && matches(product,'mentee-profile')){
   const edit=product.querySelector('.mp-backend-action');
   if(edit){openingEmptyEditor=false;edit.click();}
   return;
  }
  if(!verified && !(registry[screen]?.scenes[scenario]===current && matches(product,screen,current)))return;
  // App navigation from the existing profile should still open the Hub's original
  // favorite-aware directory. Source search fixtures and gallery links stay native.
  const legacyDirectory = product.dataset.page==='mentor-search' &&
    !['mentor-search','mentor-audit','mentor-components'].includes(screen);
  const next = legacyDirectory ? null : flow ? (matches(product,flow.screen,current)?[flow.screen,flow.scene]:null) : registry[screen]?.scenes[scenario]===current && matches(product,screen,current) ? [screen,scenario]
   : Object.entries(registry).flatMap(([id,entry])=>Object.entries(entry.scenes).filter(([,scene])=>scene===current&&matches(product,id,current)).map(([key])=>[id,key]))[0];
  const redirect={'mentor-search':['mentor-search','default'] }[product.dataset.page];
  if(redirect && !next){
   if(outbound!==product.dataset.page){outbound=product.dataset.page;send('navigate',{screen:redirect[0],scenario:redirect[1]});}
   return;
  }
  if(!next && verified && product.dataset.page==='mentee-bookings'){
   const tab=product.dataset.bookingTab==='pending'?'pending':'default';
   if(outbound!==tab){outbound=tab;send('reservation-view',{scenario:tab});}
   return;
  }
  if(!next){
   // The prototype can open an unlisted downstream page (e.g. the growth dashboard).
   // Mark it outside the catalog instead of attributing it to the previous role/screen.
   const page=product.dataset.page;
   if(verified && !product.dataset.hubScreen && page!==outbound){
    outbound=page;send('mentor-extension',{page});
   }
   return;
  }
  // Review shortcuts select fixtures without resetting the source app's session role.
  // Open the target through the Hub so its role and local demo data match a direct visit.
  if(next[0]!==screen && ['mentor-audit','mentor-components'].includes(screen)){
   const target=next.join('/');
   if(outbound!==target){outbound=target;send('navigate',{screen:next[0],scenario:next[1]});}
   return;
  }
  const returning=!!outbound;
  outbound='';
  if(lastPerson!==person || returning || !verified || next[0]!==screen || next[1]!==scenario){
   lastPerson=person;[screen,scenario]=next;
   const url=new URL('/'+window.mentorEntryPath(screen,scenario),location.origin);
   for(const [key,value] of Object.entries({screen,scenario,scene:current,token}))url.searchParams.set(key,value);
   if(person)url.searchParams.set('person',person);
   history.replaceState(history.state,'',url);
   if(!verified){verified=true;document.documentElement.classList.add('verified');send('ready');}
   send('mentor-view',{screen,scenario,person});
  }
  const ids=Object.entries(selectors).filter(([,s])=>product.querySelector(s)).map(([id])=>id);
  if(lastIds!==ids.join()){lastIds=ids.join();send('available',{ids});}
 }
 const observer=new MutationObserver(()=>{if(!queued){queued=true;requestAnimationFrame(()=>{queued=false;refresh();});}});
 observer.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['data-hub-screen','data-page','data-role','data-current-scene','data-contribution','data-contribution-scene','data-payment-stage','data-person','data-booking-tab']});
 window.addEventListener('hub-favorites',()=>send('navigate',{screen:'favorites',scenario:'default'}));
 window.addEventListener('message',e=>{
  if(e.origin!==location.origin||e.source!==parent||e.data?.channel!=='xt-hub')return;
  const m=e.data;
  if(m.type==='device')Array.from(document.querySelectorAll('.fr-device-controls button')).find(b=>b.textContent.toLowerCase()===m.device&&b.getAttribute('aria-pressed')!=='true')?.click();
  if(m.type==='mode'){inspect=m.mode==='inspect';clear();}
  if(m.type==='locate')locate(m.id,true);
  if(m.type==='clear')clear();
 });
 document.addEventListener('click',e=>{
  // An explicit navigation leaves the identity demo; toggling roles keeps its menu mounted.
  if(identityFixture && !inspect && e.target.closest('.identity-banner button,.identity-menu nav button,.xt-topbar nav button,.p2-card-main')){
   identityFixture=false;
  }
  if(!inspect)return;
  const id=Object.entries(selectors).filter(([,s])=>e.target.closest(s)).sort((a,b)=>a[0]==='profile'?1:b[0]==='profile'?-1:0)[0]?.[0];
  if(id){e.preventDefault();e.stopImmediatePropagation();locate(id,false);}
 },true);
 document.addEventListener('keydown',e=>{if(inspect&&e.key==='Escape')send('exit-inspect');});
 setTimeout(()=>{if(!verified)send('error',{screen,scenario,reason:'Imported profile markers do not match'});},6500);
})();
