# Image Caching System

This document explains the comprehensive image caching solution implemented to improve performance and user experience.

## 🚀 Overview

The image caching system uses multiple layers to ensure images load quickly and don't reload unnecessarily:

1. **Client-side memory cache** - Caches images in browser memory
2. **Browser cache headers** - Server-side caching configuration  
3. **Image preloading** - Preloads critical images on app startup
4. **Lazy loading** - Loads images only when needed
5. **Build optimizations** - Asset optimization and content hashing

## 📁 Components

### `useImageCache` Hook (`src/hooks/useImageCache.ts`)
- **Purpose**: Client-side image caching using Blob URLs
- **Features**:
  - 24-hour cache duration
  - Maximum 50 images cached
  - Automatic cleanup of expired entries
  - Memory management with URL revocation

### `CachedImage` Component (`src/components/CachedImage.tsx`)
- **Purpose**: Drop-in replacement for `<img>` tags with caching
- **Features**:
  - Loading skeleton while image loads
  - Error fallback UI
  - Automatic cache integration
  - Lazy loading support

### `ImagePreloader` Component (`src/components/ImagePreloader.tsx`)
- **Purpose**: Preloads critical images on app startup
- **Features**:
  - Preloads hero section images
  - Optional journal image preloading
  - Non-blocking background loading

## ⚙️ Configuration

### Firebase Cache Headers (`firebase.json`)
```json
{
  "headers": [
    {
      "source": "**/*.@(jpg|jpeg|gif|png|svg|webp|avif)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```
- **Images**: 1 year cache with immutable flag
- **JS/CSS**: 1 year cache for hashed assets
- **HTML**: No cache to ensure fresh app shell

### Vite Configuration (`vite.config.ts`)
- **Asset optimization**: 4KB inline limit
- **Content hashing**: Automatic filename hashing
- **Code splitting**: Separate vendor chunks
- **Dependency optimization**: Pre-bundled dependencies

## 🎯 Usage

### Basic Usage
```tsx
import CachedImage from '../components/CachedImage';

<CachedImage
  src="/path/to/image.jpg"
  alt="Description"
  width="100%"
  height="300px"
  loading="lazy"
/>
```

### Preloading Critical Images
```tsx
import ImagePreloader from '../components/ImagePreloader';

// In App.tsx
<ImagePreloader />

// In specific pages
<ImagePreloader preloadJournalImages={true} />
```

### Custom Caching
```tsx
import { useImageCache } from '../hooks/useImageCache';

const { src, isLoading, error } = useImageCache('/image.jpg', true);
```

## 📊 Performance Benefits

### Before Implementation
- Images reload on every page visit
- No browser cache optimization
- Large bundle sizes
- Slower perceived performance

### After Implementation
- **Memory caching**: Images cached for 24 hours client-side
- **Browser caching**: 1-year server-side cache
- **Preloading**: Critical images load in background
- **Optimized assets**: Content hashing prevents unnecessary downloads
- **Faster navigation**: Cached images display instantly

## 🔧 Cache Management

### Automatic Cleanup
- Expired entries removed automatically
- LRU eviction when cache is full
- Memory-efficient blob URL management

### Manual Cache Control
```tsx
import imageCache from '../hooks/useImageCache';

// Clear all cached images
imageCache.clear();

// Preload specific images
await imageCache.preload(['/image1.jpg', '/image2.jpg']);
```

## 📱 Mobile Optimization

- **Lazy loading**: Reduces initial bandwidth usage
- **Aspect ratio containers**: Prevents layout shift
- **Progressive loading**: Skeleton states improve perceived performance
- **Memory management**: Automatic cleanup prevents memory leaks

## 🚀 Deployment

After implementing the caching system:

1. **Build the project**: `npm run build`
2. **Deploy to Firebase**: `firebase deploy`
3. **Verify cache headers**: Check browser DevTools Network tab
4. **Monitor performance**: Use Lighthouse and Core Web Vitals

## 🔍 Debugging

### Cache Status
- Check browser DevTools → Application → Storage
- Monitor Network tab for cache hits/misses
- Console logs show preloading progress

### Common Issues
- **Images not caching**: Check network connectivity and CORS
- **Memory leaks**: Ensure components unmount properly  
- **Cache not working**: Verify Firebase headers deployment

## 📈 Metrics to Monitor

- **First Contentful Paint (FCP)**
- **Largest Contentful Paint (LCP)**
- **Cache hit ratio**
- **Image load times**
- **Bundle size reduction**

## 🔄 Future Enhancements

- **Service Worker**: For offline image caching
- **WebP conversion**: Automatic format optimization
- **Responsive images**: Different sizes for different screens
- **CDN integration**: External image optimization service 