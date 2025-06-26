import { Box, Typography, Grid, Card, CardMedia, CardContent, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

interface Item {
  id: string;
  name: string;
  images: string[];
  price: string;
  category?: string;
}

interface ItemsSectionProps {
  title: string;
  description?: string;
  items: Item[];
  showViewAll?: boolean;
  viewAllPath?: string;
  maxItems?: number;
}

const StyledCard = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  border: 'none',
  borderRadius: 0,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  background: 'none',
  transition: 'none',
  '&:hover': {
    boxShadow: 'none',
    background: 'none',
  },
}));

const ImageWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
});

const FadeImage = styled('img')<{
  visible: boolean;
}>(({ visible }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'opacity 0.4s',
  opacity: visible ? 1 : 0,
  pointerEvents: 'none',
}));

const CardGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: 0,
  width: '100%',
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
}));

const ItemCard = ({ item }: { item: Item }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <StyledCard
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      sx={{ cursor: item.images[1] ? 'pointer' : 'default' }}
    >
      <ImageWrapper>
        <FadeImage
          src={item.images[0]}
          alt={item.name}
          visible={!hovered || !item.images[1]}
        />
        {item.images[1] && (
          <FadeImage
            src={item.images[1]}
            alt={item.name + ' alt'}
            visible={hovered}
          />
        )}
      </ImageWrapper>
      <CardContent sx={{ flexGrow: 1, p: 2, pb: 3, pt: 3, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'Playfair Display',
            fontWeight: 600,
            fontSize: { xs: '1.1rem', md: '1.15rem', lg: '1.2rem' },
            textAlign: 'left',
            flex: 1,
            pr: 2,
            textTransform: 'uppercase',
            letterSpacing: 0,
            lineHeight: 1.2
          }}
        >
          {item.name}
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            fontWeight: 600,
            fontSize: { xs: '1.1rem', md: '1.15rem', lg: '1.2rem' },
            textAlign: 'right',
            color: 'text.primary',
            whiteSpace: 'nowrap',
            ml: 2
          }}
        >
          {item.price}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

const ItemsSection = ({ 
  title, 
  description, 
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
          {description && (
            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2, fontSize: '1.05rem', textAlign: 'center', maxWidth: 500, mx: 'auto' }}>
              {description}
            </Typography>
          )}
        </Box>

        <CardGrid>
          {displayedItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </CardGrid>

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