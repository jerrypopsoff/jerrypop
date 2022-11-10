import { Helmet } from 'react-helmet-async';
import NavigationMenu from './NavigationMenu';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import ProductsPhotograph from '../images/all-products-photograph.jpeg';
import { WINDOW_BREAKPOINT_WIDTH_PX } from '../constants/breakpoint';

const StyledRetailers = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledReasons = styled.ul`
  max-width: 600px;
  text-align: left;
`;

const StyledReason = styled.li`
  margin: 4px 0;
`;

const StyledProductsPhotograph = styled.img`
  height: 616px;
  margin: 24px 0;
  max-width: 600px;
  width: 600px;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    height: auto;
    width: 85vw;
  }
`;

const Retailers: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Retailers · Jerrypop</title>
      </Helmet>
      <StyledRetailers>
        <Typography type="h1">Breweries & Retailers</Typography>
        {/* <Typography maxWidth="600px" type="p">
          I would like to thank the Jerrypop family of breweries and retailers
          for their initial and continued support, for which without you, my
          dream would not have been possible! Please visit Jerrypop’s partner
          breweries & retailers whenever you are in their area.
        </Typography> */}
        <Typography maxWidth="600px" type="p">
          Considering upleveling your brewery or retail location by stocking
          locally handcrafted popcorn on your shelves? Reach out to{' '}
          <a href="mailto:info@jerrypop.com">info@jerrypop.com</a>.
        </Typography>
        <Typography maxWidth="600px" type="h3">
          Why carry Jerrypop?
        </Typography>
        <StyledReasons>
          <StyledReason>
            <b>Generate excitement</b> by serving snacks with unique and bold
            flavor profiles
          </StyledReason>
          <StyledReason>
            <b>Bolster satisfaction</b> with sustainably produced and packaged
            nibbles
          </StyledReason>
          <StyledReason>
            <b>Promote a sense of community</b> by offering locally handcrafted
            munchies
          </StyledReason>
        </StyledReasons>
        <StyledProductsPhotograph
          alt="Photograph of Jerrypop craft popcorn products"
          src={ProductsPhotograph}
        />
        <NavigationMenu />
      </StyledRetailers>
    </>
  );
};

export default Retailers;
