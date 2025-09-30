import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '80vh',
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
  [theme.breakpoints.down('md')]: {
    height: '60vh',
  },
  [theme.breakpoints.down('sm')]: {
    height: '50vh',
  },
}));

const ImageColumn = styled(Box)(({ theme }) => ({
  flex: 1,
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
}));

const HeroImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const OverlayText = styled(Typography)(({ theme }) => ({
  color: '#FFFFFF',
  fontFamily: 'Playfair Display, serif',
  fontWeight: 600,
  fontSize: '2.5rem',
  textAlign: 'center',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  userSelect: 'none',
  [theme.breakpoints.down('lg')]: {
    fontSize: '2rem',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '1.5rem',
    letterSpacing: '0.05em',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.2rem',
    letterSpacing: '0.02em',
  },
  [theme.breakpoints.down('xs')]: {
    fontSize: '1rem',
  },
}));

interface ImageHeroSectionProps {
  onImageClick?: (word: string) => void;
}

const ImageHeroSection = ({ onImageClick }: ImageHeroSectionProps) => {
  const heroData = [
    { word: 'Some', image: '/hero-image-1.jpg' },
    { word: 'Designs', image: '/hero-image-2.jpg' },
    { word: 'Never', image: '/hero-image-3.jpg' },
    { word: 'Date', image: '/hero-image-4.jpg' }
  ];
  
  const handleImageClick = (word: string) => {
    if (onImageClick) {
      onImageClick(word);
    }
  };

  return (
    <HeroContainer>
      {heroData.map((item, index) => (
        <ImageColumn 
          key={index}
          onClick={() => handleImageClick(item.word)}
        >
          <HeroImage
            src={item.image}
            alt={`Hero image ${index + 1} - ${item.word}`}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <ImageOverlay className="overlay">
            <OverlayText className="text" variant="h2">
              {item.word}
            </OverlayText>
          </ImageOverlay>
        </ImageColumn>
      ))}
    </HeroContainer>
  );
};

export default ImageHeroSection;
