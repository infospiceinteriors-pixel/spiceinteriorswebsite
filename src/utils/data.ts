// Central data store for all items
export interface Item {
  id: string;
  name: string;
  images: string[];
  price: string;
  category?: string;
  featured?: boolean;
  isNew?: boolean;
  description?: string;
  creator?: string;
  dateOfManufacture?: string;
  origin?: string;
  period?: string;
  materials?: string;
  condition?: string;
  measurements?: string;
}

// All items database
export const allItems: Item[] = [
  // New Items
  {
    id: '1',
    name: 'Spiral rod engineering model',
    images: ['/products/objects/1/1_1.jpg', '/products/objects/1/1_2.jpg', '/products/objects/1/1_3.jpg'],
    price: '€45',
    description: 'Spiral rod engineering model',
    creator: 'Creative engineering Amsterdam',
    dateOfManufacture: 'Unknown',
    origin: 'Unknown',
    period: 'Unknown',
    materials: 'Unknown',
    condition: 'Unknown',
    measurements: 'Unknown',
    category: 'Objects',
    isNew: true
  },
  {
    id: '2',
    name: 'Egyptian bust (Unknown)',
    images: ['/products/objects/2/2_1.jpg', '/products/objects/2/2_2.jpg', '/products/objects/2/2_3.jpg', '/products/objects/2/2_4.jpg', '/products/objects/2/2_5.jpg', '/products/objects/2/2_6.jpg','/products/objects/2/2_7.jpg','/products/objects/2/2_8.jpg'],
    price: '€32',
    category: 'Objects',
    description: 'Egyptian bust (Unknown)',
    creator: 'Unknown',
    dateOfManufacture: 'Unknown',
    origin: 'Unknown',
    period: 'Unknown',
    materials: 'Unknown',
    isNew: true
  },
  {
    id: '3',
    name: 'Solid Wood bowl',
    images: ['/products/objects/3/3_1.jpg', '/products/objects/3/3_2.jpg', '/products/objects/3/3_3.jpg', '/products/objects/3/3_4.jpg', '/products/objects/3/3_5.jpg', '/products/objects/3/3_6.jpg', '/products/objects/3/3_7.jpg', '/products/objects/3/3_8.jpg', '/products/objects/3/3_9.jpg'],
    price: '€19',
    category: 'Objects',
    description: 'Solid Wood bowl',
    creator: 'Unknown',
    dateOfManufacture: 'Unknown',
    origin: 'Unknown',
    period: 'Unknown',
    materials: 'Unknown',
    isNew: true
  },
  {
    id: '4',
    name: 'Solid wood carved bird statue',
    images: ['/products/objects/4/4_1.jpg', '/products/objects/4/4_2.jpg', '/products/objects/4/4_3.jpg', '/products/objects/4/4_4.jpg'],
    price: '€19',
    category: 'Objects',
    description: 'Solid wood carved bird statue',
    creator: 'Unknown',
    dateOfManufacture: 'Unknown',
    origin: 'Unknown',
    period: 'Unknown',
    materials: 'Unknown',
    isNew: true
  },
  {
    id: '5',
    name: 'Porcelain flamingo statue - Hollywood Regency',
    images: ['/products/objects/5/5_1.jpg', '/products/objects/5/5_2.jpg', '/products/objects/5/5_3.jpg', '/products/objects/5/5_4.jpg', '/products/objects/5/5_5.jpg'],
    price: '€39',
    category: 'Objects',
    description: 'Porcelain flamingo statue - Hollywood Regency',
    creator: 'Unknown',
    dateOfManufacture: 'Unknown',
    origin: 'Unknown',
    period: 'Unknown',
    materials: 'Unknown',
    isNew: true
  },
  
  // Featured Items
  {
    id: '7',
    name: 'Midcentury dual-color metal plated lamps with shade',
    images: ['/products/lamps/2/2_1.jpg', '/products/lamps/2/2_2.jpg', '/products/lamps/2/2_3.jpg', '/products/lamps/2/2_4.jpg', '/products/lamps/2/2_5.jpg', '/products/lamps/2/2_6.jpg','/products/lamps/2/2_7.jpg','/products/lamps/2/2_8.jpg'],
    price: '€89',
    category: 'Lamps',
    featured: true,
    description: 'Elegant Art-Deco Danish club chair from the 1940s with clean, geometric lines and understated charm. Recently reupholstered in a soft, neutral fabric, it rests on wooden block feet. A timeless piece that blends comfort with refined modernist design.',
    creator: 'Danish Cabinetmaker',
    dateOfManufacture: '1940s',
    origin: 'Denmark',
    period: 'Art Deco',
    materials: 'Beech and Velour',
    condition: 'In good condition consistent with age. Newly reupholstered and restored.',
    measurements: 'Height: 31.31 in (79 cm) Width: 30.35 in (77 cm) Depth: 30.32 in (77 cm) Seat Height: 15.36 in (39 cm)'
  },
  {
    id: '9',
    name: 'Hollywood Regency swan lamp with lampshade',
    images: ['/products/lamps/3/3_1.jpg', '/products/lamps/3/3_2.jpg', '/products/lamps/3/3_3.jpg', '/products/lamps/3/3_4.jpg', '/products/lamps/3/3_5.jpg'],
    price: '€49',
    category: 'Lamps',
    featured: true,
    description: 'Hollywood Regency swan lamp with lampshade',
    creator: 'Unknown',
    dateOfManufacture: 'Unknown',
    origin: 'Unknown',
    period: 'Unknown',
    materials: 'Unknown',
  },
  {
    id: '10',
    name: 'Hollywood Regency unicorn lamp with lampshade',
    images: ['/products/lamps/5/5_1.jpg', '/products/lamps/5/5_2.jpg', '/products/lamps/5/5_3.jpg', '/products/lamps/5/5_4.jpg', '/products/lamps/5/5_5.jpg', '/products/lamps/5/5_6.jpg', '/products/lamps/5/5_7.jpg', '/products/lamps/5/5_8.jpg', '/products/lamps/5/5_9.jpg'],
    price: '€49',
    category: 'Lamps',
    featured: true,
    description: 'Hollywood Regency unicorn lamp with lampshade',
    creator: 'Unknown',
    dateOfManufacture: 'Unknown',
    origin: 'Unknown',
    period: 'Unknown',
    materials: 'Unknown',
  },
  {
    id: '11',
    name: 'Hollywood Regency side tables x2',
    images: ['/products/tables/1/1_1.jpg', '/products/tables/1/1_2.jpg', '/products/tables/1/1_3.jpg', '/products/tables/1/1_4.jpg'],
    price: '€85',
    category: 'Tables',
    featured: true
  }
];

// Helper functions to get filtered items
export const getNewItems = (): Item[] => {
  return allItems.filter(item => item.isNew === true);
};

export const getFeaturedItems = (): Item[] => {
  return allItems.filter(item => item.featured === true);
};

export const getAllItems = (): Item[] => {
  return allItems;
}; 