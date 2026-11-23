(() => {
  const visible = (doc, selector) => [...doc.querySelectorAll(selector)].find(el => el.getClientRects().length && !el.closest('[hidden]'));
  const accountControl = (doc, selector) => {
    const root = doc.querySelector('.hub-chat-account')?.shadowRoot;
    return root && visible(root, selector);
  };
  const at = (selector, block = 'nearest') => ({ target: doc => visible(doc, selector), block });
  const reveal = (trigger, target, block = 'nearest') => ({
    ...at(target, block),
    prepare(doc) {
      if (visible(doc, target)) return true;
      const button = visible(doc, trigger);
      if (!button || button.disabled) return false;
      button.click();
      return true;
    }
  });

  const profile = {
    profile: '.mp-booking .mp-calendar',
    'profile-v2': '.mp-plans .mp-plan',
    'favorite-login': '.mp-actions [aria-label="收藏導師"]',
    'favorite-self': '.mp-actions [aria-label="收藏導師"]',
    guest: '.login-page',
    'login-failure': '.login-page .field-error,.app-toast[role=alert]',
    'mentor-profile': '.mp-actions',
    'self-profile': '.mp-owner-actions',
    paused: '.mp-booking-paused',
    'open-failure': '[role=dialog]',
    'missing-profile': '.page-empty'
  };
  const chat = {
    list: '.conversation-list .list-tools',
    conversation: '.thread-header',
    sending: '[data-message-status=sending]',
    'attachment-limit': '.attachment-drafts',
    attachments: '.sent-attachments',
    'attachments-1': '.sent-attachments',
    'attachments-3': '.sent-attachments',
    'attachments-10': '.sent-attachments',
    failure: '[data-message-status=failed]',
    'attachment-failure': '[data-message-status=failed]',
    'first-failure': '[data-message-status=failed]',
    drafts: '.composer-area .attachment-drafts',
    'deleted-mentor': '.unavailable-notice',
    'deleted-mentee': '.unavailable-notice',
    previews: '.conversation-list .list-scroll',
    empty: '.list-state',
    'list-failure': '.list-state',
    'invalid-link': '.invalid-content,.invalid-desktop',
    'forbidden-link': '.invalid-content,.invalid-desktop',
    unread: '.list-tabs [aria-selected=true]',
    'empty-unread': '.list-state',
    'unread-99': '.list-tabs [aria-selected=true]',
    search: '.list-search-row',
    'search-short': '.search-hint',
    'search-content': '.list-scroll mark',
    'search-file': '.list-scroll mark',
    new: '.first-conversation',
    'reservation-message': '.booking-pending .contact-booking',
    'reservation-existing': '.thread-header'
  };

  window.hubChatFeedbackEntry = ({ screen, scenario, doc }) => {
    if (screen === 'history') {
      const selectors = { default: '.xt730-history-item', form: '.xt730-dialog', rating: '.xt730-rating-heading', failure: '.xt730-toast:not([hidden])' };
      return selectors[scenario] ? at(selectors[scenario]) : null;
    }
    if (screen === 'login-feedback') {
      if (scenario === 'signin') return at('[data-action=login]');
      if (scenario === 'answered' || scenario === 'empty') return at('.xt-home-hero', 'start');
      return at('.xt-card[role=dialog]', 'start');
    }
    if (screen !== 'chat') return null;
    const params = new URL(doc.URL).searchParams;
    if (params.has('conversation') || params.has('partner') || params.has('reservation')) return null;
    if (scenario === 'profile-no-reviews') return reveal('#profile-tab-reviews', '.mp-review-empty', 'center');
    if (scenario === 'role-switch') return {target:doc => accountControl(doc, '.identity-options')};
    if (scenario === 'mobile-entry') return {target:doc => visible(doc, '.chat-fab') || accountControl(doc, '.fr-message-entry')};
    if (scenario === 'notifications') return {
      ...at('.notification-popover'),
      prepare(doc) {
        if (visible(doc, '.notification-popover')) return true;
        const trigger = accountControl(doc, '[aria-label="通知"]');
        if (!trigger) return false;
        trigger.click();
        return true;
      }
    };
    if (scenario === 'feedback-unlisted') return reveal('[aria-label="展開評價未公開說明"]', '.booking-feedback--unlisted', 'center');
    if (scenario === 'booking-mentor-reasons' || scenario === 'booking-mentee-reasons')
      return reveal('.booking-private-reason > summary', '.booking-private-reason[open] p', 'center');
    if (scenario.startsWith('booking-') && scenario.endsWith('-new'))
      return reveal('.booking-card .contact-booking:not(:disabled)', '.first-conversation', 'center');
    if (scenario.startsWith('booking-')) return at('.booking-card .contact-booking', 'center');
    if (scenario === 'history-loading') return at('.transcript .message-row', 'start');
    if (scenario === 'reservation-failure') return {
      ...at('.confirm-dialog[role=dialog]'),
      prepare(doc) {
        const dialog = visible(doc, '.confirm-dialog[role=dialog]');
        if (dialog) {
          if (!visible(doc, '.app-toast[role=alert]')) dialog.querySelector('.dialog-actions .primary-button')?.click();
          return true;
        }
        const selected = visible(doc, '.reservation-slots [aria-pressed=true]');
        const trigger = selected ? visible(doc, '.reservation-form > button:not(:disabled)') : visible(doc, '.reservation-slots button:not(:disabled)');
        trigger?.click();
        return false;
      }
    };
    if (profile[scenario]) return at(profile[scenario], 'center');
    if (chat[scenario]) return at(chat[scenario], scenario.startsWith('attachments') ? 'start' : 'nearest');
    return null;
  };
})();
