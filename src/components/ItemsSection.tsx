import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

interface Item {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
}

interface ItemsSectionProps {
  title: string;
  subtitle?: string;
  items: Item[];
  showViewAll?: boolean;
  viewAllPath?: string;
  maxItems?: number;
}

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 280,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    transition: 'opacity 0.3s ease',
  },
  '&:hover::before': {
    opacity: 0.2,
  },
}));

const ItemsSection = ({ 
  title, 
  subtitle, 
  items, 
  showViewAll = false, 
  viewAllPath = '/shop',
  maxItems = 6 
}: ItemsSectionProps) => {
  const displayedItems = items.slice(0, maxItems);

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="xl">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 2,
              color: 'primary.main',
              fontWeight: 400,
            }}
          >
            {title}
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {displayedItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
              <StyledCard>
                <StyledCardMedia
                  image={item.image}
                  title={item.name}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1,
                      fontFamily: 'Playfair Display',
                      fontWeight: 400,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      mb: 2,
                      lineHeight: 1.6
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'secondary.main',
                      fontWeight: 500,
                    }}
                  >
                    {item.price}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>

        {showViewAll && items.length > maxItems && (
          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button 
              variant="outlined" 
              size="large"
              href={viewAllPath}
              sx={{ 
                px: 4, 
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              View All Items
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ItemsSection; 