export const linkProfile = {
  name: 'Spice Interiors',
  tagline: 'Collected homes · House tours · Design inspiration',
  image: '/IMG_20260604_141210_656.webp',
  imageAlt: 'Ankur — Spice Interiors',
} as const;

export type LinkTopic = {
  id: string;
  label: string;
  subtitle: string;
  imageSrc: string;
  path?: string;
  external?: boolean;
  comingSoon?: {
    eyebrow: string;
    title: string;
    description: string;
    detail: string;
  };
};

export const linkTopics: LinkTopic[] = [
  {
    id: 'shop',
    label: 'Shop my collection',
    subtitle: 'Curated vintage pieces and furniture',
    imageSrc: '/Shop.jpg',
    comingSoon: {
      eyebrow: 'Shop',
      title: 'Shop my collection',
      description:
        'A shoppable edit of vintage finds and furniture from our market trips — for homes, cafés and projects alike.',
      detail: 'The shop is not live yet. Your interest helps us know when to open the doors.',
    },
  },
  {
    id: 'mumbai-vintage-guide',
    label: 'Mumbai vintage market guide',
    subtitle: 'Weekly updated · Never miss a market again',
    imageSrc: '/Mumbai vintage market.jpg',
    comingSoon: {
      eyebrow: 'Mumbai',
      title: 'Vintage market guide — Mumbai',
      description:
        'A practical guide to Mumbai’s vintage and antique markets — neighbourhoods worth visiting, what to inspect before you buy, and how to spot pieces worth bringing home.',
      detail:
        'We are putting together a guide from our sourcing experience. Your click tells us this is one to publish first.',
    },
  },
  {
    id: 'amsterdam-vintage-guide',
    label: 'Amsterdam vintage market guide',
    subtitle: 'Weekly updated · Never miss a market again',
    imageSrc: '/Amsterdam vintage market.jpg',
    comingSoon: {
      eyebrow: 'Amsterdam',
      title: 'Vintage market guide — Amsterdam',
      description:
        'An insider map of Amsterdam’s vintage scene — flea markets, dealers, and the spots where serious pieces still turn up.',
      detail: 'Many of you ask where we source in Amsterdam. A dedicated guide is on the way — tap here if you want it.',
    },
  },
  {
    id: 'share-your-home',
    label: 'Share your home with Spice Interiors',
    subtitle: 'Tell us about your space',
    imageSrc: '/hero-image-3.jpg',
    path: '/share-your-home',
  },
  {
    id: 'house-tours-youtube',
    label: "Subscribe to watch Collectors' Homes",
    subtitle: 'House tours with vintage lovers and design collectors',
    imageSrc: '/youtube-icon-free-vector.jpg',
    path: 'https://www.youtube.com/channel/UCYtdVBsruYUtPt41gghtMeA?sub_confirmation=1',
    external: true,
  },
  {
    id: 'intro-session',
    label: 'Hire me',
    subtitle: '€240 incl. VAT · 4 hrs total · Introductory interior design session',
    imageSrc: '/client image.jpg',
    path: '/consultation/introductory-session',
  },
];

export const findLinkTopic = (id: string | undefined) =>
  linkTopics.find((topic) => topic.id === id && topic.comingSoon);

export const goRedirects: Record<string, { destinationUrl: string; defaultCampaign: string }> = {
  '/go/paris-apartment-tour': {
    destinationUrl: 'https://www.instagram.com/reel/DaqMozBos-L/',
    defaultCampaign: 'paris_apartment_tour',
  },
  '/go/collectors-home-amsterdam': {
    destinationUrl: 'https://www.instagram.com/reel/DcCKwhhxAnq/',
    defaultCampaign: 'collectors_home_amsterdam',
  },
  '/go/puttenaers': {
    destinationUrl: 'https://www.instagram.com/reel/DcY-9PRqaOn/',
    defaultCampaign: 'puttenaers',
  },
};

export const defaultGoDestination = 'https://www.instagram.com/spice_interior/';
