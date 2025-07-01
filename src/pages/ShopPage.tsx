import { Box, Container, Typography } from '@mui/material';
// import ItemsSection from '../components/ItemsSection';
import { useLocation } from 'react-router-dom';
// import { getAllItems } from '../utils/data';

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
  // const allShopItems = getAllItems();

  // const filteredItems = selectedCategory === 'All'
  //   ? allShopItems
  //   : allShopItems.filter(item => item.category === selectedCategory);

  return (
    <Box>
      <Box sx={{ py: 8, backgroundColor: 'background.default', minHeight: '60vh' }}>
        <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Box sx={{ textAlign: 'center' }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 3,
                color: 'primary.main',
                fontWeight: 400,
              }}
            >
              {selectedCategory === 'All' ? 'All Items' : selectedCategory}
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                color: 'text.secondary', 
                mb: 4, 
                fontSize: '1.05rem', 
                maxWidth: 500, 
                mx: 'auto' 
              }}
            >
              {categoryDescriptions[selectedCategory]}
            </Typography>
            
            <Box sx={{ mt: 6 }}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontFamily: 'Playfair Display',
                  fontWeight: 400,
                  fontSize: { xs: '2rem', md: '2.5rem' },
                  color: 'text.primary',
                  mb: 2
                }}
              >
                Coming Soon
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  maxWidth: 400,
                  mx: 'auto'
                }}
              >
                Our shop is currently being updated with exciting new pieces. Please check back soon or contact us for inquiries.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
      
      {/* Temporarily removed items section */}
      {/* <ItemsSection
        title={selectedCategory === 'All' ? 'All Items' : selectedCategory}
        description={categoryDescriptions[selectedCategory]}
        items={filteredItems}
        showViewAll={false}
        maxItems={filteredItems.length}
      /> */}
    </Box>
  );
};

export default ShopPage; 