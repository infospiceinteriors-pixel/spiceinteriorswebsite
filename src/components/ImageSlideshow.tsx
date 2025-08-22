import React, { useState, useEffect } from 'react';
import {
  Dialog,
  Box,
  IconButton,
  Typography,
  Fade,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { useScrollLock } from '../hooks/useScrollLock';

interface ImageSlideshowProps {
  images: string[];
  projectTitle: string;
  isOpen: boolean;
  initialIndex: number;
  onClose: () => void;
}

const StyledDialog = styled(Dialog)(() => ({
  '& .MuiDialog-paper': {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    maxWidth: '100vw',
    maxHeight: '100vh',
    margin: 0,
    borderRadius: 0,
    overflow: 'hidden',
  },
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
  },
}));

const SlideContainer = styled(Box)({
  position: 'relative',
  width: '100vw',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  touchAction: 'pan-x', // Enable horizontal panning for swipe gestures
  userSelect: 'none', // Prevent text selection during swipes
});

const SlideImage = styled('img')({
  maxWidth: '90%',
  maxHeight: '90%',
  objectFit: 'contain',
  userSelect: 'none',
  transition: 'opacity 0.3s ease-in-out',
});

const CloseButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 20,
  right: 20,
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
}));

const NavigationButton = styled(IconButton)<{ side: 'left' | 'right' }>(({ theme, side }) => ({
  position: 'absolute',
  top: '50%',
  [side]: 20,
  transform: 'translateY(-50%)',
  zIndex: 1000,
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'white',
  width: 60,
  height: 60,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 50,
    height: 50,
    [side]: 10,
  },
}));

const ImageInfo = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 40,
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'white',
  textAlign: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  padding: theme.spacing(2, 3),
  borderRadius: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    bottom: 20,
    padding: theme.spacing(1, 2),
  },
}));

const SwipeInstruction = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  color: 'rgba(255, 255, 255, 0.6)',
  fontSize: '0.8rem',
  fontWeight: 300,
  animation: 'fadeInOut 3s ease-in-out',
  pointerEvents: 'none',
  [theme.breakpoints.up('md')]: {
    display: 'none', // Hide on desktop since they have arrow buttons
  },
  '@keyframes fadeInOut': {
    '0%': { opacity: 0 },
    '20%': { opacity: 1 },
    '80%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
}));

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images,
  projectTitle,
  isOpen,
  initialIndex,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Use the scroll lock hook
  // useScrollLock(isOpen);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    setImageLoaded(false);
  }, [currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Touch handling for swipe gestures
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && images.length > 1) {
      handleNext();
    }
    if (isRightSwipe && images.length > 1) {
      handlePrevious();
    }
  };



  useEffect(() => {
    const handleKeyDownEvent = (event: KeyboardEvent) => {
      if (!isOpen) return;
      
      switch (event.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
      }
    };

    if (isOpen) {
      // Store current scroll position and original styles
      const scrollY = window.scrollY;
      const body = document.body;
      const html = document.documentElement;
      
      // Store original styles for both body and html
      const originalBodyOverflow = body.style.overflow;
      const originalHtmlOverflow = html.style.overflow;
      const originalBodyPosition = body.style.position;
      const originalBodyTop = body.style.top;
      const originalBodyWidth = body.style.width;
      const originalBodyHeight = body.style.height;

      // Apply scroll lock styles
      document.addEventListener('keydown', handleKeyDownEvent);
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.width = '100%';
      body.style.height = '100%';
      body.style.overflow = 'hidden';

      return () => {
        document.removeEventListener('keydown', handleKeyDownEvent);
        
        // Restore all original styles
        body.style.position = originalBodyPosition;
        body.style.top = originalBodyTop;
        body.style.left = '';
        body.style.width = originalBodyWidth;
        body.style.height = originalBodyHeight;
        body.style.overflow = originalBodyOverflow;
        html.style.overflow = originalHtmlOverflow;
        
        // Force scroll restoration with a small delay to ensure DOM is ready
        requestAnimationFrame(() => {
          window.scrollTo(0, scrollY);
          // Force reflow to ensure scrollbar appears
          document.body.offsetHeight;
        });
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <StyledDialog
      open={isOpen}
      onClose={onClose}
      fullScreen
      TransitionComponent={Fade}
      transitionDuration={300}
    >
      <SlideContainer
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <CloseButton onClick={onClose} size="large">
          <CloseIcon />
        </CloseButton>

        {images.length > 1 && (
          <>
            <NavigationButton side="left" onClick={handlePrevious}>
              <ArrowBackIosIcon />
            </NavigationButton>
            <NavigationButton side="right" onClick={handleNext}>
              <ArrowForwardIosIcon />
            </NavigationButton>
          </>
        )}

        <Fade in={imageLoaded} timeout={300}>
          <SlideImage
            src={images[currentIndex]}
            alt={`${projectTitle} - Image ${currentIndex + 1}`}
            onLoad={() => setImageLoaded(true)}
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        </Fade>

        {images.length > 1 && currentIndex === 0 && (
          <SwipeInstruction>
            Swipe left or right to navigate
          </SwipeInstruction>
        )}

        <ImageInfo>
          <Typography variant="h6" sx={{ fontSize: { xs: '0.9rem', md: '1.1rem' } }}>
            {projectTitle}
          </Typography>
          {images.length > 1 && (
            <Typography variant="body2" sx={{ mt: 0.5, opacity: 0.8 }}>
              {currentIndex + 1} of {images.length}
            </Typography>
          )}
        </ImageInfo>
      </SlideContainer>
    </StyledDialog>
  );
};

export default ImageSlideshow; 