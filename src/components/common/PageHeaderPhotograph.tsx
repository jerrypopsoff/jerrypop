import { StaticImageData } from 'next/image';
import { OptimizedImage } from './OptimizedImage';

export function PageHeaderPhotograph({
  alt,
  aspectRatioCss,
  src,
}: {
  alt: string;
  aspectRatioCss: string;
  src: string | StaticImageData;
}) {
  return (
    <OptimizedImage
      alt={alt}
      aspectRatioCss={aspectRatioCss}
      className="max-h-40 sm:max-h-70 lg:max-h-100"
      placeholder="blur"
      priority={true}
      sizes="100vw"
      src={src}
      widthCss="100%"
    />
  );
}
