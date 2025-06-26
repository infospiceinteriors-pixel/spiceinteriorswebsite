import { useState } from 'react';
import { Box, Container, Typography, Grid, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import ItemsSection from '../components/ItemsSection';

// Extended dummy data for shop items
const allShopItems = [
  {
    id: '1',
    name: 'Modern Dining Chair',
    description: 'Elegant dining chair with clean lines and premium upholstery. Perfect for contemporary dining spaces.',
    price: '€450',
    image: '/placeholder.jpg',
    category: 'Furniture'
  },
  {
    id: '2',
    name: 'Art Deco Side Table',
    description: 'Vintage-inspired side table with brass accents and marble top. Adds sophistication to any room.',
    price: '€320',
    image: '/placeholder.jpg',
    category: 'Furniture'
  },
  {
    id: '3',
    name: 'Scandinavian Sofa',
    description: 'Minimalist sofa with premium fabric and comfortable seating. Ideal for modern living rooms.',
    price: '€1,200',
    image: '/placeholder.jpg',
    category: 'Furniture'
  },
  {
    id: '4',
    name: 'Industrial Pendant Light',
    description: 'Statement pendant light with exposed bulb design. Perfect for kitchen islands or dining areas.',
    price: '€180',
    image: '/placeholder.jpg',
    category: 'Lighting'
  },
  {
    id: '5',
    name: 'Bohemian Rug',
    description: 'Hand-woven rug with intricate patterns and natural fibers. Adds warmth and texture to any space.',
    price: '€280',
    image: '/placeholder.jpg',
    category: 'Textiles'
  },
  {
    id: '6',
    name: 'Mid-Century Coffee Table',
    description: 'Timeless coffee table with walnut wood and clean design. A perfect centerpiece for living rooms.',
    price: '€390',
    image: '/placeholder.jpg',
    category: 'Furniture'
  },
  {
    id: '7',
    name: 'Velvet Armchair',
    description: 'Luxurious velvet armchair with gold-finished legs. A statement piece for any living space.',
    price: '€650',
    image: '/placeholder.jpg',
    category: 'Furniture'
  },
  {
    id: '8',
    name: 'Crystal Chandelier',
    description: 'Elegant crystal chandelier with modern design. Creates a stunning focal point in any room.',
    price: '€850',
    image: '/placeholder.jpg',
    category: 'Lighting'
  },
  {
    id: '9',
    name: 'Linen Curtains',
    description: 'Premium linen curtains with natural texture. Available in various colors and lengths.',
    price: '€120',
    image: '/placeholder.jpg',
    category: 'Textiles'
  },
  {
    id: '10',
    name: 'Console Table',
    description: 'Sleek console table with storage drawers. Perfect for entryways or behind sofas.',
    price: '€420',
    image: '/placeholder.jpg',
    category: 'Furniture'
  },
  {
    id: '11',
    name: 'Table Lamp',
    description: 'Contemporary table lamp with adjustable head. Provides both style and functionality.',
    price: '€95',
    image: '/placeholder.jpg',
    category: 'Lighting'
  },
  {
    id: '12',
    name: 'Throw Pillows',
    description: 'Decorative throw pillows with premium fabrics. Mix and match for personalized style.',
    price: '€45',
    image: '/placeholder.jpg',
    category: 'Textiles'
  }
];

const categories = ['All', 'Furniture', 'Lighting', 'Textiles'];

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value);
  };

  const filteredItems = selectedCategory === 'All' 
    ? allShopItems 
    : allShopItems.filter(item => item.category === selectedCategory);

  return (
    <Box>
      <Box sx={{ 
        py: 8, 
        backgroundColor: 'background.paper',
        borderBottom: '1px solid rgba(212, 165, 116, 0.2)'
      }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                mb: 2,
                color: 'primary.main',
                fontWeight: 400,
              }}
            >
              Shop Our Collection
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: 600,
                mx: 'auto',
                mb: 4
              }}
            >
              Discover our curated selection of premium furniture, lighting, and accessories. 
              Each piece is carefully selected to bring style and functionality to your home.
            </Typography>
            
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                value={selectedCategory}
                label="Category"
                onChange={handleCategoryChange}
                sx={{ 
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(212, 165, 116, 0.3)',
                  },
                  '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'rgba(212, 165, 116, 0.5)',
                  },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'secondary.main',
                  },
                }}
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Container>
      </Box>

      <ItemsSection
        title={selectedCategory === 'All' ? 'All Items' : selectedCategory}
        items={filteredItems}
        showViewAll={false}
        maxItems={filteredItems.length}
      />
    </Box>
  );
};

export default ShopPage; 