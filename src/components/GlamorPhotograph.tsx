import styled from 'styled-components';
import OptimizedImage from './OptimizedImage';
import { SourceSet } from '../types/image';

interface StyledGlamorPhotographProps {
  $aspectRatio: number;
  $maxHeightPx: number;
}

const StyledImageContainer = styled.div<StyledGlamorPhotographProps>`
  height: calc(100% / ${({ $aspectRatio }) => $aspectRatio});
  max-height: ${({ $maxHeightPx }) => $maxHeightPx}px;
  width: 100%;
`;

const StyledImage = styled(OptimizedImage)<StyledGlamorPhotographProps>`
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  max-height: ${({ $maxHeightPx }) => $maxHeightPx}px;
  object-fit: cover;
  width: 100%;
`;

interface Props {
  alt: string;
  aspectRatio?: number;
  fallbackSrc: string;
  fallbackSourceSet: SourceSet;
  maxHeightPx?: number;
  sourceSet: SourceSet;
  type?: string;
}

const GlamorPhotograph = ({
  alt,
  aspectRatio = 16 / 9,
  fallbackSrc,
  fallbackSourceSet,
  maxHeightPx = 450,
  sourceSet,
  type = 'image/webp',
}: Props) => {
  return (
    <StyledImageContainer $aspectRatio={aspectRatio} $maxHeightPx={maxHeightPx}>
      <StyledImage
        $aspectRatio={aspectRatio}
        $maxHeightPx={maxHeightPx}
        alt={alt}
        fallbackSrc={fallbackSrc}
        fallbackSourceSet={fallbackSourceSet}
        fetchPriority="high"
        sizes="100vw"
        sourceSet={sourceSet}
        type={type}
      />
    </StyledImageContainer>
  );
};

export default GlamorPhotograph;
