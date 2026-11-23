// Feed the common account header from the chat application's real role, inbox and notice state.
(() => {
  const entry = new URLSearchParams(location.search);
  const scene = entry.get('scene');
  const post = (type, payload) => parent.postMessage({channel:'xt-hub',type,...payload},location.origin);
  const navigate = (screen, scenario, role, keepMenu=false) => post('navigate',{screen,scenario,role,keepMenu});
  const isRole = role => role === 'mentor' || role === 'mentee';

  function restoreRole(review) {
    const role = entry.get('memberRole');
    // Explicit contact, booking, guest and permission examples must keep their named fixture.
    if (scene === 'list' && review.state.member && isRole(role)) review.state.role = role;
  }

  function MemberHeader({React, state, unread, noticeOpen, setNoticeOpen, onMessages, onRole, onLogout, defaultAvatar, Bell}) {
    const host = React.useRef(null);
    const widget = React.useRef(null);
    const previousRole = React.useRef(null);
    const parentPanel = React.useRef(null);
    const keepOriginalProfile = scene === 'role-switch' && state.route.view === 'profile';
    const options = {
      role: state.role, avatar: defaultAvatar, chatCount: unread, chatActive: state.route.view === 'chat',
      hideMobileChat: true, noticeOpen,
      items: [{id:'favorites',label:'我的收藏'}, ...(state.role==='mentee'?[{id:'growth',label:'成長紀錄'}]:[]), {id:'logout',label:'登出'}],
      onSwitch(role) {
        onRole(role);
        setNoticeOpen(false);
        if (!keepOriginalProfile) navigate(role==='mentor'?'mentor-growth':'mentor-search',role==='mentor'?'growth-l2':'default',role,true);
      },
      onAction(action) {
        const mentor = state.role === 'mentor';
        const routes = {
          home:['home','default'], search:['mentor-search','default'], profile:mentor?['mentor-calendar','owner']:['mentee-profile','default'],
          workspace:mentor?['mentor-growth','growth-l2']:['mentee-reservations','default'], favorites:['favorites','default'],
          growth:['mentee-growth','growth'], about:['about','default']
        };
        if (action === 'logout') {
          onLogout();
          navigate('home','default','guest');
        }
        else if (action === 'chat') onMessages();
        else if (action === 'notice') setNoticeOpen(!noticeOpen);
        else if (routes[action]) navigate(...routes[action],state.role);
      }
    };
    React.useLayoutEffect(() => {
      widget.current = window.HubAccountHeader.mount(host.current,{...options,open:scene==='role-switch'||entry.get('menuOpen')==='1'});
      return () => widget.current.destroy();
    },[]);
    React.useLayoutEffect(() => {
      widget.current.update(options);
      if (previousRole.current !== state.role) {
        previousRole.current = state.role;
        post('identity-role',{role:state.role});
      }
    });
    React.useEffect(() => {
      if (!noticeOpen) return;
      function dismiss(e) {
        if (e.type === 'keydown' ? e.key === 'Escape' : !e.composedPath().includes(parentPanel.current) &&
            !e.composedPath().some(node=>node?.getAttribute?.('aria-label')==='通知')) setNoticeOpen(false);
      }
      document.addEventListener('pointerdown',dismiss);
      document.addEventListener('keydown',dismiss);
      return () => {document.removeEventListener('pointerdown',dismiss);document.removeEventListener('keydown',dismiss);};
    },[noticeOpen,setNoticeOpen]);
    const h = React.createElement;
    return h('header',{className:'site-header hub-chat-header'},
      h('div',{ref:host,className:'hub-chat-account'}),
      noticeOpen && h('section',{ref:parentPanel,className:'notification-popover','aria-label':'通知紀錄'},
        h('h2',null,'通知'),h('div',{className:'notification-empty'},h(Bell,{size:36}),h('p',null,'尚無新通知'))));
  }
  function openDirectory(state){
    navigate('mentor-search',state.member?'default':'guest',state.member?state.role:'guest');
  }
  window.HubChatAccount = {restoreRole,MemberHeader,openDirectory};
})();
