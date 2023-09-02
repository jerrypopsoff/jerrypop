import React from 'react';
import { PRICED_PRODUCTS } from '../constants/product';
import { Helmet } from 'react-helmet-async';
import Typography from './Typography';
import GlamorPhotograph from './GlamorPhotograph';
import GlamorousChipotleCheddar600 from '../images/glamorous-chipotle-cheddar-600.jpg';
import GlamorousChipotleCheddar1200 from '../images/glamorous-chipotle-cheddar-1200.jpg';
import GlamorousChipotleCheddar2400 from '../images/glamorous-chipotle-cheddar-2400.jpg';
import GlamorousChipotleCheddarWebp600 from '../images/glamorous-chipotle-cheddar-600.webp';
import GlamorousChipotleCheddarWebp1200 from '../images/glamorous-chipotle-cheddar-1200.webp';
import GlamorousChipotleCheddarWebp2400 from '../images/glamorous-chipotle-cheddar-2400.webp';
import { TILE_LIST_STYLE } from '../constants/css/tile-list';
import PricingListItem from './PricingListItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BUTTON_STYLE } from '../constants/css/button';
import FormDialog from './FormDialog';
import { useDialogState } from '../hooks/use-form-dialog';
import {
  RETAIL_ORDER_FORM_SRC,
  RETAIL_ORDER_FORM_TITLE,
} from '../constants/form';

const StyledOrderDescription = styled(Typography)`
  margin: 24px auto;
  max-width: 600px;
  padding: 0 12px;
`;

const StyledButton = styled.button`
  ${BUTTON_STYLE}
  margin: 0 auto;
`;

const StyledTileList = styled.ul`
  ${TILE_LIST_STYLE}
`;

const StyledLogisticsDescriptionList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 24px auto;
  max-width: 624px;
  padding: 0 12px;
`;

const StyledLogisticsDescriptionTerm = styled.dt`
  font-style: italic;
  font-weight: bold;
  grid-column-start: 1;
  margin: 16px 12px;
  text-align: right;
`;

const StyledLogisticsDescriptionDetails = styled.dd`
  grid-column-start: 2;
  margin: 16px 12px;
  text-align: left;
`;

const Retail: React.FC = () => {
  const { closeDialog, isFormVisible, openDialog } = useDialogState();

  return (
    <>
      <Helmet>
        <title>Retail · Jerrypop</title>
      </Helmet>
      <GlamorPhotograph
        alt="Photograph of Chipotle Cheddar Craft popcorn with wedges of cheddar, whole chipotles, and lime wedges on a wooden bar top"
        aspectRatio={2080 / 1170}
        fallbackSrc={GlamorousChipotleCheddar2400}
        fallbackSrcSet={`${GlamorousChipotleCheddar600} 600w, ${GlamorousChipotleCheddar1200} 1200w, ${GlamorousChipotleCheddar2400} 2400w`}
        srcSet={`${GlamorousChipotleCheddarWebp600} 600w, ${GlamorousChipotleCheddarWebp1200} 1200w, ${GlamorousChipotleCheddarWebp2400} 2400w`}
      />
      <Typography type="h1">Retail</Typography>
      <StyledOrderDescription type="p">
        Support a small business and delight your customers by carrying Jerrypop
        at your retail location. Each item is locally popped, handcrafted, and
        sealed in a compostable bag.
      </StyledOrderDescription>
      <StyledButton onClick={openDialog}>Order</StyledButton>
      <Typography type="h2">Logistics</Typography>
      <StyledLogisticsDescriptionList>
        <StyledLogisticsDescriptionTerm>
          Minimum order
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          10 bags per flavor.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Lead time
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          Order by 9pm Sunday for delivery on Thursday or Friday of the same
          week.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Delivery
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          First delivery free. Subsequent orders delivered within San Francisco
          for $5.00. Please indicate if you have a preferred delivery timeframe
          (Thursday 4-7pm or Friday 9am-3pm).
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Equipment
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          Signs and clip strips available upon request.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>Payment</StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          Cash or check accepted upon product delivery. Online or in-person card
          payments accepted with a 3.5% processing fee. Net 30 payment terms
          with mailed check available upon request.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Shelf life
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          4 weeks after delivery date recommended for optimum flavor and
          freshness.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Additional information
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          See{' '}
          <Link rel="noreferrer" target="_blank" to="/products">
            Products
          </Link>{' '}
          for product photographs, ingredients, and allergens.
        </StyledLogisticsDescriptionDetails>
      </StyledLogisticsDescriptionList>
      <Typography type="h2">Pricing</Typography>
      <StyledTileList>
        {PRICED_PRODUCTS.map((pricedProduct) => (
          <PricingListItem
            key={pricedProduct.title}
            product={pricedProduct}
            type="retail"
          />
        ))}
      </StyledTileList>
      {isFormVisible && (
        <FormDialog
          onCloseFormDialog={closeDialog}
          src={RETAIL_ORDER_FORM_SRC}
          title={RETAIL_ORDER_FORM_TITLE}
        />
      )}
      <StyledButton onClick={openDialog}>Order</StyledButton>
    </>
  );
};

export default Retail;
