/**
 * Central GA4 event helpers. Events are no-ops when gtag is unavailable or not in production.
 */

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-DM5TQSNWPT';

const isAnalyticsEnabled = (): boolean =>
  Boolean(GA_MEASUREMENT_ID) &&
  GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' &&
  typeof window !== 'undefined' &&
  typeof window.gtag === 'function';

const isAnalyticsDebug = (): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const flag = new URLSearchParams(window.location.search).get('analytics_debug');
    return flag === '1' || flag === 'true' || window.localStorage.getItem('analyticsDebug') === 'true';
  } catch {
    return false;
  }
};

export const analyticsButtons = {
  introSession: {
    id: 'intro-session',
    name: 'Introduction session',
    destination: '/consultation/introductory-session',
  },
  projects: { id: 'projects', name: 'Projects', destination: '/portfolio' },
  contact: { id: 'contact', name: 'Get in Touch', destination: '/contact' },
  introSessionWhatsApp: { id: 'intro-session-whatsapp', name: 'Request a session' },
  contactForm: { id: 'contact-form', name: 'Contact form', destination: '/contact' },
  newsletterSignup: { id: 'newsletter-signup', name: 'Newsletter signup' },
  shareYourHomeForm: {
    id: 'share-your-home-form',
    name: 'Share your home form',
    destination: '/share-your-home',
  },
  navHome: { id: 'nav-home', name: 'Home', destination: '/' },
  navConsultation: { id: 'nav-consultation', name: 'Consultation', destination: '/consultation' },
  navProjects: { id: 'nav-projects', name: 'Projects', destination: '/portfolio' },
  navContact: { id: 'nav-contact', name: 'Contact', destination: '/contact' },
  navPortfolioAll: { id: 'nav-portfolio-all', name: 'All Projects', destination: '/portfolio' },
  navPortfolioCommercial: {
    id: 'nav-portfolio-commercial',
    name: 'Commercial',
    destination: '/portfolio?filter=commercial',
  },
  navPortfolioResidential: {
    id: 'nav-portfolio-residential',
    name: 'Residential',
    destination: '/portfolio?filter=residential',
  },
  navPortfolioPublic: {
    id: 'nav-portfolio-public',
    name: 'Public',
    destination: '/portfolio?filter=public',
  },
  navBackProjects: { id: 'nav-back-projects', name: 'Back to Projects', destination: '/portfolio' },
  socialInstagram: {
    id: 'instagram',
    name: 'Instagram',
    destination: 'https://www.instagram.com/spice_interior/',
  },
  socialTiktok: {
    id: 'tiktok',
    name: 'TikTok',
    destination: 'https://www.tiktok.com/@spice_interiors',
  },
} as const;

export const getPagePath = (): string =>
  typeof window !== 'undefined'
    ? window.location.pathname + window.location.search
    : '';

const sendEvent = (eventName: string, params: Record<string, string | number | boolean> = {}) => {
  const payload = {
    page_path: getPagePath(),
    page_location: typeof window !== 'undefined' ? window.location.href : '',
    page_title: typeof document !== 'undefined' ? document.title : '',
    ...params,
  };
  const enabled = isAnalyticsEnabled();
  if (isAnalyticsDebug()) {
    console.info(`[analytics:${enabled ? 'sent' : 'skipped'}] ${eventName}`, payload);
  }
  if (!enabled) return;
  window.gtag('event', eventName, payload);
};

export const trackPageView = ({
  path = getPagePath(),
  title = typeof document !== 'undefined' ? document.title : '',
  location = typeof window !== 'undefined' ? window.location.href : '',
}: {
  path?: string;
  title?: string;
  location?: string;
} = {}) => {
  sendEvent('page_view', {
    page_path: path,
    page_title: title,
    page_location: location,
  });
};

export const trackCtaClick = ({
  buttonId,
  name,
  section,
  destinationUrl,
}: {
  buttonId: string;
  name: string;
  section: string;
  destinationUrl?: string;
}) => {
  sendEvent('cta_click', {
    button_id: buttonId,
    button_name: name,
    cta_name: name,
    section,
    ...(destinationUrl ? { destination_url: destinationUrl } : {}),
  });
};

export type NavLocation = 'header' | 'mobile' | 'footer' | 'dropdown';

export const trackNavigation = ({
  buttonId,
  label,
  destination,
  location,
}: {
  buttonId: string;
  label: string;
  destination: string;
  location: NavLocation;
}) => {
  sendEvent('navigation_click', {
    button_id: buttonId,
    button_name: label,
    link_label: label,
    link_destination: destination,
    nav_location: location,
    destination_url: destination,
  });
};

