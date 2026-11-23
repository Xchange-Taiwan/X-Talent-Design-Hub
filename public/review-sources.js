// The inspector and exported knowledge base must describe the same reviewed design.
(() => {
  const data = window.HUB_DATA;
  const decisions = {
    'mentor-form': {ticket:'830', comment:'7064705254', text:'D-1 建立流程目前為整頁表單。11/21 定案的分步建立流程待交付。'},
    onboarding: {ticket:'836', issue:'890', comment:'7064704908', text:'這裡保留前端既有引導。11/21 定案的雙身分分步引導與中斷續填待交付。'},
    'mentee-card': {ticket:'972', comment:'7063800747', text:'目前展示 v1 學員小卡。新版翻卡及「開始尋找導師」「前往個人頁」入口待交付。'}
  };
  if (!data.tickets.some(t => t.id === '972'))
    data.tickets.push({id:'972',name:'學員建立完成小卡',date:'2026-11-21'});
  for (const [id,decision] of Object.entries(decisions)) {
    const screen = data.screens.find(s => s.id === id);
    if (!screen.tickets.includes(decision.ticket)) screen.tickets.push(decision.ticket);
    screen.reviewDecision = {text:decision.text, ticket:decision.ticket,
      url:'https://github.com/Xchange-Taiwan/X-Talent-Tracker/issues/'+(decision.issue||decision.ticket)+'#issuecomment-'+decision.comment};
  }
  window.hubScreenSource = (screen,key) => {
    const alias = window.hubScenarioDestination(screen.id,key);
    if (alias) return window.hubScreenSource(data.screens.find(s=>s.id===alias.screen),alias.scenario);
    const entry = window.MENTOR_SCREENS[screen.id];
    const scene = entry?.scenes[key] || (screen.module === 'identity' ? key : null);
    if (scene) {
      const release=window.MENTOR_RELEASE;
      return {sourceKind:'design',mentorScene:scene,version:'v'+release.version+' · '+release.commit.slice(0,7),
        date:release.date,source:release.url+'?scene='+encodeURIComponent(scene),commit:release.commit,
        note:(entry?.ticket||'#890')+' · '+scene};
    }
    if (screen.id==='history') return {...screen,note:'#730 單場回饋互動範例 · '+(screen.scenarios.find(([value])=>value===key)?.[1]||key)};
    if (screen.module==='growth') return {...screen,source:'https://xtalent-mentee-growth.bonny80.chatgpt.site/?scene='+encodeURIComponent(key)};
    return screen;
  };
})();
