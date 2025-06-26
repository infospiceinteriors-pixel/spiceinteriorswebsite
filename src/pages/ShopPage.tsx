import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ItemsSection from '../components/ItemsSection';
import { useLocation, useNavigate } from 'react-router-dom';

// Extended dummy data for shop items
export const allShopItems = [
  {
    id: '1',
    name: 'Modern Dining Chair',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€450',
    category: 'Furniture',
    featured: true
  },
  {
    id: '2',
    name: 'Art Deco Side Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€320',
    category: 'Furniture',
    featured: false
  },
  {
    id: '3',
    name: 'Scandinavian Sofa',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€1,200',
    category: 'Furniture',
    featured: true
  },
  {
    id: '4',
    name: 'Industrial Pendant Light',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€180',
    category: 'Lighting',
    featured: false
  },
  {
    id: '5',
    name: 'Bohemian Rug',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€280',
    category: 'Textiles',
    featured: true
  },
  {
    id: '6',
    name: 'Mid-Century Coffee Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€390',
    category: 'Furniture',
    featured: false
  },
  {
    id: '7',
    name: 'Velvet Armchair',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€650',
    category: 'Furniture',
    featured: false
  },
  {
    id: '8',
    name: 'Crystal Chandelier',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€850',
    category: 'Lighting',
    featured: false
  },
  {
    id: '9',
    name: 'Linen Curtain',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€120',
    category: 'Textiles',
    featured: false
  },
  {
    id: '10',
    name: 'Console Table',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€420',
    category: 'Furniture',
    featured: false
  },
  {
    id: '11',
    name: 'Table Lamp',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€95',
    category: 'Lighting',
    featured: false
  },
  {
    id: '12',
    name: 'Throw Pillow',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€45',
    category: 'Textiles',
    featured: false
  }
];

const categories = ['All', 'Furniture', 'Lighting', 'Textiles'];

function getCategoryFromQuery(search: string): string {
  const params = new URLSearchParams(search);
  const cat = params.get('category');
  return categories.includes(cat || '') ? cat! : 'All';
}

const categoryDescriptions: Record<string, string> = {
  All: 'Browse our entire curated collection of premium furniture, lighting, and textiles.',
  Furniture: 'Discover our curated selection of premium furniture for every room.',
  Lighting: 'Illuminate your space with our unique lighting pieces.',
  Textiles: 'Add warmth and texture with our luxury textiles and soft furnishings.'
};

const ShopPage = () => {
  const location = useLocation();
  const selectedCategory = getCategoryFromQuery(location.search);

  const filteredItems = selectedCategory === 'All'
    ? allShopItems
    : allShopItems.filter(item => item.category === selectedCategory);

  return (
    <Box>
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