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
    name: 'Modern Dining Chair',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€450',
    category: 'Furniture',
    isNew: true
  },
  {
    id: '2',
    name: 'Art Deco Side Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€320',
    category: 'Furniture',
    isNew: true
  },
  {
    id: '3',
    name: 'Scandinavian Sofa',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€1,200',
    category: 'Furniture',
    isNew: true
  },
  {
    id: '4',
    name: 'Industrial Pendant Light',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€180',
    category: 'Lighting',
    isNew: true
  },
  {
    id: '5',
    name: 'Bohemian Rug',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€280',
    category: 'Textiles',
    isNew: true
  },
  {
    id: '6',
    name: 'Mid-Century Coffee Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€390',
    category: 'Furniture',
    isNew: true
  },
  
  // Featured Items
  {
    id: '7',
    name: 'Designer Floor Lamp',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€650',
    category: 'Lighting',
    featured: true,
    description: 'Mid-century modern floor lamp with brass finish and organic curves. A statement piece that provides both ambient and task lighting.',
    creator: 'Scandinavian Designer',
    dateOfManufacture: '1960s',
    origin: 'Denmark',
    period: 'Mid-Century',
    materials: 'Brass and Fabric',
    condition: 'Excellent vintage condition. Recently rewired to modern standards.',
    measurements: 'Height: 165 cm, Base diameter: 35 cm'
  },
  {
    id: '8',
    name: 'Art-Deco Danish Club Chair in Neutral Upholstery',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€890',
    category: 'Furniture',
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
    name: 'Artisan Wall Mirror',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€340',
    category: 'Decor',
    featured: true
  },
  {
    id: '10',
    name: 'Ceramic Vase Set',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€120',
    category: 'Decor',
    featured: true
  },
  {
    id: '11',
    name: 'Luxury Throw Pillow',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€85',
    category: 'Textiles',
    featured: true
  },
  {
    id: '12',
    name: 'Oak Dining Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€1,450',
    category: 'Furniture',
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