(() => {
 const D=window.HUB_DATA,M=window.HUB_COMPONENT_MAP,$=s=>document.querySelector(s),esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const iconRefresh=()=>window.lucide?.createIcons({attrs:{width:18,height:18,'stroke-width':1.6}});
 const mentorVersion=document.currentScript.dataset.mentorVersion;
 const shellVersion=new URL(document.currentScript.src).searchParams.get('v');
 const q=new URLSearchParams(location.search),validTicket=t=>t==='all'||D.tickets.some(x=>x.id===t);
 const S={view:q.get('view')==='library'?'library':'screens',ticket:validTicket(q.get('ticket'))?q.get('ticket'):'all',screen:q.get('screen')||'history',device:['desktop','tablet','mobile'].includes(q.get('device'))?q.get('device'):(innerWidth<620?'mobile':'desktop'),mode:q.get('mode')==='inspect'?'inspect':'play',scenario:q.get('scenario'),component:null,available:[],ready:false};
 const mentorReference=window.MENTOR_REFERENCES['mentor-components'];
 const legacyGallery=S.screen===mentorReference.id;
 S.catalog=(legacyGallery || (S.view==='library' && q.get('catalog')==='mentor'))?'mentor':'screen';
 if(legacyGallery || (S.catalog==='mentor' && !q.has('screen'))){
  S.view='library'; S.screen='mentor-form'; S.scenario=null; S.mode='play';
 }
 const validRole = value => value === 'mentor' || value === 'mentee' ? value : null;
 const chatKeys=['partner','reservation','person','conversation'];
 const chatParameters=url=>new URLSearchParams(chatKeys.filter(key=>url.searchParams.has(key)).map(key=>[key,url.searchParams.get(key)]));
 let chatContext=S.screen==='chat'?chatParameters(new URL(location.href)):new URLSearchParams();
 let memberRole = validRole(q.get('memberRole')), reopenAccount = false;
 let pendingGuestBooking=null, resumePlan=null;
 function resetAccountContext(){pendingGuestBooking=null;resumePlan=null;memberRole=null;reopenAccount=false;chatContext=new URLSearchParams();}
 function activeFrameRole(){
  const doc=$('#product').contentDocument;
  const header=doc?.querySelector('.identity-header[data-role]') || doc?.querySelector('.hub-account-host')?.shadowRoot?.querySelector('.identity-header[data-role]');
  if(doc?.querySelector('.xt-product[data-member="guest"]') || (header && !header.querySelector('.identity-trigger')))return null;
  return validRole(header?.dataset.role)||memberRole;
 }
 let publicPerson=q.get('person')||'zahra';
 let inspector,noticeTimer,frameModule='',frameToken=0;
 let requestedEntry=null,stopPresentation=null,presentingEntry=false;
 const screen=()=>D.screens.find(s=>s.id===S.screen)||D.screens[1],filtered=()=>D.screens.filter(s=>S.ticket==='all'||s.tickets.includes(S.ticket));
 function normalize(){if(!filtered().some(s=>s.id===S.screen))S.screen=filtered()[0]?.id||'history';if(!screen().scenarios.some(s=>s[0]===S.scenario))S.scenario=screen().scenarios[0][0];}
 function syncURL(){const p=new URLSearchParams({view:S.view,screen:S.screen,ticket:S.ticket,device:S.device,scenario:S.scenario,mode:S.mode});if(S.view==='library' && S.catalog==='mentor')p.set('catalog','mentor');if(memberRole)p.set('memberRole',memberRole);if(S.screen==='chat')chatContext.forEach((value,key)=>p.set(key,value));if(S.screen==='public-profile'&&publicPerson!=='zahra')p.set('person',publicPerson);history.replaceState(null,'','?'+p);}
 function notify(message){$('#notice').textContent=message;$('#notice').hidden=false;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>$('#notice').hidden=true,3200);}
 function send(type,payload={}){if(S.ready)$('#product').contentWindow.postMessage({channel:'xt-hub',type,...payload},location.origin);}
 
 function ticketLink(id){return 'https://github.com/Xchange-Taiwan/X-Talent-Tracker/issues/'+id;}
 function tags(ids){return ids.map(id=>`<button class="ticket-tag ${S.ticket===id?'selected':''}" data-ticket="${id}">#${id}</button>`).join('');}
 function renderNav(){const groups=[...new Set(filtered().map(s=>s.group))];$('#screen-list').innerHTML=groups.map(g=>`<div class="nav-group"><div class="nav-group-label">${g}</div>${filtered().filter(s=>s.group===g).map(s=>`<button class="screen-button" data-screen="${s.id}" ${s.id===S.screen?'aria-current="page"':''}><i data-lucide="${({home:'house',history:'history','login-feedback':'messages-square','mentor-form':'user-round','mentor-welcome':'badge-check'})[s.id]||s.icon||'layout-template'}" aria-hidden="true"></i><strong>${s.name}</strong></button>`).join('')}</div>`).join('');$('#screen-count').textContent=filtered().length+' 個畫面';}
 function renderControls(){const p=screen();$('#ticket').value=S.ticket;$('#page-group').textContent=S.view==='library'?'DESIGN SYSTEM':p.group;$('#page-title').textContent=p.name;$('#product').title=`${p.name} · ${S.device}`;$('#related-tags').innerHTML=tags(p.tickets);$('.related').hidden=!p.tickets.length;$('#scenario').innerHTML=p.scenarios.map(([v,l])=>`<option value="${v}">${l}</option>`).join('');$('#scenario').value=S.scenario;document.querySelectorAll('[data-device]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.device===S.device)));document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===S.mode)));document.querySelectorAll('[data-view]').forEach(b=>{b.setAttribute('aria-selected',String(b.dataset.view===S.view));if(b.dataset.view===S.view)b.setAttribute('aria-current','page');else b.removeAttribute('aria-current');});$('#screens-view').hidden=false;$('#library-view').hidden=true;$('#source-caption').textContent=`${p.sourceKind==='confirmed-update'?'已確認更新':p.sourceKind==='design'?'設計交付':p.module==='frontend'?'前端版本':'交付快照'} · ${p.version} · ${p.date.replaceAll('-','/')} · ${S.device==='desktop'?'Desktop 自適應':S.device==='tablet'?'Tablet 768px':'Mobile 390px'}`;if(mentorScene(p.id,S.scenario))$('#source-caption').textContent='導師中心 · '+window.hubScreenSource(p,S.scenario).version+' · '+S.device;$('#canvas-hint').textContent=S.mode==='inspect'?'點選區塊查看規格與修改紀錄 · Esc 返回操作':'可直接操作原有畫面';$('#canvas-hint').dataset.inspect=String(S.mode==='inspect');$('#frame-wrap').style.maxWidth=S.device==='mobile'?'390px':S.device==='tablet'?'768px':'1440px';}
 function mentorScene(id,scenario){return window.MENTOR_SCREENS[id]?.scenes[scenario];}
 function loadFrame(present=false){
  stopPresentation?.();stopPresentation=null;requestedEntry=null;presentingEntry=false;normalize();
  if(window.hubSharedAccountPage(S.screen) && S.scenario.startsWith('member-'))memberRole=validRole(S.scenario.slice('member-'.length));
  const alias=window.hubScenarioDestination(S.screen,S.scenario);
  if(alias){navigateScreen(alias.screen,alias.scenario,null,present);return;}
  if(S.screen==='mentor-calendar'&&['schedule','empty'].includes(S.scenario)){
   navigateScreen('mentor-plans',S.scenario==='empty'?'plan-schedule-empty':'plan-schedule',null,present);return;
  }
  pendingLocate=null;inspector=null;S.ready=false;S.available=[];S.component=null;$('#loading').hidden=false;const p=screen();frameModule=p.module;frameToken++;
  if(present && S.catalog!=='mentor')requestedEntry={screen:p.id,scenario:S.scenario};
  const file=p.module==='730'&&S.device==='mobile'?'730-mobile':p.module;const params=new URLSearchParams({module:p.module,device:S.device,scenario:S.scenario,token:String(frameToken)});if(shellVersion)params.set('hubVersion',shellVersion);if(memberRole)params.set('memberRole',memberRole);if(reopenAccount)params.set('menuOpen','1');reopenAccount=false;if(p.id==='signin'&&pendingGuestBooking)params.set('bookingSignin','1');if(p.id==='public-profile'&&resumePlan)params.set('resumePlan',resumePlan);if(p.route)params.set('route',p.route+(S.scenario==='pending'?'?tab=pending':''));const approved=mentorScene(p.id,S.scenario);
  if(approved||p.module==='identity')params.set('mentorVersion',mentorVersion);
  if(p.module==='identity'){
   frameModule='mentor';params.set('screen',p.id);params.set('scene',S.scenario);
   $('#product').src='mentor/?'+params;
  }else if(p.module==='growth'){
   params.set('scene',S.scenario);
   $('#product').src='growth/?'+params;
  }else if(approved){
   if(p.id==='public-profile')params.set('person',publicPerson);
   frameModule='mentor';params.set('screen',p.id);params.set('scene',p.id==='mentee-edit'&&S.scenario==='empty'?'mentee-profile-empty':approved);
   $('#product').src=window.mentorEntryPath(p.id,S.scenario)+'?'+params;
  }else if(p.module==='chat'){if(p.id==='chat')chatContext.forEach((value,key)=>params.set(key,value));params.set('scene',p.chatRole?'booking-'+p.chatRole+(S.scenario==='pending'?'-pending':S.scenario==='history'?'-history':S.scenario==='empty'?'-empty':''):S.scenario);params.set('run','hub-'+frameToken+'-'+Date.now());$('#product').src=`chat/preview.html?${params}`}else $('#product').src=`pages/${file}.html?${params}`;$('#product').title=`${p.name} · ${S.device}`;renderInspector();}
 function changePage(id,scenario=null){S.catalog='screen';if(compactShell.matches)setDirectory(false);resetAccountContext();if(id==='public-profile')publicPerson='zahra';S.screen=id;S.scenario=scenario;normalize();render();loadFrame(true);}
 function navigateScreen(id,scenario,guestBooking=null,present=false){
 pendingGuestBooking=null;
 if(id==='home'&&(!scenario||scenario==='default')&&memberRole)scenario=memberRole+'-cta';
 if(['signin','signup','forgot','reset'].includes(id))resetAccountContext();
 if(window.hubSharedAccountPage(id)&&memberRole&&(!scenario||scenario==='default'))scenario='member-'+memberRole;
 if(id==='signin')pendingGuestBooking=guestBooking;
 const dest=D.screens.find(x=>x.id===id);if(!dest)return;if(S.ticket!=='all'&&!dest.tickets.includes(S.ticket))S.ticket='all';S.screen=id;S.scenario=scenario||null;normalize();render();loadFrame(present);}
 function syncImportedScreen(state){
  if(frameModule!=='742'||!state?.screen)return;
  if(state.screen==='slots'){navigateScreen('mentor-calendar','schedule');return;}
  if(state.screen==='profile'){navigateScreen('mentor-calendar','owner');return;}
  if(state.screen==='account'){navigateScreen('mentee-profile');return;}
  const id=state.screen==='activation'?'mentor-welcome':state.screen==='form'?'mentor-form':null;
  if(!id||id===S.screen)return;
  navigateScreen(id,id==='mentor-welcome'?'welcome':'complete');
 }
 function changeTicket(id){if(!validTicket(id))return;const old=S.screen;S.ticket=id;normalize();render();if(S.screen!==old){resetAccountContext();loadFrame(true);syncURL();}else if(S.view==='screens'&&S.screen==='home'&&id==='710'){S.scenario='quotes';renderControls();loadFrame(true);syncURL();}}
 function render(){normalize();renderNav();renderControls();renderLibrary();renderInspector();syncURL();iconRefresh();}
 function componentURL(c){return c.code?D.repo+'/blob/'+(c.commit||D.commit)+'/'+c.code:null;}
 function componentPreview(c,primary=false){
  if(!c.screens.length)return '';
  return '<button'+(primary?' class="primary"':'')+' data-preview-component="'+esc(c.id)+'">在畫面查看</button>';
 }
 function renderLibrary(){const term=$('#component-search').value.trim().toLowerCase();const visible=D.components.filter(c=>(!term||(c.name+' '+c.label+' '+c.kind).toLowerCase().includes(term))&&(S.ticket==='all'||c.screens.some(id=>filtered().some(s=>s.id===id))));$('#library-count').textContent=visible.length+' 個元件／區塊';$('#component-grid').innerHTML=visible.map(c=>`<article class="component-card"><div class="component-card-head"><div><h3>${c.name}</h3><p>${c.label}</p></div><small>${c.kind}</small></div><div>${tags([...new Set(c.changes.map(h=>h.ticket))])}</div><div class="component-foot"><button data-component-detail="${c.id}">查看規格</button>${componentPreview(c)}</div></article>`).join('')||'<div class="empty">沒有符合條件的元件。</div>';}
 function reviewDecision(screen){
  const decision=screen.reviewDecision;
  if(!decision || (screen.id==='mentor-form' && S.scenario==='owner-edit'))return '';
  return '<section><h3>待更新規格</h3><p>'+esc(decision.text)+'</p><div class="inspect-links"><a target="_blank" rel="noopener" href="'+esc(decision.url)+'">PM 決議 ↗</a></div></section>';
 }
 function manifestReference(component){
  const original=component.sourceComponent;
  if(!original)return '';
  return '<p class="inspect-subtitle">元件 ID <code>'+esc(original.id)+'</code></p>';
 }
 function renderInspector(){const panel=$('#inspector');const visible=S.view==='library'||S.mode==='inspect';panel.hidden=!visible;if(!visible)return;$('.inspector-title>span').textContent=S.view==='library'?'元件庫':'檢視畫面';const c=D.components.find(x=>x.id===S.component),original=screen();
 const p=window.hubScreenSource(original,S.scenario);
 if(!c&&S.view==='library'){renderContextLibrary();return;}if(!c){$('#inspector-body').innerHTML=`<div class="inspect-empty"><strong>選取元件</strong>點選畫面中的區塊，或從下方選擇。</div><div class="quick-components">${[...new Set([...(inspector?.available()||[]),...S.available])].map(id=>{const a=D.components.find(c=>c.id===id);return a?`<button data-locate="${id}">${a.label}</button>`:'';}).join('')}</div><section><h3>畫面來源</h3><p class="inspect-subtitle">${esc(p.version)} · ${esc(p.date)}<br>${esc(p.note)}</p><div class="inspect-links" style="margin-top:12px"><a href="${p.source}" target="_blank" rel="noopener">${p.sourceKind==='confirmed-update'?'GitHub 最新決議':p.sourceKind==='design'?'交付紀錄':p.module==='frontend'?'GitHub 畫面來源':'原交付 Site'} ↗</a>${p.frontendCode?`<a href="${D.repo}/blob/${D.commit}/${p.frontendCode}" target="_blank" rel="noopener">前端對照 ↗</a>`:''}</div></section>${reviewDecision(original)}`;return;}
 const changes=[...c.changes].sort((a,b)=>b.date.localeCompare(a.date));$('#inspector-body').innerHTML=`<span class="eyebrow">${c.kind}</span><h2>${c.name}</h2><p class="inspect-subtitle">${c.label}</p><div class="inspect-actions"><button class="secondary" id="inspect-back">${S.view==='library'?'所有元件':'選取其他區塊'}</button>${S.view==='library'?componentPreview(c,true):'<button class="primary" data-mode="play">繼續操作</button>'}</div>${composition(c)}<section><h3>設計規格</h3><ul>${c.rules.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section><section><h3>${c.catalogDate?'核對紀錄':'修改紀錄'}</h3>${changes.length?changes.slice(0,8).map(h=>`<div class="history-item"><div class="when"><a href="${ticketLink(h.ticket)}" target="_blank" rel="noopener">#${h.ticket}</a><time>${h.date.replaceAll('-','/')}</time></div>${esc(h.text)}</div>`).join(''):'<p class="inspect-subtitle">元件已存在；尚無已核對的直接修改紀錄，不推測關聯 ticket。</p>'}</section><section><h3>來源與對照</h3>${manifestReference(c)}<div class="inspect-links">${componentURL(c)?`<a href="${componentURL(c)}" target="_blank" rel="noopener">前端元件 ↗</a>`:''}${c.sourceUrl?`<a href="${c.sourceUrl}" target="_blank" rel="noopener">原型情境 ↗</a>`:''}<a href="${M.existing[c.id]?.url||D.storybook}" target="_blank" rel="noopener">${M.existing[c.id]?'Storybook 案例':'Storybook 目錄'} ↗</a></div><p class="mapping-note">${c.mapping}</p></section>${c.screens.length?`<section><h3>使用畫面</h3><div class="quick-components">${c.screens.map(id=>`<button data-screen="${id}" data-example="${c.examples?.[id]||''}">${D.screens.find(x=>x.id===id)?.name||id}</button>`).join('')}</div></section>`:''}`;}
 function mode(next){S.mode=next;if(next==='play')inspector?.clear();send('mode',{mode:next});renderControls();renderInspector();syncURL();}
 function previewComponent(id){const c=D.components.find(x=>x.id===id);if(!c?.screens.length)return;S.catalog='screen';S.view='screens';S.mode='inspect';S.component=id;renderControls();send('mode',{mode:'inspect'});if(inspector?.locate(id)){syncURL();return;}if(S.available.includes(id)){send('locate',{id});renderInspector();syncURL();return;}const scenes={history:{feedback:'form',rating:'rating',textarea:'rating',toast:'failure'},'login-feedback':{feedback:'default',rating:'rating',textarea:'rating',queue:'default'},'mentor-search':{'account-menu':'menu','favorite-card':'default','favorite-toggle':'default'},'favorites':{'favorites-empty':'empty-favorites','favorite-card':'default'},'public-profile':{'favorite-login':'login','favorite-toggle':'default',toast:'failure'},'mentor-form':{input:'name-edit',textarea:'partial',chip:'partial',toast:'save-error'},'mentor-welcome':{member:'welcome',booking:'welcome'}};const dest=c.screens.includes(S.screen)?S.screen:c.screens[0];
 if(dest && dest!==S.screen){navigateScreen(dest,c.examples?.[dest]||scenes[dest]?.[id],null,true);pendingLocate=id;return;}
 const next=c.examples?.[S.screen]||scenes[S.screen]?.[id];if(next&&screen().scenarios.some(x=>x[0]===next)){S.scenario=next;loadFrame(true);pendingLocate=id;S.component=id;render();}else{send('locate',{id});renderInspector();showLocateHint(id);}syncURL();}

 function composition(c){const m=M.newDesigns[c.id];if(!m||c.sourceUrl&&!m.reuse.length)return '';return `<section><h3>${m.level==='組合元件'?'整組更新':'共用元素'}</h3><p class="scope-note">${m.scope}</p>${m.reuse.length?`<h3 class="reuse-title">沿用元素</h3><div class="inspect-links">${m.reuse.map(r=>`<a href="${r.url}" target="_blank" rel="noopener">${r.name} ↗</a>`).join('')}</div>`:''}</section>`;}
 function componentState(c){const added={history:['feedback','rating'],'login-feedback':['queue'],'mentor-welcome':['member','booking']};if(added[S.screen]?.includes(c.id))return '新增';if(c.changes.some(x=>screen().tickets.includes(x.ticket)))return '調整';return '沿用';}
 function renderContextLibrary(){
  const reviewing=S.catalog==='mentor';
  const ids=reviewing?mentorReference.componentIds:screen().components;
  const scopeLabel=reviewing?'搜尋導師對照元件':'搜尋此畫面的元件';
  const list=ids.map(id=>D.components.find(c=>c.id===id)).filter(Boolean);const priority={新增:0,調整:1,沿用:2};if(reviewing)list.sort((a,b)=>a.name.localeCompare(b.name));else list.sort((a,b)=>Number(!!M.existing[a.id])-Number(!!M.existing[b.id])||priority[componentState(a)]-priority[componentState(b)]);$('#inspector-body').innerHTML=`<div class="library-scope" role="group" aria-label="元件範圍"><button data-catalog="screen" aria-pressed="${!reviewing}">此畫面</button><button data-catalog="mentor" aria-pressed="${reviewing}">導師元件對照</button></div><div class="context-library-links"><a href="${D.storybook}" target="_blank" rel="noopener">Storybook ↗</a>${reviewing?`<a href="${esc(mentorReference.source)}" target="_blank" rel="noopener">原型對照 ↗</a>`:''}</div><label class="component-search-label"><span class="sr-only">${scopeLabel}</span><input id="context-component-search" type="search" placeholder="搜尋元件" aria-label="${scopeLabel}"></label><div class="context-component-list">${list.map(c=>`<button class="context-component" data-component-detail="${c.id}" data-search="${(c.name+' '+c.label).toLowerCase()}"><span class="component-glyph"><i data-lucide="${({member:'contact-round',booking:'calendar-days',rating:'star',toast:'bell',input:'text-cursor-input',textarea:'align-left',chip:'tag',header:'panel-top',button:'rectangle-horizontal',queue:'layers',feedback:'message-square',reservation:'calendar-check',avatar:'circle-user',hero:'layout-template',quote:'quote',profile:'user-round','mentor-profile':'contact-round','mentor-reviews':'messages-square','mentor-booking':'calendar-days','favorites-header':'panel-top','favorite-card':'contact-round','favorite-toggle':'bookmark','account-menu':'menu','favorites-empty':'bookmark','favorite-login':'log-in'})[c.id]||'messages-square'}" aria-hidden="true"></i></span><span class="component-name"><strong>${c.label}</strong><small>${M.newDesigns[c.id]?.level||c.kind}</small></span><span class="component-state ${M.existing[c.id]?'is-story':'is-new'}">${M.existing[c.id]?'Storybook':'Hub 設計'}</span><span class="component-chevron">›</span></button>`).join('')||'<p class="library-empty">此畫面尚無元件對照</p>'}</div>`;iconRefresh();}
 document.addEventListener('input',e=>{if(e.target.id!=='context-component-search')return;const term=e.target.value.trim().toLowerCase();document.querySelectorAll('.context-component').forEach(b=>b.hidden=!b.dataset.search.includes(term));});
 let pendingLocate=null;
 $('#ticket').innerHTML+=[...D.tickets].map(t=>`<option value="${t.id}">#${t.id} · ${t.name}</option>`).join('');$('#storybook').href=D.storybook;
 document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.catalog){S.catalog=b.dataset.catalog;S.component=null;renderInspector();syncURL();return;}if(b.dataset.ticket){changeTicket(b.dataset.ticket);return;}if(b.dataset.screen){if(!filtered().some(s=>s.id===b.dataset.screen))S.ticket='all';changePage(b.dataset.screen,b.dataset.example);return;}if(b.dataset.mode){mode(b.dataset.mode);return;}if(b.dataset.device){if(S.device===b.dataset.device)return;const old=S.device;S.device=b.dataset.device;renderControls();syncURL();if(frameModule==='730'&&(old==='mobile'||S.device==='mobile'))loadFrame();else send('device',{device:S.device});return;}if(b.dataset.view){S.view=b.dataset.view;if(S.view==='screens')S.catalog='screen';S.component=null;render();return;}if(b.dataset.componentDetail){S.component=b.dataset.componentDetail;renderInspector();return;}if(b.dataset.previewComponent){previewComponent(b.dataset.previewComponent);return;}if(b.dataset.locate){previewComponent(b.dataset.locate);return;}if(b.id==='inspect-back'){inspector?.clear();S.component=null;send('clear');renderInspector();return;}});
 $('#ticket').addEventListener('change',e=>changeTicket(e.target.value));$('#scenario').addEventListener('change',e=>{resetAccountContext();S.scenario=e.target.value;S.component=null;renderControls();loadFrame(true);syncURL();});$('#component-search').addEventListener('input',renderLibrary);$('#reset').onclick=()=>{resetAccountContext();loadFrame(true);syncURL();notify('已重設目前情境');};$('#close-inspector').onclick=()=>{if(S.view==='library'){S.view='screens';S.catalog='screen';S.component=null;mode('play');render();}else mode('play');};$('#share').onclick=async()=>{try{await navigator.clipboard.writeText(location.href);notify('已複製目前的 Ticket、情境與模式連結');}catch{notify('請複製瀏覽器網址，已包含目前檢視設定');}};
 function showLocateHint(id){
  const component=D.components.find(c=>c.id===id);
  pendingLocate=null;S.view='library';S.component=id;mode('play');render();
  notify(component?.hint||'請在操作模式開啟對應選單或視窗，再點「在畫面查看」。');
 }
 function tryLocate(){
  if(!pendingLocate||presentingEntry)return;
  const id=pendingLocate;
  if(inspector?.locate(id)){pendingLocate=null;return;}
  if(S.available.includes(id)){pendingLocate=null;send('locate',{id});}
 }
 function onFrameReady(){
  const frame=$('#product'),token=frameToken;
  const loadedToken=new URL(frame.contentDocument.URL).searchParams.get('token');
  if(loadedToken && loadedToken!==String(token))return;
  connectChatLinks();S.ready=true;
  send('device',{device:S.device});
  const entry=requestedEntry;
  if(!entry && presentingEntry)return;
  requestedEntry=null;
  function resumeInspection(){
   if(token!==frameToken)return;
   presentingEntry=false;$('#loading').hidden=true;
   send('mode',{mode:S.mode});
   if(!pendingLocate)return;
   requestAnimationFrame(tryLocate);
   setTimeout(()=>{if(token===frameToken&&pendingLocate){tryLocate();if(pendingLocate)showLocateHint(pendingLocate);}},450);
  }
  if(entry){
   presentingEntry=true;
   send('mode',{mode:'play'});
   stopPresentation=window.presentHubEntry(frame,frameModule,entry,resumeInspection);
  }else resumeInspection();
 }
 const linkedDocuments=new WeakSet();
 function connectChatLinks(){try{const doc=$('#product').contentDocument;if(!doc||linkedDocuments.has(doc))return;linkedDocuments.add(doc);
 inspector=window.attachCatalogInspector($('#product'),()=>screen().components.map(id=>D.components.find(c=>c.id===id)).filter(Boolean),()=>S.mode==='inspect' && !presentingEntry,id=>{S.component=id;renderInspector();});
 tryLocate();
 const win=doc.defaultView,originalOpen=win.open;
 function chatURL(u){
  if(u.hostname!=='xtalent-chat-654.bonny80.chatgpt.site')return false;
  memberRole=activeFrameRole();chatContext=chatParameters(u);
  let scene=u.searchParams.get('scene')||'list';
  if(scene==='booking-mentee-contact'){
   scene='new';if(chatContext.has('person'))chatContext.set('conversation',chatContext.get('person'));
  }
  navigateScreen('chat',scene);return true;
 }
 win.open=function(url,...args){if(url&&chatURL(new URL(url,location.href)))return null;return originalOpen.call(win,url,...args);};
 const selector='a[target="_blank"][href^="https://xtalent-chat-654.bonny80.chatgpt.site/"]';
 function keepChatInHub(root){
  if(root.matches?.(selector))root.removeAttribute('target');
  root.querySelectorAll?.(selector).forEach(link=>link.removeAttribute('target'));
 }
 keepChatInHub(doc);
 const observer=new MutationObserver(changes=>changes.forEach(change=>change.addedNodes.forEach(keepChatInHub)));
 observer.observe(doc.documentElement,{subtree:true,childList:true});
 doc.defaultView.addEventListener('pagehide',()=>observer.disconnect(),{once:true});
 doc.addEventListener('click',e=>{const a=e.target.closest?.('a[href]');if(!a)return;const u=new URL(a.href,location.href);if(chatURL(u)){e.preventDefault();e.stopImmediatePropagation();return;}if(['xtalent.xchange.com.tw','xtalentdev.vercel.app','xtalent.vercel.app'].includes(u.hostname)){
 const dest=D.screens.find(x=>x.route===u.pathname+u.search)||D.screens.find(x=>x.route===u.pathname);
 if(dest){e.preventDefault();e.stopImmediatePropagation();memberRole=activeFrameRole();navigateScreen(dest.id);return;}
 }if(['x-talent-design-hub.x-talent.workers.dev',location.hostname].includes(u.hostname)){const target=u.searchParams.get('screen')||(u.pathname==='/'?(u.searchParams.get('scene')==='landing'||!u.search?'home':null):null);if(target&&D.screens.some(s=>s.id===target)){e.preventDefault();e.stopImmediatePropagation();navigateScreen(target,u.searchParams.get('scenario'));}};},true)}catch{}}
 $('#product').addEventListener('load',connectChatLinks);
window.addEventListener('message',e=>{if(e.origin===location.origin&&e.source===$('#product').contentWindow&&frameModule==='chat'&&e.data?.type==='chat-preview-view'){$('#page-title').textContent=({chat:'站內聊聊',profile:'導師公開頁 · 聊聊入口',bookings:'預約管理 · 聊聊聯絡',pool:'尋找導師 · 聊聊入口',login:'登入 · 聊聊入口'})[e.data.view]||'站內聊聊';return;}if(e.origin!==location.origin||e.source!==$('#product').contentWindow||e.data?.channel!=='xt-hub')return;const m=e.data;
 if(frameModule==='mentor'&&m.token!==String(frameToken))return;
 if(frameModule==='growth'&&m.type==='ready')connectChatLinks();
 if(m.type==='growth-view'&&frameModule==='growth'&&D.screens.some(x=>x.module==='growth'&&x.id===m.screen&&x.scenarios.some(([k])=>k===m.scenario))){S.screen=m.screen;S.scenario=m.scenario;S.component=pendingLocate;render();return;}
 if(m.type==='reservation-view'&&frameModule==='mentor'){
  S.screen='mentee-reservations';S.scenario=m.scenario;S.component=null;S.available=[];
  if(!filtered().some(s=>s.id===S.screen))S.ticket='all';
  render();return;
 }
 if(m.type==='mentor-extension'&&frameModule==='mentor'){
  if(m.page===mentorReference.scene){
   S.view='library';S.catalog='mentor';S.component=null;S.mode='play';
   render();loadFrame();return;
  }
  $('#page-title').textContent=m.page==='mentee-bookings'?'我的預約':'導師中心 · 延伸流程';$('#source-caption').textContent='導師中心 · v'+window.MENTOR_RELEASE.version;
  $('#screen-list [aria-current]')?.removeAttribute('aria-current');S.available=[];S.component=null;return;
 }
 if(m.type==='mentor-view'&&frameModule==='mentor'){
  if(m.screen==='role-switch')return;if(!mentorScene(m.screen,m.scenario))return;
  if(S.ticket!=='all'&&!D.screens.find(s=>s.id===m.screen).tickets.includes(S.ticket))S.ticket='all';
  if(m.screen==='public-profile'&&m.person)publicPerson=m.person;S.screen=m.screen;S.scenario=m.scenario;S.component=pendingLocate;render();return;
 }
 if(m.type==='identity-role' && validRole(m.role)){
  memberRole=m.role;
  if(window.hubSharedAccountPage(S.screen)){S.scenario='member-'+m.role;renderControls();}
  if(S.screen==='home'&&m.homeScenario===m.role+'-cta'){S.scenario=m.homeScenario;renderControls();}
  syncURL();return;
 }
 if(m.type==='booking-signin'&&frameModule==='mentor'&&S.screen==='public-profile'&&['booking-paid','booking-free'].includes(m.scenario)&&typeof m.person==='string'&&typeof m.plan==='string'){
   navigateScreen('signin',null,{person:m.person,plan:m.plan,scenario:m.scenario});return;
 }
 if(m.type==='booking-authenticated'&&frameModule==='frontend'&&S.screen==='signin'&&pendingGuestBooking){
   const booking=pendingGuestBooking;
   memberRole='mentee'; publicPerson=booking.person; resumePlan=booking.plan;
   navigateScreen('public-profile',booking.scenario);resumePlan=null;return;
 }
 if(m.type==='navigate'){
  if(!D.screens.some(s=>s.id===m.screen))return;
  memberRole=m.role==='guest'?null:validRole(m.role)||activeFrameRole();chatContext=new URLSearchParams();
  reopenAccount=m.keepMenu===true;
  const editingOwner=frameModule==='frontend'&&S.screen==='mentor-calendar'&&m.screen==='mentor-form'&&m.scenario==='complete';
  navigateScreen(m.screen,editingOwner?'owner-edit':m.scenario);return;}if(m.type==='app-state'){syncImportedScreen(m.state);return;}if(m.type==='route'){const base=m.route.split('?')[0];const dest=D.screens.find(x=>x.module==='frontend'&&x.route===m.route)||(/^\/profile\/[^/]+$/.test(base)&&base!=='/profile/100'&&base!=='/profile/card'?D.screens.find(x=>x.id==='public-profile'):null)||D.screens.find(x=>x.module==='frontend'&&x.route?.split('?')[0]===base);if(dest){
    if(dest.id==='public-profile')publicPerson=({1:'zahra',2:'alex',3:'sarah'})[base.split('/').pop()]||base.split('/').pop();
    if(dest.id!==S.screen || mentorScene(dest.id,dest.scenarios[0][0])){
     memberRole=activeFrameRole();
     navigateScreen(dest.id,dest.id==='public-profile'&&S.scenario==='guest'?'guest':dest.scenarios[0][0]);
    }
   }else{notify('此頁尚未收錄；返回目前畫面。');loadFrame();}return;}if(m.type==='ready'){onFrameReady();return;}if(m.type==='available'){S.available=m.ids;tryLocate();if(!S.component)renderInspector();return;}if(m.type==='selected'){S.component=m.id;renderInspector();return;}if(m.type==='exit-inspect'){mode('play');return;}if(m.type==='external'){notify('這個連結前往原產品站；本次原型未加入這個銜接畫面。');return;}if(m.type==='error'){console.error('Imported screen error',JSON.stringify(m));notify('畫面載入遇到問題，可重設目前畫面後再試。');}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(S.view==='library'){S.component=null;renderInspector();}else if(S.mode==='inspect')mode('play');}});
 const compactShell=matchMedia('(max-width:1119px)');
 function setDirectory(open){
  document.body.classList.toggle('sidebar-hidden',!open);
  const toggle=$('#toggle-sidebar');toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'隱藏畫面目錄':'顯示畫面目錄');
 }
 compactShell.addEventListener('change',()=>setDirectory(!compactShell.matches));
 setDirectory(!compactShell.matches);
 $('#toggle-sidebar').onclick=()=>setDirectory(document.body.classList.contains('sidebar-hidden'));
 render();loadFrame(true);iconRefresh();
})();
