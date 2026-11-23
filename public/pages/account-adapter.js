// These delivered pages own their form, notification and feedback state. Replace
// only the signed-in product header; explicit guest and sign-in fixtures stay guest.
(() => {
  const params = new URLSearchParams(location.search);
  const module = params.get('module'), scenario = params.get('scenario') || 'default';
  const route = (params.get('route') || '').split('?')[0];
  const member = params.get('memberRole');
  const sharedRoute = ['/about','/terms','/privacy'].includes(route);
  let reopen = params.get('menuOpen') === '1';
  const installed = new Map();
  const post = (type, data) => parent.postMessage({channel:'xt-hub', token:params.get('token'), type, ...data}, location.origin);

  function targets() {
    if (module === 'home') {
      const role = scenario.startsWith('mentee-') ? 'mentee' : scenario.startsWith('mentor-') ? 'mentor' : null;
      return role ? [[document.querySelector('.hp-header'),role]] : [];
    }
    if (module === '730') return [[document.querySelector('.xt730-header'),'mentee']];
    if (module === '740') {
      const role = scenario === 'mentor' ? 'mentor' : 'mentee';
      return Array.from(document.querySelectorAll('.xt-header:has([data-action="account"])'), el=>[el,role]);
    }
    if (module !== 'frontend') return [];
    const header = document.querySelector('#root header');
    const accountPage = ['/favorites','/profile/card'].includes(route);
    if (!accountPage && !(sharedRoute && ['mentor','mentee'].includes(member))) return [];
    return [[header, member === 'mentor' ? 'mentor' : 'mentee']];
  }

  function install(header, role) {
    const host = document.createElement('div');
    const layout = getComputedStyle(header);
    if (layout.position === 'fixed' || layout.position === 'sticky') {
      Object.assign(host.style,{position:layout.position,top:layout.top,left:'0',right:'0',zIndex:'45'});
    }
    header.before(host);
    header.setAttribute('data-hub-legacy-header','');
    const navigate = (screen, scenario='default', next=role, keepMenu=false) =>
      post('navigate',{screen,scenario,role:next,keepMenu});
    const items = () => [
      {id:'favorites',label:'我的收藏'},
      ...(role === 'mentee' ? [{id:'growth',label:'成長紀錄'}] : []),
      {id:'logout',label:'登出'}
    ];
    function logout() {
      if (module !== '740') return navigate('signin','default','guest');
      // #740 demonstrates the native login queue across logout and login.
      document.querySelector('.xt-device:not([hidden]) [data-action="account"]')?.click();
      document.querySelector('.xt-header [data-action="logout"]')?.click();
    }
    function onAction(action) {
      switch (action) {
        case 'logout': return queueMicrotask(logout);
        case 'favorites': return navigate('favorites');
        case 'growth': return navigate('mentee-growth','growth');
        case 'about': return navigate('about');
        case 'home': return navigate('home',role+'-cta');
        case 'profile': return role === 'mentor' ? navigate('mentor-calendar','owner') : navigate('mentee-profile');
        case 'workspace': return role === 'mentor' ? navigate('mentor-growth','growth-l2') : navigate('mentee-reservations');
        case 'search': return navigate('mentor-search');
        case 'chat': return navigate('chat','list');
        case 'notice': {
          const notice = header.querySelector('[data-action="notifications"],[data-home-pop="notifications"],button[aria-label="開啟通知選單"]');
          if (notice) return setTimeout(()=>notice.click(),0);
          return navigate('chat','notifications');
        }
      }
    }
    function onSwitch(next) {
      if (sharedRoute || module === 'home') {
        role = next;
        widget.update({role,items:items()});
        if (module==='home') window.updateHubHomeRole(role);
        post('identity-role',{role,...(module==='home'?{homeScenario:role+'-cta'}:{})});
        return;
      }
      post('identity-role',{role:next});
      if (next === 'mentor') navigate('mentor-growth','growth-l2',next,true);
      else navigate('mentor-search','default',next,true);
    }
    const avatar = header.querySelector('.xt-user,.xt730-avatar-user,.hp-auth img,.f753-user img,[data-testid="desktop-header-right"] img')?.src;
    const widget = window.HubAccountHeader.mount(host,{role,avatar,items:items(),onAction,onSwitch,open:reopen});
    if (!header.closest('[hidden]')) reopen=false;
    return {host,widget};
  }

  let load;
  function update() {
    const active=new Map(targets().filter(([node])=>node));
    if (active.size && !window.HubAccountHeader) {
      if (!load) {
        load=document.createElement('script');
        const asset=new URL('../shared/account-header.js',location.href);
        if(params.has('hubVersion'))asset.searchParams.set('v',params.get('hubVersion'));
        load.src=asset.href;
        load.onload=update;
        load.onerror=()=>{load=null;};
        document.head.append(load);
      }
      return;
    }
    for (const [header,{host,widget}] of installed) {
      if (!active.has(header) || !host.isConnected) {
        widget.destroy();
        host.remove();
        header.removeAttribute('data-hub-legacy-header');
        installed.delete(header);
      }
    }
    for (const [header,role] of active) if (!installed.has(header)) installed.set(header,install(header,role));
  }
  let queued=false;
  new MutationObserver(()=>{
    if (!queued) {queued=true;queueMicrotask(()=>{queued=false;update();});}
  }).observe(document.body,{subtree:true,childList:true});
  update();
})();
