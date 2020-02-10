import {
  KERNEL_FOUNTAIN_DELAY,
  KERNEL_FOUNTAIN_DURATION,
  KERNEL_FOUNTAIN_KERNEL_COUNT,
} from '../constants/Animation';
import { getFountainLeft, getFountainTop } from '../utilities/KernelFountain';
import Footer from './Footer';
import InteractiveLink from './InteractiveLink';
import KernelFountain from './KernelFountain';
import React from 'react';
import { getFluidFontSizeStyle } from '../utilities/Style';
import logo from '../images/Jerrypop.png';
import styled from 'styled-components';
import useWindowSize from '@rehooks/window-size';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;
`;

const StyledLogo = styled.img`
  animation: rotation 3s infinite ease-in-out;
  height: 40vmin;
  margin: 48px 12px 24px;
  pointer-events: none;

  @keyframes rotation {
    0%,
    100% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
  }
`;

const StyledContent = styled.p`
  ${getFluidFontSizeStyle(13, 16)}
  margin: 12px 12px 30px;
`;

const StyledHeading = styled.h1`
  ${getFluidFontSizeStyle(24, 78)}
  margin: 0 12px;
  text-transform: uppercase;
`;

export default function Home() {
  const windowSize = useWindowSize();

  return (
    <StyledHome>
      <StyledLogo src={logo} alt="Jerrypop Logo" />
      <StyledHeading>Poppin’ off with Jerry</StyledHeading>
      <StyledContent>
        Pick up an{' '}
        <a
          href="https://www.amazon.com/gp/product/B01G7DM3G2/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01G7DM3G2&linkCode=as2&tag=jerry04c-20&linkId=ca82b9da5246d1a9a2e398a2d6be50c2"
          rel="noopener noreferrer"
          target="_blank"
        >
          air popper
        </a>{' '}
        and an enormous bowl before you do anything else.
      </StyledContent>
      <InteractiveLink
        defaultText="🍿 Start poppin’ 🍿"
        interactiveText="💥 Start poppin’ 💥"
        to="/user/IfGqGIjqLIP4soMIrBI9ULIUmUy2"
      />
      <Footer />
      <KernelFountain
        delay={KERNEL_FOUNTAIN_DELAY}
        duration={KERNEL_FOUNTAIN_DURATION}
        id="home-fountain"
        kernelCount={KERNEL_FOUNTAIN_KERNEL_COUNT}
        left={getFountainLeft(windowSize)}
        top={getFountainTop(windowSize)}
      />
    </StyledHome>
  );
}
