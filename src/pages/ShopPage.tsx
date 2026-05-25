import { Box } from '@mui/material';
import ItemsSection from '../components/ItemsSection';
import { useLocation } from 'react-router-dom';
import { getAllItems } from '../utils/data';

const categories = ['All', 'Tables', 'Seating', 'Storage', 'Bars', 'Decor', 'Objects', 'Lamps', 'New Arrivals'];

function getCategoryFromQuery(search: string): string {
  const params = new URLSearchParams(search);
  const cat = params.get('category');
  return categories.includes(cat || '') ? cat! : 'All';
}

function getTagFromQuery(search: string): string | null {
  const params = new URLSearchParams(search);
  return params.get('tag');
}



const ShopPage = () => {
  const location = useLocation();
  const selectedCategory = getCategoryFromQuery(location.search);
  const selectedTag = getTagFromQuery(location.search);
  const allShopItems = getAllItems();

  const getFilteredItems = () => {
    let filteredItems = allShopItems;
    
    // Filter by tag first if specified
    if (selectedTag) {
      filteredItems = filteredItems.filter(item => {
        const period = item.period?.toLowerCase() || '';
        const tag = selectedTag.toLowerCase();
        
        // Check if the tag matches common vintage style terms in the period field
        if (tag === 'artdeco') {
          return period.includes('art deco') || period.includes('egyptian revival');
        } else if (tag === 'midcenturymodern') {
          return period.includes('mid-century') || period.includes('1950s') || period.includes('1960s');
        } else if (tag === 'hollywoodregency') {
          return period.includes('hollywood regency') || period.includes('regency');
        }
        
        return period.includes(tag);
      });
    }
    
    // Then filter by category if not 'All'
    if (selectedCategory === 'All') {
      return filteredItems;
    }
    
    if (selectedCategory === 'New Arrivals') {
      return filteredItems.filter(item => item.isNew === true);
    }
    
    // Filter by category - categories match the data category names directly
    return filteredItems.filter(item => item.category === selectedCategory);
  };

  const filteredItems = getFilteredItems();

  const getPageTitle = () => {
    if (selectedCategory === 'All' && !selectedTag) {
      return 'Design Collection';
    }

    if (selectedTag) {
      const tagDisplayNames: Record<string, string> = {
        'artdeco': 'Art Deco',
        'midcenturymodern': 'Mid-Century Modern',
        'hollywoodregency': 'Hollywood Regency'
      };
      return tagDisplayNames[selectedTag.toLowerCase()] || selectedTag;
    }
    return selectedCategory;
  };

  return (
    <Box>
      <ItemsSection
        title={getPageTitle()}
        description=""
        items={filteredItems}
        showViewAll={false}
        maxItems={filteredItems.length}
      />
    </Box>
  );
};

export default ShopPage; 