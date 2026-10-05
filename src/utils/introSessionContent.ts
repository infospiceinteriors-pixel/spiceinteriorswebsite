export const INTRO_SESSION_WHATSAPP_NUMBER = '31683142404';

export const INTRO_SESSION_WHATSAPP_MESSAGE =
  "Hi Spice Interiors, I'd like to request an introductory session.";

export const getIntroSessionWhatsAppUrl = () =>
  `https://wa.me/${INTRO_SESSION_WHATSAPP_NUMBER}?text=${encodeURIComponent(INTRO_SESSION_WHATSAPP_MESSAGE)}`;

import { trackIntroSessionWhatsAppClick } from './analytics';

export const openIntroSessionWhatsApp = (section = 'unknown') => {
  const destinationUrl = getIntroSessionWhatsAppUrl();
  trackIntroSessionWhatsAppClick(section, destinationUrl);
  window.open(destinationUrl, '_blank', 'noopener,noreferrer');
};

export const introSessionContent = {
  heroImage: '/intro-hero.jpg',
  ctaImage: '/amsterdam-apartment-1-1.jpg',
  hero: {
    eyebrow: 'Introductory Session',
    headline: {
      before: 'Stop guessing.',
      accent: 'Start with a plan',
      after: 'you can use.',
    },
    ctaLabel: 'Request a session',
    sectionLabel: 'Request a session',
  },
  benefits: [
    {
      title: 'Clarity',
      description: 'We focus on what matters now and what can wait.',
    },
    {
      title: 'A usable sketch',
      description: 'Room layout, furniture placement, lighting.',
    },
    {
      title: 'Next steps',
      description: 'Feasibility, priorities, basis for quotes.',
    },
  ],
  deliverables: [
    'On-site or detailed discussion of your needs',
    'Honest feedback on what works in your space',
    'Schematic layout — after floor plan is shared',
    'Marked zones for the uses you care about',
  ],
  topics: [
    'Home renovation',
    'Office layouts',
    'Restaurants',
    'Beauty salons',
    'Treatment centers',
    'Complex projects',
  ],
  caseStudy: {
    title: 'A stalled renovation in Leiden, unstuck in one visit.',
    paragraphs: [
      'The client had many ideas about how to use the space, but no plan for arranging the rooms — for the renovation today and possible changes later.',
      'After one site visit and the floor plan, a layout was shared within a day that supported their current plans and future options.',
    ],
  },
  caseStudyComparison: {
    beforeImage: '/Attic floor plan - before.jpg',
    afterImage: '/Attic floor plan - after.jpg',
    beforeAlt: 'Original attic floor plan before interior redesign',
    afterAlt: 'Refined attic floor plan after interior redesign',
    beforeLabel: 'Before',
    afterLabel: 'After',
    ariaLabel: 'Compare the attic floor plan before and after the redesign',
  },
  testimonial: {
    quote:
      'The drawings helped me explain my wishes to the contractor and request quotations.',
    attribution: 'Home renovation client · Leiden',
  },
  finePrint: 'Floor plan required for the sketch',
  sessionTime: {
    price: '€240',
    heroLeadMobile:
      'Bring your floor plan, questions, and renovation ideas. Leave with requirements, feasibility, and a schematic layout you can hand to contractors.',
    heroLead:
      'Bring your floor plan, questions, and renovation ideas. We turn them into clear requirements, an honest feasibility check, and a schematic layout you can hand to contractors.',
    priceNote: 'incl. VAT',
    sectionLabel: 'What’s included',
    sectionIntro:
      '2 hours on-site visit and 2 hours sketch preparation — 4 hours of consultation in total. Your schematic sketch is shared within one business day.',
    ctaNote:
      '€240 incl. VAT — 2 hrs on-site visit, 2 hrs sketch preparation (4 hrs total). Sketch shared within one business day, where possible.',
  },
  seo: {
    title: 'Introductory Session — Spice Interiors',
    description:
      'Ready to move from inspiration to a plan? Book an introductory interior design session with Ankur — €240 incl. VAT.',
  },
};
