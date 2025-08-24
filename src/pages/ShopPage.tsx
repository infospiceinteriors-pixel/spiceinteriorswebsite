import { Box } from '@mui/material';
import ItemsSection from '../components/ItemsSection';
import { useLocation } from 'react-router-dom';
import { getAllItems } from '../utils/data';

const categories = ['All', 'Objects', 'Lamps', 'Tables'];

function getCategoryFromQuery(search: string): string {
  const params = new URLSearchParams(search);
  const cat = params.get('category');
  return categories.includes(cat || '') ? cat! : 'All';
}

const categoryDescriptions: Record<string, string> = {
  All: 'Browse our entire curated collection of vintage objects, unique lamps, and designer tables.',
  Objects: 'Discover our fascinating collection of vintage objects, sculptures, and decorative pieces.',
  Lamps: 'Illuminate your space with our unique vintage and Hollywood Regency lighting pieces.',
  Tables: 'Complete your space with our stylish vintage tables and furniture pieces.'
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