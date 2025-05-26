import Image, { type ImageProps } from 'next/image';

interface Props extends ImageProps {
  /**
   * CSS value for aspect ratio of the image.
   *
   * @example
   * '16 / 9'
   */
  aspectRatioCss: string;
  className?: string;
  /**
   * The `sizes` attribute defines the sizes of the image for different viewport
   * widths. It should be a string that describes the image's width at various
   * breakpoints.
   *
   * @example
   * '100vw' for full width, or '(min-width: 600px) 600px, 95vw' for responsive
   * images.
   */
  sizes: string;
  /**
   * CSS value for width. It should be a string that describes the image width
   * at various breakpoints.
   *
   * @example
   * 'min(95vw,15rem)'
   */
  widthCss: string;
}

export default function OptimizedImage({
  aspectRatioCss,
  className,
  sizes,
  widthCss,
  ...props
}: Props) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        aspectRatio: aspectRatioCss,
        width: widthCss,
      }}
    >
      <Image
        className="object-cover"
        fill
        sizes={sizes}
        style={{ aspectRatio: aspectRatioCss }}
        {...props}
      />
    </div>
  );
}
