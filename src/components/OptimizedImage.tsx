import { ImgHTMLAttributes } from 'react';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  fallbackSrc: string;
  fallbackSrcSet: string;
  /**
   * Todo: Remove this and src/types/img-fetch-priority.d.ts once the
   * resolution for {@link https://github.com/facebook/react/issues/25682}
   * lands.
   */
  fetchPriority?: 'high' | 'low' | 'auto';
  sizes: string;
  srcSet: string;
  type?: string;
}

/**
 * Use scripts/convert-responsive-image.sh to convert image files to
 * appropriate size and format.
 */
const OptimizedImage = ({
  alt,
  fallbackSrc,
  fallbackSrcSet,
  fetchPriority,
  sizes,
  srcSet,
  type = 'image/webp',
  ...delegated
}: Props) => {
  return (
    <picture>
      <source srcSet={srcSet} sizes={sizes} type={type} />
      <img
        alt={alt}
        fetchpriority={fetchPriority}
        src={fallbackSrc}
        srcSet={fallbackSrcSet}
        sizes={sizes}
        {...delegated}
      />
    </picture>
  );
};

export default OptimizedImage;
