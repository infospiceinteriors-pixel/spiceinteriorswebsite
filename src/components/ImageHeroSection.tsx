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

const OverlayText = styled('span')(({ theme }) => ({
  fontFamily: t.fontSerif,
  fontWeight: 400,
  fontSize: '0.875rem',
  lineHeight: 1.05,
  color: t.onDark,
  textAlign: 'center',
  textShadow: '0 2px 12px rgba(33, 25, 18, 0.35)',
  userSelect: 'none',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.75rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '2.75rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '3.25rem',
  },
}));

interface ImageHeroSectionProps {
  onImageClick?: (word: string) => void;
}

const ImageHeroSection = ({ onImageClick }: ImageHeroSectionProps) => {
  const heroData = [
    { word: 'Some', image: '/hero-image-1.jpg', alt: 'Interior with warm natural light' },
    { word: 'Designs', image: '/hero-image-2.jpg', alt: 'Layered textures and vintage furniture' },
    { word: 'Never', image: '/hero-image-3.jpg', alt: 'Calm residential living space' },
    { word: 'Date', image: '/hero-image-4.jpg', alt: 'Timeless architectural interior detail' },
  ];

  const handleImageClick = (word: string) => {
    if (onImageClick) {
      onImageClick(word);
    }
  };

  return (
    <HeroContainer>
      <Typography
        component="h1"
        sx={{
          position: 'absolute',
          width: 1,
          height: 1,
          p: 0,
          m: -1,
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        Spice Interiors — House tours and inspiration for a collected home beyond beige
      </Typography>
      {heroData.map((item, index) => (
        <ImageColumn
          key={item.word}
          onClick={() => handleImageClick(item.word)}
        >
          <HeroImage
            src={item.image}
            alt={item.alt}
            loading={index === 0 ? 'eager' : 'lazy'}
          />
          <ImageOverlay className="overlay">
            <OverlayText className="text">
              {item.word}
            </OverlayText>
          </ImageOverlay>
        </ImageColumn>
      ))}
    </HeroContainer>
  );
};

export default ImageHeroSection;
