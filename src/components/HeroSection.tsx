import { Box, Button, Container, Card } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  backgroundImage?: string; // Keep for backward compatibility
}

const heroCards = [
  {
    id: 1,
    image: '/buiksloterham-01.jpg',
    buttonText: 'View Portfolio',
    linkTo: '/portfolio'
  },
  {
    id: 2,
    image: '/dehallen-01.jpg',
    buttonText: 'Our Services',
    linkTo: '/services'
  },
  {
    id: 3,
    image: '/naraina-01.jpeg',
    buttonText: 'Get In Touch',
    linkTo: '/contact'
  },
  {
    id: 4,
    image: '/hatsoff-01.jpeg',
    buttonText: 'Explore Work',
    linkTo: '/portfolio'
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
  transition: 'transform 0.3s ease',
  marginBottom: theme.spacing(2),
  '&:hover': {
    transform: 'translateY(-5px)',
    '& .image': {
      transform: 'scale(1.05)',
    }
  },
  [theme.breakpoints.down('sm')]: {
    height: '400px',
  },
}));

const CardImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.3s ease',
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

const HeroSection = ({ backgroundImage }: HeroSectionProps) => {
  const navigate = useNavigate();

  const handleCardClick = (linkTo: string) => {
    navigate(linkTo);
  };

  return (
    <HeroContainer>
      <Container maxWidth="xl">
        <GridContainer>
          {heroCards.map((card) => (
            <CardContainer key={card.id}>
              <ImageCard onClick={() => handleCardClick(card.linkTo)}>
                <CardImage
                  src={card.image}
                  alt={`Portfolio ${card.id}`}
                  className="image"
                />
              </ImageCard>
              <ActionButton 
                variant="outlined"
                onClick={() => handleCardClick(card.linkTo)}
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