import Image, { ImageProps } from 'next/image';

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
   * The width of the source image in pixels. This is used to ensure the image
   * does not exceed 1/2 the source image width to maintain quality.
   */
  sourceImageWidthPx: number;
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
  sourceImageWidthPx,
  widthCss,
  ...props
}: Props) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        aspectRatio: aspectRatioCss,
        maxWidth: `calc(${sourceImageWidthPx}px / 2)`,
        width: widthCss,
      }}
    >
      <Image fill sizes={sizes} {...props} />
    </div>
  );
}
