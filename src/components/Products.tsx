import React from 'react';
import ProductListing from './ProductListing';
import { PRODUCTS } from '../constants/product';

interface Props {
  onClickOrderOnline: () => void;
}

const Products: React.FC<Props> = ({ onClickOrderOnline }) => {
  return (
    <>
      {PRODUCTS.map((product) => (
        <ProductListing
          key={product.title}
          product={product}
          onClickOrderOnline={onClickOrderOnline}
        />
      ))}
    </>
  );
};

export default Products;
