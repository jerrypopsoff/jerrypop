'use client';

import ProductListing from './ProductListing';
import { PRODUCTS } from '../constants/product';
import Heading1 from './common/Heading1';
import Paragraph from './common/Paragraph';
import PageHeaderPhotographSrc from '../images/glamorous-mala-lime.jpeg';
import { TILE_LIST_STYLE } from '../constants/css/tile-list';
import styled from 'styled-components';
import PageHeaderPhotograph from './common/PageHeaderPhotograph';

const StyledProducts = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledTileList = styled.ul`
  ${TILE_LIST_STYLE}
`;

const Products = () => {
  return (
    <StyledProducts>
      <PageHeaderPhotograph
        alt="Photograph of Málà Lime craft popcorn alongside mapo tofu and lime wedges on a wooden bar top"
        aspectRatioCss="8688 / 5792"
        src={PageHeaderPhotographSrc}
      />
      <Heading1>Products</Heading1>
      <Paragraph>
        Each item is locally popped, handcrafted, and sealed in a compostable
        bag.
      </Paragraph>
      <StyledTileList>
        {PRODUCTS.map((product) => (
          <ProductListing key={product.title} product={product} />
        ))}
      </StyledTileList>
    </StyledProducts>
  );
};

export default Products;
