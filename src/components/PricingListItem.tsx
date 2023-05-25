import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import { Product, RetailProduct } from '../types/product';
import {
  TILE_LIST_ITEM_STYLE,
  TILE_IMAGE_CONTAINER_STYLE,
  TILE_IMAGE_STYLE,
  TILE_INFORMATION_STYLE,
} from '../constants/css/tile-list';
import { DEFAULT_TILE_LIST_IMAGE_WIDTH_PX } from '../constants/breakpoint';
import OptimizedImage from './OptimizedImage';
import { displayCurrency } from '../utilities/currency';

const PACKAGING_IMAGE_ASPECT_RATIO = 1.285;

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
  product: Product;
  type: 'catering';
}

interface RetailProps {
  product: RetailProduct;
  type: 'retail';
}

type Props = CateringProps | RetailProps;

const PricingListItem: React.FC<Props> = ({ product, type }) => {
  return (
    <StyledTileListItem>
      <StyledTileImageContainer $aspectRatio={PACKAGING_IMAGE_ASPECT_RATIO}>
        <StyledTileImage
          $aspectRatio={PACKAGING_IMAGE_ASPECT_RATIO}
          alt={`Front packaging label for ${product.title}`}
          fallbackSrc={product.packagingImage}
          fallbackSrcSet={`${product.packagingImage} 600w`}
          sizes={`${TILE_LIST_IMAGE_WIDTH_PX}px (min-width: ${TILE_LIST_IMAGE_WIDTH_PX}px), 95vw`}
          srcSet={`${product.packagingImageWebp} 600w`}
        />
      </StyledTileImageContainer>
      <StyledTileInformation>
        <StyledTitle type="h3">{product.title}</StyledTitle>
        <StyledSubtitle type="p">{`${product.weight} ${product.subtitle}`}</StyledSubtitle>
        <Typography margin="16px 0 0" type="p">
          {product.description}
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
