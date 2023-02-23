import React from 'react';
import styled from 'styled-components';
import OptimizedImage from './OptimizedImage';

const ASPECT_RATIO = 16 / 9;
const MAX_HEIGHT = '450px';

const StyledImageContainer = styled.div`
  height: calc(100% / ${ASPECT_RATIO});
  max-height: ${MAX_HEIGHT};
`;

const StyledImage = styled(OptimizedImage)`
  aspect-ratio: ${ASPECT_RATIO};
  background-color: var(--main-theme-medium);
  max-height: ${MAX_HEIGHT};
  object-fit: cover;
  width: 100%;
`;

interface Props {
  alt: string;
  fallbackSrc: string;
  fallbackSrcSet: string;
  srcSet: string;
  type?: string;
}

const GlamorPhotograph: React.FC<Props> = ({
  alt,
  fallbackSrc,
  fallbackSrcSet,
  srcSet,
  type = 'image/webp',
}) => {
  return (
    <StyledImageContainer>
      <StyledImage
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
