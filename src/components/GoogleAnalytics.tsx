import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { GA_MEASUREMENT_ID, trackPageView } from '../utils/analytics';
import { applyPageSeo, resolvePageSeo } from '../utils/pageSeo';

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

const GoogleAnalytics = () => {
  const location = useLocation();
  const initializedRef = useRef(false);
  const seo = resolvePageSeo(location.pathname);
  applyPageSeo(seo);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
      console.warn('Google Analytics Measurement ID not configured');
      return;
    }
    if (initializedRef.current) return;
    initializedRef.current = true;

    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        send_page_view: false,
      });
    `;
    document.head.appendChild(script2);

    return () => {
      if (document.head.contains(script1)) document.head.removeChild(script1);
      if (document.head.contains(script2)) document.head.removeChild(script2);
      initializedRef.current = false;
    };
  }, []);

  useEffect(() => {
    trackPageView({
      path: location.pathname + location.search,
      title: seo.title,
      location: window.location.href,
    });
  }, [location.pathname, location.search, seo.title]);

  return null;
};

export {
  trackEvent,
  trackPurchase,
  trackItemView,
} from '../utils/analytics';

export default GoogleAnalytics;
