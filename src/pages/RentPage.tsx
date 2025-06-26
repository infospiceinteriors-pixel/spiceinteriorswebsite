import { Box, Container, Typography, Link } from '@mui/material';
import ItemsSection from '../components/ItemsSection';

// Dummy data for rental items
const rentalItems = [
  {
    id: 'rent-1',
    name: 'Event Sofa Set',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€150/day',
    category: 'Furniture'
  },
  {
    id: 'rent-2',
    name: 'Dining Table & Chairs',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€120/day',
    category: 'Furniture'
  },
  {
    id: 'rent-3',
    name: 'Lighting Package',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€80/day',
    category: 'Lighting'
  },
  {
    id: 'rent-4',
    name: 'Decorative Accessories',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€60/day',
    category: 'Accessories'
  },
  {
    id: 'rent-5',
    name: 'Rug Collection',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€40/day',
    category: 'Textiles'
  },
  {
    id: 'rent-6',
    name: 'Bar Setup',
    images: ['/placeholder.jpg', '/placeholder.jpg'],
    price: '€100/day',
    category: 'Furniture'
  }
];

const RentPage = () => {
  return (
    <Box>
      <Box sx={{ py: 10, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography
            variant="h1"
            align="center"
            sx={{ mb: 5, fontWeight: 400, fontSize: { xs: '2.5rem', md: '3.5rem' } }}
          >
            Rent vintage furniture
          </Typography>
          <Typography
            align="center"
            sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: '1.1rem', md: '1.25rem' } }}
          >
            A large part of our vintage furniture is available for daily or weekly rental (longer rental possible in consultation).
          </Typography>
          <Typography
            align="center"
            sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: '1.1rem', md: '1.25rem' } }}
          >
            For rate information and availability of the items, send an e-mail to{' '}
            <Link href="mailto:info@example.com" underline="always" color="inherit" sx={{ fontWeight: 500 }}>
              info@example.com
            </Link>{' '}
            . Useful to indicate in the e-mail which items you want to rent and for what period.
          </Typography>
          <Typography
            align="center"
            sx={{ mb: 4, color: 'text.secondary', fontSize: { xs: '1.1rem', md: '1.25rem' } }}
          >
            The rental price of an object is{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              15% per day or 25% per week
            </Box>{' '}
            of the purchase price. The rental deposit is equal to the purchase price. Please note that rental orders have a minimum spend of €300 (excl. VAT & transport) per order.
          </Typography>
          <Typography align="center" sx={{ color: 'text.secondary', fontSize: { xs: '1.1rem', md: '1.25rem' } }}>
            Transport is possible for a fee.
          </Typography>
        </Container>
      </Box>

      {/* Rental Items Section */}
      <ItemsSection
        title="Available for Rent"
        items={rentalItems}
        showViewAll={true}
        viewAllPath="/rent"
        maxItems={6}
      />
    </Box>
  );
};

export default RentPage; 