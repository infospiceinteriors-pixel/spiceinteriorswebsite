import { useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import ItemsSection from '../components/ItemsSection';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllItems } from '../utils/data';

const categories = ['All', 'Furniture', 'Lighting', 'Textiles', 'Decor'];

function getCategoryFromQuery(search: string): string {
  const params = new URLSearchParams(search);
  const cat = params.get('category');
  return categories.includes(cat || '') ? cat! : 'All';
}

const categoryDescriptions: Record<string, string> = {
  All: 'Browse our entire curated collection of premium furniture, lighting, and textiles.',
  Furniture: 'Discover our curated selection of premium furniture for every room.',
  Lighting: 'Illuminate your space with our unique lighting pieces.',
  Textiles: 'Add warmth and texture with our luxury textiles and soft furnishings.',
  Decor: 'Complete your space with our carefully selected decorative pieces.'
};

const ShopPage = () => {
  const location = useLocation();
  const selectedCategory = getCategoryFromQuery(location.search);
  const allShopItems = getAllItems();

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