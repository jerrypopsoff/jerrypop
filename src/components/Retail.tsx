'use client';

import { RETAIL_PRODUCTS } from '../constants/product';
import Heading1 from './common/Heading1';
import Heading2 from './common/Heading2';
import Paragraph from './common/Paragraph';
import PageHeaderPhotographSrc from '../images/glamorous-chipotle-cheddar.jpg';
import { TILE_LIST_STYLE } from '../constants/css/tile-list';
import PricingListItem from './PricingListItem';
import Link from 'next/link';
import styled from 'styled-components';
import { BUTTON_STYLE } from '../constants/css/button';
import FormDialog from './FormDialog';
import { useDialogState } from '../hooks/use-form-dialog';
import {
  RETAIL_ORDER_FORM_SRC,
  RETAIL_ORDER_FORM_TITLE,
} from '../constants/form';
import PageHeaderPhotograph from './common/PageHeaderPhotograph';

const StyledRetail = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledButton = styled.button`
  ${BUTTON_STYLE}
`;

const StyledTileList = styled.ul`
  ${TILE_LIST_STYLE}
`;

const StyledLogisticsDescriptionList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 24px 0;
  max-width: 600px;
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

const Retail = () => {
  const { closeDialog, isFormVisible, openDialog } = useDialogState();

  return (
    <StyledRetail>
      <PageHeaderPhotograph
        alt="Photograph of Chipotle Cheddar Craft popcorn with wedges of cheddar, whole chipotles, and lime wedges on a wooden bar top"
        aspectRatioCss="2080 / 1170"
        src={PageHeaderPhotographSrc}
      />
      <Heading1>Retail</Heading1>
      <Paragraph>
        Support a small business and delight your customers by carrying Jerrypop
        at your retail location. Each item is locally popped, handcrafted, and
        sealed in a compostable bag.
      </Paragraph>
      <StyledButton onClick={openDialog}>Order</StyledButton>
      <Heading2>Logistics</Heading2>
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
          Order by 9pm Sunday for delivery on Friday of the same week.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Delivery
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          First delivery free. Subsequent orders delivered for $5.00.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Equipment
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          Signs, shelf toppers, and clip strips available upon request.
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
          See <Link href="/products">Products</Link> for product photographs,
          ingredients, and allergens.
        </StyledLogisticsDescriptionDetails>
      </StyledLogisticsDescriptionList>
      <Heading2>Pricing</Heading2>
      <StyledTileList>
        {RETAIL_PRODUCTS.map((pricedProduct) => (
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
    </StyledRetail>
  );
};

export default Retail;
