import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { Product } from '../types/product';

const IMAGE_HEIGHT_PX = 300;
const IMAGE_WIDTH_PX = 300;

const BREAKPOINT_PX = 700;

const StyledCard = styled.li`
  align-items: center;
  display: flex;
  margin: 32px 24px;
  width: ${BREAKPOINT_PX - 48}px;

  @media (max-width: ${BREAKPOINT_PX}px) {
    flex-direction: column;
    margin: 32px 0;
    width: calc(100% - 48px);
  }
`;

const StyledProductImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${IMAGE_HEIGHT_PX}px; // Mitigate screen flash for image loading state ending
  justify-content: center;

  @media (max-width: ${BREAKPOINT_PX}px) {
    height: calc(100vw - 48px);
    max-height: ${IMAGE_HEIGHT_PX}px;
    max-width: ${IMAGE_WIDTH_PX}px;
    width: calc(100vw - 48px);
  }
`;

const StyledProductPhotograph = styled.img`
  height: ${IMAGE_HEIGHT_PX}px;
  width: ${IMAGE_WIDTH_PX}px;

  @media (max-width: ${BREAKPOINT_PX}px) {
    height: calc(100vw - 48px);
    max-height: ${IMAGE_HEIGHT_PX}px;
    max-width: ${IMAGE_WIDTH_PX}px;
    width: calc(100vw - 48px);
  }
`;

const StyledListingInformation = styled.div`
  margin: 0 0 0 32px;
  text-align: left;

  @media (max-width: ${BREAKPOINT_PX}px) {
    margin: 32px auto;
    max-width: ${IMAGE_WIDTH_PX}px;
  }
`;

const StyledTitle = styled(Typography)``;

const StyledDescription = styled(Typography)``;

const StyledIngredientListContent = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
  text-align: justify;
  text-transform: uppercase;
`;

interface Props {
  product: Product;
}

const ProductListing: React.FC<Props> = ({ product }) => {
  return (
    <StyledCard>
      <StyledProductImageContainer>
        <StyledProductPhotograph
          alt={`Photograph of ${product.title}`}
          src={product.photograph}
        />
      </StyledProductImageContainer>
      <StyledListingInformation>
        <StyledTitle margin="0" type="h3">
          {product.title}
        </StyledTitle>
        <StyledDescription margin="24px 0 0" type="p">
          {product.description}
        </StyledDescription>
        <StyledIngredientListContent margin="32px 0 0" type="p">
          <b>Ingredients:</b> {product.ingredients.join(', ')}
        </StyledIngredientListContent>
        {product.allergens.length ? (
          <StyledIngredientListContent margin="16px 0 0" type="p">
            <b>Contains:</b> {product.allergens.join(', ')}
          </StyledIngredientListContent>
        ) : null}
      </StyledListingInformation>
    </StyledCard>
  );
};

export default ProductListing;
