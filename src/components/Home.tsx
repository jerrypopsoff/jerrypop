import { Helmet } from 'react-helmet-async';
import React from 'react';
import Typography from './Typography';
import styled from 'styled-components';
import Logo from './Logo';
import { useTheme } from '../hooks/use-theme';
import { WHITE } from '../constants/color';
import { HOME_SECTION_BACKGROUND_Z_INDEX } from '../constants/z-index';
import GlamorPhotograph from './GlamorPhotograph';
import HabaneroRanchJpeg600 from '../images/glamorous-habanero-ranch-600.jpeg';
import HabaneroRanchJpeg1200 from '../images/glamorous-habanero-ranch-1200.jpeg';
import HabaneroRanchJpeg2400 from '../images/glamorous-habanero-ranch-2400.jpeg';
import HabaneroRanchWebp600 from '../images/glamorous-habanero-ranch-600.webp';
import HabaneroRanchWebp1200 from '../images/glamorous-habanero-ranch-1200.webp';
import HabaneroRanchWebp2400 from '../images/glamorous-habanero-ranch-2400.webp';
import { WINDOW_NARROW_WIDTH_PX } from '../constants/breakpoint';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledThemeSection = styled.section`
  align-items: center;
  background-color: var(--main-theme-dark);
  color: ${WHITE};
  display: flex;
  height: 400px;
  justify-content: center;
  width: 100%;
  z-index: ${HOME_SECTION_BACKGROUND_Z_INDEX};

  @media (max-width: ${WINDOW_NARROW_WIDTH_PX}px) {
    height: 280px;
  }
`;

const StyledRegularSection = styled.section`
  background-color: ${WHITE};
  width: 100%;
  z-index: ${HOME_SECTION_BACKGROUND_Z_INDEX};
`;

const StyledTagline = styled(Typography)`
  font-size: 18px;
  margin: 78px auto;
  max-width: 600px;
  padding: 0 24px;
  text-transform: none;
`;

const Home: React.FC = () => {
  const [theme, rotateTheme] = useTheme();

  return (
    <>
      <Helmet>
        <title>Jerrypop</title>
      </Helmet>
      <StyledHome>
        <StyledThemeSection>
          <Logo onToggleTheme={rotateTheme} theme={theme} />
        </StyledThemeSection>
        <StyledRegularSection>
          <StyledTagline type="h1">
            Locally handcrafted San Francisco popcorn.
          </StyledTagline>
          <GlamorPhotograph
            alt="Photograph of a blue bowl of Habanero Ranch Craft Popcorn on a wood surface taken from directly above"
            aspectRatio={17 / 10}
            fallbackSrc={HabaneroRanchJpeg2400}
            fallbackSrcSet={`${HabaneroRanchJpeg600} 600w, ${HabaneroRanchJpeg1200} 1200w, ${HabaneroRanchJpeg2400} 2400w`}
            maxHeightPx={600}
            srcSet={`${HabaneroRanchWebp600} 600w, ${HabaneroRanchWebp1200} 1200w, ${HabaneroRanchWebp2400} 2400w`}
          />
        </StyledRegularSection>
      </StyledHome>
    </>
  );
};

export default Home;
