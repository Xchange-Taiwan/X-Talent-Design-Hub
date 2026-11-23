// Entry landmarks for the original frontend, homepage and mentee growth prototype.
(() => {
  const milestoneActions = doc => doc.querySelector('.p3-timeline-item.milestone .p3-entry-actions')
    || doc.querySelector('.p3-getting-started li:last-child button');

  window.hubLegacyEntry = ({screen, scenario}) => {
    const id = typeof screen === 'string' ? screen : screen.id;
    if (id === 'home') {
      if (scenario === 'quotes') return {target:'.hp-quotes .swiper, .hp-quotes', block:'center'};
      if (['cta','mentee-cta','mentor-cta'].includes(scenario))
        return {target:'.hp-join [data-cta="shared"]', block:'center'};
      return {target:'.hp-hero h1'};
    }
    if (id === 'mentee-growth') {
      if (scenario === 'growth-first') return {target:'.p3-getting-started li:last-child button', block:'center'};
      if (scenario === 'growth-empty') return {target:'.p3-getting-started', block:'center'};
      return {target:'.p3-growth .p3-page-heading'};
    }
    if (id === 'milestones') return scenario === 'milestone'
      ? {target:'.p3-modal[role="dialog"] h2'}
      : {target:milestoneActions, block:'center'};
    if (id === 'growth-report') {
      if (scenario === 'report-login') return {target:'.p3-report-login .p3-empty'};
      if (scenario === 'report-private') return {target:'.p3-report-section .p3-empty'};
      if (scenario === 'report-shared') return {target:'.p3-standalone .p3-report-section'};
      return {target:'.p3-report-page .p3-page-heading'};
    }
    if (id === 'signin' && scenario === 'error') return {target:'li[data-swipe-direction][data-state="open"]'};
    if (id === 'onboarding') return {target:'#main-content form > div:first-child'};
    if (['privacy','terms','about'].includes(id) && scenario.startsWith('member-'))
      return {target:'.hub-account-host'};
    if (['signin','signup','verify','verified','forgot','forgot-sent','reset','reset-done',
         'privacy','terms','about','maintenance','mentee-card'].includes(id))
      return {target:'#main-content h1'};
    return null;
  };
})();
