import Image from 'next/image';
import { memo } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

const OptimizedImage = memo(({ 
  src, 
  alt, 
  width, 
  height, 
  className = "", 
  priority = false,
  sizes = "100vw"
}: OptimizedImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      loading={priority ? "eager" : "lazy"}
      quality={85}
    />
  );
});

OptimizedImage.displayName = 'OptimizedImage';

export default OptimizedImage; 