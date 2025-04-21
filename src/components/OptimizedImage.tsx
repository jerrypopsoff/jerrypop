import { ImgHTMLAttributes } from 'react';
import { SourceSet } from '../types/image';

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc: string;
  fallbackSourceSet: SourceSet;
  sourceSet: SourceSet;
  type?: string;
}

/**
 * Use scripts/convert-responsive-image.sh to convert image files to
 * appropriate size and format.
 */
const OptimizedImage = ({
  fallbackSrc,
  fallbackSourceSet,
  sizes,
  sourceSet,
  type = 'image/webp',
  ...delegated
}: Props) => {
  // e.g. `${HabaneroRanch600.src} 600w, ${HabaneroRanch1200} 1200w, ${HabaneroRanch2400} 2400w`;
  const fallbackSrcSet = fallbackSourceSet
    .map(({ size, src }) => `${src} ${size}`)
    .join(', ');
  const srcSet = sourceSet.map(({ size, src }) => `${src} ${size}`).join(', ');

  return (
    <picture>
      <source srcSet={srcSet} sizes={sizes} type={type} />
      <img
        src={fallbackSrc}
        srcSet={fallbackSrcSet}
        sizes={sizes}
        {...delegated}
      />
    </picture>
  );
};

export default OptimizedImage;
