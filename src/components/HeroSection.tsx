import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface HeroSectionProps {
  backgroundImage?: string; // Keep for backward compatibility, but won't be used
}

const portfolioImages = [
  '/buiksloterham-02.jpg', 
  '/buiksloterham-01.jpg', 
  '/dehallen-01.jpg',
  '/buiksloterham-03.jpg', 
  '/dehallen-02.jpg',
];

const HeroContainer = styled(Box)(() => ({
  position: 'relative',
  height: '90vh',
  minHeight: 600,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}));

const SlideImage = styled('img')<{ isActive: boolean }>(({ isActive }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  opacity: isActive ? 1 : 0,
  transition: 'opacity 1s ease-in-out',
  zIndex: isActive ? 1 : 0,
}));

const NavigationDots = styled(Box)(() => ({
  position: 'absolute',
  bottom: 30,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: 10,
  zIndex: 10,
}));

const Dot = styled(Box)<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: isActive ? theme.palette.primary.main : 'rgba(255, 255, 255, 0.5)',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  border: '2px solid rgba(255, 255, 255, 0.8)',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    transform: 'scale(1.2)',
  },
}));

const HeroSection = ({ backgroundImage }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <HeroContainer>
      {/* Slide Images */}
      {portfolioImages.map((image, index) => (
        <SlideImage
          key={index}
          src={image}
          alt={`Portfolio ${index + 1}`}
          isActive={index === currentSlide}
        />
      ))}

      {/* Navigation Dots */}
      <NavigationDots>
        {portfolioImages.map((_, index) => (
          <Dot
            key={index}
            isActive={index === currentSlide}
            onClick={() => goToSlide(index)}
          />
        ))}
      </NavigationDots>
    </HeroContainer>
  );
};

export default HeroSection; 