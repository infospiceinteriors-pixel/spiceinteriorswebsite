import React from 'react';
import { Box, Skeleton } from '@mui/material';
import { useImageCache } from '../hooks/useImageCache';

interface CachedImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
  style?: React.CSSProperties;
  className?: string;
  preload?: boolean;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  onError?: () => void;
}

const CachedImage: React.FC<CachedImageProps> = ({
  src,
  alt,
  width = '100%',
  height = '100%',
  objectFit = 'cover',
  style,
  className,
  preload = false,
  loading = 'lazy',
  onLoad,
  onError,
}) => {
  const { src: cachedSrc, isLoading, error } = useImageCache(src, preload);

  const handleLoad = () => {
    onLoad?.();
  };

  const handleError = () => {
    onError?.();
  };

  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        width={width}
        height={height}
        sx={{
          borderRadius: 0,
          ...style,
        }}
      />
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          width,
          height,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          color: '#999',
          fontSize: '0.875rem',
          ...style,
        }}
      >
        Failed to load image
      </Box>
    );
  }

  return (
    <img
      src={cachedSrc}
      alt={alt}
      loading={loading}
      className={className}
      onLoad={handleLoad}
      onError={handleError}
      style={{
        width,
        height,
        objectFit,
        display: 'block',
        ...style,
      }}
    />
  );
};

export default CachedImage; 