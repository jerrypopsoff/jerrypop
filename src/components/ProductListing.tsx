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

const StyledTitle = styled(Typography)`
  margin: 0;
`;

const StyledSubtitle = styled(Typography)`
  font-size: 12px;
  line-height: 15px;
  margin: 4px 0 0;
  text-transform: uppercase;
`;

const StyledDescription = styled(Typography)``;

const StyledIngredientListContent = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
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
          sizes={`${TILE_LIST_IMAGE_WIDTH_PX}px (min-width: ${TILE_LIST_IMAGE_WIDTH_PX}px), 95vw`}
          srcSet={`${product.imageWebp} 600w`}
        />
      </StyledTileImageContainer>
      <StyledTileInformation>
        <StyledTitle type="h2">{product.title}</StyledTitle>
        <StyledSubtitle type="p">{product.subtitle}</StyledSubtitle>
        <StyledDescription margin="16px 0 0" type="p">
          {product.description}
        </StyledDescription>
        <StyledIngredientListContent margin="16px 0 0" type="p">
          <b>Ingredients:</b> {product.ingredients.join(', ')}
        </StyledIngredientListContent>
        {product.allergens.length ? (
          <StyledIngredientListContent margin="8px 0 0" type="p">
            <b>Contains:</b> {product.allergens.join(', ')}
          </StyledIngredientListContent>
        ) : null}
      </StyledTileInformation>
    </StyledTileListItem>
  );
};

export default ProductListing;
