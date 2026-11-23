// Present the feature named by an explicit Hub entry. The imported product owns
// state, dialogs and navigation after the reviewer starts interacting.
(() => {
  function open(target, trigger, block = 'nearest') {
    return {target, block, prepare(doc) {
      if (typeof target === 'function' ? target(doc) : doc.querySelector(target)) return true;
      const button = doc.querySelector(trigger);
      if (!button || button.disabled) return false;
      button.click();
      return true;
    }};
  }

  const menu = '.identity-menu[data-state=open] .identity-options';
  const dialog = '[role=dialog][data-state=open]';
  const review = '#profile-panel-reviews:not([hidden]) .mp-review:first-child';
  const targets = {
    'mentor-form': {
      partial: '#about', 'name-edit': '#mentor-display-name',
      'service-open': ':is(.xt-compact-panel,.xt-category-sheet)[data-state=open]',
      'work-empty': '#work_experiences button', 'work-filled': '#work_experiences .profile-reorder',
      'education-empty': '#educations button', 'education-filled': '#educations .profile-reorder',
      'links-empty': '#group-links input', 'required-error': '#about [aria-invalid=true]',
      'link-error': '#group-links [aria-invalid=true]', 'period-error': '#work_experiences [aria-invalid=true]',
      'image-error': '.xt-image-upload-error', 'save-error': '.xt-toast', saving: '.editor-header [aria-busy=true], .editor-header button:disabled', leave: dialog,
    },
    'mentor-welcome': {'card-back': '.xt-member-card'},
    'mentor-calendar': {'owner-reviews': review, 'owner-reviews-expanded': review, 'owner-empty': '.mp-plans'},
    'public-profile': {
      reviews: review, 'no-reviews': '.mp-review-empty', 'public-mentor': '.xc-booking-role-toast',
      'public-no-plans': '.xc-plan-rail .xc-empty', 'public-unavailable': '.xc-plan-rail .xc-empty',
      login: dialog, failure: '.xt-toast', saved: '.mp-actions [aria-pressed=true]',
      'booking-free': '.xc-booking-dialog', 'booking-paid': '.xc-booking-dialog', 'booking-no-questions': '.xc-booking-dialog',
    },
    'mentor-search': {
      empty: '.p2-search .p2-empty', 'mentor-search-empty': '.p2-search .p2-empty',
      'no-ratings': '.p2-mentor-card h2', 'mentor-search-filters': '.p2-filter-dialog', 'favorite-login': dialog,
      menu: '.identity-menu[data-state=open] nav',
    },
    favorites: {'empty-favorites': '.p2-favorites .p2-empty', one: '.p2-favorites .p2-mentor-card h2'},
    'mentee-edit': {avatar: dialog},
    'mentor-growth': {
      'growth-l1': '.xm-level-identity', 'growth-l3': '.xm-level-identity', 'growth-l4': '.xm-level-identity',
      'growth-l5': '.xm-level-identity', 'growth-promoted': '.xm-level-identity', 'growth-boundary': '.xm-level-identity',
      'growth-empty': '.xl-empty-hours', 'growth-intro': '.xm-level-dialog',
      'growth-loading': '.xl-skeleton', 'growth-error': '.xl-state', 'growth-updating': '.xl-notice', 'growth-refund': '.xl-notice',
    },
    'mentor-bookings': {'bookings-auto-cancelled': '.booking-auto-notice'},
    'mentor-plans': {
      'plans-empty': '.xm-plans .fr-empty', 'plans-migrated': '.fr-plan-list .xm-plan-row h2',
      'plan-new': '.xm-plan-editor-title', 'plan-edit': '.xm-plan-editor-title',
      'plan-paid': '.fr-plan-question', 'plan-paid-no-bank': '.xm-plan-summary .fr-switch', 'plan-custom': '.xm-custom-slots',
      'plan-schedule': '.xm-availability', 'plan-schedule-empty': '.xm-availability',
    },
    'mentor-income': {
      'income-above-ceiling': '.xc-balance-progress', 'income-below-threshold': '.xc-balance-progress',
      'income-empty': '.xc-threshold', 'income-transactions': '#income-panel .xc-section-head',
      'income-payouts': '#income-panel .xc-payout-record',
      'income-transactions-empty': '#income-panel .xc-empty', 'income-payouts-empty': '#income-panel .xc-empty',
      'income-settings': '.xc-bank-settings .xc-section-head', 'income-settings-missing': '.xc-bank-settings .xc-section-head',
      'income-settings-rejected': '.xc-account-notice', 'income-settings-reviewing': '.xc-account-notice',
    },
    'team-support': {
      support: '.p2-support-dialog', 'support-guest': '.p2-support-dialog', 'support-success': '.p2-thanks-dialog',
      'support-failed': '.p2-payment-failure', 'support-cancelled': '.p2-payment-failure', 'support-timeout': '.p2-payment-failure',
    },
    'feedback-tip': {
      'mentee-auto-cancelled': '.booking-auto-notice', 'tip-success': '.p2-tipped',
      'tip-feedback': '.feedback-dialog', 'tip-feedback-paid': '.feedback-dialog', 'tip-failed': '.p2-payment-failure',
    },
  };

  window.hubMentorEntry = ({screen,scenario}) => {
    if (screen === 'role-switch') {
      if (scenario.startsWith('role-notice-')) {
        const role = scenario === 'role-notice-mentor' ? 'Mentor' : 'Mentee';
        const notice = doc => [...doc.querySelectorAll(dialog)].find(el => el.querySelector('h2')?.textContent === '切換為 ' + role + '？');
        return open(notice, '.identity-header button[aria-label="通知"]');
      }
      return open(menu, '.identity-trigger');
    }
    if (screen === 'mentor-form' && (scenario === 'work-new' || scenario === 'education-new')) {
      const section = scenario === 'work-new' ? '#work_experiences' : '#educations';
      // Only append a blank draft row, using the same add action as the user.
      return open(section + ' .profile-reorder', section + ' button', 'center');
    }
    const target = targets[screen]?.[scenario];
    // The editor has a floating bottom save bar. Leave room for field errors
    // and their validation text on both sides of the target input.
    if (screen === 'mentor-form' && target?.startsWith('#')) return {target,block:'center'};
    return target ? {target} : null;
  };
})();
