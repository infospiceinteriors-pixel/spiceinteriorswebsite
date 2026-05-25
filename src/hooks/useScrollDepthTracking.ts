import { useEffect, useRef } from 'react';
import { trackScrollDepth } from '../utils/analytics';

const DEFAULT_MILESTONES = [25, 50, 75, 90] as const;

/**
 * Fires scroll_depth GA4 events once per milestone per mount (typically per page visit).
 */
export const useScrollDepthTracking = (
  pagePath: string,
  milestones: readonly number[] = DEFAULT_MILESTONES
) => {
  const firedRef = useRef<Set<number>>(new Set());

  useEffect(() => {
    firedRef.current = new Set();

    const handleScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      if (scrollHeight <= 0) return;

      const percent = Math.min(100, Math.round((scrollTop / scrollHeight) * 100));

      for (const milestone of milestones) {
        if (percent >= milestone && !firedRef.current.has(milestone)) {
          firedRef.current.add(milestone);
          trackScrollDepth({ percent: milestone, pagePath });
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pagePath, milestones]);
};
