export const HOME_SEO_TITLE = 'Spice Interiors — Collected homes beyond beige';

export const homeHeroSlides = [
  { word: 'Some', image: '/hero-image-1.jpg', alt: 'Interior with warm natural light' },
  { word: 'Designs', image: '/hero-image-2.jpg', alt: 'Layered textures and vintage furniture' },
  { word: 'Never', image: '/hero-image-3.jpg', alt: 'Calm residential living space' },
  { word: 'Date', image: '/hero-image-4.jpg', alt: 'Timeless architectural interior detail' },
] as const;

export const instagramHome = {
  heading: 'Collectors Home on Instagram',
  profileImage: '/IMG_20260604_141210_656.webp',
  username: 'spice_interior',
  profileUrl: 'https://www.instagram.com/spice_interior/',
  viewLabel: 'View Instagram',
  tours: [
    {
      id: 'tour-1',
      image: '/instagram-collectors-home-part-3.jpg',
      imageAlt: "Collector's home tour in Amsterdam — Part 3",
      overlayTitle: 'Collectors home: Part 3',
      caption:
        'Jan on investing in basics first, mixing textures, and finding objects through travel and flea markets…',
      postUrl: 'https://www.instagram.com/reel/DZZcvJHoui9/',
    },
    {
      id: 'tour-2',
      image: '/instagram-collectors-home-john-geerts.jpg',
      imageAlt: "Collector's home tour with John Geerts",
      overlayTitle: 'Collectors home: John Geerts',
      caption:
        'John on picking what he likes — and how history and story always come together in the end…',
      postUrl: 'https://www.instagram.com/reel/DZ5uc7yo8oX/',
    },
    {
      id: 'tour-3',
      image: '/instagram-collectors-home-garrow-kedigian.jpg',
      imageAlt: "Collector's home tour with Garrow Kedigian in Paris — Part 4",
      overlayTitle: 'Collectors home: Garrow Kedigian',
      caption:
        'Garrow on how good design transcends time — and a Paris flea market coffee table with a story…',
      postUrl: 'https://www.instagram.com/reel/DaqMozBos-L/',
    },
    {
      id: 'tour-4',
      image: '/instagram-collectors-home-esther.jpg',
      imageAlt: "Collector's home tour with Esther in Amsterdam",
      overlayTitle: 'Collectors home: Esther',
      caption: 'Esther on rebelling against minimalism and combining objects she truly loves…',
      postUrl: 'https://www.instagram.com/reel/DaKmOSXoExX/',
    },
  ],
} as const;

const shopUtm = (content: string) =>
  `utm_source=website&utm_medium=homepage&utm_campaign=shop_august&utm_content=${content}`;

export const shopEpisode = {
  title: 'Shop the episode',
  products: [
    {
      id: 'arte-sano-chair',
      name: 'Arte Sano chair',
      image: '/newsletter-shop-august/arte-sano-chair.jpg',
      imageAlt: 'Chair by Werner Biermann for Arte Sano',
      href: `https://www.puttenaers.com/catalog/furniture/chair-by-werner-biermann-for-arte-sano-kazB5a?${shopUtm('product_chair')}`,
    },
    {
      id: 'granite-dining-table',
      name: 'Granite dining table',
      image: '/newsletter-shop-august/granite-dining-table.jpg',
      imageAlt: 'Mid-century granite dining table, 1970s',
      href: `https://nuvintage.nl/product/mid-century-design-granite-dining-table-1970s/?${shopUtm('product_table')}`,
    },
    {
      id: 'ghino-painting',
      name: 'Ghino painting',
      image: '/newsletter-shop-august/ghino-painting.jpg',
      imageAlt: 'Baragatti Ghino street scene painting',
      href: `https://malataantwerp.com/product/baragatti-ghino-painting/?${shopUtm('product_painting')}`,
    },
    {
      id: 'iron-candleholders',
      name: 'Iron candleholders',
      image: '/newsletter-shop-august/iron-candleholders.jpg',
      imageAlt: 'Pair of brutalist iron candleholders',
      href: `https://malataantwerp.com/product/brutalist-iron-candleholders/?${shopUtm('product_candleholders')}`,
    },
    {
      id: 'zaden-catchall',
      name: 'Zaden catchall',
      image: '/newsletter-shop-august/zaden-catchall.jpg',
      imageAlt: 'Zaden pleated marble catchall',
      href: `https://www.luluandgeorgia.com/products/zaden-catchall?variant=43927469523043&${shopUtm('product_catchall')}`,
    },
    {
      id: 'gigi-floor-lamp',
      name: 'Gigi floor lamp',
      image: '/newsletter-shop-august/gigi-floor-lamp.jpg',
      imageAlt: 'Gigi polished stainless steel floor lamp',
      href: `https://www.cb2.com/gigi-polished-stainless-steel-floor-lamp/s448935?${shopUtm('product_lamp')}`,
    },
  ],
} as const;

export const designHelp = {
  title: 'Need design help?',
  images: [
    {
      src: '/newsletter-shop-jan-kleeberg/design-consultation.jpg',
      alt: 'Design consultation with Ankur',
    },
    {
      src: '/newsletter-shop-jan-kleeberg/design-layout.jpg',
      alt: 'Schematic layout sketch',
    },
  ],
  lead: 'Spice Interiors brings design off the screen and into your home through one-on-one introductory sessions with Ankur.',
  body: 'Bring your floor plan, questions, and renovation ideas. Leave with clear requirements, an honest feasibility check, and a schematic layout you can hand to contractors. Slots are limited.',
  ctaLabel: 'Book a session with Ankur',
  priceNote: '€240 incl. VAT · introductory interior design session',
} as const;

export const homeNewsletter = {
  eyebrow: "Collector's home newsletter",
  title: 'Spice Interiors',
  description:
    "Subscribe for exclusive access to house tours, vintage market guides, and collector's home inspiration.",
  emailLabel: 'Email',
  submitLabel: 'Subscribe',
  successTitle: "You're on the list",
  successMessage: 'Thank you — we will be in touch with house tours, guides, and more.',
} as const;
