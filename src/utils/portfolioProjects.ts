export type PortfolioFilterGroup = 'commercial' | 'residential' | 'public';

export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: string;
  location: string;
  scope?: string[];
  filterGroup: PortfolioFilterGroup;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    title: 'Holocaust Name Monument, Amsterdam (Libeskind Studio, AIP)',
    description:
      'A technically demanding landmark project where I developed digital design workflows for customized components at scale, balancing design precision with fabrication efficiency.',
    images: ['/HNM-06.jpg', '/HNM-05.jpg', '/HNM-07.jpg'],
    category: 'Architecture',
    location: 'Amsterdam, Netherlands',
    scope: ['Digital design workflows', 'Customized component development', 'Fabrication coordination'],
    filterGroup: 'public',
  },
  {
    id: '2',
    title: 'CiWoCo, Amsterdam (GAAGA)',
    description:
      'A live-work building in Amsterdam Noord that required precise design-to-construction coordination. I created technical 3D drawing packages that supported flexible, future-ready execution.',
    images: ['/buiksloterham-01.jpg', '/buiksloterham-02.jpg', '/buiksloterham-03.jpg'],
    category: 'Residential Development',
    location: 'Amsterdam, Netherlands',
    scope: ['Technical 3D drawings', 'Design-to-construction coordination', 'Residential development detailing'],
    filterGroup: 'residential',
  },
  {
    id: '3',
    title: 'De Hallen, Amsterdam (GAAGA)',
    description:
      'A bespoke multi-unit residential project with distinct apartment typologies. I led technical 3D detailing to align custom components, fabrication logic, and on-site implementation.',
    images: ['/dehallen-01.jpg', '/dehallen-02.jpg', '/GAAGA_De-Hallen-B5_10.jpg'],
    category: 'Residential',
    location: 'Amsterdam, Netherlands',
    scope: ['Technical detailing', 'Custom component coordination', 'Implementation support'],
    filterGroup: 'residential',
  },
  {
    id: '3a',
    title: 'Hortus Apartment, Amsterdam',
    description:
      'A refined Amsterdam apartment overlooking the Hortus Botanicus, renovated and styled to feel calm, light-filled, and closely connected to its green surroundings. I led the renovation and interior styling, shaping the layout, finishes, furniture direction, and overall atmosphere into a polished urban home.',
    images: ['/amsterdam-apartment-1-1.jpg', '/amsterdam-apartment-1-2.jpg', '/amsterdam-apartment-1-3.jpg', '/amsterdam-apartment-1-4.jpg', '/amsterdam-apartment-1-5.jpg'],
    category: 'Apartment Renovation',
    location: 'Amsterdam, Netherlands',
    scope: ['Renovation design', 'Interior styling', 'Finish and furniture direction'],
    filterGroup: 'residential',
  },
  {
    id: '3b',
    title: 'Keizersgracht Apartment, Amsterdam',
    description:
      'A canal-side apartment on Keizersgracht reworked through a focused renovation and styling approach that balanced historic character with a more contemporary residential feel. I developed the renovation and interior styling to improve spatial clarity, material warmth, and the overall experience of everyday living in the apartment.',
    images: ['/amsterdam-apartment-2-1.jpeg', '/amsterdam-apartment-2-2.jpeg', '/amsterdam-apartment-2-3.jpeg', '/amsterdam-apartment-2-4.jpeg', '/amsterdam-apartment-2-5.jpeg'],
    category: 'Apartment Renovation',
    location: 'Amsterdam, Netherlands',
    scope: ['Renovation design', 'Interior styling', 'Spatial refinement'],
    filterGroup: 'residential',
  },
  {
    id: '4',
    title: 'Naraina House, Delhi (MOFA Studios)',
    description:
      'A luxury residential commission where architecture and interiors were developed as one cohesive experience. The project focused on bespoke detailing, material harmony, and elegant day-to-day functionality.',
    images: ['/naraina-02.jpeg', '/naraina-01.jpeg', '/naraina-04.png'],
    category: 'Luxury Residential',
    location: 'Delhi, India',
    scope: ['Architecture', 'Interior design', 'Bespoke detailing'],
    filterGroup: 'residential',
  },
  {
    id: '6',
    title: 'CIPL House, Noida',
    description:
      'A full office renovation for an IT company in Noida, covering both exterior and interior transformation. The project introduced a new marble facade system alongside interior lighting layouts, furniture selection, and end-to-end vendor coordination to create a workplace that feels sharp, efficient, and materially refined.',
    images: ['/cipl-1.avif', '/cipl-4.jpg', '/cipl-5.jpg', '/cipl-6.jpg'],
    category: 'Commercial Office',
    location: 'Noida, India',
    scope: ['Exterior renovation', 'Interior renovation', 'Lighting layouts', 'Furniture selection', 'Vendor coordination'],
    filterGroup: 'commercial',
  },
  {
    id: '7',
    title: 'JPAL Office, Delhi',
    description:
      'A workplace project in Delhi shaped around circular design thinking, natural materials, and an eco-conscious renovation approach. The design combined custom furniture, considered lighting layouts, and sustainable material choices to create an office environment that feels efficient, warm, and environmentally responsible.',
    images: ['/jpal-1.jpg', '/jpal-2.jpg', '/jpal-3.jpg'],
    category: 'Commercial Office',
    location: 'Delhi, India',
    scope: ['Office interiors', 'Furniture design', 'Lighting layouts', 'Sustainable material strategy'],
    filterGroup: 'commercial',
  },
  {
    id: '8',
    title: 'NIWS, Goa',
    description:
      'A major institutional project for the National Institute of Water Sports in Goa, shaped around a fluid roofscape inspired by the movement of ocean waves and a campus layout designed to connect academic, administrative, residential, and recreation functions. My role focused on roof design development and floor plan layouts, helping translate the building\'s coastal concept into a buildable, spatially coherent scheme.',
    images: ['/niws-1.avif', '/niws-2.avif', '/niws-3.avif', '/niws-4.avif', '/niws-5.avif', '/niws-6.avif', '/niws-7.avif', '/niws-8.avif'],
    category: 'Institutional Architecture',
    location: 'Goa, India',
    scope: ['Roof design', 'Floor plan layouts', 'Institutional architecture development'],
    filterGroup: 'public',
  },
  {
    id: '9',
    title: 'Perennial House, Amritsar',
    description:
      'A 3,000 sq ft private residence in Amritsar designed to look inward for greenery, privacy, and ample daylight on a tightly bounded site. I developed the architecture and interior design around a courtyard-led plan, exposed brick surfaces, Jaisalmer stone flooring, and a curved wall that softens glare, guides movement, and gives the home a grounded yet open character.',
    images: ['/perrinial-1.webp', '/perrinial-2.webp', '/perrinial-3.webp', '/perrinial-4.webp', '/perrinial-5.webp'],
    category: 'Private Residence',
    location: 'Amritsar, India',
    scope: ['Architecture', 'Interior design', 'Courtyard planning', 'Material palette development'],
    filterGroup: 'residential',
  },
  {
    id: '10',
    title: 'Vault House, Amritsar',
    description:
      'A 6,000 sq ft residence in Amritsar designed as a serene retreat closely tied to its landscape and existing mature trees. I led the architecture and interior design of the home around a dramatic vaulted roof, double-height cutouts, long garden edges, and carefully framed indoor-outdoor connections, creating a calm family residence shaped by light, greenery, and generous shared spaces.',
    images: ['/vault-1.webp', '/vault-2.webp', '/vault-3.webp', '/vault-4.webp', '/vault-5.webp'],
    category: 'Private Residence',
    location: 'Amritsar, India',
    scope: ['Architecture', 'Interior design', 'Roof form development', 'Indoor-outdoor integration'],
    filterGroup: 'residential',
  },
  {
    id: '11',
    title: 'Hatsoff Accessories, Delhi',
    description:
      'A premium retail interior shaped around refined display architecture, warm finishes, and controlled lighting. The design elevated product presentation while preserving a calm, minimal atmosphere.',
    images: ['/hatsoff-01.jpeg', '/hatsoff-02.jpeg', '/hatsoff-04.png'],
    category: 'Retail Interior',
    location: 'Delhi, India',
    scope: ['Retail interiors', 'Display architecture', 'Lighting and finish planning'],
    filterGroup: 'commercial',
  },
  {
    id: '5',
    title: 'The Chatter House, Khan Market Delhi',
    description:
      'A lively hospitality interior in Khan Market shaped around the energy of a contemporary bar and dining space. The project balances bold material character, warm lighting, and layered seating to create a social setting that feels both polished and inviting.',
    images: ['/chatterhouse-1.jpg', '/chatterhouse-2.jpg', '/chatterhouse-3.jpg', '/chatterhouse-4.jpg', '/chatterhouse-5.jpg', '/chatterhouse-6.jpg', '/chatterhouse-7.jpg', '/chatterhouse-8.jpg', '/chatterhouse-9.jpg'],
    category: 'Hospitality Interior',
    location: 'Khan Market, Delhi, India',
    scope: ['Hospitality interiors', 'Lighting strategy', 'Seating and material planning'],
    filterGroup: 'commercial',
  },
];

export const getPortfolioProjectSlug = (project: Pick<PortfolioProject, 'title'>) =>
  project.title
    .toLowerCase()
    .replace(/\([^)]*\)/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

export const getPortfolioProjectBySlug = (slug: string) =>
  portfolioProjects.find((project) => getPortfolioProjectSlug(project) === slug);
