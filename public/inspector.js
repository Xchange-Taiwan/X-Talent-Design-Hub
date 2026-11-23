// Keep the panel's original header, close button and scrolling body.
(() => {
  const panel = document.querySelector('#inspector');
  const title = panel.querySelector('.inspector-title');
  const clamp = (value,max) => Math.max(0,Math.min(value,max));
  let drag, position;
  function place() {
    if (!position || panel.hidden) return;
    const width=Math.min(368,innerWidth-8), height=Math.min(position.height,innerHeight-8);
    position.x=clamp(position.x,innerWidth-width);
    position.y=clamp(position.y,innerHeight-height);
    Object.assign(panel.style,{left:position.x+'px',top:position.y+'px',width:width+'px',height:height+'px',right:'auto',bottom:'auto'});
  }
  title.addEventListener('pointerdown',e=>{
    if(!e.isPrimary||e.button!==0||e.target.closest('button')) return;
    const rect=panel.getBoundingClientRect();
    drag={id:e.pointerId,dx:e.clientX-rect.left,dy:e.clientY-rect.top,height:rect.height};
    title.setPointerCapture(e.pointerId);
  });
  title.addEventListener('pointermove',e=>{
    if(drag?.id!==e.pointerId)return;
    position={x:e.clientX-drag.dx,y:e.clientY-drag.dy,height:drag.height};
    place();
  });
  title.addEventListener('lostpointercapture',()=>{drag=null;});
  addEventListener('resize',place);
  new MutationObserver(place).observe(panel,{attributes:true,attributeFilter:['hidden']});
})();

// Install inspection on the content window so portals and legacy document handlers work alike.
window.attachCatalogInspector = function(frame,entries,isInspecting,selected) {
  const doc=frame.contentDocument;
  const visible=el=>el.getClientRects().length && !el.closest('[hidden],[inert]') &&
    !(doc.querySelector('[role="dialog"][data-state="open"]') && el.closest('[aria-hidden="true"]') && !el.closest('[role="dialog"]'));
  const items=()=>entries().filter(c=>c.selector);
  const target=c=>Array.from(doc.querySelectorAll(c.selector)).find(visible);
  let marked;
  const css=doc.createElement('style');
  css.textContent='[data-hub-highlight]{outline:2px solid #007aff!important;outline-offset:-2px!important}';
  doc.head.append(css);
  function clear(){marked?.removeAttribute('data-hub-highlight');marked=null;}
  function highlight(el){clear();marked=el;el.setAttribute('data-hub-highlight','');}
  frame.contentWindow.addEventListener('click',e=>{
    if(!isInspecting())return;
    const candidates=items().filter(c=>!['button','input','textarea','avatar','header'].includes(c.id));
    for(const el of e.composedPath()) {
      if(!el.matches)continue;
      const entry=candidates.find(c=>el.matches(c.selector));
      if(entry){e.preventDefault();e.stopImmediatePropagation();highlight(el);selected(entry.id);return;}
    }
  },true);
  return {
    clear,
    available:()=>items().filter(target).map(c=>c.id),
    locate(id){
      const c=items().find(c=>c.id===id);
      const el=c&&target(c);
      if(!el)return false;
      el.scrollIntoView({block:'center',inline:'nearest'});highlight(el);selected(id);return true;
    }
  };
};
