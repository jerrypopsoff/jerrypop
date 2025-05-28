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
      className="lg:max-h-100 sm:max-h-70 max-h-40"
      placeholder="blur"
      priority={true}
      sizes="100vw"
      src={src}
      widthCss="100%"
    />
  );
}
