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
 let entryBookingTab=screen==='history'?'history':registry[screen]?.bookingPage && ({default:'upcoming',pending:'pending',history:'history',empty:'upcoming'})[scenario];
 let identityFixture = screen === 'role-switch';
 let verified = false, openingEmptyEditor = screen === 'mentee-edit' && scenario === 'empty';
 const send = (type, payload = {}) => parent.postMessage({channel:'xt-hub', type, token, ...payload}, location.origin);
 const matches = (product, id, scene) => {
  const entry = registry[id];
  if (!entry) return false;
  if (entry.bookingPage) return product.dataset.page===entry.bookingPage && !product.dataset.contribution
   && roleOf()===entry.role && !!product.querySelector('main.booking-page');
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
 let lastRole;
 const roleOf = () => document.querySelector('.xt-product[data-member="guest"]')?'guest':document.querySelector('.identity-header[data-role]')?.dataset.role;
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
  const role=roleOf();
  if(role && role!==lastRole){lastRole=role;send('identity-role',{role});}
  // #890 keeps its account popover mounted while switching the underlying page.
  // #840 deliberately demonstrates the booking guard on the preceding search page.
  if(identityFixture||(screen==='public-profile'&&scenario==='public-mentor'&&product.dataset.page==='mentor-search')){
    if(!verified){verified=true;document.documentElement.classList.add('verified');send('ready');}return;
  }
  const alias=registry[screen];
  if(alias?.bookingPage && matches(product,screen)){
    const {bookingTab,currentScene}=product.dataset;
    if(entryBookingTab){
      // Wait for the imported app's named fixture to finish its own initialization.
      if(currentScene!==alias.scenes[scenario])return;
      if(bookingTab!==entryBookingTab){
       const target=Array.from(product.querySelectorAll('.booking-tabs [role=tab]'))[['upcoming','pending','history'].indexOf(entryBookingTab)];
       if(target)target.click();
       return;
      }
      entryBookingTab=null;
    }
    const viewingHistoryAlias=screen==='history' && bookingTab==='history';
    const nextScreen=screen==='history' && !viewingHistoryAlias?'mentee-reservations':screen;
    const key=viewingHistoryAlias?'default':bookingTab==='upcoming'?(currentScene===alias.scenes.empty?'empty':'default'):bookingTab;
    if(!verified||scenario!==key||screen!==nextScreen){
     screen=nextScreen;scenario=key;
     if(!verified){verified=true;document.documentElement.classList.add('verified');send('ready');}
     send('mentor-view',{screen,scenario,role});
    }
    return;
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
  const remainsHere=registry[screen]?.scenes[scenario]===current && matches(product,screen,current);
  let next=remainsHere ? [screen,scenario] : flow ? (matches(product,flow.screen,current)?[flow.screen,flow.scene]:null)
   : Object.entries(registry).filter(([,entry])=>!entry.bookingPage).flatMap(([id,entry])=>Object.entries(entry.scenes).filter(([,scene])=>scene===current&&matches(product,id,current)).map(([key])=>[id,key]))[0];
  // Search, profile and dashboard share this React root: keep the current account
  // menu, edited data and real search selection mounted when the role changes.
  if(!remainsHere && product.dataset.page==='mentor-search' && matches(product,'mentor-search',current))
   next=['mentor-search',product.dataset.member==='guest'?'guest':current==='mentor-search-empty'?current:'default'];
  if(!remainsHere && next?.[0]==='public-profile' && product.dataset.member==='guest' && current==='public-plans')
   next=['public-profile','guest'];
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
  window.applyHubLegacyState?.(next[0],next[1],product);
  const returning=!!outbound;
  outbound='';
  if(lastPerson!==person || returning || !verified || next[0]!==screen || next[1]!==scenario){
   lastPerson=person;[screen,scenario]=next;
   const url=new URL('/'+window.mentorEntryPath(screen,scenario),location.origin);
   for(const [key,value] of Object.entries({screen,scenario,scene:current,token}))url.searchParams.set(key,value);
   if(person)url.searchParams.set('person',person);
   if(role && role!=='guest')url.searchParams.set('memberRole',role);
   history.replaceState(history.state,'',url);
   if(!verified){verified=true;document.documentElement.classList.add('verified');send('ready');}
   send('mentor-view',{screen,scenario,person,role});
  }
  const ids=Object.entries(selectors).filter(([,s])=>product.querySelector(s)).map(([id])=>id);
  if(lastIds!==ids.join()){lastIds=ids.join();send('available',{ids});}
 }
 const observer=new MutationObserver(()=>{if(!queued){queued=true;requestAnimationFrame(()=>{queued=false;refresh();});}});
 observer.observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['data-hub-screen','data-page','data-role','data-current-scene','data-contribution','data-contribution-scene','data-payment-stage','data-person','data-booking-tab','data-member']});
 window.addEventListener('hub-favorites',()=>send('navigate',{screen:'favorites',scenario:'default',role:roleOf()}));
 window.addEventListener('hub-booking-signin',event=>send('booking-signin',event.detail));
 window.addEventListener('hub-navigate',event=>{
  const dest=event.detail;
  if(dest && typeof dest.screen==='string')send('navigate',{screen:dest.screen,scenario:dest.scenario,role:dest.screen==='signin'?'guest':roleOf()});
 });
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
