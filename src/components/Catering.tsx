'use client';

import { CATERING_PRODUCTS } from '../constants/product';
import { Heading1 } from './common/Heading1';
import { Heading2 } from './common/Heading2';
import { Paragraph } from './common/Paragraph';
import PageHeaderPhotographSrc from '../images/glamorous-chocolate-hazelnut-espresso.jpeg';
import Link from 'next/link';
import { FormDialog } from './FormDialog';
import { useDialogState } from '../hooks/use-dialog-state';
import {
  CATERING_ORDER_FORM_SRC,
  CATERING_ORDER_FORM_TITLE,
} from '../constants/form';
import { PageContentLayout } from './PageContentLayout';
import { Button } from './common/Button';
import { DefinitionList } from './common/DefinitionList';
import { DescriptionTerm } from './common/DescriptionTerm';
import { DescriptionDetails } from './common/DescriptionDetails';
import { ProductPricingList } from './common/ProductPricingList';
import { PageHeaderPhotograph } from './common/PageHeaderPhotograph';

export function Catering() {
  const { closeDialog, isFormVisible, openDialog } = useDialogState();

  return (
    <>
      <PageHeaderPhotograph
        alt="Photograph of Chocolate Hazelnut Espresso craft popcorn on a wooden table alongside hazelnuts, chocolate bar chunks, and an espresso shot"
        aspectRatioCss="4032 / 3024"
        src={PageHeaderPhotographSrc}
      />
      <PageContentLayout>
        <Heading1>Catering</Heading1>
        <Paragraph>
          Support a small business and make your event unforgettable by serving
          Jerrypop craft popcorn. Each item is locally popped, handcrafted, and
          sealed in a compostable bag.
        </Paragraph>
        <Button className="my-4" onClick={openDialog}>
          Order
        </Button>
        <Heading2>Logistics</Heading2>
        <DefinitionList>
          <DescriptionTerm>Minimum order</DescriptionTerm>
          <DescriptionDetails>20 bags per flavor.</DescriptionDetails>
          <DescriptionTerm>Pickup location</DescriptionTerm>
          <DescriptionDetails>
            343 Bartlett Street, San Francisco, CA 94110.
          </DescriptionDetails>
          <DescriptionTerm>Lead time</DescriptionTerm>
          <DescriptionDetails>
            Typically less than two weeks from order date to fulfillment date.
          </DescriptionDetails>
          <DescriptionTerm>Payment</DescriptionTerm>
          <DescriptionDetails>
            To avoid waste, full payment via cash, check, card (online or
            in-person), or tap is required before production.
          </DescriptionDetails>
          <DescriptionTerm>Shelf life</DescriptionTerm>
          <DescriptionDetails>
            3 weeks after pickup date recommended for optimum flavor and
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
      <ProductPricingList products={CATERING_PRODUCTS} type="catering" />
      <PageContentLayout>
        <Button className="mt-4" onClick={openDialog}>
          Order
        </Button>
      </PageContentLayout>
      {isFormVisible && (
        <FormDialog
          onCloseFormDialog={closeDialog}
          src={CATERING_ORDER_FORM_SRC}
          title={CATERING_ORDER_FORM_TITLE}
        />
      )}
    </>
  );
}
