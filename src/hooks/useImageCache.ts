import { useState, useEffect, useCallback } from 'react';

interface ImageCacheEntry {
  url: string;
  blob: Blob;
  timestamp: number;
}

class ImageCache {
  private cache = new Map<string, ImageCacheEntry>();
  private readonly MAX_CACHE_SIZE = 50; // Maximum number of images to cache
  private readonly CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  async get(url: string): Promise<string | null> {
    const entry = this.cache.get(url);
    
    if (entry) {
      // Check if cache entry is still valid
      if (Date.now() - entry.timestamp < this.CACHE_DURATION) {
        return URL.createObjectURL(entry.blob);
      } else {
        // Remove expired entry
        this.cache.delete(url);
        URL.revokeObjectURL(URL.createObjectURL(entry.blob));
      }
    }
    
    return null;
  }

  async set(url: string, blob: Blob): Promise<void> {
    // Clean up old entries if cache is full
    if (this.cache.size >= this.MAX_CACHE_SIZE) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey) {
        const entry = this.cache.get(firstKey);
        if (entry) {
          URL.revokeObjectURL(URL.createObjectURL(entry.blob));
        }
        this.cache.delete(firstKey);
      }
    }
    
    this.cache.set(url, {
      url,
      blob,
      timestamp: Date.now(),
    });
  }

  clear(): void {
    this.cache.forEach(entry => {
      URL.revokeObjectURL(URL.createObjectURL(entry.blob));
    });
    this.cache.clear();
  }

  preload(urls: string[]): Promise<void[]> {
    return Promise.all(
      urls.map(async (url) => {
        const cached = await this.get(url);
        if (!cached) {
          try {
            const response = await fetch(url);
            const blob = await response.blob();
            await this.set(url, blob);
          } catch (error) {
            console.warn(`Failed to preload image: ${url}`, error);
          }
        }
      })
    );
  }
}

// Global image cache instance
const imageCache = new ImageCache();

export const useImageCache = (src: string, preload: boolean = false) => {
  const [cachedSrc, setCachedSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadImage = useCallback(async (url: string) => {
    if (!url) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      // First, check if image is already cached
      const cached = await imageCache.get(url);
      if (cached) {
        setCachedSrc(cached);
        setIsLoading(false);
        return;
      }
      
      // If not cached, fetch and cache it
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load image: ${response.statusText}`);
      }
      
      const blob = await response.blob();
      await imageCache.set(url, blob);
      
      const objectUrl = URL.createObjectURL(blob);
      setCachedSrc(objectUrl);
      
    } catch (err) {
      console.error('Error loading image:', err);
      setError(err instanceof Error ? err.message : 'Failed to load image');
      setCachedSrc(src); // Fallback to original src
    } finally {
      setIsLoading(false);
    }
  }, [src]);

  useEffect(() => {
    if (preload || src) {
      loadImage(src);
    }
    
    return () => {
      // Cleanup object URLs when component unmounts
      if (cachedSrc && cachedSrc.startsWith('blob:')) {
        URL.revokeObjectURL(cachedSrc);
      }
    };
  }, [src, preload, loadImage]);

  return { src: cachedSrc, isLoading, error, preload: imageCache.preload };
};

// Hook for preloading multiple images
export const useImagePreloader = () => {
  const [isPreloading, setIsPreloading] = useState(false);
  
  const preloadImages = useCallback(async (urls: string[]) => {
    setIsPreloading(true);
    try {
      await imageCache.preload(urls);
    } catch (error) {
      console.error('Error preloading images:', error);
    } finally {
      setIsPreloading(false);
    }
  }, []);
  
  return { preloadImages, isPreloading };
};

export default imageCache; 