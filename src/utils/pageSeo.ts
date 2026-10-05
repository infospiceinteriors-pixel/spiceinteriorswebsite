import { HOME_SEO_TITLE } from './collectedHomeContent';
import { introSessionContent } from './introSessionContent';
import { findLinkTopic } from './linkPageContent';
import { getPortfolioProjectBySlug } from './portfolioProjects';

export type PageSeo = {
  title: string;
  description: string;
  robots?: string;
};

const truncate = (value: string, max = 155) => {
  if (value.length <= max) return value;
  const clipped = value.slice(0, max - 1);
  const lastSpace = clipped.lastIndexOf(' ');
  return `${clipped.slice(0, lastSpace > 40 ? lastSpace : max - 1)}…`;
};

const staticPages: Record<string, PageSeo> = {
  '/': {
    title: HOME_SEO_TITLE,
    description:
      'A hub for interior design inspiration — house tours from designers, owners, and artists, recommendations to get the look, and a weekly newsletter. Hire a designer when you are ready.',
  },
  '/consultation': {
    title: 'Consultation — Spice Interiors',
    description:
      'Meet the person behind Spice Interiors. When inspiration turns into a project — interior design for homes, offices, and hospitality in the Netherlands.',
  },
  '/consultation/introductory-session': {
    title: introSessionContent.seo.title,
    description: introSessionContent.seo.description,
  },
  '/portfolio': {
    title: 'Portfolio — Spice Interiors',
    description:
      'Selected homes and commercial spaces — projects shaped with the same collected, characterful approach as the house tours.',
  },
  '/contact': {
    title: 'Contact — Spice Interiors',
    description:
      'Get in touch with Spice Interiors — house tours, the newsletter, or design help for your space.',
  },
  '/link': {
    title: 'Spice Interiors — Links',
    description:
      'What brings you here? House tours, vintage guides, share your home, or hire Spice Interiors when you are ready for a project.',
  },
  '/share-your-home': {
    title: 'Share your home — Spice Interiors',
    description:
      "Share your home for a Collector's home tour — designers, owners, and artists welcome. We will get back to you within one business day.",
  },
  '/newsletter': {
    title: 'Newsletter — Spice Interiors',
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
        description: 'This portfolio project could not be found.',
        robots: 'noindex, nofollow',
      };
    }
    return {
      title: `${project.title} — Spice Interiors`,
      description: truncate(project.description),
    };
  }

  if (pathname.startsWith('/coming-soon/')) {
    const topicId = decodeURIComponent(pathname.slice('/coming-soon/'.length));
    const topic = findLinkTopic(topicId);
    if (!topic?.comingSoon) {
      return {
        title: 'Coming soon — Spice Interiors',
        description: 'Something new is on the way from Spice Interiors.',
        robots: 'noindex, nofollow',
      };
    }
    return {
      title: `${topic.comingSoon.title} — Coming soon · Spice Interiors`,
      description: topic.comingSoon.description,
      robots: 'noindex, nofollow',
    };
  }

  if (pathname.startsWith('/go/')) {
    return {
      title: 'Opening Instagram — Spice Interiors',
      description: 'Redirecting to the Spice Interiors Instagram post.',
      robots: 'noindex, nofollow',
    };
  }

  return staticPages['/'];
};

export const applyPageSeo = (seo: PageSeo) => {
  document.title = seo.title;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.setAttribute('content', seo.description);

  let robots = document.querySelector('meta[name="robots"]');
  if (!robots) {
    robots = document.createElement('meta');
    robots.setAttribute('name', 'robots');
    document.head.appendChild(robots);
  }
  robots.setAttribute('content', seo.robots ?? 'index, follow');
};
