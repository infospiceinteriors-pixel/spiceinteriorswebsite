/**
 * Central GA4 event helpers. Events are no-ops when gtag is unavailable or not in production.
 */

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-DM5TQSNWPT';

const isAnalyticsEnabled = (): boolean =>
  import.meta.env.PROD &&
  Boolean(GA_MEASUREMENT_ID) &&
  GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX' &&
  typeof window !== 'undefined' &&
  typeof window.gtag === 'function';

export const getPagePath = (): string =>
  typeof window !== 'undefined'
    ? window.location.pathname + window.location.search
    : '';

const sendEvent = (eventName: string, params: Record<string, string | number | boolean>) => {
  if (!isAnalyticsEnabled()) return;
  window.gtag('event', eventName, {
    page_path: getPagePath(),
    page_location: window.location.href,
    page_title: document.title,
    ...params,
  });
};

export const trackCtaClick = ({
  name,
  section,
}: {
  name: string;
  section: string;
}) => {
  sendEvent('cta_click', {
    cta_name: name,
    section,
  });
};

export type NavLocation = 'header' | 'mobile' | 'footer' | 'dropdown';

export const trackNavigation = ({
  label,
  destination,
  location,
}: {
  label: string;
  destination: string;
  location: NavLocation;
}) => {
  sendEvent('navigation_click', {
    link_label: label,
    link_destination: destination,
    nav_location: location,
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
    project_slug: slug,
    project_title: title,
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

export const trackFormStart = ({ formName }: { formName: string }) => {
  sendEvent('form_start', { form_name: formName });
};

export const trackFormSubmit = ({
  formName,
  success = true,
}: {
  formName: string;
  success?: boolean;
}) => {
  sendEvent('form_submit', {
    form_name: formName,
    success,
  });
};

export const trackIntroSessionWhatsAppClick = (section: string) => {
  sendEvent('intro_session_whatsapp_click', { section });
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

export const trackNewsletterSignup = (placement: string) => {
  sendEvent('newsletter_signup', {
    placement,
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
