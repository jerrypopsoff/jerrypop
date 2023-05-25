import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { Product } from '../types/product';
import {
  TILE_LIST_ITEM_STYLE,
  TILE_IMAGE_CONTAINER_STYLE,
  TILE_IMAGE_STYLE,
  TILE_INFORMATION_STYLE,
} from '../constants/css/tile-list';
import { DEFAULT_TILE_LIST_IMAGE_WIDTH_PX } from '../constants/breakpoint';
import OptimizedImage from './OptimizedImage';

const StyledTileListItem = styled.li`
  ${TILE_LIST_ITEM_STYLE}
`;

const StyledTileImageContainer = styled.div`
  ${TILE_IMAGE_CONTAINER_STYLE}
`;

const StyledTileImage = styled(OptimizedImage)`
  ${TILE_IMAGE_STYLE}
`;

const StyledTileInformation = styled.div`
  ${TILE_INFORMATION_STYLE}
`;

const StyledTitle = styled(Typography)`
  margin: 0;
`;

const StyledSubtitle = styled(Typography)`
  font-size: 12px;
  line-height: 1.25;
  margin: 4px 0 0;
  text-transform: uppercase;
`;

const StyledIngredientListContent = styled(Typography)`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.25;
  text-align: justify;
  text-transform: uppercase;
`;

interface Props {
  product: Product;
}

const ProductListing: React.FC<Props> = ({ product }) => {
  return (
    <StyledTileListItem>
      <StyledTileImageContainer $aspectRatio={1}>
        <StyledTileImage
          $aspectRatio={1}
          alt={`Photograph of ${product.title}`}
          fallbackSrc={product.image}
          fallbackSrcSet={`${product.image} 600w`}
          sizes={`${DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}px (min-width: ${DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}px), 95vw`}
          srcSet={`${product.imageWebp} 600w`}
        />
      </StyledTileImageContainer>
      <StyledTileInformation>
        <StyledTitle type="h2">{product.title}</StyledTitle>
        <StyledSubtitle type="p">{product.subtitle}</StyledSubtitle>
        <Typography margin="16px 0 0" type="p">
          {product.description}
        </Typography>
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
