import React from 'react';

interface Props {
  alt: string;
  fallbackSrc: string;
  fallbackSrcSet: string;
  sizes: string;
  srcSet: string;
  type?: string;
}

/**
 * 1. Convert images to webp format using the `cwebp` command. Quality score of
 * 80 seems to yield best results.
 *
 * ```console
 * brew install webp
 * cwebp -q 80 flower.png -o flower.webp
 * ```
 *
 * {@link https://web.dev/serve-images-webp/}
 * {@link https://www.joshwcomeau.com/performance/embracing-modern-image-formats/}
 *
 * 2. Resize image via ImageMagick to fit within desired space (e.g. 300px wide
 * by 200px tall).
 *
 * ```console
 * brew install imagemagick
 * convert flower.jpg -resize 300x200 flower-small.jpg
 * ```
 *
 * {@link https://web.dev/serve-responsive-images/}
 */
const OptimizedImage: React.FC<Props> = ({
  alt,
  fallbackSrc,
  fallbackSrcSet,
  sizes,
  srcSet,
  type = 'image/webp',
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={srcSet} sizes={sizes} type={type} />
      <img
        alt={alt}
        src={fallbackSrc}
        srcSet={fallbackSrcSet}
        sizes={sizes}
        {...delegated}
      />
    </picture>
  );
};

export default OptimizedImage;
