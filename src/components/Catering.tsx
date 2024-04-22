import React from 'react';
import { CATERING_PRODUCTS } from '../constants/product';
import { Helmet } from 'react-helmet-async';
import Typography from './Typography';
import GlamorPhotograph from './GlamorPhotograph';
import ChocolateHazelnutEspresso600 from '../images/glamorous-chocolate-hazelnut-espresso-600.jpeg';
import ChocolateHazelnutEspresso1200 from '../images/glamorous-chocolate-hazelnut-espresso-1200.jpeg';
import ChocolateHazelnutEspresso2400 from '../images/glamorous-chocolate-hazelnut-espresso-2400.jpeg';
import ChocolateHazelnutEspressoWebp600 from '../images/glamorous-chocolate-hazelnut-espresso-600.webp';
import ChocolateHazelnutEspressoWebp1200 from '../images/glamorous-chocolate-hazelnut-espresso-1200.webp';
import ChocolateHazelnutEspressoWebp2400 from '../images/glamorous-chocolate-hazelnut-espresso-2400.webp';
import { TILE_LIST_STYLE } from '../constants/css/tile-list';
import PricingListItem from './PricingListItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BUTTON_STYLE } from '../constants/css/button';
import FormDialog from './FormDialog';
import { useDialogState } from '../hooks/use-form-dialog';
import {
  CATERING_ORDER_FORM_SRC,
  CATERING_ORDER_FORM_TITLE,
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

const Catering: React.FC = () => {
  const { closeDialog, isFormVisible, openDialog } = useDialogState();

  return (
    <>
      <Helmet>
        <title>Catering · Jerrypop</title>
      </Helmet>
      <GlamorPhotograph
        alt="Photograph of Chocolate Hazelnut Espresso craft popcorn on a wooden table alongside hazelnuts, chocolate bar chunks, and an espresso shot"
        aspectRatio={2400 / 1350}
        fallbackSrc={ChocolateHazelnutEspresso2400}
        fallbackSrcSet={`${ChocolateHazelnutEspresso600} 600w, ${ChocolateHazelnutEspresso1200} 1200w, ${ChocolateHazelnutEspresso2400} 2400w`}
        srcSet={`${ChocolateHazelnutEspressoWebp600} 600w, ${ChocolateHazelnutEspressoWebp1200} 1200w, ${ChocolateHazelnutEspressoWebp2400} 2400w`}
      />
      <Typography type="h1">Catering</Typography>
      <StyledOrderDescription type="p">
        Support a small business and make your event unforgettable by serving
        Jerrypop craft popcorn. Each item is locally popped, handcrafted, and
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
          Pickup location
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          343 Bartlett Street, San Francisco, CA 94110.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Lead time
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          Typically less than two weeks from order date to fulfillment date.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>Payment</StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          To avoid waste, full payment via cash, check, card (online or
          in-person), or tap is required before production.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Shelf life
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          3 weeks after pickup date recommended for optimum flavor and
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
        {CATERING_PRODUCTS.map((product) => (
          <PricingListItem
            key={product.title}
            product={product}
            type="catering"
          />
        ))}
      </StyledTileList>
      {isFormVisible && (
        <FormDialog
          onCloseFormDialog={closeDialog}
          src={CATERING_ORDER_FORM_SRC}
          title={CATERING_ORDER_FORM_TITLE}
        />
      )}
      <StyledButton onClick={openDialog}>Order</StyledButton>
    </>
  );
};

export default Catering;
