import { useEffect } from 'react';
import { useImagePreloader } from '../hooks/useImageCache';

const CRITICAL_IMAGES = [
  '/intro-hero.jpg',
  '/intro-sketch.jpg',
  '/concept-plan-oegstgeest.jpg',
  '/amsterdam-apartment-1-1.jpg',
  '/HNM-06.jpg',
  '/buiksloterham-01.jpg',
  '/dehallen-01.jpg',
];

const ImagePreloader = () => {
  const { preloadImages } = useImagePreloader();

  useEffect(() => {
    const timer = setTimeout(() => {
      preloadImages(CRITICAL_IMAGES);
    }, 100);

    return () => clearTimeout(timer);
  }, [preloadImages]);

  return null;
};

export default ImagePreloader;
