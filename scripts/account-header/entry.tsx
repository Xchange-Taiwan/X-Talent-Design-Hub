import React from 'react';
import {createRoot} from 'react-dom/client';
import {Bookmark, LogOut, Menu, TrendingUp} from 'lucide-react';
import {MentorHeader} from 'mentor-header-source';
import css from 'account-header-styles';

type Role = 'mentor'|'mentee';
type Options = {
  role:Role; avatar?:string; unread?:Record<Role,boolean>;
  onAction:(action:string)=>void; onSwitch:(role:Role)=>void; open?:boolean;
  items?:{id:string;label:string;icon?:string}[]; chatCount?:number;
  chatActive?:boolean; hideMobileChat?:boolean; noticeOpen?:boolean;
};
const defaults={role:'mentee' as Role,unread:{mentor:false,mentee:false}};
const extraIcons={favorites:Bookmark,logout:LogOut,growth:TrendingUp};
function mount(host:HTMLElement, initial:Options) {
  const shadow=host.shadowRoot || host.attachShadow({mode:'open'});
  host.classList.add('hub-account-host');
  const style=document.createElement('style');
  style.textContent=css;
  const wrapper=document.createElement('div');
  wrapper.id='xt742';
  wrapper.className='header-device';
  shadow.replaceChildren(style,wrapper);
  const root=createRoot(wrapper);
  let options={...defaults,...initial};
  let requestedOpen=options.open?1:0;
  let destroyed=false;
  let switching:Role|null=null;
  function render(){
    if(destroyed)return;
    const p=options, role=switching||p.role;
    const act=(id:string)=>p.onAction(id);
    const extraItems=(p.items||[]).map(item=>{
      const Icon=extraIcons[item.icon||item.id]||Menu;
      return <button key={item.id} onClick={()=>act(item.id)}><Icon size={17}/>{item.label}</button>;
    });
    wrapper.toggleAttribute('data-mobile-chat',p.hideMobileChat===false);
    root.render(<MentorHeader role={role} guest={false} creating={false} missing={false} editing={false}
      avatar={p.avatar||(role==='mentor'?'/frontend/assets/753-zahra.png':'/frontend/assets/753-user.png')} unread={p.unread||defaults.unread}
      onSwitch={(next:Role)=>{switching=next;render();}}
      onSwitchSettled={(next:Role)=>{
        if(destroyed||switching===null)return;
        switching=null;options={...options,role:next};options.onSwitch(next);render();
      }} openRequest={requestedOpen}
      onProfile={()=>act('profile')} onWorkspace={()=>act('workspace')} onSearch={()=>act('search')}
      onComplete={()=>act('profile')} onNotice={()=>act('notice')} noticeOpen={p.noticeOpen}
      onHome={()=>act('home')} onAbout={()=>act('about')} onChat={()=>act('chat')} chatActive={p.chatActive} chatCount={p.chatCount||0}
      extraItems={extraItems}/>);
  }
  render();
  return {
    update(next:Partial<Options>){options={...options,...next};render();},
    open(){requestedOpen++;render();},
    destroy(){destroyed=true;root.unmount();shadow.replaceChildren();host.classList.remove('hub-account-host');}
  };
}
window.HubAccountHeader={mount};
