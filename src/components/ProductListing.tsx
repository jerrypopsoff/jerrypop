import React from 'react';
import Typography from './Typography';
import { BUTTON_STYLE, BUTTON_INNER_STYLE } from '../constants/css/button';
import { DANGLE_STYLE } from '../constants/css/rotation';
import { PULSE_STYLE } from '../constants/css/pulse';
import styled from 'styled-components';
import { Product } from '../types/product';
import { WINDOW_BREAKPOINT_WIDTH_PX } from '../constants/breakpoint';

const IMAGE_HEIGHT = 519;
const IMAGE_WIDTH = 340;
const WIDTH_WIDE = 750;

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
  height: ${IMAGE_HEIGHT}px; // Mitigate screen flash for image loading state ending
`;

const StyledProductPhotograph = styled.img`
  height: ${IMAGE_HEIGHT}px;
  width: ${IMAGE_WIDTH}px;
`;

const StyledProductDetails = styled.div`
  margin: 0 0 0 36px;
  text-align: left;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    margin: 36px 0 0;
    width: ${IMAGE_WIDTH}px;
  }
`;

const StyledOrderOnlineButton = styled.button`
  ${BUTTON_STYLE}
  ${PULSE_STYLE}
  margin: 0;

  &:hover,
  &:focus {
    ${DANGLE_STYLE}
  }
`;

const StyledInnerOrderOnlineButton = styled.div`
  ${BUTTON_INNER_STYLE}
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
        <Typography margin="0" textAlign="left" type="h3">
          {product.title}
        </Typography>
        <Typography margin="24px 0 36px" textAlign="left" type="p">
          {product.description}
        </Typography>
        <StyledOrderOnlineButton onClick={onClickOrderOnline}>
          <StyledInnerOrderOnlineButton>Order</StyledInnerOrderOnlineButton>
        </StyledOrderOnlineButton>
      </StyledProductDetails>
    </StyledProductListing>
  );
};

export default ProductListing;
