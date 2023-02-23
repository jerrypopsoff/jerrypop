import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { Product } from '../types/product';
import {
  CARD_INNER_STYLE,
  CARD_OUTER_STYLE,
  CARD_TITLE_STYLE,
} from '../constants/css/card';

const IMAGE_HEIGHT_PX = 300;
const IMAGE_WIDTH_PX = 300;

const StyledCard = styled.li`
  ${CARD_OUTER_STYLE}
`;

const StyledInnerCard = styled.div`
  ${CARD_INNER_STYLE}
`;

const StyledProductImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${IMAGE_HEIGHT_PX}px; // Mitigate screen flash for image loading state ending
  justify-content: center;
  margin-bottom: 24px;

  @media (max-width: 390px) {
    height: 220px;
  }
`;

const StyledProductPhotograph = styled.img`
  height: ${IMAGE_HEIGHT_PX}px;
  width: ${IMAGE_WIDTH_PX}px;

  @media (max-width: 390px) {
    height: 220px;
    width: 220px;
  }
`;

const StyledTitle = styled(Typography)`
  ${CARD_TITLE_STYLE}
`;

const StyledDescription = styled(Typography)`
  font-weight: 400;
`;

const StyledIngredientListContent = styled(Typography)`
  font-size: 14px;
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
      <StyledInnerCard>
        {product.photograph && (
          <StyledProductImageContainer>
            <StyledProductPhotograph
              alt={`Photograph of ${product.title}`}
              src={product.photograph}
            />
          </StyledProductImageContainer>
        )}
        <StyledTitle type="h3">{product.title}</StyledTitle>
        <StyledDescription margin="24px 0 0" type="p">
          {product.description}
        </StyledDescription>
        <StyledIngredientListContent margin="24px 0 0" type="p">
          <b>Ingredients:</b> {product.ingredients.join(', ')}
        </StyledIngredientListContent>
        {product.allergens.length ? (
          <StyledIngredientListContent margin="16px 0 0" type="p">
            <b>Contains:</b> {product.allergens.join(', ')}
          </StyledIngredientListContent>
        ) : null}
      </StyledInnerCard>
    </StyledCard>
  );
};

export default ProductListing;
