import { HOME_SEO_TITLE } from './collectedHomeContent';
import { introSessionContent } from './introSessionContent';
import { findLinkTopic } from './linkPageContent';
import { getPortfolioProjectBySlug } from './portfolioProjects';

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  robots?: string;
  ogImage?: string;
};

const SITE_ORIGIN = 'https://spice-interiors.com';
const DEFAULT_OG_IMAGE = '/cafe-americano-ams-01.jpg';

const truncate = (value: string, max = 155) => {
  if (value.length <= max) return value;
  const clipped = value.slice(0, max - 1);
  const lastSpace = clipped.lastIndexOf(' ');
  return `${clipped.slice(0, lastSpace > 40 ? lastSpace : max - 1)}…`;
};

const staticPages: Record<string, PageSeo> = {
  '/': {
    title: HOME_SEO_TITLE,
    path: '/',
    description:
      'A hub for interior design inspiration — house tours from designers, owners, and artists, recommendations to get the look, and a weekly newsletter. Hire a designer when you are ready.',
  },
  '/consultation': {
    title: 'Consultation — Spice Interiors',
    path: '/consultation',
    description:
      'Meet the person behind Spice Interiors. When inspiration turns into a project — interior design for homes, offices, and hospitality in the Netherlands.',
  },
  '/consultation/introductory-session': {
    title: introSessionContent.seo.title,
    path: '/consultation/introductory-session',
    description: introSessionContent.seo.description,
  },
  '/portfolio': {
    title: 'Portfolio — Spice Interiors',
    path: '/portfolio',
    description:
      'Selected homes and commercial spaces — projects shaped with the same collected, characterful approach as the house tours.',
  },
  '/contact': {
    title: 'Contact — Spice Interiors',
    path: '/contact',
    description:
      'Get in touch with Spice Interiors — house tours, the newsletter, or design help for your space.',
  },
  '/link': {
    title: 'Spice Interiors — Links',
    path: '/link',
    ogImage: '/logo-2.png',
    description:
      'What brings you here? House tours, vintage guides, share your home, or hire Spice Interiors when you are ready for a project.',
  },
  '/share-your-home': {
    title: 'Share your home — Spice Interiors',
    path: '/share-your-home',
    ogImage: '/hero-image-3.jpg',
    description:
      "Share your home for a Collector's home tour — designers, owners, and artists welcome. We will get back to you within one business day.",
  },
  '/newsletter': {
    title: 'Newsletter — Spice Interiors',
    path: '/newsletter',
    description:
      "Subscribe to the Collector's home newsletter — weekly house tour updates, vintage market guides, and inspiration for a collected home beyond beige.",
  },
};

export const resolvePageSeo = (pathname: string): PageSeo => {
  const exact = staticPages[pathname];
  if (exact) return exact;

  if (pathname.startsWith('/portfolio/')) {
    const slug = decodeURIComponent(pathname.slice('/portfolio/'.length));
    const project = getPortfolioProjectBySlug(slug);
    if (!project) {
      return {
        title: 'Project not found — Spice Interiors',
        path: `/portfolio/${slug}`,
        description: 'This portfolio project could not be found.',
        robots: 'noindex, nofollow',
      };
    }
    return {
      title: `${project.title} — Spice Interiors`,
      path: `/portfolio/${slug}`,
      description: truncate(project.description),
      ogImage: project.images[0],
    };
  }

  if (pathname.startsWith('/coming-soon/')) {
    const topicId = decodeURIComponent(pathname.slice('/coming-soon/'.length));
    const topic = findLinkTopic(topicId);
    if (!topic?.comingSoon) {
      return {
        title: 'Coming soon — Spice Interiors',
        path: `/coming-soon/${topicId}`,
        description: 'Something new is on the way from Spice Interiors.',
        robots: 'noindex, nofollow',
      };
    }
    return {
      title: `${topic.comingSoon.title} — Coming soon · Spice Interiors`,
      path: `/coming-soon/${topic.id}`,
      description: topic.comingSoon.description,
      robots: 'noindex, nofollow',
    };
  }

  if (pathname.startsWith('/go/')) {
    return {
      title: 'Opening Instagram — Spice Interiors',
      path: pathname,
      description: 'Redirecting to the Spice Interiors Instagram post.',
      robots: 'noindex, nofollow',
    };
  }

  return staticPages['/'];
};

export const applyPageSeo = (seo: PageSeo) => {
  document.title = seo.title;
  const canonicalUrl = `${SITE_ORIGIN}${seo.path}`;
  const imageUrl = `${SITE_ORIGIN}${seo.ogImage ?? DEFAULT_OG_IMAGE}`;

  setMeta('meta[name="description"]', 'content', seo.description, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'description');
    return meta;
  });
  setMeta('meta[name="title"]', 'content', seo.title, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'title');
    return meta;
  });
  setMeta('meta[name="robots"]', 'content', seo.robots ?? 'index, follow', () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'robots');
    return meta;
  });
  setMeta('meta[property="og:title"]', 'content', seo.title, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:title');
    return meta;
  });
  setMeta('meta[property="og:description"]', 'content', seo.description, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:description');
    return meta;
  });
  setMeta('meta[property="og:url"]', 'content', canonicalUrl, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:url');
    return meta;
  });
  setMeta('meta[property="og:image"]', 'content', imageUrl, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:image');
    return meta;
  });
  setMeta('meta[name="twitter:title"]', 'content', seo.title, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:title');
    return meta;
  });
  setMeta('meta[name="twitter:description"]', 'content', seo.description, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:description');
    return meta;
  });
  setMeta('meta[name="twitter:url"]', 'content', canonicalUrl, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:url');
    return meta;
  });
  setMeta('meta[name="twitter:image"]', 'content', imageUrl, () => {
    const meta = document.createElement('meta');
    meta.setAttribute('name', 'twitter:image');
    return meta;
  });
  setMeta('link[rel="canonical"]', 'href', canonicalUrl, () => {
    const link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    return link;
  });
};

const setMeta = (selector: string, attr: string, value: string, create: () => HTMLElement) => {
  const existing = document.head.querySelector(selector);
  const element = existing instanceof HTMLElement ? existing : create();
  if (!existing) document.head.appendChild(element);
  element.setAttribute(attr, value);
};
