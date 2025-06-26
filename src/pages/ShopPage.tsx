import { useState } from 'react';
import { Box, Container, Typography, Grid, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import ItemsSection from '../components/ItemsSection';

// Extended dummy data for shop items
const allShopItems = [
  {
    id: '1',
    name: 'Modern Dining Chair',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€450',
    category: 'Furniture'
  },
  {
    id: '2',
    name: 'Art Deco Side Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€320',
    category: 'Furniture'
  },
  {
    id: '3',
    name: 'Scandinavian Sofa',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€1,200',
    category: 'Furniture'
  },
  {
    id: '4',
    name: 'Industrial Pendant Light',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€180',
    category: 'Lighting'
  },
  {
    id: '5',
    name: 'Bohemian Rug',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€280',
    category: 'Textiles'
  },
  {
    id: '6',
    name: 'Mid-Century Coffee Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€390',
    category: 'Furniture'
  },
  {
    id: '7',
    name: 'Velvet Armchair',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€650',
    category: 'Furniture'
  },
  {
    id: '8',
    name: 'Crystal Chandelier',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€850',
    category: 'Lighting'
  },
  {
    id: '9',
    name: 'Linen Curtains',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€120',
    category: 'Textiles'
  },
  {
    id: '10',
    name: 'Console Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€420',
    category: 'Furniture'
  },
  {
    id: '11',
    name: 'Table Lamp',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€95',
    category: 'Lighting'
  },
  {
    id: '12',
    name: 'Throw Pillows',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€45',
    category: 'Textiles'
  }
];

const categories = ['All', 'Furniture', 'Lighting', 'Textiles'];

const categoryDescriptions: Record<string, string> = {
  All: 'Browse our entire curated collection of premium furniture, lighting, and textiles.',
  Furniture: 'Discover our curated selection of premium furniture for every room.',
  Lighting: 'Illuminate your space with our unique lighting pieces.',
  Textiles: 'Add warmth and texture with our luxury textiles and soft furnishings.'
};

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
      <Box sx={{ py: 2, backgroundColor: 'background.paper', borderBottom: '1px solid rgba(212, 165, 116, 0.2)' }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Category' }}
              sx={{
                minWidth: 220,
                borderRadius: 0,
                background: 'none',
                border: '1px solid #d4a574',
                fontSize: '1rem',
                fontWeight: 400,
                px: 2,
                py: 1.5,
                '& .MuiSelect-select': {
                  padding: '10px 14px',
                },
                '& fieldset': { border: 'none' },
                boxShadow: 'none',
                outline: 'none',
              }}
              variant="outlined"
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </Box>
        </Container>
      </Box>

      <ItemsSection
        title={selectedCategory === 'All' ? 'All Items' : selectedCategory}
        description={categoryDescriptions[selectedCategory]}
        items={filteredItems}
        showViewAll={false}
        maxItems={filteredItems.length}
      />
    </Box>
  );
};

export default ShopPage; 