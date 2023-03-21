import React from 'react';
import ProductListing from './ProductListing';
import { PRODUCTS } from '../constants/product';
import { Helmet } from 'react-helmet-async';
import Typography from './Typography';
import GlamorPhotograph from './GlamorPhotograph';
import Products600 from '../images/glamorous-packaging-600.jpg';
import Products1200 from '../images/glamorous-packaging-1200.jpg';
import Products2400 from '../images/glamorous-packaging-2400.jpg';
import ProductsWebp600 from '../images/glamorous-packaging-600.webp';
import ProductsWebp1200 from '../images/glamorous-packaging-1200.webp';
import ProductsWebp2400 from '../images/glamorous-packaging-2400.webp';
import { TILE_LIST_STYLE } from '../constants/css/tile-list';
import styled from 'styled-components';

const StyledTileList = styled.ul`
  ${TILE_LIST_STYLE}
`;

const Products: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Products · Jerrypop</title>
      </Helmet>
      <GlamorPhotograph
        alt="Photograph of packaged Jerrypop craft popcorn varieties on a wooden bar top"
        aspectRatio={8688 / 5792}
        fallbackSrc={Products2400}
        fallbackSrcSet={`${Products600} 600w, ${Products1200} 1200w, ${Products2400} 2400w`}
        srcSet={`${ProductsWebp600} 600w, ${ProductsWebp1200} 1200w, ${ProductsWebp2400} 2400w`}
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
