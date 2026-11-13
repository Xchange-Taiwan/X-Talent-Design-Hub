(()=>{
 const post=(type,payload={})=>parent.postMessage({channel:'xt-hub',type,...payload},location.origin);
 const defs=[['chat-files','.sent-file'],['chat-composer','.composer-area'],['chat-list','.conversation-list'],['chat-thread','.chat-room']];
 let inspect=false,selection=null;
 const box=document.createElement('div');box.setAttribute('aria-hidden','true');Object.assign(box.style,{position:'fixed',pointerEvents:'none',border:'2px solid #007aff',borderRadius:'4px',zIndex:2147483647,display:'none'});document.body.append(box);
 const visible=e=>e&&e.getBoundingClientRect().width>0&&e.getBoundingClientRect().height>0&&!e.closest('[hidden]');
 const available=()=>post('available',{ids:defs.filter(([id,s])=>[...document.querySelectorAll(s)].some(visible)).map(([id])=>id)});
 const draw=e=>{if(!inspect||!visible(e)){box.style.display='none';return}const r=e.getBoundingClientRect();Object.assign(box.style,{display:'block',left:r.left+'px',top:r.top+'px',width:r.width+'px',height:r.height+'px'})};
 window.addEventListener('message',e=>{if(e.origin!==location.origin)return;if(e.source===window&&e.data?.type==='chat-preview-view')return;if(e.source!==parent)return;const m=e.data;if(m?.channel!=='xt-hub')return;if(m.type==='mode'){inspect=m.mode==='inspect';document.documentElement.style.cursor=inspect?'crosshair':'';if(!inspect)box.style.display='none';available()}if(m.type==='locate'){const pair=defs.find(([id])=>id===m.id);const el=pair&&[...document.querySelectorAll(pair[1])].find(visible);if(el){selection=el;el.scrollIntoView({block:'center'});draw(el);post('selected',{id:m.id})}}});
 document.addEventListener('click',e=>{if(!inspect)return;e.preventDefault();e.stopImmediatePropagation();const pair=defs.find(([id,s])=>e.target.closest?.(s));if(pair){selection=e.target.closest(pair[1]);draw(selection);post('selected',{id:pair[0]})}},true);
 for(const event of ['beforeinput','paste','drop'])document.addEventListener(event,e=>{if(inspect){e.preventDefault();e.stopImmediatePropagation()}},true);
 document.addEventListener('keydown',e=>{if(!inspect)return;if(e.key==='Escape'){post('exit-inspect');return}if(['Enter',' ','Backspace','Delete'].includes(e.key)){e.preventDefault();e.stopImmediatePropagation()}},true);
 document.addEventListener('scroll',()=>draw(selection),true);window.addEventListener('resize',()=>draw(selection));
 let pending=false;new MutationObserver(()=>{if(pending)return;pending=true;requestAnimationFrame(()=>{pending=false;available()})}).observe(document.getElementById('root'),{subtree:true,childList:true,attributes:true,attributeFilter:['hidden','class']});
 post('ready');available();
})();