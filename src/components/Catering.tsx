import { CATERING_PRODUCTS } from '../constants/product';
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
import Link from 'next/link';
import styled from 'styled-components';
import { BUTTON_STYLE } from '../constants/css/button';
import FormDialog from './FormDialog';
import { useDialogState } from '../hooks/use-form-dialog';
import {
  CATERING_ORDER_FORM_SRC,
  CATERING_ORDER_FORM_TITLE,
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

const Catering = () => {
  useDocumentTitle('Catering · Jerrypop');
  const { closeDialog, isFormVisible, openDialog } = useDialogState();

  return (
    <>
      <GlamorPhotograph
        alt="Photograph of Chocolate Hazelnut Espresso craft popcorn on a wooden table alongside hazelnuts, chocolate bar chunks, and an espresso shot"
        aspectRatio={2400 / 1350}
        fallbackSrc={ChocolateHazelnutEspresso2400.src}
        fallbackSourceSet={[
          { size: '600w', src: ChocolateHazelnutEspresso600.src },
          { size: '1200w', src: ChocolateHazelnutEspresso1200.src },
          { size: '2400w', src: ChocolateHazelnutEspresso2400.src },
        ]}
        sourceSet={[
          { size: '600w', src: ChocolateHazelnutEspressoWebp600.src },
          { size: '1200w', src: ChocolateHazelnutEspressoWebp1200.src },
          { size: '2400w', src: ChocolateHazelnutEspressoWebp2400.src },
        ]}
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
          15 bags per flavor.
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
          See <Link href="/products">Products</Link> for product photographs,
          ingredients, and allergens.
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
