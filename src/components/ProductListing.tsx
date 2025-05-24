import Typography from './Typography';
import styled from 'styled-components';
import { Product } from '../types/product';
import {
  TILE_LIST_ITEM_STYLE,
  TILE_IMAGE_CONTAINER_STYLE,
  TILE_IMAGE_STYLE,
  TILE_INFORMATION_STYLE,
} from '../constants/css/tile-list';
import OptimizedImage from './OptimizedImage';
import {
  PRODUCT_IMAGE_ASPECT_RATIO,
  PRODUCT_IMAGE_WIDTH_PX,
} from '../constants/product';

const StyledTileListItem = styled.li<{ $imageWidthPx: number }>`
  ${TILE_LIST_ITEM_STYLE}
`;

const StyledTileImageContainer = styled.div<{
  $aspectRatio: number;
  $imageWidthPx: number;
}>`
  ${TILE_IMAGE_CONTAINER_STYLE}
`;

const StyledTileImage = styled(OptimizedImage)<{
  $aspectRatio: number;
  $imageWidthPx: number;
}>`
  ${TILE_IMAGE_STYLE}
`;

const StyledTileInformation = styled.div<{ $imageWidthPx: number }>`
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

const ProductListing = ({ product }: Props) => {
  return (
    <StyledTileListItem $imageWidthPx={PRODUCT_IMAGE_WIDTH_PX}>
      <StyledTileImageContainer
        $aspectRatio={PRODUCT_IMAGE_ASPECT_RATIO}
        $imageWidthPx={PRODUCT_IMAGE_WIDTH_PX}
      >
        <StyledTileImage
          $aspectRatio={PRODUCT_IMAGE_ASPECT_RATIO}
          $imageWidthPx={PRODUCT_IMAGE_WIDTH_PX}
          alt={`Photograph of ${product.title}`}
          fallbackSrc={product.image}
          fallbackSourceSet={[{ size: '600w', src: product.image }]}
          sizes={`${PRODUCT_IMAGE_WIDTH_PX}px (min-width: ${PRODUCT_IMAGE_WIDTH_PX}px), 95vw`}
          sourceSet={[{ size: '600w', src: product.imageWebp }]}
        />
      </StyledTileImageContainer>
      <StyledTileInformation $imageWidthPx={PRODUCT_IMAGE_WIDTH_PX}>
        <StyledTitle type="h2">{product.title}</StyledTitle>
        <StyledSubtitle type="p">{product.subtitle}</StyledSubtitle>
        <Typography type="p">{product.description}</Typography>
        <StyledIngredientListContent type="p">
          <b>Ingredients:</b> {product.ingredients.join(', ')}
        </StyledIngredientListContent>
        {product.allergens.length ? (
          <StyledIngredientListContent type="p">
            <b>Contains:</b> {product.allergens.join(', ')}
          </StyledIngredientListContent>
        ) : null}
      </StyledTileInformation>
    </StyledTileListItem>
  );
};

export default ProductListing;