export const trackPortfolioClick = ({
  slug,
  title,
}: {
  slug: string;
  title: string;
}) => {
  sendEvent('portfolio_project_click', {
    button_id: slug,
    button_name: title,
    project_slug: slug,
    project_title: title,
    destination_url: `/portfolio/${slug}`,
  });
};

export const trackScrollDepth = ({
  percent,
  pagePath = getPagePath(),
}: {
  percent: number;
  pagePath?: string;
}) => {
  sendEvent('scroll_depth', {
    percent,
    page_path: pagePath,
  });
};

export const trackFormStart = ({
  formName,
  buttonId,
  buttonName,
}: {
  formName: string;
  buttonId?: string;
  buttonName?: string;
}) => {
  sendEvent('form_start', {
    form_name: formName,
    ...(buttonId ? { button_id: buttonId } : {}),
    ...(buttonName ? { button_name: buttonName } : {}),
  });
};

export const trackFormSubmit = ({
  formName,
  success = true,
  buttonId,
  buttonName,
  destinationUrl,
}: {
  formName: string;
  success?: boolean;
  buttonId?: string;
  buttonName?: string;
  destinationUrl?: string;
}) => {
  sendEvent('form_submit', {
    form_name: formName,
    success,
    ...(buttonId ? { button_id: buttonId } : {}),
    ...(buttonName ? { button_name: buttonName } : {}),
    ...(destinationUrl ? { destination_url: destinationUrl } : {}),
  });
};

export const trackIntroSessionWhatsAppClick = (section: string, destinationUrl: string) => {
  sendEvent('intro_session_whatsapp_click', {
    button_id: analyticsButtons.introSessionWhatsApp.id,
    button_name: analyticsButtons.introSessionWhatsApp.name,
    section,
    destination_url: destinationUrl,
  });
};

export const trackLinktreeButtonClick = ({
  buttonId,
  buttonName,
  destinationUrl,
}: {
  buttonId: string;
  buttonName: string;
  destinationUrl: string;
}) => {
  sendEvent('linktree_button_click', {
    button_id: buttonId,
    button_name: buttonName,
    destination_url: destinationUrl,
  });
};

export const trackLinkInterestClick = ({
  topicId,
  topicLabel,
  destination,
}: {
  topicId: string;
  topicLabel: string;
  destination: string;
}) => {
  sendEvent('link_interest_click', {
    button_id: topicId,
    button_name: topicLabel,
    topic_id: topicId,
    topic_label: topicLabel,
    destination_url: destination,
  });
};

export const trackComingSoonView = ({
  topicId,
  topicLabel,
}: {
  topicId: string;
  topicLabel: string;
}) => {
  sendEvent('coming_soon_view', {
    button_id: topicId,
    button_name: topicLabel,
    topic_id: topicId,
    topic_label: topicLabel,
  });
};

export const trackLinkEmailSignup = ({
  topicId,
  topicLabel,
  source,
  destination,
}: {
  topicId: string;
  topicLabel: string;
  source: string;
  destination: string;
}) => {
  sendEvent('link_email_signup', {
    button_id: topicId,
    button_name: topicLabel,
    topic_id: topicId,
    topic_label: topicLabel,
    email_source: source,
    destination_url: destination,
  });
};

export const trackNewsletterSignup = ({
  placement,
  buttonId = analyticsButtons.newsletterSignup.id,
  buttonName = analyticsButtons.newsletterSignup.name,
}: {
  placement: string;
  buttonId?: string;
  buttonName?: string;
}) => {
  sendEvent('newsletter_signup', {
    button_id: buttonId,
    button_name: buttonName,
    placement,
  });
};

export const trackNewsletterClick = ({
  campaign,
  linkContent,
  destinationUrl,
}: {
  campaign: string;
  linkContent: string;
  destinationUrl: string;
}) => {
  sendEvent('newsletter_click', {
    campaign,
    link_content: linkContent,
    destination_url: destinationUrl,
  });
};

/** @deprecated Use trackNewsletterSignup or specific helpers */
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!isAnalyticsEnabled()) return;
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    page_path: getPagePath(),
  });
};

export const trackPurchase = (
  transactionId: string,
  value: number,
  currency: string = 'EUR'
) => {
  if (!isAnalyticsEnabled()) return;
  window.gtag('event', 'purchase', {
    transaction_id: transactionId,
    value,
    currency,
  });
};

export const trackItemView = (
  itemId: string,
  itemName: string,
  category: string,
  price: string
) => {
  if (!isAnalyticsEnabled()) return;
  window.gtag('event', 'view_item', {
    currency: 'EUR',
    value: parseFloat(price.replace('€', '')),
    items: [
      {
        item_id: itemId,
        item_name: itemName,
        item_category: category,
        price: parseFloat(price.replace('€', '')),
      },
    ],
  });
};
