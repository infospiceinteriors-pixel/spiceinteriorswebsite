import { Box, Button, Container, Card, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import CachedImage from './CachedImage';

const categoryCards = [
  {
    id: 1,
    image: '/products/tables/1/1_1.jpg',
    buttonText: 'Tables',
    linkTo: '/shop?category=Tables',
    external: false
  },
  {
    id: 2,
    image: '/products/sofas & chairs/1/1_1.png',
    buttonText: 'Seating',
    linkTo: '/shop?category=Seating',
    external: false
  },
  {
    id: 3,
    image: '/lamp-1.jpg',
    buttonText: 'Lighting',
    linkTo: '/shop?category=Lighting',
    external: false
  },
  {
    id: 4,
    image: '/products/objects/1/1_1.jpg',
    buttonText: 'Objects',
    linkTo: '/shop?category=Home Decor',
    external: false
  }
];

const CategoryContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: 'background.default',
}));

const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(2.5),
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 items per row on mobile
    gap: theme.spacing(2),
  },
}));

const CardContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const ImageCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 0,
  boxShadow: 'none',
  border: 'none',
  cursor: 'pointer',
  marginBottom: theme.spacing(2),
  aspectRatio: '3 / 4', // 3:4 aspect ratio as requested
  width: '100%',
}));





const ActionButton = styled(Button)(({ theme }) => ({
  borderColor: theme.palette.primary.main,
  color: theme.palette.primary.main,
  textTransform: 'none',
  fontSize: '0.9rem',
  padding: '8px 24px',
  alignSelf: 'center',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const CategorySection = () => {
  const navigate = useNavigate();

  const handleCardClick = (linkTo: string, external: boolean) => {
    if (external) {
      window.open(linkTo, '_blank');
    } else {
      navigate(linkTo);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }
  };

  return (
    <CategoryContainer>
      <Container maxWidth={false} sx={{ maxWidth: '1400px', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 2,
              color: 'primary.main',
              fontWeight: 400,
            }}
          >
            Categories
          </Typography>
        </Box>

        <GridContainer>
          {categoryCards.map((card) => (
            <CardContainer key={card.id}>
              <ImageCard onClick={() => handleCardClick(card.linkTo, card.external)}>
                <CachedImage
                  src={card.image}
                  alt={`Project ${card.id}`}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  preload={true}
                />
              </ImageCard>
              <ActionButton 
                variant="outlined"
                onClick={() => handleCardClick(card.linkTo, card.external)}
              >
                {card.buttonText}
              </ActionButton>
            </CardContainer>
          ))}
        </GridContainer>
      </Container>
    </CategoryContainer>
  );
};

export default CategorySection; 