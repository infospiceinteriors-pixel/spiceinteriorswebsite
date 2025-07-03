import { Box, Button, Container, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import CachedImage from './CachedImage';

const heroCards = [
  {
    id: 1,
    image: '/cafe-americano-ams-01.jpg',
    buttonText: 'Socials',
    linkTo: 'https://www.instagram.com/4nkur_gupta/',
    external: true
  },
  {
    id: 2,
    image: '/services-01.jpg',
    buttonText: 'Shop my collection',
    linkTo: 'https://www.instagram.com/spice_int/',
    external: true
  },
  {
    id: 3,
    image: '/lamps-01.jpg',
    buttonText: 'Shop lamps',
    linkTo: 'https://www.instagram.com/spice_int/',
    external: true
  },
  {
    id: 4,
    image: '/dehallen-01.jpg',
    buttonText: 'Our Services',
    linkTo: '/services',
    external: false
  }
];

const HeroContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  backgroundColor: 'background.default',
  minHeight: '90vh',
  display: 'flex',
  alignItems: 'center',
}));

const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  gap: theme.spacing(3),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
  },
}));

const CardContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const ImageCard = styled(Card)(({ theme }) => ({
  height: '500px',
  position: 'relative',
  overflow: 'hidden',
  borderRadius: 0,
  boxShadow: 'none',
  border: 'none',
  cursor: 'pointer',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    height: '400px',
  },
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

const HeroSection = () => {
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
    <HeroContainer>
      <Container maxWidth="xl">
        <GridContainer>
          {heroCards.map((card) => (
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
    </HeroContainer>
  );
};

export default HeroSection; 