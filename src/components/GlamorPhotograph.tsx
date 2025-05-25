import styled from 'styled-components';
import OptimizedImage from './OptimizedImage';
import { SourceSet } from '../types/image';

interface StyledGlamorPhotographProps {
  $aspectRatio: number;
}

const StyledImageContainer = styled.div<StyledGlamorPhotographProps>`
  height: calc(100% / ${({ $aspectRatio }) => $aspectRatio});
  max-height: 450px;
  width: 100%;
`;

const StyledImage = styled(OptimizedImage)<StyledGlamorPhotographProps>`
  aspect-ratio: ${({ $aspectRatio }) => $aspectRatio};
  max-height: 450px;
  object-fit: cover;
  width: 100%;
`;

interface Props {
  alt: string;
  aspectRatio?: number;
  fallbackSrc: string;
  fallbackSourceSet: SourceSet;
  sourceSet: SourceSet;
  type?: string;
}

const GlamorPhotograph = ({
  alt,
  aspectRatio = 16 / 9,
  fallbackSrc,
  fallbackSourceSet,
  sourceSet,
  type = 'image/webp',
}: Props) => {
  return (
    <StyledImageContainer $aspectRatio={aspectRatio}>
      <StyledImage
        $aspectRatio={aspectRatio}
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
