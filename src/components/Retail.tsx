import React from 'react';
import { PRICED_PRODUCTS } from '../constants/product';
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
import PricingListItem from './PricingListItem';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLogisticsDescriptionList = styled.dl`
  display: grid;
  grid-template-columns: 1fr 3fr;
  margin: 24px auto;
  max-width: 624px;
  padding: 0 12px;
  text-align: left;
`;

const StyledLogisticsDescriptionTerm = styled.dt`
  font-weight: bold;
  grid-column-start: 1;
  margin: 16px 8px;
`;

const StyledLogisticsDescriptionDetails = styled.dd`
  grid-column-start: 2;
  margin: 16px 8px;
`;

const StyledTileList = styled.ul`
  ${TILE_LIST_STYLE}
`;

const Retail: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Retail · Jerrypop</title>
      </Helmet>
      {/* Todo: Update glamor photograph. */}
      <GlamorPhotograph
        alt="Photograph of packaged Jerrypop craft popcorn varieties on a wooden bar top"
        aspectRatio={8688 / 5792}
        fallbackSrc={Products2400}
        fallbackSrcSet={`${Products600} 600w, ${Products1200} 1200w, ${Products2400} 2400w`}
        srcSet={`${ProductsWebp600} 600w, ${ProductsWebp1200} 1200w, ${ProductsWebp2400} 2400w`}
      />
      <Typography type="h1">Retail</Typography>
      <Typography type="p">
        Each item is locally popped, handcrafted, and sealed in a compostable
        bag.
      </Typography>
      <Typography type="h2">Pricing</Typography>
      <StyledTileList>
        {PRICED_PRODUCTS.map((pricedProduct) => (
          <PricingListItem
            key={pricedProduct.title}
            pricedProduct={pricedProduct}
          />
        ))}
      </StyledTileList>
      <Typography type="h2">Logistics</Typography>
      <StyledLogisticsDescriptionList>
        <StyledLogisticsDescriptionTerm>
          Minimum order
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          30 bags per flavor ($135-$165).
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Delivery
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          Hand delivered for $5.00 + $2.00 per mile from 1431 Grove Street.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Shelf life
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          4 weeks after delivery date.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>Payment</StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          Cash or check accepted upon product delivery or via mail. Online or
          in-person card payments accepted with a 3.5% processing fee. Invoice
          provided by Jerrypop.
        </StyledLogisticsDescriptionDetails>
        <StyledLogisticsDescriptionTerm>
          Additional information
        </StyledLogisticsDescriptionTerm>
        <StyledLogisticsDescriptionDetails>
          See{' '}
          <Link rel="noreferrer" target="_blank" to="/products">
            Products
          </Link>{' '}
          for photographs, ingredients, and allergens.
        </StyledLogisticsDescriptionDetails>
      </StyledLogisticsDescriptionList>
    </>
  );
};

export default Retail;
