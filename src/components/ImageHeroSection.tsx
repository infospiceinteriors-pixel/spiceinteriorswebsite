import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { lovableTokens as t } from '../theme/lovableTokens';

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

const ImageColumn = styled(Box)(() => ({
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

const ImageOverlay = styled(Box)(() => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(33, 25, 18, 0.25)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const OverlayText = styled(Typography)(({ theme }) => ({
  fontFamily: t.fontSerif,
  fontWeight: 400,
  fontSize: '2.25rem',
  lineHeight: 1.1,
  color: t.onDark,
  textAlign: 'center',
  letterSpacing: '0.08em',
  textShadow: '0 2px 12px rgba(33, 25, 18, 0.35)',
  userSelect: 'none',
  [theme.breakpoints.down('md')]: {
    fontSize: '1.75rem',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.25rem',
    letterSpacing: '0.04em',
  },
}));

interface ImageHeroSectionProps {
  onImageClick?: (word: string) => void;
}

const ImageHeroSection = ({ onImageClick }: ImageHeroSectionProps) => {
  const heroData = [
    { word: 'Luxury', image: '/hero-image-1.jpg' },
    { word: 'Interior', image: '/hero-image-2.jpg' },
    { word: 'Design', image: '/hero-image-3.jpg' },
    { word: 'Studio', image: '/hero-image-4.jpg' }
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
