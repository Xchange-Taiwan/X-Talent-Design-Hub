(() => {
  if (parent === window) {
    if(location.pathname.startsWith('/growth-report/')) document.addEventListener('click',e=>{
      if(e.target.closest?.('a[href="/?scene=landing"]')||e.target.closest?.('button')?.textContent.includes('返回首頁')){
        e.preventDefault();e.stopImmediatePropagation();location.assign('/?screen=home');
      }
    },true);
    return;
  }
  const send = (type, message={}) => parent.postMessage({channel:'xt-hub',type,...message}, location.origin);
  const localRoutes = {landing:'home',profile:'mentee-profile','profile-empty':'mentee-profile','profile-edit':'mentee-edit','profile-avatar':'mentee-edit','mentor-search':'mentor-search'};
  const views = {growth:'mentee-growth','growth-empty':'mentee-growth','growth-first':'mentee-growth',milestone:'milestones','report-owner':'growth-report','report-shared':'growth-report','report-private':'growth-report'};
  const initial = new URLSearchParams(location.search);
  let previous = initial.get('scene');
  let ready = false;
  // Only the authenticated product gets account navigation. Standalone report
  // links retain their dedicated login gate and logo-only header.
  let host, account;
  function connectAccount() {
    const header=document.querySelector('.p3-product > .p3-topbar');
    const trigger=header?.querySelector('.p3-header-actions [aria-label="帳號與身分切換"]');
    if(host && (!trigger || host.parentElement !== header)){
      account.destroy();host.remove();host=null;account=null;
    }
    if(!trigger || account || !window.HubAccountHeader)return;
    host=document.createElement('div');host.className='hub-growth-account';
    header.prepend(host);
    const role='mentee';
    const navigate=(screen,scenario,activeRole=role,keepMenu=false)=>send('navigate',{screen,scenario,role:activeRole,keepMenu});
    account=window.HubAccountHeader.mount(host,{
      role,avatar:trigger.querySelector('img')?.src,hideMobileChat:false,
      chatCount:Number(header.querySelector('.p3-chat-link .p3-badge')?.textContent)||0,
      items:[{id:'growth',label:'成長紀錄'},{id:'favorites',label:'我的收藏'},{id:'logout',label:'登出'}],
      open:initial.get('menuOpen')==='1',
      onSwitch(next){navigate(next==='mentor'?'mentor-growth':'mentor-search',next==='mentor'?'growth-l2':'default',next,true);},
      onAction(action){
        switch(action){
          case 'home': return navigate('home','default');
          case 'about': return navigate('about','default');
          case 'search': return navigate('mentor-search','default');
          case 'profile': return navigate('mentee-profile','default');
          case 'workspace': return navigate('mentee-reservations','default');
          case 'chat': return navigate('chat','list');
          case 'favorites': return navigate('favorites','default');
          case 'growth':
            if (previous==='growth') return document.querySelector('.p3-product')?.scrollTo({top:0});
            return navigate('mentee-growth','growth');
          case 'notice': return header.querySelector('.p3-header-actions [aria-label="通知"]')?.click();
          case 'logout':
            sessionStorage.removeItem('p3-report-login');
            return send('navigate',{screen:'home',scenario:'default',role:'guest'});
        }
      }
    });
    send('identity-role',{role});
  }
  new MutationObserver(() => {
    if (!document.querySelector('.p3-product,.p3-standalone')) return;
    connectAccount();
    if (!ready) {ready=true; send('ready');}
    const scene = new URLSearchParams(location.search).get('scene');
    if (scene === previous) return;
    previous = scene;
    if (localRoutes[scene]) send('navigate',{screen:localRoutes[scene],scenario:scene==='profile-empty'?'empty':scene==='profile-avatar'?'avatar':null});
    else if (views[scene]) send('growth-view',{screen:views[scene],scenario:scene});
  }).observe(document.body,{subtree:true,childList:true});
  document.addEventListener('click',e=>{
    if(!e.target.closest?.('a[href="/?scene=landing"]') && !(document.querySelector('.p3-standalone')&&e.target.closest('button')?.textContent.includes('返回首頁')))return;
    e.preventDefault();e.stopImmediatePropagation();send('navigate',{screen:'home'});
  },true);
  const open = window.open;
  window.open = function(url,...rest) {
    if (url && new URL(url,location.href).hostname==='xtalent-mentor-742.bonny80.chatgpt.site') {
      send('navigate',{screen:'mentor-search'});return null;
    }
    return open.call(window,url,...rest);
  };
  addEventListener('message', e => {
    if (e.origin!==location.origin||e.source!==parent||e.data?.channel!=='xt-hub') return;
    if(e.data.type==='device') Array.from(document.querySelectorAll('.p3-device-tabs button')).find(b=>b.textContent.toLowerCase()===e.data.device)?.click();
  });
})();
