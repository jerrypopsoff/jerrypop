'use client';

import ProductListing from './ProductListing';
import { PRODUCTS } from '../constants/product';
import Typography from './Typography';
import GlamorPhotograph from './GlamorPhotograph';
import Products600 from '../images/glamorous-mala-lime-600.jpeg';
import Products1200 from '../images/glamorous-mala-lime-1200.jpeg';
import Products2400 from '../images/glamorous-mala-lime-2400.jpeg';
import ProductsWebp600 from '../images/glamorous-mala-lime-600.webp';
import ProductsWebp1200 from '../images/glamorous-mala-lime-1200.webp';
import ProductsWebp2400 from '../images/glamorous-mala-lime-2400.webp';
import { TILE_LIST_STYLE } from '../constants/css/tile-list';
import styled from 'styled-components';

const StyledTileList = styled.ul`
  ${TILE_LIST_STYLE}
`;

const Products = () => {
  return (
    <>
      <GlamorPhotograph
        alt="Photograph of Málà Lime craft popcorn alongside mapo tofu and lime wedges on a wooden bar top"
        aspectRatio={8688 / 5792}
        fallbackSrc={Products2400.src}
        fallbackSourceSet={[
          { size: '600w', src: Products600.src },
          { size: '1200w', src: Products1200.src },
          { size: '2400w', src: Products2400.src },
        ]}
        sourceSet={[
          { size: '600w', src: ProductsWebp600.src },
          { size: '1200w', src: ProductsWebp1200.src },
          { size: '2400w', src: ProductsWebp2400.src },
        ]}
      />
      <Typography type="h1">Products</Typography>
      <Typography margin="12px 12px 24px" type="p">
        Each item is locally popped, handcrafted, and sealed in a compostable
        bag.
      </Typography>
      <StyledTileList>
        {PRODUCTS.map((product) => (
          <ProductListing key={product.title} product={product} />
        ))}
      </StyledTileList>
    </>
  );
};

export default Products;
