import { Box } from '@mui/material';
import ItemsSection from '../components/ItemsSection';
import { useLocation } from 'react-router-dom';
import { getAllItems } from '../utils/data';

const categories = ['All', 'Furniture', 'Lighting', 'Home Decor', 'Kitchen & Bar', 'Art', 'Rugs', 'Garden', 'New Arrivals'];

function getCategoryFromQuery(search: string): string {
  const params = new URLSearchParams(search);
  const cat = params.get('category');
  return categories.includes(cat || '') ? cat! : 'All';
}



const ShopPage = () => {
  const location = useLocation();
  const selectedCategory = getCategoryFromQuery(location.search);
  const allShopItems = getAllItems();

  const getFilteredItems = () => {
    if (selectedCategory === 'All') {
      return allShopItems;
    }
    
    if (selectedCategory === 'New Arrivals') {
      return allShopItems.filter(item => item.isNew === true);
    }
    
    // Map new categories to existing data categories
    const categoryMapping: Record<string, string[]> = {
      'Furniture': ['Tables'],
      'Lighting': ['Lamps'],
      'Home Decor': ['Objects'],
      'Kitchen & Bar': [], // No items yet
      'Art': [], // No items yet
      'Rugs': [], // No items yet
      'Garden': [] // No items yet
    };
    
    const mappedCategories = categoryMapping[selectedCategory];
    
    // If category is not in mapping or has empty array, return empty results
    if (!mappedCategories || mappedCategories.length === 0) {
      return []; // No items for unmapped categories yet
    }
    
    return allShopItems.filter(item => 
      mappedCategories.includes(item.category || '')
    );
  };

  const filteredItems = getFilteredItems();

  return (
    <Box>
      <ItemsSection
        title={selectedCategory === 'All' ? 'All Items' : selectedCategory}
        description=""
        items={filteredItems}
        showViewAll={false}
        maxItems={filteredItems.length}
      />
    </Box>
  );
};

export default ShopPage; 