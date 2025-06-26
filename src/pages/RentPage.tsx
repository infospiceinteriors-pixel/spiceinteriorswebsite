import { Box, Container, Typography, Link } from '@mui/material';
import ItemsSection from '../components/ItemsSection';
import { allShopItems } from './ShopPage';

const RentPage = () => {
  const rentalItems = allShopItems.filter(item => item.featured);
  return (
    <Box>
      <Box sx={{ py: 3, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography
            variant="h2"
            align="center"
            sx={{ mb: 2, fontWeight: 400, fontSize: { xs: '1.4rem', md: '1.8rem' }, color: 'primary.main', letterSpacing: 0 }}
          >
            Rent vintage furniture
          </Typography>
          <Typography
            align="center"
            sx={{ mb: 3, color: 'text.secondary', fontSize: { xs: '1rem', md: '1.05rem' } }}
          >
            A large part of our vintage furniture is available for daily or weekly rental (longer rental possible in consultation).
          </Typography>
          <Typography
            align="center"
            sx={{ mb: 3, color: 'text.secondary', fontSize: { xs: '1rem', md: '1.05rem' } }}
          >
            For rate information and availability of the items, send an e-mail to{' '}
            <Link href="mailto:info@example.com" underline="always" color="inherit" sx={{ fontWeight: 500 }}>
              info@example.com
            </Link>{' '}
            . Useful to indicate in the e-mail which items you want to rent and for what period.
          </Typography>
          <Typography
            align="center"
            sx={{ mb: 3, color: 'text.secondary', fontSize: { xs: '1rem', md: '1.05rem' } }}
          >
            The rental price of an object is{' '}
            <Box component="span" sx={{ fontWeight: 700 }}>
              15% per day or 25% per week
            </Box>{' '}
            of the purchase price. The rental deposit is equal to the purchase price. Please note that rental orders have a minimum spend of €300 (excl. VAT & transport) per order.
          </Typography>
          <Typography align="center" sx={{ color: 'text.secondary', fontSize: { xs: '1rem', md: '1.05rem' }, mb: 1 }}>
            Transport is possible for a fee.
          </Typography>
        </Container>
      </Box>

      {/* Rental Items Section */}
      <ItemsSection
        title="Featured"
        items={rentalItems}
        showViewAll={true}
        viewAllPath="/rent"
        maxItems={6}
      />
    </Box>
  );
};

export default RentPage; 