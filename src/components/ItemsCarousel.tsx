import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, Button, Container, Card, CardContent, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Item } from '../utils/data';

interface ItemsCarouselProps {
  title: string;
  description?: string;
  items: Item[];
  showViewAll?: boolean;
  viewAllPath?: string;
  maxItems?: number;
}

const CarouselContainer = styled(Box)(() => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
}));

const CarouselTrack = styled(Box)<{ translateX: number }>(({ translateX }) => ({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  transform: `translateX(${translateX}%)`,
  width: '100%',
}));

const CarouselSlide = styled(Box)(({ theme }) => ({
  minWidth: '100%',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: theme.spacing(3),
  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)', // Changed from 1fr to 2fr for mobile
  },
}));

const CarouselNavigation = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '24px',
  marginTop: '32px',
}));

const NavButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '50%',
  width: 48,
  height: 48,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:disabled': {
    opacity: 0.3,
  },
}));

const CarouselDots = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
}));

const Dot = styled(Box)<{ active: boolean }>(({ active, theme }) => ({
  width: 8,
  height: 8,
  borderRadius: '50%',
  backgroundColor: active ? theme.palette.primary.main : theme.palette.divider,
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
}));

const StyledCard = styled(Card)(() => ({
  boxShadow: 'none',
  border: 'none',
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  background: 'none',
  transition: 'none',
  height: 'auto',
  width: '100%',
  maxWidth: '100%',
  '&:hover': {
    boxShadow: 'none',
    background: 'none',
  },
}));

const ImageWrapper = styled('div')({
  position: 'relative',
  width: '100%',
  aspectRatio: '3 / 4', // 3:4 aspect ratio as requested
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

const ItemCard = ({ item }: { item: Item }) => {
  const [hovered, setHovered] = React.useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/shop/item/${item.id}`);
  };

  return (
    <StyledCard
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
      sx={{ cursor: 'pointer' }}
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
      <CardContent sx={{ 
        p: 2, 
        pb: 2, 
        pt: 2, 
        display: 'flex', 
        flexDirection: 'column',
        alignItems: 'flex-start', 
        justifyContent: 'flex-start', 
        width: '100%',
        minHeight: '90px',
        flex: '0 0 auto',
        overflow: 'hidden'
      }}>
        <Typography 
          variant="h6" 
          sx={{ 
            fontFamily: 'Playfair Display',
            fontWeight: 600,
            fontSize: { xs: '1.1rem', md: '1.15rem', lg: '1.2rem' },
            textAlign: 'left',
            width: '100%',
            textTransform: 'none',
            letterSpacing: 0,
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            whiteSpace: 'normal'
          }}
        >
          {item.name}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

const ItemsCarousel = ({ 
  title, 
  description, 
  items,
  showViewAll = false, 
  viewAllPath = '/shop',
  maxItems = 8 
}: ItemsCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  
  const displayedItems = items.slice(0, maxItems);
  
  // Detect mobile breakpoint
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 600); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Dynamic items per slide based on screen size
  const itemsPerSlide = isMobile ? 2 : 4;
  const totalSlides = Math.ceil(displayedItems.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      nextSlide();
    }
    if (isRightSwipe && currentSlide > 0) {
      prevSlide();
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Create slides with dynamic items per slide
  const slides = [];
  for (let i = 0; i < totalSlides; i++) {
    const slideItems = displayedItems.slice(i * itemsPerSlide, (i + 1) * itemsPerSlide);
    slides.push(slideItems);
  }

  return (
    <Box sx={{ py: 4, backgroundColor: 'background.default' }}>
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
            {title}
          </Typography>
          {description && (
            <Typography variant="subtitle1" sx={{ color: 'text.secondary', mb: 2, fontSize: '1.05rem', textAlign: 'center', maxWidth: 500, mx: 'auto' }}>
              {description}
            </Typography>
          )}
        </Box>

        {totalSlides > 0 && (
          <>
            <CarouselContainer
              ref={carouselRef}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <CarouselTrack translateX={-currentSlide * 100}>
                {slides.map((slideItems, slideIndex) => (
                  <CarouselSlide key={slideIndex}>
                    {slideItems.map((item) => (
                      <ItemCard key={item.id} item={item} />
                    ))}
                  </CarouselSlide>
                ))}
              </CarouselTrack>
            </CarouselContainer>

            {totalSlides > 1 && (
              <CarouselNavigation>
                <NavButton onClick={prevSlide} disabled={currentSlide === 0}>
                  <ArrowBackIosIcon />
                </NavButton>
                
                <CarouselDots>
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <Dot
                      key={index}
                      active={index === currentSlide}
                      onClick={() => goToSlide(index)}
                    />
                  ))}
                </CarouselDots>
                
                <NavButton onClick={nextSlide} disabled={currentSlide === totalSlides - 1}>
                  <ArrowForwardIosIcon />
                </NavButton>
              </CarouselNavigation>
            )}
          </>
        )}

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
              View All
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default ItemsCarousel;
