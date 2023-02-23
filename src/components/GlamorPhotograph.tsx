import React from 'react';
import styled from 'styled-components';
import OptimizedImage from './OptimizedImage';

interface StyledGlamorPhotographProps {
  $aspectRatio: number;
  $maxHeightPx?: number;
}

const StyledImageContainer = styled.div<StyledGlamorPhotographProps>`
  height: calc(100% / ${({ $aspectRatio }) => $aspectRatio});
  max-height: ${({ $maxHeightPx }) =>
    $maxHeightPx ? `${$maxHeightPx}px` : ''};
  width: 100%;
`;

const StyledImage = styled(OptimizedImage)<StyledGlamorPhotographProps>`
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  max-height: ${({ $maxHeightPx }) =>
    $maxHeightPx ? `${$maxHeightPx}px` : ''};
  object-fit: cover;
  width: 100%;
`;

interface Props {
  alt: string;
  aspectRatio?: number;
  fallbackSrc: string;
  fallbackSrcSet: string;
  maxHeightPx?: number;
  srcSet: string;
  type?: string;
}

const GlamorPhotograph: React.FC<Props> = ({
  alt,
  aspectRatio = 16 / 9,
  fallbackSrc,
  fallbackSrcSet,
  maxHeightPx,
  srcSet,
  type = 'image/webp',
}) => {
  return (
    <StyledImageContainer $aspectRatio={aspectRatio} $maxHeightPx={maxHeightPx}>
      <StyledImage
        $aspectRatio={aspectRatio}
        $maxHeightPx={maxHeightPx}
        alt={alt}
        fallbackSrc={fallbackSrc}
        fallbackSrcSet={fallbackSrcSet}
        sizes="100vw"
        srcSet={srcSet}
        type={type}
      />
    </StyledImageContainer>
  );
};

export default GlamorPhotograph;
