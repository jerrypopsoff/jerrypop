import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { CateringProduct, RetailProduct } from '../types/product';
import {
  TILE_LIST_ITEM_STYLE,
  TILE_IMAGE_CONTAINER_STYLE,
  TILE_IMAGE_STYLE,
  TILE_INFORMATION_STYLE,
} from '../constants/css/tile-list';
import OptimizedImage from './OptimizedImage';
import { displayCurrency } from '../utilities/currency';
import {
  PRODUCT_IMAGE_ASPECT_RATIO,
  PRODUCT_IMAGE_WIDTH_PX,
} from '../constants/product';

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
  font-size: 22px;
  margin: 0;
`;

const StyledSubtitle = styled(Typography)`
  font-size: 12px;
  margin: 4px 0 0;
  text-transform: uppercase;
`;

const StyledPricingDescriptionList = styled.dl`
  margin: 24px 0 0;
`;

const StyledPricingDescriptionTerm = styled.dt`
  font-size: 12px;
  margin: 0;
  text-transform: uppercase;
`;

const StyledPricingDescriptionDetails = styled.dd`
  font-size: 32px;
  font-weight: 300;
  margin: 0 0 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

interface CateringProps {
  product: CateringProduct;
  type: 'catering';
}

interface RetailProps {
  product: RetailProduct;
  type: 'retail';
}

type Props = CateringProps | RetailProps;

const PricingListItem: React.FC<Props> = ({ product, type }) => {
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
          fallbackSrcSet={`${product.image} 600w`}
          sizes={`${PRODUCT_IMAGE_WIDTH_PX}px (min-width: ${PRODUCT_IMAGE_WIDTH_PX}px), 95vw`}
          srcSet={`${product.imageWebp} 600w`}
        />
      </StyledTileImageContainer>
      <StyledTileInformation $imageWidthPx={PRODUCT_IMAGE_WIDTH_PX}>
        <StyledTitle type="h3">{product.title}</StyledTitle>
        <StyledSubtitle type="p">{`${product.weight} ${product.subtitle}`}</StyledSubtitle>
        <Typography margin="16px 0 0" type="p">
          <span dangerouslySetInnerHTML={{ __html: product.description }} />
        </Typography>
        <StyledPricingDescriptionList>
          {type === 'retail' && (
            <>
              <StyledPricingDescriptionTerm>
                Suggested retail price
              </StyledPricingDescriptionTerm>
              <StyledPricingDescriptionDetails>
                {displayCurrency(product.priceMsrp)}
              </StyledPricingDescriptionDetails>
            </>
          )}
          <StyledPricingDescriptionTerm>
            {type === 'retail' ? 'Your price' : 'Price'}
          </StyledPricingDescriptionTerm>
          <StyledPricingDescriptionDetails>
            {displayCurrency(
              type === 'retail' ? product.priceRetailer : product.priceCatering,
            )}
          </StyledPricingDescriptionDetails>
        </StyledPricingDescriptionList>
      </StyledTileInformation>
    </StyledTileListItem>
  );
};

export default PricingListItem;
