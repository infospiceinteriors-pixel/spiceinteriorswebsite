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
    id: '25',
    name: 'Vintage Safari Sofa by Archizoom for Poltronova',
    images: ['/products/seating/6/6_1.jpg', '/products/seating/6/6_2.jpg', '/products/seating/6/6_3.jpg', '/products/seating/6/6_4.jpg', '/products/seating/6/6_5.jpg', '/products/seating/6/6_6.jpg', '/products/seating/6/6_7.jpg', '/products/seating/6/6_8.jpeg', '/products/seating/6/6_9.jpg'],
    price: '€29.750',
    category: 'Seating',
    isNew: true,
    description: 'An iconic vintage Safari sofa by Archizoom Associati for Poltronova. A base made of white-coated fiberglass reinforced plastic, with integrated seats arranged in the form of a flower, upholstered and covered with faux leopard print. This modular sofa consists of four pieces: two armchair modules and two sofa modules. In 1966, a group of young architects from Florence formed Archizoom, striving to overcome tradition and bourgeois values through provocative Pop Art-inspired designs. The Safari became a great media success and an icon of the Italian Radical Design movement, now part of permanent collections at the Centre Pompidou and Museum of Fine Arts in Montreal.',
    creator: 'Archizoom Associati for Poltronova',
    dateOfManufacture: '1968',
    origin: 'Italy',
    period: 'Italian Radical Design / Pop Art',
    materials: 'White-coated fiberglass reinforced plastic base, faux leopard fur upholstery',
    condition: 'Very good vintage condition with only few small damages on the fiberglass. See photos for details.',
    measurements: 'H: 64cm x W: 260cm x D: 215cm'
  },
  {
    id: '24',
    name: 'Italian Burgundy Leather Lounge Chairs',
    images: ['/products/seating/5/5_1.jpg', '/products/seating/5/5_2.jpg', '/products/seating/5/5_3.jpg', '/products/seating/5/5_4.jpg', '/products/seating/5/5_5.jpg'],
    price: '€750',
    category: 'Seating',
    isNew: true,
    description: 'Stunning vintage Italian lounge chair in original rich burgundy leather. This piece offers a masterful blend of 1970s design and contemporary comfort, with its sculptural form and generously padded seat. Crafted in Italy, the chair showcases a low-slung profile, softly rounded edges, and distinctive tufted detailing, creating a striking visual impact from every angle. The supple leather has aged gracefully, revealing a beautifully lived-in patina that enhances its authentic vintage appeal. Six chairs available - price is per chair. Whether arranged as a full set for a conversation area or used individually to accent various rooms, these chairs are both versatile and iconic.',
    creator: 'Designer unknown',
    dateOfManufacture: '1970s',
    origin: 'Italy',
    period: 'Mid-Century Modern',
    materials: 'Rich burgundy leather, padded upholstery',
    condition: 'Excellent vintage condition with beautiful aged patina on leather',
    measurements: 'H: 73cm x W: 75cm x D: 87cm'
  },
  {
    id: '23',
    name: '1970s Abstract Steel Sculpture',
    images: ['/products/decor/1/1_1.jpg', '/products/decor/1/1_2.jpg', '/products/decor/1/1_3.jpg', '/products/decor/1/1_4.jpg', '/products/decor/1/1_5.jpg'],
    price: '€1.400',
    category: 'Decor',
    isNew: true,
    description: 'This striking steel sculpture, crafted in the 1970s, embodies the bold experimentation and geometric exploration of modernist art. Its weathered patina tells a story of time, transforming raw industrial material into a work of quiet elegance and strength. The piece is defined by intersecting arcs and cut-out motifs, evoking both architectural precision and organic rhythm. The rich rust tones enhance its sculptural presence, highlighting the dialogue between permanence and change. Standing on a solid base, this artwork makes a powerful statement in any collection, whether placed indoors as a focal point or outdoors where it can continue its natural dialogue with the elements. A timeless fusion of geometry, texture, and history.',
    creator: 'Artist unknown',
    dateOfManufacture: '1970s',
    origin: 'Netherlands',
    period: 'Modernist / Abstract',
    materials: 'Steel with natural rust patina',
    condition: 'Good vintage condition with intentional weathered patina throughout',
    measurements: 'H: 101cm x W: 66cm x D: 15cm'
  },
  {
    id: '22',
    name: 'Danish Oak Lowboard Sideboard Vintage',
    images: ['/products/storage/3/3_1.webp', '/products/storage/3/3_2.webp', '/products/storage/3/3_3.webp', '/products/storage/3/3_4.webp', '/products/storage/3/3_5.webp', '/products/storage/3/3_6.webp', '/products/storage/3/3_7.webp', '/products/storage/3/3_8.webp', '/products/storage/3/3_9.webp'],
    price: '€1.595',
    category: 'Storage',
    isNew: true,
    description: 'Beautiful long and low sideboard from Denmark, 1960s. This minimalist Scandinavian cabinet is made of oak wood with beautiful grain patterns. The cabinet features two sliding doors with a large shelf behind them. On the right side are five drawers with charming handles. Ideal for use as a TV stand or media console. This elegant piece exemplifies Danish design principles with its clean lines, quality craftsmanship, and functional storage solutions.',
    creator: 'Danish Designer',
    dateOfManufacture: '1960s',
    origin: 'Denmark',
    period: 'Mid-Century Scandinavian',
    materials: 'Oak wood with natural grain, sliding doors, metal hardware',
    condition: 'Good vintage condition with minor signs of use',
    measurements: 'L: 220cm x W: 44cm x H: 81cm'
  },
  {
    id: '21',
    name: 'Danish Teak Sideboard Vintage TV Cabinet 1960s',
    images: ['/products/storage/2/2_1.webp', '/products/storage/2/2_2.webp', '/products/storage/2/2_3.webp', '/products/storage/2/2_4.webp', '/products/storage/2/2_5.webp', '/products/storage/2/2_6.webp', '/products/storage/2/2_7.webp', '/products/storage/2/2_8.webp', '/products/storage/2/2_9.webp'],
    price: '€1.395',
    category: 'Storage',
    isNew: true,
    description: 'Beautiful sideboard from Denmark, 1960s. This elegant sideboard is made of teak wood and features five drawers and three sliding doors with beautiful handles. Inside the cabinet are two height-adjustable shelves. A stylish, minimalist, and timeless piece of furniture that offers plenty of storage space! Ideal for use as a TV stand or media console. This piece represents the finest in Danish Modern design with its warm teak wood, clean lines, and exceptional functionality.',
    creator: 'Danish Designer',
    dateOfManufacture: '1960s',
    origin: 'Denmark',
    period: 'Mid-Century Scandinavian',
    materials: 'Teak wood, sliding doors, adjustable shelving, metal hardware',
    condition: 'Very good condition with light signs of use. See photos for details.',
    measurements: 'L: 199.5cm x D: 41.5cm x H: 80.5cm'
  },
  {
    id: '20',
    name: 'Jumbo Bookcase by Luigi Massoni for Poltrona Frau, Italy 1971',
    images: ['/products/storage/1/1_1.webp', '/products/storage/1/1_2.webp', '/products/storage/1/1_3.webp', '/products/storage/1/1_4.webp', '/products/storage/1/1_5.webp', '/products/storage/1/1_6.webp', '/products/storage/1/1_7.webp', '/products/storage/1/1_8.webp', '/products/storage/1/1_9.webp'],
    price: '€3.750',
    category: 'Storage',
    isNew: true,
    description: 'Beautiful and rare "Jumbo" bookcase/wall unit designed by Luigi Massoni for Poltrona Frau, Italy 1971. This distinctive shelving system is made of a chrome tubular frame with teak wood shelves supported by red leather straps. At the bottom is a red leather magazine holder/reading pocket. The shelves are height-adjustable, offering flexible storage solutions. The unit must be mounted to the wall at the top for stability. This iconic piece represents the innovative spirit of 1970s Italian design, combining industrial materials with luxurious leather accents.',
    creator: 'Luigi Massoni for Poltrona Frau',
    dateOfManufacture: '1971',
    origin: 'Italy',
    period: 'Mid-Century Modern / Italian Design',
    materials: 'Chrome tubular steel frame, teak wood shelves, red leather straps and magazine holder',
    condition: 'Good condition with light signs of use. Marked.',
    measurements: 'W: 120cm x D: 35cm x H: 190cm | Shelf width: 113cm'
  },
  {
    id: '19',
    name: 'Bar Guzzini Stilglass Italian 1970s',
    images: ['/products/bars/1/1_1.webp', '/products/bars/1/1_2.webp', '/products/bars/1/1_3.webp', '/products/bars/1/1_4.webp', '/products/bars/1/1_5.webp', '/products/bars/1/1_6.webp', '/products/bars/1/1_7.webp', '/products/bars/1/1_8.webp'],
    price: '€4.450',
    category: 'Bars',
    isNew: true,
    description: 'Stunning vintage bar set designed by Guzzini for Stilglass Donati, Italy 1970s. This set consists of a black and white lacquered bar, a platform to stand on, and a back wall with shelves and atmospheric lighting. The set features beautiful silver and gold-colored metal accents. The semicircular bar with mirror top contains storage space behind two beautiful glass doors and a working refrigerator. The shelves provide additional space to display your finest glasses or bottles. An inviting, atmospheric eye-catcher in any space - at home or in hospitality settings. Experience cozy moments with your guests while enjoying a cocktail and admiring the beautiful design.',
    creator: 'Guzzini for Stilglass Donati',
    dateOfManufacture: '1970s',
    origin: 'Italy',
    period: 'Mid-Century Modern / Space Age',
    materials: 'Black and white lacquered wood, glass doors, mirror top, silver and gold metal accents',
    condition: 'Good vintage condition with signs of use. Missing a section of the gold strip at the bottom of the back wall, where the wood is visible. See photos for details.',
    measurements: 'L: 130cm x D: 140cm x H: 202cm | Bar height: 95cm'
  },
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
    isNew: false
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
    isNew: false
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
    isNew: false
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
    isNew: false
  },
  {
    id: '5',
    name: 'Hollywood Regency Porcelain Flamingo Statue',
    images: ['/products/objects/5/5_1.jpg', '/products/objects/5/5_2.jpg', '/products/objects/5/5_3.jpg', '/products/objects/5/5_4.jpg', '/products/objects/5/5_5.jpg'],
    price: '€49',
    category: 'Objects',
    description: 'Elegant Hollywood Regency porcelain flamingo statue embodying the glamorous aesthetic of mid-century luxury design. This sophisticated piece features the characteristic pink and white coloration with graceful proportions that capture the flamingo\'s natural elegance. A perfect representation of the Hollywood Regency style\'s love for exotic animals and bold decorative statements.',
    creator: 'European Porcelain Manufacturer',
    dateOfManufacture: '1950s-1970s',
    origin: 'European (likely German or Italian)',
    period: 'Hollywood Regency / Mid-Century Modern',
    materials: 'Fine porcelain with hand-painted details',
    condition: 'Excellent vintage condition with original paint intact',
    measurements: 'Height: 25-30cm, Length: 20cm, Width: 8cm',
    isNew: false
  },
  
  // Featured Items
  {
    id: '7',
    name: 'Mid-Century Dual-Tone Metal Table Lamps (Pair)',
    images: ['/products/lamps/2/2_1.jpg', '/products/lamps/2/2_2.jpg', '/products/lamps/2/2_3.jpg', '/products/lamps/2/2_4.jpg', '/products/lamps/2/2_5.jpg', '/products/lamps/2/2_6.jpg','/products/lamps/2/2_7.jpg','/products/lamps/2/2_8.jpg'],
    price: '€129',
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
    price: '€59',
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
    price: '€89',
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
    name: 'Hollywood Regency Side Tables (x2)',
    images: ['/products/tables/1/1_1.jpg', '/products/tables/1/1_2.jpg', '/products/tables/1/1_3.jpg', '/products/tables/1/1_4.jpg'],
    price: '€385',
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
  },
  
  // Sofas & Chairs
  {
    id: '13',
    name: 'Art Deco Club Tub Chairs French Style (x2)',
    images: ['/products/sofas & chairs/1/1_1.png', '/products/sofas & chairs/1/1_2.png', '/products/sofas & chairs/1/1_3.png', '/products/sofas & chairs/1/1_4.png'],
    price: '€299',
    category: 'Seating',
    isNew: true,
    description: 'Exquisite pair of Art Deco club tub chairs showcasing the distinctive French style of the 1920s-30s. These elegant chairs feature the characteristic curved barrel backs and deep, comfortable seating typical of the Art Deco movement. The rich upholstery and refined proportions exemplify the luxury and sophistication of French Art Deco furniture design.',
    creator: 'French Art Deco Furniture Maker',
    dateOfManufacture: '1920s-1930s',
    origin: 'France',
    period: 'Art Deco',
    materials: 'Solid wood frame with premium fabric upholstery',
    condition: 'Excellent vintage condition with original Art Deco styling intact',
    measurements: 'Each chair: 75cm W x 80cm D x 85cm H'
  },
  {
    id: '14',
    name: 'English Armchairs Handmade in UK (x2)',
    images: ['/products/sofas & chairs/2/2_1.png', '/products/sofas & chairs/2/2_2.png', '/products/sofas & chairs/2/2_3.png'],
    price: '€299',
    category: 'Seating',
    isNew: true,
    description: 'Superb pair of handcrafted English armchairs showcasing traditional British furniture-making excellence. These chairs demonstrate the finest in UK craftsmanship with their sturdy construction, comfortable proportions, and timeless design. Each piece reflects the heritage of English furniture making with attention to detail and quality materials.',
    creator: 'British Furniture Craftsman',
    dateOfManufacture: '1950s-1960s',
    origin: 'United Kingdom',
    period: 'Mid-Century British',
    materials: 'Solid hardwood frame with traditional English upholstery',
    condition: 'Excellent condition showcasing quality British craftsmanship',
    measurements: 'Each chair: 70cm W x 75cm D x 80cm H'
  },
  {
    id: '15',
    name: 'Art Deco two seater sofa French style',
    images: ['/products/sofas & chairs/3/3_1.png'],
    price: '€249',
    category: 'Seating',
    isNew: true,
    description: 'Elegant Art Deco two-seater sofa exemplifying the sophisticated French style of the 1920s-30s. This compact loveseat features the geometric lines and luxurious proportions characteristic of the Art Deco movement. The refined upholstery and graceful curves showcase the French mastery of decorative arts during the golden age of Art Deco design.',
    creator: 'French Art Deco Designer',
    dateOfManufacture: '1920s-1930s',
    origin: 'France',
    period: 'Art Deco',
    materials: 'Solid wood frame with premium Art Deco period upholstery',
    condition: 'Very good vintage condition with authentic Art Deco character',
    measurements: '140cm W x 80cm D x 85cm H'
  },
  {
    id: '17',
    name: 'English two seater sofa handmade in UK',
    images: ['/products/sofas & chairs/4/4_1.png', '/products/sofas & chairs/4/4_2.png'],
    price: '€449',
    category: 'Seating',
    isNew: true,
    description: 'Exceptional handcrafted English two-seater sofa representing the finest tradition of British furniture making. This beautifully constructed loveseat showcases meticulous UK craftsmanship with superior materials and time-honored techniques. The comfortable proportions and quality construction reflect the heritage of English upholstery and cabinet making excellence.',
    creator: 'British Master Craftsman',
    dateOfManufacture: '1950s-1960s',
    origin: 'United Kingdom',
    period: 'Mid-Century British',
    materials: 'Premium hardwood frame with traditional English upholstery and horsehair filling',
    condition: 'Outstanding condition demonstrating superior British craftsmanship',
    measurements: '150cm W x 85cm D x 80cm H'
  },
  {
    id: '18',
    name: 'Swedish Art Deco Armchair, 1930s',
    images: ['/products/sofas & chairs/5/5_2.png','/products/sofas & chairs/5/5_3.png', '/products/sofas & chairs/5/5_1.png'],
    price: '€759',
    category: 'Seating',
    isNew: true,
    description: 'Stunning Swedish Art Deco armchair exemplifying the distinctive Nordic interpretation of the Art Deco movement. This elegant piece combines the geometric sophistication of Art Deco with Swedish craftsmanship traditions, featuring clean lines and refined proportions. The chair represents the unique Swedish approach to modernist design during the 1920s-30s era.',
    creator: 'Swedish Art Deco Designer',
    dateOfManufacture: '1920s-1930s',
    origin: 'Sweden',
    period: 'Swedish Art Deco',
    materials: 'Solid birch or beech frame with period-appropriate upholstery',
    condition: 'Excellent vintage condition with authentic Swedish Art Deco character',
    measurements: '75cm W x 80cm D x 85cm H'
  },
  
  // Additional Table
  {
    id: '16',
    name: 'Mid-Century Side Table',
    images: ['/products/tables/3/3_1.png', '/products/tables/3/3_2.png'],
    price: '€45',
    category: 'Tables',
    isNew: true,
    description: 'Elegant mid-century side table featuring clean geometric lines and quality wood construction. This versatile piece showcases the timeless appeal of 1960s design with its minimalist aesthetic and functional form.',
    creator: 'Mid-Century Furniture Designer',
    dateOfManufacture: '1960s',
    origin: 'European',
    period: 'Mid-Century Modern',
    materials: 'Solid wood with natural finish',
    condition: 'Excellent vintage condition with beautiful wood grain',
    measurements: '60cm W x 40cm D x 45cm H'
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