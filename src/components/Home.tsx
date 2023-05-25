import { Helmet } from 'react-helmet-async';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import GlamorPhotograph from './GlamorPhotograph';
import HabaneroRanch600 from '../images/glamorous-habanero-ranch-600.jpeg';
import HabaneroRanch1200 from '../images/glamorous-habanero-ranch-1200.jpeg';
import HabaneroRanch2400 from '../images/glamorous-habanero-ranch-2400.jpeg';
import HabaneroRanchWebp600 from '../images/glamorous-habanero-ranch-600.webp';
import HabaneroRanchWebp1200 from '../images/glamorous-habanero-ranch-1200.webp';
import HabaneroRanchWebp2400 from '../images/glamorous-habanero-ranch-2400.webp';
import { DEFAULT_TILE_LIST_IMAGE_WIDTH_PX } from '../constants/css/tile-list';
import {
  FOOTER_TOP_MARGIN_PX,
  WINDOW_BREAKPOINT_WIDTH_PX,
} from '../constants/breakpoint';
import { Link } from 'react-router-dom';
import { BUTTON_STYLE } from '../constants/css/button';
import PressArticles from './PressArticles';
import { TILE_LIST_DIVIDER_STYLE } from '../constants/css/tile-list';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledRegularSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${FOOTER_TOP_MARGIN_PX}px 0;
  padding: 105px 0;
  width: 100%;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    padding: 15px 0;
  }
`;

const StyledTagline = styled(Typography)`
  font-size: 18px;
  margin: 0 0 16px;
  max-width: 600px;
  padding: 0 24px;
`;

const StyledCallToActionLink = styled(Link)`
  ${BUTTON_STYLE}
`;

const StyledDivider = styled.div`
  ${TILE_LIST_DIVIDER_STYLE}
`;

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Jerrypop</title>
      </Helmet>
      <StyledHome>
        <GlamorPhotograph
          alt="Photograph of a blue bowl of Habanero Ranch Craft Popcorn on a wooden surface taken from directly above"
          aspectRatio={17 / 10}
          fallbackSrc={HabaneroRanch2400}
          fallbackSrcSet={`${HabaneroRanch600} 600w, ${HabaneroRanch1200} 1200w, ${HabaneroRanch2400} 2400w`}
          srcSet={`${HabaneroRanchWebp600} 600w, ${HabaneroRanchWebp1200} 1200w, ${HabaneroRanchWebp2400} 2400w`}
        />
        <StyledRegularSection>
          <StyledTagline type="h1">
            Locally crafted San Francisco popcorn.
          </StyledTagline>
          <StyledCallToActionLink to="/order">Order</StyledCallToActionLink>
        </StyledRegularSection>
        <StyledDivider
          aria-hidden={true}
          $imageWidthPx={DEFAULT_TILE_LIST_IMAGE_WIDTH_PX}
        />
        <PressArticles />
      </StyledHome>
    </>
  );
};

export default Home;
