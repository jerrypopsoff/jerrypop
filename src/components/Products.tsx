'use client';

import { ProductListing } from './ProductListing';
import { PRODUCTS } from '../constants/product';
import { Heading1 } from './common/Heading1';
import { Paragraph } from './common/Paragraph';
import PageHeaderPhotographSrc from '../images/glamorous-mala-lime.jpeg';
import { PageHeaderPhotograph } from './common/PageHeaderPhotograph';
import { PageContentLayout } from './PageContentLayout';

export function Products() {
  return (
    <>
      <PageHeaderPhotograph
        alt="Photograph of Málà Lime craft popcorn alongside mapo tofu and lime wedges on a wooden bar top"
        aspectRatioCss="8688 / 5792"
        src={PageHeaderPhotographSrc}
      />
      <PageContentLayout>
        <Heading1>Products</Heading1>
        <Paragraph>
          Each item is locally popped, handcrafted, and sealed in a compostable
          bag.
        </Paragraph>
      </PageContentLayout>
      <ul className="flex flex-wrap justify-center">
        {PRODUCTS.map((product) => (
          <ProductListing key={product.title} product={product} />
        ))}
      </ul>
    </>
  );
}
