import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { Product } from '../types/product';
import {
  StyledTileImage,
  StyledTileImageContainer,
  StyledTileInformation,
  StyledTileListItem,
} from '../constants/css/tile-list';
import { TILE_LIST_IMAGE_WIDTH_PX } from '../constants/breakpoint';

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
    <StyledTileListItem>
      <StyledTileImageContainer>
        <StyledTileImage
          alt={`Photograph of ${product.title}`}
          fallbackSrc={product.image}
          fallbackSrcSet={`${product.image} 600w`}
          sizes={`${TILE_LIST_IMAGE_WIDTH_PX}px (min-width: ${TILE_LIST_IMAGE_WIDTH_PX}), 95vw`}
          srcSet={`${product.imageWebp} 600w`}
        />
      </StyledTileImageContainer>
      <StyledTileInformation>
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
      </StyledTileInformation>
    </StyledTileListItem>
  );
};

export default ProductListing;
