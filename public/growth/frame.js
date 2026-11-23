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
  new MutationObserver(() => {
    if (!document.querySelector('.p3-product,.p3-standalone')) return;
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
