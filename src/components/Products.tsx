import React from 'react';
import ProductListing from './ProductListing';
import { PRODUCTS } from '../constants/product';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Typography from './Typography';

const StyledUnorderedList = styled.ul`
  padding: 0;
  list-style: none;
  margin: 0;
`;

const Products: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Products · Jerrypop</title>
      </Helmet>
      <Typography type="h1">Products</Typography>
      <StyledUnorderedList>
        {PRODUCTS.map((product) => (
          <ProductListing key={product.title} product={product} />
        ))}
      </StyledUnorderedList>
    </>
  );
};

export default Products;
