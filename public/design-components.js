// Reference each design at a real Hub screen and scenario. Selectors belong to the imported documents.
(() => {
  const D = window.HUB_DATA, M = window.HUB_COMPONENT_MAP;
  const mentor = 'https://xtalent-mentor-742.bonny80.chatgpt.site/';
  const chat = 'https://xtalent-chat-654.bonny80.chatgpt.site/';
  const growth = 'https://xtalent-mentee-growth.bonny80.chatgpt.site/';
  const get = id => D.screens.find(s => s.id === id);
  function group(entryId, ticket, source, items) {
    const page = get(entryId);
    const reference = window.MENTOR_REFERENCES[entryId];
    for (const [name,label,selector,scene,rule,story] of items) {
      const id = name.replace(/([a-z0-9])([A-Z])/g,'$1-$2').toLowerCase();
      const scenario = scene || reference?.scene || page.scenarios[0][0];
      const originScene = window.MENTOR_SCREENS[entryId]?.scenes[scenario] || scenario;
      let c = D.components.find(c => c.id === id);
      if (!c) {
        c = {id,name,label,selector,kind:'業務元件',screens:[],examples:{},rules:[rule],
          catalogDate:'2026-11-23',changes:[{ticket,date:'2026-11-23',text:reference?'收錄原型互動範例。':'已核對原型情境與使用畫面。'}],
          sourceUrl:reference?.source || source+'?scene='+originScene,story,mapping:source===chat?'聊聊原型':source===growth?'學員成長原型':'導師中心原型'};
        D.components.push(c);
      }
      if (reference) {
        c.referenceId = reference.id;
        continue;
      }
      c.examples ||= {};
      c.examples[entryId]=scenario;
      if (!page.components.includes(id)) page.components.push(id);
    }
  }
  group('booking-payment','841',mentor,[
    ['HoldCountdown','時段保留倒數','.xc-hold','checkout','顯示剩餘分秒，最後一分鐘切換提醒狀態。'],
    ['PaymentMethod','付款方式','.xc-payment-options','checkout','選取信用卡後，前往藍新完成付款。'],
    ['ReceiptEmail','收據寄送 Email','.xc-form-block:has(input[type=email])','checkout','收據寄送列為第 02 段，Email 為必填。'],
    ['OrderSummary','訂單摘要','.xc-order-summary','checkout','列出導師、方案、日期、時間與付款金額。'],
    ['PaymentConsent','付款同意列','.xc-consent','checkout','同意條款後可繼續付款，條款可以獨立開啟。'],
    ['PaymentResult','付款異常結果','.xc-payment-result','checkout-expired','依取消、逾時或退刷狀態提供下一步。'],
    ['BookingOutcome','預約結果與摘要','.xc-booking-outcome','booking-success','確認中與成功共用摘要位置，結果插圖與標題依狀態切換。'],
    ['ProcessingIndicator','付款結果查詢動畫','.xc-processing-card','payment-processing','查詢期間保持摘要可見。'],
    ['PaymentRules','付款與退款說明','.xc-refund-rules','checkout','在送出前查看取消與退款規則。']
  ]);
  group('public-profile','840',mentor,[
    ['BookingPlanCard','方案卡與最快可約標記','.xc-plan-card','default','方案名稱與單次費用並列，接續說明、最近可約時段與選擇按鈕。方案清單隨整頁捲動。'],
    ['CalendarSlots','日期與可預約時段','.xc-calendar-slots','booking-paid','選取日期後顯示對應時段。'],
    ['QuestionnaireFields','方案事前問卷','.xc-questionnaire','booking-paid','只列導師自訂題目，未設定題目時省略。'],
    ['BookingSelection','預約視窗與方案摘要','.xc-booking-dialog','booking-free','同一視窗選擇時段、作答並送出。'],
    ['RoleBookingNotice','預約身分提醒','.xc-booking-role-toast','public-mentor','導師嘗試預約時停留原頁，以可關閉浮動通知提醒切換身分。'],
    ['LevelPopover','等級徽章與說明','.mp-level-group','default','點擊等級旁圖示查看級距。'],
    ['ExpandableReview','長評價收合','.xm-review-content','reviews','長評價可展開並收回。'],
  ]);
  group('mentor-growth','746',mentor,[
    ['LevelProgress','導師等級與升級進度','.xm-level-card','growth-l2','顯示目前等級、有效時數及下一級差額。'],
    ['LevelRoadmap','五級里程碑','.xm-level-roadmap','growth-l2','區分已達、目前與未達成等級。'],
    ['ServiceStats','服務統計卡','.xm-service-stats','growth-l2','並列會談與服務指標。'],
    ['GrowthActivity','時數活動圖','.xm-activity-card','growth-l2','依所選期間呈現服務活動。'],
    ['HoursLedger','服務時數明細','.xl-ledger','growth-l2','列出對象、日期與認列時數。'],
    ['LevelRules','等級制度說明視窗','.xm-level-dialog','growth-intro','共用等級徽章、各級距與計入規則。']
  ]);
  group('mentor-plans','837',mentor,[
    ['PlanListRow','方案管理列','.xm-plan-row','plans-filled','查看價格、狀態，進入編輯。'],
    ['PlanEditor','方案編輯與預覽','.xm-plan-editor-layout','plan-paid','編輯內容與側欄方案預覽連動。'],
    ['PlanQuestions','自訂問卷編輯器','.fr-plan-question','plan-paid','支援文字題、單選題及選項。'],
    ['PlanSchedule','開放時段類型','.xm-schedule-choice','plan-paid','選擇共用或自訂開放時段。'],
    ['AvailabilityGrid','每週開放時段表','.fr-time-grid','plan-schedule','依星期與時間調整可預約區段。'],
    ['AvailabilityOverrides','指定日期時段','.xm-date-fields','plan-schedule','日期設定與一般週時段分開維護。'],
    ['BankRequired','收費方案收款提示','.fr-plan-bank-dialog','plan-paid-no-bank','收款帳戶未完成時提供設定入口。']
  ]);
  group('mentor-income','843',mentor,[
    ['ThresholdCard','可提領淨額','.xc-threshold','income','餘額、進度及撥款資格共同呈現。'],
    ['ThresholdMarker','撥款門檻與刻度','.xc-balance-progress','income','在金額尺度標示撥款門檻，分辨達標與未達標。'],
    ['RevenueMetrics','本月收入與結算摘要','.xm-revenue-stats','income','並列本月淨額、待結算及預計撥款。'],
    ['RevenueTrend','收入趨勢圖','.xm-revenue-trend','income','提供每日與累積金額，切換時更新圖表。'],
    ['RevenueSources','會談與贊助收入占比','.xm-revenue-sources','income','依來源呈現比例及金額。'],
    ['RecentTransactions','最近交易摘要','.xm-revenue-recent','income','由總覽查看近期交易。'],
    ['TransactionList','交易明細表與行動版列表','.xc-transactions,.xm-mobile-transactions','income-transactions','顯示交易來源、費用與實收。'],
    ['MoneyBreakdown','金額拆解','.xc-breakdown','income-transactions','開啟交易明細可查看總額、服務費及淨額。'],
    ['PayoutRecord','撥款紀錄','.xc-payout-record','income-payouts','按月份查看撥款金額與狀態。'],
    ['BankAccountRow','收款帳戶與遮罩','.xc-bank-row','income-settings','可切換顯示帳號及查看審核狀態。'],
    ['BankVerification','收款帳戶驗證','.xc-bank-settings','income-settings-missing','支援未設定、審核中及退件情境。']
  ]);
  group('mentor-bookings','842',mentor,[
    ['ReservationPlan','預約方案與費用','.xc-booking-plan-line','bookings-upcoming','顯示方案與當次費用。'],
    ['ReservationAnswers','問卷回答摺疊列','.xc-booking-questions:not(.booking-private-reason)','bookings-upcoming','有問卷回答時顯示。題數與箭頭並列，點整列展開題目和回答。'],
    ['PrivateReason','本人填寫的取消或婉拒原因','.booking-private-reason','bookings-history','只有原因填寫者的卡片提供查看入口。'],
    ['BookingActions','預約卡操作列','.booking-actions','bookings-history','聯絡入口與會談操作分列左右，依角色和狀態呈現。']
  ]);
  group('team-support','829',mentor,[
    ['ContributionAmount','支持金額與自訂金額','.p2-amount-options','support','選擇預設金額或自行輸入。'],
    ['ContributionCheckout','支持與贊助付款摘要','.p2-contribution-checkout','support-checkout','摘要、收據與付款操作共用一致的排列。'],
    ['ContributionFailure','支持或贊助失敗提示','.p2-payment-failure','support-failed','付款失敗後可在當下重試。'],
    ['ContributionThanks','支持完成視窗','.p2-thanks-dialog','support-success','付款完成後顯示致謝。']
  ]);
  group('feedback-tip','834',mentor,[
    ['FeedbackEdit','我的回饋與編輯','.booking-review-heading','mentee-history','展開已評價紀錄後可修改評分與文字。'],
    ['FeedbackTipFields','免費場次贊助區','.p2-tip-fields','tip-feedback','僅免費場次在首次回饋時顯示金額及感謝訊息。'],
    ['MentorRecommendations','同職能導師推薦','.p2-recommendations','mentee-history','從歷史紀錄開啟推薦導師的公開頁。']
  ]);
  group('mentee-profile','828',mentor,[
    ['DirectionTabs','交流偏好方向分頁','.mp-direction-tabs','default','切換職位方向並保留各方向的技能與主題。'],
    ['WatchedPositions','關注的職位','.mentee-position-list','default','點選職位，連動左欄交流偏好。','MenteeWatchedPositionsCard'],
    ['MenteeSummary','學員摘要列','.mp-summary','default','依已填欄位呈現經驗、地點與方向數量。','MenteeSummaryBar'],
    ['SocialLinks','個人連結圖示列','.xt-social-links','default','顯示已設定之社群與個人網站。','PersonalLinksGrid'],
    ['ProfileEmpty','個人資料空狀態','.mp-profile-empty','empty','只顯示必要引導與既有編輯入口。']
  ]);
  group('mentor-form','830',mentor,[
    ['EditorNav','整頁編輯章節導覽','.editor-nav','owner-edit','跳至對應的表單章節。','ProfileEditChapterNav'],
    ['EditorSaveBar','浮動儲存列','.mp-savebar','owner-edit','捲離頂部操作後仍可取消或儲存。'],
    ['MentorGuidelines','導師規範同意列','.mentor-guidelines','fresh','可展開規範並勾選同意。','MentorGuidelinesCard'],
    ['CompactPicker','分類多選與標籤','.xt-compact-field','owner-edit','支援增減選項及已選數量。','CompactCategoryPicker'],
    ['ExperienceRows','經歷排序與目前筆序','.profile-reorder','owner-edit','編輯時顯示筆序，依序排列經歷。','ExperienceReorderHeader']
  ]);
  group('mentee-edit','828',mentor,[
    ['AvatarChooser','六款預設頭像與上傳','.xt-avatar-dialog','avatar','選擇插畫或上傳照片後儲存。','MenteeAvatarDialog']
  ]);
  group('role-switch','890',mentor,[
    ['IdentitySwitch','雙身分切換滑桿','.identity-options','role-shared','展開帳號選單；切換完成後保留選單位置與新身分。'],
    ['IdentityTrigger','身分頭像與跨信箱紅點','.identity-trigger','role-mentee-unread','紅點代表另一個身分有未讀訊息。'],
    ['IdentityBanner','未完成資料補填列','.identity-banner','role-missing-mentor','首次切換至未完成的身分後可回到補填流程。'],
    ['IdentityConfirmation','跨身分通知確認','[role=alertdialog],[role=dialog]','role-notice-mentor','開啟通知後確認是否切換至另一身分。']
  ]);
  group('chat','654',chat,[
    ['ConversationSearch','對話搜尋與比對位置','.thread-search,.search-wrap','list','可搜尋姓名、訊息或檔名，再前往符合的對話。'],
    ['ChatUnread','未讀篩選與未讀點','.list-tabs,.unread-dot','list','可切換全部與未讀列表。'],
    ['OpeningSuggestions','首次聯絡開場建議','.suggestion-scroll','new','可將開場句加入現有草稿。'],
    ['MessageActions','訊息操作與失敗重試','.message-action-trigger,.message-menu','failure','開啟失敗訊息選單，依狀態重試或刪除。'],
    ['AttachmentDraft','附件草稿','.attachment-drafts','attachments-3','送出前可移除所選檔案。'],
    ['UnavailableRoom','已刪除帳號聊天室','.unavailable-notice','deleted-mentor','保留歷史對話，輸入區改為無法傳訊的提醒。'],
    ['ThreadDate','聊天日期分隔','.date-divider','conversation','訊息依日期分組，分隔列使用同一格式。'],
    ['ChatNotification','通知浮層','.notification-popover','notifications','點擊頁首通知圖示可開啟。']
  ]);
  group('mentee-growth','844',growth,[
    ['GrowthIdentity','學員成長摘要','.p3-growth-hero','growth','呈現學員與目前探索方向。'],
    ['GrowthStats','四項成長統計','.p3-stat-grid','growth','以同一期間呈現四項成長數據。'],
    ['SkillMap','能力地圖','.p3-skill-map','growth','各職位方向分開記錄進度。'],
    ['JourneyTimeline','職涯旅程時間軸','.p3-timeline','growth','依日期呈現會談、任務與里程碑。'],
    ['MilestonePrivacy','公開里程碑開關','.p3-toggle-label','growth','控制公開報告可顯示的里程碑。']
  ]);
  group('milestones','845',growth,[
    ['MilestoneEditor','里程碑表單','[role=dialog]','milestone','選類型、輸入標題及日期，也可補說明與連結。'],
    ['MilestoneTypes','里程碑類型選擇','.p3-choice-pills','milestone','選擇面試、作品集、課程或自訂等類型。'],
    ['MilestoneActions','里程碑編輯與刪除','.p3-entry-actions','growth','可以編輯已建立的紀錄，刪除前再次確認。']
  ]);
  group('growth-report','846',growth,[
    ['GrowthReportSheet','成長報告','.p3-report-sheet','report-owner','本人可預覽完整版並複製分享連結。'],
    ['ReportIdentity','分享報告識別區','.p3-report-identity','report-shared','分享頁保留姓名、頭像及公開里程碑。'],
    ['ReportLogin','報告登入攔截','.p3-report-login','report-login','登入後繼續檢視分享報告。']
  ]);
  group('home','836',growth,[
    ['DualTrackSection','首頁雙軌成長說明','.p3-dual-track','default','說明同帳號學員與導師身分，從此進入註冊。','DualTrackSection']
  ]);
  group('mentor-income','843',mentor,[
    ['LedgerEmpty','交易與撥款空狀態','.xc-empty','income-transactions-empty','依目前分頁顯示尚無交易或尚無撥款。'],
    ['TransactionDetail','交易明細視窗','.xc-transaction-dialog','income-transactions','點選交易列查看對象、金額與結算明細。'],
    ['AccountStatus','收款帳戶狀態提示','.xc-account-notice','income-settings-rejected','帳戶退件或尚待驗證時顯示對應提示。']
  ]);
  group('mentor-growth','746',mentor,[
    ['GrowthLoading','成長資料載入中','.xl-skeleton','growth-loading','載入時以骨架保留版面。'],
    ['GrowthError','成長資料重試','.xl-state','growth-error','載入失敗時可以重新取得資料。'],
    ['HoursAdjustment','時數調整提醒','.xl-notice','growth-refund','退款扣回時數後保留已取得的等級。']
  ]);
  group('public-profile','840',mentor,[
    ['PlanAvailability','最快可約時段','.xc-plan-next','default','顯示方案最近可預約的日期與時間。'],
    ['QuestionSelect','單選問卷選項','.xc-questionnaire [role=combobox]','booking-paid','開啟選單作答，回到題目可看到先前選項。']
  ]);
  group('mentee-growth','844',growth,[
    ['JourneyTasks','任務記錄','.p3-task-list','growth','會談任務依所屬紀錄呈現。'],
    ['GrowthGettingStarted','成長紀錄起始卡','.p3-getting-started','growth-empty','尚無紀錄時提供開始累積的入口。'],
    ['ReportTeaser','成長報告入口','.p3-report-teaser','growth','由成長紀錄打開本人成長報告。']
  ]);
  group('chat','654',chat,[
    ['FirstConversation','首次對話對象','.first-conversation','new','尚無訊息時顯示聯絡對象。'],
    ['ChatHistoryLoading','載入較早訊息','.history-loading','history-loading','在紀錄上方載入先前訊息。'],
    ['ChatListState','對話列表空狀態與錯誤','.list-state','list-failure','列表錯誤提供重試，篩選無結果時顯示空狀態。'],
    ['ChatMobileEntry','行動版聊聊入口','.chat-fab','mobile-entry','小螢幕以浮動按鈕進入聊聊。'],
    ['ComposerCounter','字數與送出按鈕','.composer-controls','conversation','輸入區共用字數限制與送出狀態。']
  ]);

  // The frontend importer originally assigned the same six form controls even to legal documents.
  const frontendUsage = {
    about:['header','button'], signin:['header','input','button'], signup:['header','input','button'],
    onboarding:['header','avatar','input','chip','button'], verify:['header','button'], verified:['header','button'],
    forgot:['header','input','button'],'forgot-sent':['header','button'],reset:['header','input','button'],
    'reset-done':['header','button'],'mentee-card':['avatar','button'], privacy:['header'],terms:['header'],maintenance:['button']
  };
  for (const [id,components] of Object.entries(frontendUsage)) get(id).components=components;
  for (const id of ['mentee-edit','mentee-profile','mentor-reservations','mentee-reservations']) {
    get(id).components=get(id).components.filter(c=>!['input','textarea','reservation'].includes(c));
  }
  const shares = {
    'team-support':{'payment-method':'support-checkout','receipt-email':'support-checkout','payment-consent':'support-checkout'},
    'feedback-tip':{'payment-method':'tip-checkout','receipt-email':'tip-checkout','contribution-checkout':'tip-checkout','contribution-amount':'tip-feedback','contribution-failure':'tip-failed','feedback':'tip-feedback','rating':'tip-feedback'},
    'mentee-edit':{'editor-nav':'default','editor-save-bar':'default','compact-picker':'default','direction-tabs':'default','experience-rows':'default'},
    'mentor-calendar':{'social-links':'owner','level-popover':'owner','expandable-review':'owner-reviews'},
    'public-profile':{'social-links':'default','booking-form':'booking-paid'},
    'mentor-search':{'mentor-filter':'default','notification-bell':'default'},
    chat:{'private-reason':'booking-mentor-reasons','booking-actions':'booking-mentor','reservation':'booking-mentor','feedback':'booking-mentor-history'},
    'mentor-reservations':{'private-reason':'history','booking-actions':'default','reservation':'default','feedback':'history'},
    'mentee-reservations':{'private-reason':'history','booking-actions':'default','reservation':'default','feedback':'history'},
    'mentor-bookings':{'reservation':'bookings-upcoming','feedback':'bookings-history'},
    'mentee-growth':{'milestone-actions':'growth'},
    'milestones':{'journey-timeline':'growth'}
  };
  for (const [screenId,entries] of Object.entries(shares)) for(const [id,scenario] of Object.entries(entries)) {
    const c=D.components.find(c=>c.id===id);
    c.examples ||= {}; c.examples[screenId]=scenario;
    if(!get(screenId).components.includes(id)) get(screenId).components.push(id);
  }
  // Smaller designs rendered by v72, in addition to its named component manifest.
  group('booking-payment','841',mentor,[
    ['RuleHint','規則說明浮層','.xc-rule-trigger,.xc-rule-bubble','checkout','點說明圖示展開對應規則，可點外側或按 Esc 關閉。'],
    ['CommerceArt','付款與預約插圖','.xc-commerce-art','checkout','付款方式、預約結果及可提領金額分別使用信用卡、日曆及硬幣。'],
    ['PaymentFields','付款與收據欄位','form:has(.xc-payment-options)','checkout','01 選擇付款方式、02 填寫收據 Email。付款流程交由藍新處理。']
  ]);
  group('mentor-income','843',mentor,[
    ['IncomeMetricArt','收入指標插圖','.xm-revenue-stats .xm-dashboard-metric-art','income','本月淨額、待結算和預計撥款各使用對應指標圖。'],
    ['StatusPill','款項與審核狀態','.xc-status','income-transactions','顯示目前收款、付款或審核狀態，文字搭配對應色階。']
  ]);
  group('mentor-form','830',mentor,[
    ['EditableAvatar','頭像與相機操作','.xt-editable-avatar-field','fresh','可點頭像或相機圖示選擇照片；導師儲存時須使用真人照片。'],
    ['EditName','編輯姓名與字數','.mp-name-editor','owner-edit','直接呈現原本姓名，輸入時更新字數，保留 1–20 字限制。'],
    ['EditHeader','整頁編輯操作列','.editor-header','owner-edit','顯示角色對應標題、取消與儲存操作。'],
    ['JobExperience','工作經驗編輯','#work_experiences','owner-edit','可新增、刪除、調整經歷順序及指定主要職稱。','JobExperienceSection'],
    ['Education','教育經歷編輯','#educations','owner-edit','保留學校、科系、年份及筆序；導師必填，學員選填。','EducationSection'],
    ['LinksEditor','七平台連結欄位','#group-links','owner-edit','依平台驗證網址，支援 GitHub 和個人網站。','LinksSection']
  ]);
  group('public-profile','830',mentor,[
    ['ProfileIndustries','產業標籤','.mp-industry-tags','default','依填寫產業顯示標籤。'],
    ['ProfileExperience','閱讀版經歷列','.xt-experience-rows','default','工作與教育經歷共用日期、標題及描述的排列。'],
    ['MentorSummary','導師摘要列','.mp-summary','default','並列評分、完成場次、經驗與地點。','MentorSummaryBar'],
    ['LevelBadge','導師等級徽章','.xl-badge,.xl-pill','default','L1 至 L5 各具對應標記，可搭配等級說明。'],
    ['MentorHeader','身分導覽與帳號選單','header.identity-header','default','依身分與裝置寬度顯示導覽、未讀通知、帳號及身分切換。']
  ]);
  group('mentor-bookings','842',mentor,[
    ['ReservationDetails','預約卡明細','.xc-booking-plan-line','bookings-upcoming','呈現方案、款項與自訂問卷答案；取消或婉拒原因只提供給填寫者。'],
    ['BookingContact','預約卡聯絡入口','.contact-booking','bookings-upcoming','由預約卡開啟與該對象的聊聊，包含首次聯絡。'],
    ['BookingHistoryStatus','歷史紀錄狀態','.status-badge','bookings-history','終止或異常狀態顯示在卡片右上，會談操作位於右下。']
  ]);
  group('mentor-plans','837',mentor,[
    ['PlanPreview','方案編輯即時摘要','.xm-plan-summary','plan-paid','依目前輸入呈現方案名稱、時長、價格等資料。'],
    ['ScheduleLegend','預約時段圖例','.xm-availability-legend','plan-schedule','已預約時段以斜線標示，調整開放時段只影響新預約。'],
    ['QuestionType','問卷回答類型','.fr-questionnaire-trigger','plan-paid','方案編輯時可選擇文字、單選或連結題。']
  ]);
  group('team-support','829',mentor,[
    ['ContributionSummary','捐贈與贊助明細','.p2-contribution-summary','support-checkout','列出此筆收款對象與金額。'],
    ['SupportMessage','支持留言與字數','.p2-message-field','support','留言選填，最多 500 字。'],
    ['SupportAmountDialog','支持捐贈視窗','.p2-support-dialog','support','可選擇捐贈金額或自行輸入，再前往收據與付款步驟。']
  ]);
  group('mentor-search','839',mentor,[
    ['PoolSearch','導師關鍵字搜尋','.p2-search-bar','mentor-search','搜尋職位、公司或領域，送出後更新導師清單。'],
    ['PoolPopularJobs','熱門職位快捷篩選','.p2-popular','mentor-search','點職位更新關鍵字與符合條件的導師。'],
    ['PoolFilters','導師技能、主題及產業篩選','.p2-filter-dialog','mentor-search-filters','技能、主題可複選，產業單選；套用後回到導師列表。'],
    ['PoolCard','搜尋結果導師卡','.p2-mentor-card','mentor-search','顯示職稱、公司、擅長方向與收藏狀態，可開啟同一位導師的公開頁。'],
    ['PoolEmpty','導師搜尋無符合結果','.p2-empty','mentor-search-empty','保留搜尋條件，提供清除篩選的入口。']
  ]);
  group('mentor-components','830',mentor,[
    ['AvatarPolicy','導師／學員頭像對照','.avatar-policy','components','切換身分後實際操作預設圖與真人照片限制。'],
    ['GalleryQuestionType','回答類型互動範例','.fr-questionnaire-demo','components','選擇回答類型後即時顯示當前選項。']
  ]);
  group('mentor-audit','830',mentor,[
    ['MentorAudit','PRD 對照與情境入口','.fr-audit','audit','依需求查看核對紀錄，由 ticket 與情境連結前往驗收。']
  ]);
  group('mentor-form','830',mentor,[
    ['LeaveEditorDialog','離開編輯確認','[role=dialog]:has(button[class*=destructive])','leave','有未儲存資料時可繼續編輯，或捨棄本次變更離開。'],
    ['InlineValidation','表單錯誤提示','.xt-inline-error,[aria-invalid=true]','required-error','儲存前定位未通過驗證的欄位；保留已輸入資料。']
  ]);
  group('mentor-bookings','842',mentor,[
    ['BookingTabs','預約紀錄分頁','.booking-tabs','bookings-upcoming','依角色切換即將到來、待回覆與歷史紀錄。'],
    ['BookingReasonInput','取消與婉拒原因輸入','.fr-booking-dialog textarea.form-textarea','bookings-pending','取消或婉拒時必須填寫原因，送出後在本人歷史卡查看。'],
    ['BookingRefund','取消付費預約退款說明','.xc-booking-refund','bookings-upcoming','依取消角色及與會談的時間距離顯示退款結果。']
  ]);
  group('feedback-tip','834',mentor,[
    ['AutoCancelNotice','預約自動取消提醒','.booking-auto-notice','mentee-auto-cancelled','未獲回覆而自動取消的場次不開放評價。'],
    ['RatingPrivacy','評價姓名遮罩提示','.privacy-info','tip-feedback','評分步驟的說明可透過鍵盤取得，提示公開評價會遮罩姓名。'],
    ['ReviewedBadge','已評價與已贊助標示','.p2-reviewed,.p2-tipped','tip-success','學員歷史卡分別標示回饋與贊助完成狀態。']
  ]);
  group('mentor-welcome','830',mentor,[
    ['BookingSetupAction','開放可預約時段入口','.xt-activation-task--standalone','welcome','由導師建立完成頁前往設定時段，也可從頁尾先返回本人頁。']
  ]);
  // Shared controls and illustrations from the mentor component manifest.
  for(const [screenId,ticket,scene] of [['mentor-growth','746','growth-l2'],['mentor-income','843','income']]){
    group(screenId,ticket,mentor,[
      ['DashboardStats','統計數字與單位','.xm-dashboard-stats',scene,'同列顯示指標、數值與單位，支援具備明細入口的指標。'],
      ['DashboardMetricArt','統計指標插圖','.xm-dashboard-metric-art',scene,'圖示與色階隨場次、學員、時數或收入類型切換。'],
      ['PeriodControl','圖表期間切換','.xm-period-control',scene,'切換期間後，同步更新統計數值與時間軸。'],
      ['PeriodBars','正負值長條與資料提示','.xm-period-chart',scene,'每一欄對應一個期間，可查看單點數值與負值。']
    ]);
  }
  group('mentor-income','843',mentor,[
    ['RevenueOverview','收入總覽版面','.xm-revenue-dashboard','income','整合期間收入、可提領額、最近交易與收款帳戶。']
  ]);
  group('mentor-plans','837',mentor,[
    ['MentorSelect','方案與時段選項','[role=combobox].xm-field-control','plan-new','使用相同選擇器設定方案及開放時段。'],
    ['MentorDatePicker','指定日期選擇器','.xm-date-trigger,.xm-date-popover','plan-schedule','進入指定日期調整後，按日期開啟月曆。'],
    ['SharedAvailabilityEditor','可預約時段編輯器','.xm-availability','plan-schedule','集中設定每週固定時段與特定日期例外。']
  ]);
  for(const id of ['role-switch','mentee-growth','milestones','chat','public-profile','mentor-search','favorites']){
    if(!get(id).components.includes('header'))get(id).components.push('header');
  }
  function usedOn(screenId,scene,ids) {
    const screen=get(screenId);
    for(const id of ids.split(' ')){
      const component=D.components.find(c=>c.id===id);
      component.examples ||= {};
      component.examples[screenId]=scene;
      if(!screen.components.includes(id))screen.components.push(id);
    }
  }
  usedOn('role-switch','role-shared','mentor-header');
  usedOn('team-support','support-checkout','payment-fields rule-hint commerce-art');
  usedOn('feedback-tip','tip-checkout','payment-fields contribution-summary rule-hint commerce-art');
  usedOn('mentor-income','income','rule-hint commerce-art');
  usedOn('public-profile','booking-paid','status-pill');
  usedOn('mentee-profile','default','profile-industries profile-experience');
  usedOn('mentee-edit','default','edit-header edit-name editable-avatar job-experience education links-editor');
  usedOn('mentor-calendar','owner','profile-industries profile-experience mentor-summary level-badge');
  usedOn('mentor-form','fresh','mentor-header');
  usedOn('mentor-welcome','welcome','mentor-header');
  usedOn('mentor-bookings','bookings-upcoming','status-pill');
  usedOn('feedback-tip','mentee-history','booking-contact reservation-details booking-tabs');
  usedOn('mentee-edit','default','leave-editor-dialog inline-validation');
  usedOn('mentor-search','default','level-badge mentor-header favorites-header favorite-card favorite-toggle');
  usedOn('mentor-search','menu','account-menu identity-switch');
  usedOn('mentor-search','favorite-login','favorite-login');
  usedOn('favorites','default','level-badge pool-card favorite-card favorite-toggle favorites-header');
  usedOn('favorites','empty-favorites','favorites-empty');
  usedOn('mentor-audit','audit','mentor-header');
  // The shared account header is also available from ordinary product routes.
  // Pick a signed-in example for screens that include guest or modal fixtures.
  const accountExamples={
    home:'mentee-cta',about:'member-mentee',privacy:'member-mentee',terms:'member-mentee',history:'default','login-feedback':'empty','mentor-form':'owner-edit',
    'mentor-welcome':'welcome','mentor-search':'menu','public-profile':'public',
    'mentor-calendar':'owner','mentee-profile':'default','mentee-edit':'default','mentee-card':'default',
    'mentor-reservations':'default','mentee-reservations':'default',favorites:'default',chat:'list',
    'mentor-growth':'growth-l2','mentor-bookings':'bookings-upcoming','mentor-plans':'plans-filled',
    'mentor-income':'income','booking-payment':'checkout','team-support':'support','feedback-tip':'mentee-history',
    'mentor-audit':'audit','role-switch':'role-shared','mentee-growth':'growth',
    milestones:'growth','growth-report':'report-owner'
  };
  for(const [id,example] of Object.entries(accountExamples)) {
    const screen=get(id);
    if(!screen.tickets.includes('890'))screen.tickets.push('890');
    usedOn(id,example,'mentor-header identity-trigger identity-switch');
  }
  const authScreens={
    signin:['SignInForm','登入表單','form'], signup:['SignUpForm','註冊與條款同意','form'],
    verify:['EmailVerificationPage','驗證信箱','main'],verified:['EmailVerifiedPresentation','信箱驗證結果','main'],
    forgot:['AuthFormInput','重設密碼信箱','form'], 'forgot-sent':['AuthMessageCard','重設信寄送結果','main'],
    reset:['AuthCard','設定新密碼','form'],'reset-done':['AuthMessageCard','密碼重設結果','main'],
    'mentee-card':['ProfileCardUI','學員完成卡','main']
  };
  for (const [screenId,[story,label,selector]] of Object.entries(authScreens)) {
    const id='frontend-'+screenId, page=get(screenId);
    D.components.push({id,name:story,label,selector,story,kind:'業務元件',screens:[screenId],
      sourceUrl:page.source,rules:[page.scenarios.map(s=>s[1]).join('、')],changes:[],mapping:'原前端交付畫面'});
    page.components.push(id);
  }
  const direct = {
    header:'header',button:'main button,footer button',avatar:'.mp-avatar img,.avatar,.fr-portrait img',
    feedback:'.xt730-dialog,.xt-card,.feedback-dialog,.fr-booking-dialog:has(.feedback-step)',rating:'.xt730-stars,.xt-stars,.rating-stars',
    reservation:'.xt730-history-item,.booking-card',input:'main input:not([type=hidden])',textarea:'main textarea',
    hero:'.hp-hero',quote:'.hp-quotes',chip:'.xt-compact-chip',member:'.xt-member-card',booking:'.xt-welcome-next',
    profile:'.xt-profile-block,.editor-section','chat-files':'.sent-file','chat-composer':'.composer-area','chat-list':'.conversation-list','chat-thread':'.chat-room',
    'mentor-filter':'.p2-filter-dialog,.f753-filter,[aria-label*="篩選"]','booking-form':'.xc-booking-dialog,.reservation-form',
    'favorites-header':'[data-hub-component="favorites-header"],header.identity-header',
    'favorite-toggle':'[data-hub-component="favorite-toggle"],.mp-actions button[aria-pressed],.p2-card-save',
    'favorite-login':'[data-hub-component="favorite-login"],[role="dialog"]:has(.f753-primary)',
    'favorite-card':'[data-hub-component="favorite-card"],.p2-mentor-card',
    'favorites-empty':'[data-hub-component="favorites-empty"]',
    'account-menu':'[data-hub-component="account-menu"],.identity-menu',
    'notification-bell':'[aria-label="通知"],[aria-label="開啟通知選單"]'
  };
  for(const c of D.components) if(direct[c.id])c.selector=direct[c.id];
  const directoryContracts={
    'favorites-header':{ticket:'890',scene:'mentor-search',rules:['訪客顯示登入與註冊。會員顯示聊聊、通知及帳號選單。','寬度不足時，次要導覽收進選單。']},
    'account-menu':{ticket:'890',scene:'role-shared',rules:['帳號選單底部分隔線下方顯示目前身分與切換操作。','共用頁可原地切換，選單持續顯示。我的收藏顯示筆數並連至收藏清單。']},
    'mentor-filter':{ticket:'839',scene:'mentor-search-filters',rules:['技能與主題可複選，產業單選。套用後顯示符合任一選取條件的導師。','可單獨移除已套用條件，或清除全部。']}
  };
  for(const [id,details] of Object.entries(directoryContracts)){
    const c=D.components.find(c=>c.id===id);
    c.rules=details.rules;
    c.sourceUrl=mentor+'?scene='+details.scene;
    c.mapping='導師中心 v72 · #'+details.ticket+'，Storybook 提供相關基礎元件對照。';
    c.changes.push({ticket:details.ticket,date:'2026-11-23',text:details.rules[0]});
  }
  const review=D.components.find(c=>c.id==='mentor-reviews');
  review.rules=['簡介與「評價 N」共用底線分頁；無評價仍顯示 0。摘要顯示平均分數與滿分 10 分。',
    '每筆顯示預設頭像、遮罩姓名、分數與日期；保留評語換行。',
    '預設最多三行。超過三行才有「查看更多」，展開後可按「收合」，換頁後回到收合狀態。',
    '每頁 10 則；超過 10 則時提供分頁器與「第 X–Y 則，共 N 則」。無評價時顯示「目前還沒有評價」。'];
  review.mapping='導師中心 v72 · MentorReadView';
  get('maintenance').components.unshift('header');
  const storyNames = {hero:'HomePageHero',quote:'HomePageSlider',member:'MentorWelcomeFlipCard',rating:'FeedbackStarRating',
    feedback:'MeetingFeedbackDialog',queue:'MeetingFeedbackDialog',chip:'CompactCategoryPicker','mentor-filter':'MentorFilterDropdown',
    'notification-bell':'NotificationBell','favorite-toggle':'MentorBookmarkButton','account-menu':'UserDropdown',
    'mentor-reviews':'MentorFeedbackSection','favorite-card':'MentorCard'};
  D.components.find(c=>c.id==='dual-track-section').sourceUrl=growth+'?scene=landing';
  const hints={
    'mentor-date-picker':'展開可預約時段，切到「特定日期調整」後點選日期。',
    'availability-overrides':'展開可預約時段後切到「特定日期調整」。',
    'bank-required':'在尚未設定收款的收費方案中嘗試上架，即可查看設定入口。',
    'feedback-tip-fields':'在免費場次按下一步，即可查看贊助金額與感謝訊息。',
    'money-breakdown':'在交易明細點選一筆交易，即可查看金額拆解。',
    'identity-switch':'點頁首頭像展開帳號選單，即可查看切換滑桿。',
    'editor-save-bar':'向下捲動表單，離開頂部操作列後即可查看浮動儲存列。',
    'contribution-amount':'免費場次請前往回饋的下一步，即可查看贊助金額。',
    'message-actions':'展開失敗訊息旁的選單，即可查看重試操作。'
  };
  for(const c of D.components) if(hints[c.id]) c.hint=hints[c.id];
  // Canonical stable IDs, exports, source files, tickets and acceptance scenes from
  // xtalent-mentor-742/app/mentor-component-registry.ts at dbc28b1 (v72).
  const mentorManifest = [
    ['mentor-select', 'mentor-select', 'MentorSelect', 'MentorFields.tsx', [837], ['plan-new','plans-filled','components']],
    ['mentor-date-picker', 'mentor-date-picker', 'MentorDatePicker', 'MentorFields.tsx', [837], ['plans-filled','components']],
    ['dashboard-metric-art', 'dashboard-metric-art', 'DashboardMetricArt', 'DashboardMetricArt.tsx', [746,843], ['growth-l2','income','components']],
    ['income-metric-art', 'income-metric-art', 'IncomeMetricArt', 'IncomeMetricArt.tsx', [843], ['income','income-empty','components']],
    ['dashboard-stats', 'dashboard-stats', 'DashboardStats', 'DashboardUI.tsx', [746,843], ['growth-l2','income','components']],
    ['period-control', 'dashboard-period-control', 'PeriodControl', 'DashboardUI.tsx', [746,843], ['growth-l2','income','components']],
    ['period-bars', 'dashboard-period-bars', 'PeriodBars', 'DashboardUI.tsx', [746,843], ['growth-l2','income','components']],
    ['revenue-overview', 'revenue-overview', 'RevenueOverview', 'RevenueOverview.tsx', [843], ['income','income-empty','income-above-ceiling']],
    ['service-stats', 'mentor-service-stats', 'MentorServiceStats', 'GrowthComponents.tsx', [746], ['growth-empty','growth-l2']],
    ['growth-activity', 'mentor-activity-chart', 'MentorActivityChart', 'GrowthActivity.tsx', [746], ['growth-empty','growth-l2','growth-refund','components']],
    ['level-progress', 'mentor-level-progress', 'MentorLevelProgress', 'GrowthComponents.tsx', [746], ['growth-l1','growth-l2','growth-l5','growth-refund','growth-boundary','growth-promoted']],
    ['level-roadmap', 'mentor-level-milestones', 'LevelMilestones', 'GrowthComponents.tsx', [746], ['growth-l2','growth-l5']],
    ['shared-availability-editor', 'shared-availability', 'SharedAvailabilityEditor', 'SharedAvailability.tsx', [837], ['plans-filled','plans-empty','plans-migrated','components']],
    ['plan-schedule', 'plan-schedule-choice', 'PlanScheduleChoice', 'PlanSchedule.tsx', [837], ['plan-new','plan-edit','plan-custom']],
    ['threshold-card', 'payout-threshold', 'ThresholdCard', 'CommerceUI.tsx', [843], ['income-empty','income-below-threshold','income','income-above-ceiling']],
    ['revenue-trend', 'income-chart', 'IncomeChart', 'IncomeVisuals.tsx', [843], ['income','income-empty']],
    ['revenue-metrics', 'income-summary', 'IncomeSummary', 'RevenueOverview.tsx', [843], ['income','income-empty','components']],
    ['transaction-list', 'income-transaction-list', 'TransactionList', 'Income.tsx', [843], ['income','income-transactions','income-transactions-empty']],
    ['bank-account-row', 'bank-account-row', 'BankAccountRow', 'CommerceUI.tsx', [843], ['income','income-settings','components']],
    ['order-summary', 'order-summary', 'OrderSummary', 'CommerceUI.tsx', [840], ['checkout','booking-success','components']],
    ['money-breakdown', 'money-breakdown', 'MoneyBreakdown', 'CommerceUI.tsx', [843], ['income-transactions','components']],
    ['expandable-review', 'expandable-review', 'ExpandableReview', 'ExpandableReview.tsx', [736], ['owner-reviews','owner-reviews-expanded']],
    ['mentor-header', 'mentor-header', 'MentorHeader', 'MentorHeader.tsx', [830], ['fresh','owner-filled','public-mentor']]
  ];
  for(const [hubId,id,name,source,tickets,scenes] of mentorManifest) {
    const c=D.components.find(item=>item.id===hubId);
    c.sourceComponent={id,export:name,source,tickets,scenes};
    c.sourceFile=source;
    c.name=name;
    for(const ticket of tickets){
      if(!c.changes.some(change=>String(change.ticket)===String(ticket)))
        c.changes.push({ticket:String(ticket),date:'2026-11-23',text:'導師站 v72 元件清單及適用情境。'});
    }
  }
  const files={
    'CommerceDetails.tsx':'rule-hint commerce-art',
    'CommerceUI.tsx':'hold-countdown calendar-slots questionnaire-fields booking-plan-card plan-availability question-select threshold-marker status-pill ledger-empty',
    'ActivationChecklist.tsx':'booking-setup-action','BookingFlow.tsx':'booking-selection','BookingRoleNotice.tsx':'role-booking-notice','BookingOutcome.tsx':'booking-outcome processing-indicator',
    'Checkout.tsx':'payment-result payment-rules payment-consent','PaymentFields.tsx':'payment-method receipt-email payment-fields',
    'Bookings.tsx':'booking-actions feedback-edit booking-contact booking-history-status booking-tabs booking-reason-input booking-refund auto-cancel-notice rating-privacy reviewed-badge','ReservationDetails.tsx':'reservation-details reservation-plan reservation-answers private-reason',
    'SharedAvailability.tsx':'availability-grid availability-overrides schedule-legend','Plans.tsx':'plan-list-row plan-editor plan-questions bank-required plan-preview',
    'Growth.tsx':'hours-ledger level-rules growth-loading growth-error hours-adjustment','Income.tsx':'transaction-detail payout-record bank-verification account-status',
    'IncomeVisuals.tsx':'revenue-sources','RevenueOverview.tsx':'recent-transactions',
    'Contributions.tsx':'contribution-amount contribution-checkout contribution-failure contribution-thanks contribution-summary support-amount-dialog support-message feedback-tip-fields',
    'ProfileDirectionTabs.tsx':'direction-tabs','MenteeReadView.tsx':'watched-positions','SocialLinks.tsx':'social-links',
    'MentorProfile.tsx':'editor-nav editor-save-bar edit-header edit-name mentor-guidelines job-experience education links-editor inline-validation',
    'CompactCategoryField.tsx':'compact-picker','AvatarPolicy.tsx':'avatar-chooser avatar-policy','EditableProfileImages.tsx':'editable-avatar',
    'MentorReadView.tsx':'mentee-summary mentor-summary profile-industries','ProfileSections.tsx':'profile-empty profile-experience',
    'LevelVisual.tsx':'level-badge level-popover','MentorHeader.tsx':'identity-switch identity-trigger identity-banner',
    'App.tsx':'identity-confirmation mentor-audit leave-editor-dialog','QuestionnaireSelect.tsx':'gallery-question-type question-type',
    'MentorSearch.tsx':'mentor-recommendations pool-search pool-filters pool-card pool-popular-jobs pool-empty',
    'src/components/profile/edit/ReorderControl.tsx':'experience-rows'
  };
  for(const [file,ids] of Object.entries(files))
    for(const id of ids.split(' ')) D.components.find(c=>c.id===id).sourceFile=file;
  for(const c of D.components.filter(item=>item.sourceFile)){
    c.mapping='導師站 v72 · app/'+c.sourceFile+(c.sourceComponent?' · '+c.sourceComponent.export:'');
  }
  // A design composed of Storybook controls is still a Hub design unless its own case exists.
  const relatedStories={
    'direction-tabs':'MenteeDirectionPreferenceSection','pool-card':'MentorCard','pool-search':'MentorPoolSearchBar',
    'pool-popular-jobs':'PopularPositionChips','pool-filters':'MentorFilterDropdown','mentor-header':'Header',
    'identity-switch':'UserDropdown','edit-header':'EditPageHeader','editable-avatar':'AvatarUpload',
    'rule-hint':'Popover','period-control':'Tabs','calendar-slots':'Calendar','profile-experience':'ExperienceSection'
  };
  const canonical = window.HUB_STORY_REFERENCES;
  for(const [id,name] of Object.entries(relatedStories)){
    if(!canonical[name]) continue;
    const c=D.components.find(item=>item.id===id);
    M.newDesigns[id] ||= {level:c.kind,scope:c.rules[0],reuse:[]};
    M.newDesigns[id].reuse.push({name,url:D.storybook+'?path=/story/'+encodeURIComponent(canonical[name])});
  }
  for(const c of D.components) {
    c.screens=D.screens.filter(s=>s.components.includes(c.id)).map(s=>s.id);
    const story=c.story||storyNames[c.id]||M.existing[c.id]?.name;
    if(story && canonical[story]) {
      M.existing[c.id]={name:story,url:D.storybook+'?path=/story/'+encodeURIComponent(canonical[story])};
    } else if(!M.existing[c.id]&&!M.newDesigns[c.id]) {
      M.newDesigns[c.id]={level:c.kind,scope:c.rules[0],reuse:[]};
    }
  }
})();
