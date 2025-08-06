import { useEffect, useRef } from 'react';

export const useScrollLock = (isLocked: boolean) => {
  const scrollPosition = useRef<number>(0);
  const originalStyles = useRef<{
    overflow: string;
    position: string;
    top: string;
    width: string;
  }>({ overflow: '', position: '', top: '', width: '' });

  useEffect(() => {
    if (isLocked) {
      // Store current state
      scrollPosition.current = window.pageYOffset;
      const body = document.body;
      
      // Store original styles
      originalStyles.current = {
        overflow: body.style.overflow,
        position: body.style.position,
        top: body.style.top,
        width: body.style.width,
      };

      // Apply lock styles
      body.style.overflow = 'hidden';
      body.style.position = 'fixed';
      body.style.top = `-${scrollPosition.current}px`;
      body.style.width = '100%';
    } else {
      // Restore original styles
      const body = document.body;
      const { overflow, position, top, width } = originalStyles.current;
      
      body.style.overflow = overflow;
      body.style.position = position;
      body.style.top = top;
      body.style.width = width;
      
      // Restore scroll position
      window.scrollTo(0, scrollPosition.current);
    }

    // Cleanup function
    return () => {
      if (isLocked) {
        const body = document.body;
        const { overflow, position, top, width } = originalStyles.current;
        
        body.style.overflow = overflow;
        body.style.position = position;
        body.style.top = top;
        body.style.width = width;
        
        window.scrollTo(0, scrollPosition.current);
      }
    };
  }, [isLocked]);
}; 