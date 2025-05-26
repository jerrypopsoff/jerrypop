'use client';

import { RETAIL_PRODUCTS } from '../constants/product';
import Heading1 from './common/Heading1';
import Heading2 from './common/Heading2';
import Paragraph from './common/Paragraph';
import PageHeaderPhotographSrc from '../images/glamorous-chipotle-cheddar.jpg';
import Link from 'next/link';
import FormDialog from './FormDialog';
import { useDialogState } from '../hooks/use-dialog-state';
import {
  RETAIL_ORDER_FORM_SRC,
  RETAIL_ORDER_FORM_TITLE,
} from '../constants/form';
import PageHeaderPhotograph from './common/PageHeaderPhotograph';
import ProductPricingList from './common/ProductPricingList';
import PageContentLayout from './PageContentLayout';
import Button from './common/Button';
import DefinitionList from './common/DefinitionList';
import DescriptionTerm from './common/DescriptionTerm';
import DescriptionDetails from './common/DescriptionDetails';

const Retail = () => {
  const { closeDialog, isFormVisible, openDialog } = useDialogState();

  return (
    <>
      <PageHeaderPhotograph
        alt="Photograph of Chipotle Cheddar Craft popcorn with wedges of cheddar, whole chipotles, and lime wedges on a wooden bar top"
        aspectRatioCss="2080 / 1170"
        src={PageHeaderPhotographSrc}
      />
      <PageContentLayout>
        <Heading1>Retail</Heading1>
        <Paragraph>
          Support a small business and delight your customers by carrying
          Jerrypop at your retail location. Each item is locally popped,
          handcrafted, and sealed in a compostable bag.
        </Paragraph>
        <Button className="my-4" onClick={openDialog}>
          Order
        </Button>
        <Heading2>Logistics</Heading2>
        <DefinitionList>
          <DescriptionTerm>Minimum order</DescriptionTerm>
          <DescriptionDetails>10 bags per flavor.</DescriptionDetails>
          <DescriptionTerm>Lead time</DescriptionTerm>
          <DescriptionDetails>
            Order by 9pm Sunday for delivery on Friday of the same week.
          </DescriptionDetails>
          <DescriptionTerm>Delivery</DescriptionTerm>
          <DescriptionDetails>
            First delivery free. Subsequent orders delivered for $5.00.
          </DescriptionDetails>
          <DescriptionTerm>Equipment</DescriptionTerm>
          <DescriptionDetails>
            Signs, shelf toppers, and clip strips available upon request.
          </DescriptionDetails>
          <DescriptionTerm>Payment</DescriptionTerm>
          <DescriptionDetails>
            Cash or check accepted upon product delivery. Online or in-person
            card payments accepted with a 3.5% processing fee. Net 30 payment
            terms with mailed check available upon request.
          </DescriptionDetails>
          <DescriptionTerm>Shelf life</DescriptionTerm>
          <DescriptionDetails>
            4 weeks after delivery date recommended for optimum flavor and
            freshness.
          </DescriptionDetails>
          <DescriptionTerm>Additional information</DescriptionTerm>
          <DescriptionDetails>
            See{' '}
            <Link className="underline" href="/products">
              Products
            </Link>{' '}
            for product photographs, ingredients, and allergens.
          </DescriptionDetails>
        </DefinitionList>
        <Heading2>Pricing</Heading2>
      </PageContentLayout>
      <ProductPricingList products={RETAIL_PRODUCTS} type="retail" />
      <PageContentLayout>
        <Button className="mt-4" onClick={openDialog}>
          Order
        </Button>
      </PageContentLayout>
      {isFormVisible && (
        <FormDialog
          onCloseFormDialog={closeDialog}
          src={RETAIL_ORDER_FORM_SRC}
          title={RETAIL_ORDER_FORM_TITLE}
        />
      )}
    </>
  );
};

export default Retail;
