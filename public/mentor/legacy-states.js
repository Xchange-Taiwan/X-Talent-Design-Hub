// Preserve saved field-level review links while using the current source editor.
(() => {
  const fields = {
    'name-edit': '#mentor-display-name',
    'service-open': '#have_topic .xt-compact-add',
    'work-filled': '#work_experiences',
    'education-filled': '#educations'
  };
  let applied;
  window.applyHubLegacyState = (screen, scenario, product) => {
    if (screen !== 'mentor-form' || !Object.hasOwn(fields, scenario) || applied === scenario) return;
    const target = product.querySelector(fields[scenario]);
    if (!target) return;
    applied = scenario;
    requestAnimationFrame(() => {
      if (!target.isConnected) return;
      target.scrollIntoView({block:'center', behavior:'instant'});
      if (scenario === 'service-open') target.click();
      if (scenario === 'name-edit') target.focus({preventScroll:true});
    });
  };
})();
