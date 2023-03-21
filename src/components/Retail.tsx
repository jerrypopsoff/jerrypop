import React from 'react';
import { PRICED_PRODUCTS } from '../constants/product';
import { Helmet } from 'react-helmet-async';
import Typography from './Typography';
import GlamorPhotograph from './GlamorPhotograph';
import GlamorousChipotleCheddar600 from '../images/glamorous-chipotle-cheddar-600.jpg';
import GlamorousChipotleCheddar1200 from '../images/glamorous-chipotle-cheddar-1200.jpg';
import GlamorousChipotleCheddar2400 from '../images/glamorous-chipotle-cheddar-2400.jpg';
import GlamorousChipotleCheddarWebp600 from '../images/glamorous-chipotle-cheddar-600.webp';
import GlamorousChipotleCheddarWebp1200 from '../images/glamorous-chipotle-cheddar-1200.webp';
import GlamorousChipotleCheddarWebp2400 from '../images/glamorous-chipotle-cheddar-2400.webp';
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
      <GlamorPhotograph
        alt="Photograph of Chipotle Cheddar Craft popcorn with wedges of cheddar, whole chipotles, and lime wedges on a wooden bar top"
        aspectRatio={2080 / 1170}
        fallbackSrc={GlamorousChipotleCheddar2400}
        fallbackSrcSet={`${GlamorousChipotleCheddar600} 600w, ${GlamorousChipotleCheddar1200} 1200w, ${GlamorousChipotleCheddar2400} 2400w`}
        srcSet={`${GlamorousChipotleCheddarWebp600} 600w, ${GlamorousChipotleCheddarWebp1200} 1200w, ${GlamorousChipotleCheddarWebp2400} 2400w`}
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
