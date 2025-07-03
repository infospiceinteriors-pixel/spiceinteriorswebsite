import { useEffect } from 'react';
import { useImagePreloader } from '../hooks/useImageCache';

// Define critical images that should be preloaded
const CRITICAL_IMAGES = [
  // Hero section images
  '/buiksloterham-01.jpg',
  '/dehallen-01.jpg', 
  '/naraina-01.jpeg',
  '/hatsoff-01.jpeg',
  
  // Common UI images
  '/placeholder.jpg',
  
  // Services section images
  '/services-01.jpg',
  '/services-03.jpg',
  '/services-05.jpg',
];

// Journal images that are likely to be accessed soon
const JOURNAL_IMAGES = [
  '/dehallen-02.jpg',
  '/dehallen-03.jpg',
  '/buiksloterham-02.jpg',
  '/buiksloterham-03.jpg',
];

interface ImagePreloaderProps {
  preloadJournalImages?: boolean;
}

const ImagePreloader: React.FC<ImagePreloaderProps> = ({ 
  preloadJournalImages = false 
}) => {
  const { preloadImages } = useImagePreloader();

  useEffect(() => {
    const imagesToPreload = [...CRITICAL_IMAGES];
    
    if (preloadJournalImages) {
      imagesToPreload.push(...JOURNAL_IMAGES);
    }
    
    // Preload images after a short delay to not block initial render
    const timer = setTimeout(() => {
      preloadImages(imagesToPreload);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [preloadImages, preloadJournalImages]);

  // This component doesn't render anything visible
  // It just handles preloading in the background
  return null;
};

export default ImagePreloader; 