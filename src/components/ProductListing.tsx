import React from 'react';
import Typography from './Typography';
import { buttonStyle } from '../constants/css/button';
import { dangleRotation } from '../constants/css/rotation';
import { pulse } from '../constants/css/pulse';
import styled from 'styled-components';
import { Product } from '../types/product';
import { WINDOW_BREAKPOINT_WIDTH_PX } from '../constants/breakpoint';

const IMAGE_HEIGHT_NARROW = 425;
const IMAGE_HEIGHT_WIDE = 500;
const IMAGE_WIDTH_WIDE = 400;
const WIDTH_NARROW = 340;
const WIDTH_WIDE = 800;

const StyledProductListing = styled.div`
  align-items: center;
  display: flex;
  margin: 48px 0;
  max-width: ${WIDTH_WIDE}px;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    flex-direction: column;
  }
`;

const StyledProductImageContainer = styled.div`
  height: ${IMAGE_HEIGHT_WIDE}px; // Mitigate screen flash for image loading state ending

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    height: ${IMAGE_HEIGHT_NARROW}px;
  }
`;

const StyledProductPhotograph = styled.img`
  height: ${IMAGE_HEIGHT_WIDE}px;
  width: ${IMAGE_WIDTH_WIDE}px;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    height: ${IMAGE_HEIGHT_NARROW}px;
    width: ${WIDTH_NARROW}px;
  }
`;

const StyledProductDetails = styled.div`
  margin: 0 0 0 36px;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    margin: 36px 0 0;
    max-width: ${WIDTH_NARROW}px;
  }
`;

const StyledOrderOnlineButton = styled.button`
  ${buttonStyle}
  ${pulse}
  margin: 0;
  padding: 24px;

  &:hover,
  &:focus {
    ${dangleRotation}
  }
`;

interface Props {
  onClickOrderOnline: () => void;
  product: Product;
}

const ProductListing: React.FC<Props> = ({ onClickOrderOnline, product }) => {
  return (
    <StyledProductListing>
      <StyledProductImageContainer>
        <StyledProductPhotograph
          alt={`Photograph of ${product.title}`}
          src={product.photograph}
        />
      </StyledProductImageContainer>
      <StyledProductDetails>
        <Typography margin="0" textAlign="left" type="h2">
          {product.title}
        </Typography>
        <Typography margin="24px 0 36px" textAlign="left" type="p">
          {product.description}
        </Typography>
        <StyledOrderOnlineButton onClick={onClickOrderOnline}>
          Order for pickup
        </StyledOrderOnlineButton>
      </StyledProductDetails>
    </StyledProductListing>
  );
};

export default ProductListing;
