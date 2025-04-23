import { RETAIL_PRODUCTS } from '../constants/product';
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
import { useDocumentTitle } from '../hooks/use-document-title';

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

const Retail = () => {
  useDocumentTitle('Retail · Jerrypop');
  const { closeDialog, isFormVisible, openDialog } = useDialogState();

  return (
    <>
      <GlamorPhotograph
        alt="Photograph of Chipotle Cheddar Craft popcorn with wedges of cheddar, whole chipotles, and lime wedges on a wooden bar top"
        aspectRatio={2080 / 1170}
        fallbackSrc={GlamorousChipotleCheddar2400.src}
        fallbackSourceSet={[
          { size: '600w', src: GlamorousChipotleCheddar600.src },
          { size: '1200w', src: GlamorousChipotleCheddar1200.src },
          { size: '2400w', src: GlamorousChipotleCheddar2400.src },
        ]}
        sourceSet={[
          { size: '600w', src: GlamorousChipotleCheddarWebp600.src },
          { size: '1200w', src: GlamorousChipotleCheddarWebp1200.src },
          { size: '2400w', src: GlamorousChipotleCheddarWebp2400.src },
        ]}
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
          See{' '}
          <Link rel="noreferrer" target="_blank" to="/products">
            Products
          </Link>{' '}
          for product photographs, ingredients, and allergens.
        </StyledLogisticsDescriptionDetails>
      </StyledLogisticsDescriptionList>
      <Typography type="h2">Pricing</Typography>
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
    </>
  );
};

export default Retail;
