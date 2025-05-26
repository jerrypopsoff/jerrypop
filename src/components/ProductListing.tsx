import Heading2 from './common/Heading2';
import Paragraph from './common/Paragraph';
import styled from 'styled-components';
import { Product } from '../types/product';
import {
  TILE_LIST_ITEM_STYLE,
  TILE_INFORMATION_STYLE,
} from '../constants/css/tile-list';
import OptimizedImage from './common/OptimizedImage';
import { PRODUCT_IMAGE_WIDTH_PX } from '../constants/product';

const StyledTileListItem = styled.li<{ $imageWidthPx: number }>`
  ${TILE_LIST_ITEM_STYLE}
`;

const StyledTileInformation = styled.div<{ $imageWidthPx: number }>`
  ${TILE_INFORMATION_STYLE}
`;

const StyledTitle = styled(Heading2)`
  margin: 0;
`;

const StyledSubtitle = styled(Paragraph)`
  font-size: 12px;
  line-height: 1.25;
  margin: 4px 0 0;
  text-transform: uppercase;
`;

const StyledIngredientListContent = styled(Paragraph)`
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
      <OptimizedImage
        alt={`Photograph of ${product.title}`}
        aspectRatioCss="600 / 771"
        sizes={`300px (min-width: 315px), 95vw`}
        src={product.image}
        widthCss="min(95vw, 18.75rem)"
      />
      <StyledTileInformation $imageWidthPx={PRODUCT_IMAGE_WIDTH_PX}>
        <StyledTitle>{product.title}</StyledTitle>
        <StyledSubtitle>{product.subtitle}</StyledSubtitle>
        <Paragraph>{product.description}</Paragraph>
        <StyledIngredientListContent>
          <b>Ingredients:</b> {product.ingredients.join(', ')}
        </StyledIngredientListContent>
        {product.allergens.length ? (
          <StyledIngredientListContent>
            <b>Contains:</b> {product.allergens.join(', ')}
          </StyledIngredientListContent>
        ) : null}
      </StyledTileInformation>
    </StyledTileListItem>
  );
};

export default ProductListing;
