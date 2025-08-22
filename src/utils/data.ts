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
    description: 'Fascinating vintage engineering demonstration model featuring a precision-crafted spiral rod mechanism. This educational piece showcases mechanical engineering principles through its elegant helical design and demonstrates rotational motion dynamics. Perfect for collectors of scientific instruments or as a unique decorative conversation piece.',
    creator: 'Creative Engineering Amsterdam',
    dateOfManufacture: '1970s-1980s',
    origin: 'Netherlands',
    period: 'Late 20th Century',
    materials: 'Metal rod with wooden or composite base',
    condition: 'Good vintage condition with minor age-appropriate wear on mechanism',
    measurements: 'Height: approximately 25-30cm, Base: 15cm diameter',
    category: 'Objects',
    isNew: true
  },
  {
    id: '2',
    name: 'Egyptian Revival Bust',
    images: ['/products/objects/2/2_1.jpg', '/products/objects/2/2_2.jpg', '/products/objects/2/2_3.jpg', '/products/objects/2/2_4.jpg', '/products/objects/2/2_5.jpg', '/products/objects/2/2_6.jpg','/products/objects/2/2_7.jpg','/products/objects/2/2_8.jpg'],
    price: '€32',
    category: 'Objects',
    description: 'Striking Egyptian Revival decorative bust featuring classical pharaonic styling with detailed carved features. This piece captures the timeless appeal of ancient Egyptian art, likely representing a pharaoh or deity. The sculpture showcases fine craftsmanship with attention to traditional Egyptian artistic conventions including the characteristic headdress and facial features.',
    creator: 'European Artisan (School of Egyptian Revival)',
    dateOfManufacture: '1920s-1950s',
    origin: 'European (likely German or Italian)',
    period: 'Egyptian Revival / Art Deco Era',
    materials: 'Composite material or plaster with patinated finish',
    condition: 'Good vintage condition with authentic age-related patina',
    measurements: 'Height: approximately 20-25cm, Width: 15cm',
    isNew: true
  },
  {
    id: '3',
    name: 'Handcrafted Solid Wood Bowl',
    images: ['/products/objects/3/3_1.jpg', '/products/objects/3/3_2.jpg', '/products/objects/3/3_3.jpg', '/products/objects/3/3_4.jpg', '/products/objects/3/3_5.jpg', '/products/objects/3/3_6.jpg', '/products/objects/3/3_7.jpg', '/products/objects/3/3_8.jpg', '/products/objects/3/3_9.jpg'],
    price: '€19',
    category: 'Objects',
    description: 'Beautiful handcrafted solid wood bowl showcasing natural grain patterns and artisanal woodworking skills. This versatile piece displays the warm character of natural wood with smooth, curved lines that highlight the craftsmanship. Perfect for serving, display, or as a decorative accent that brings organic warmth to any space.',
    creator: 'Traditional Woodworker',
    dateOfManufacture: '1970s-1990s',
    origin: 'Scandinavian or Northern European',
    period: 'Folk Revival / Handcraft Movement',
    materials: 'Solid hardwood (likely oak, beech, or maple)',
    condition: 'Excellent vintage condition with natural wood patina',
    measurements: 'Diameter: 20-25cm, Height: 8-12cm',
    isNew: true
  },
  {
    id: '4',
    name: 'Hand-Carved Wooden Bird Sculpture',
    images: ['/products/objects/4/4_1.jpg', '/products/objects/4/4_2.jpg', '/products/objects/4/4_3.jpg', '/products/objects/4/4_4.jpg'],
    price: '€19',
    category: 'Objects',
    description: 'Charming hand-carved wooden bird sculpture displaying exceptional folk art craftsmanship. This delightful piece captures the essence of avian grace through skillful carving techniques, with attention to natural proportions and detail. The sculpture embodies the warmth of traditional woodcarving artistry and makes a wonderful decorative accent for nature lovers.',
    creator: 'Folk Art Woodcarver',
    dateOfManufacture: '1960s-1980s',
    origin: 'Central European or Scandinavian',
    period: 'Folk Art Revival',
    materials: 'Solid hardwood with natural finish',
    condition: 'Very good vintage condition with authentic wood aging',
    measurements: 'Length: 15-20cm, Height: 8-12cm, Width: 6-8cm',
    isNew: true
  },
  {
    id: '5',
    name: 'Hollywood Regency Porcelain Flamingo Statue',
    images: ['/products/objects/5/5_1.jpg', '/products/objects/5/5_2.jpg', '/products/objects/5/5_3.jpg', '/products/objects/5/5_4.jpg', '/products/objects/5/5_5.jpg'],
    price: '€39',
    category: 'Objects',
    description: 'Elegant Hollywood Regency porcelain flamingo statue embodying the glamorous aesthetic of mid-century luxury design. This sophisticated piece features the characteristic pink and white coloration with graceful proportions that capture the flamingo\'s natural elegance. A perfect representation of the Hollywood Regency style\'s love for exotic animals and bold decorative statements.',
    creator: 'European Porcelain Manufacturer',
    dateOfManufacture: '1950s-1970s',
    origin: 'European (likely German or Italian)',
    period: 'Hollywood Regency / Mid-Century Modern',
    materials: 'Fine porcelain with hand-painted details',
    condition: 'Excellent vintage condition with original paint intact',
    measurements: 'Height: 25-30cm, Length: 20cm, Width: 8cm',
    isNew: true
  },
  
  // Featured Items
  {
    id: '7',
    name: 'Mid-Century Dual-Tone Metal Table Lamps (Pair)',
    images: ['/products/lamps/2/2_1.jpg', '/products/lamps/2/2_2.jpg', '/products/lamps/2/2_3.jpg', '/products/lamps/2/2_4.jpg', '/products/lamps/2/2_5.jpg', '/products/lamps/2/2_6.jpg','/products/lamps/2/2_7.jpg','/products/lamps/2/2_8.jpg'],
    price: '€89',
    category: 'Lamps',
    featured: true,
    description: 'Stunning pair of mid-century table lamps featuring sophisticated dual-tone metal plating and matching fabric shades. These lamps exemplify the clean, geometric aesthetic of 1960s design with their sleek metallic bases and contrasting finishes. The warm glow through the coordinating lampshades creates perfect ambient lighting while serving as striking decorative elements.',
    creator: 'Mid-Century Lighting Designer',
    dateOfManufacture: '1960s-1970s',
    origin: 'European or American',
    period: 'Mid-Century Modern',
    materials: 'Metal with dual-tone plating, fabric lampshades',
    condition: 'Very good vintage condition, recently rewired to modern standards',
    measurements: 'Height: 45-50cm including shade, Base diameter: 15cm, Shade diameter: 25cm'
  },
  {
    id: '9',
    name: 'Hollywood Regency Swan Table Lamp',
    images: ['/products/lamps/3/3_1.jpg', '/products/lamps/3/3_2.jpg', '/products/lamps/3/3_3.jpg', '/products/lamps/3/3_4.jpg', '/products/lamps/3/3_5.jpg'],
    price: '€49',
    category: 'Lamps',
    featured: true,
    description: 'Exquisite Hollywood Regency swan table lamp exemplifying the era\'s passion for glamorous animal motifs. This elegant piece features a gracefully sculpted swan base with detailed feather work and flowing lines, topped with a coordinating lampshade. The lamp embodies the theatrical luxury and exotic charm that defines Hollywood Regency style.',
    creator: 'Hollywood Regency Designer',
    dateOfManufacture: '1950s-1960s',
    origin: 'American or European',
    period: 'Hollywood Regency',
    materials: 'Cast metal or ceramic with metallic finish, fabric shade',
    condition: 'Good vintage condition with period-appropriate patina',
    measurements: 'Height: 40-45cm including shade, Base: 20cm length, Shade diameter: 22cm'
  },
  {
    id: '10',
    name: 'Hollywood Regency Unicorn Table Lamp',
    images: ['/products/lamps/5/5_1.jpg', '/products/lamps/5/5_2.jpg', '/products/lamps/5/5_3.jpg', '/products/lamps/5/5_4.jpg', '/products/lamps/5/5_5.jpg', '/products/lamps/5/5_6.jpg', '/products/lamps/5/5_7.jpg', '/products/lamps/5/5_8.jpg', '/products/lamps/5/5_9.jpg'],
    price: '€49',
    category: 'Lamps',
    featured: true,
    description: 'Magnificent Hollywood Regency unicorn table lamp showcasing the era\'s love for mythical and fantastical creatures. This striking piece features an intricately detailed unicorn base with flowing mane and elegant horn, capturing the magical essence that defined luxury 1950s decor. The lamp combines whimsy with sophistication, creating a true statement piece.',
    creator: 'Hollywood Regency Artisan',
    dateOfManufacture: '1950s-1960s',
    origin: 'American or European',
    period: 'Hollywood Regency',
    materials: 'Cast metal or ceramic with decorative finish, coordinating shade',
    condition: 'Very good vintage condition with original detailing intact',
    measurements: 'Height: 42-48cm including shade, Base: 18cm length, Shade diameter: 20cm'
  },
  {
    id: '11',
    name: 'Hollywood Regency Side Tables (Pair)',
    images: ['/products/tables/1/1_1.jpg', '/products/tables/1/1_2.jpg', '/products/tables/1/1_3.jpg', '/products/tables/1/1_4.jpg'],
    price: '€85',
    category: 'Tables',
    featured: true,
    description: 'Elegant pair of Hollywood Regency side tables embodying the glamorous sophistication of 1950s luxury design. These matching tables feature the characteristic elements of the era: clean geometric lines, luxurious materials, and impeccable craftsmanship. Perfect for flanking a sofa or as stylish accent pieces that bring Hollywood glamour to any interior.',
    creator: 'Hollywood Regency Furniture Designer',
    dateOfManufacture: '1950s-1960s',
    origin: 'American or European',
    period: 'Hollywood Regency',
    materials: 'Wood with decorative finish, possibly gilt or lacquered details',
    condition: 'Excellent vintage condition with original finish largely intact',
    measurements: 'Height: 45-50cm, Width: 40-45cm, Depth: 35-40cm (each table)'
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