import {
  KERNEL_FOUNTAIN_DELAY,
  KERNEL_FOUNTAIN_DURATION,
  KERNEL_FOUNTAIN_KERNEL_COUNT,
} from '../constants/Animation';
import {
  MAIN_LOGO_NARROW_HEIGHT_PX,
  MAIN_LOGO_WIDE_HEIGHT_PX,
  WINDOW_BREAKPOINT_WIDTH_PX,
} from '../constants/kernel-fountain';
import { getFountainLeft, getFountainTop } from '../utilities/KernelFountain';
import KernelFountain from './KernelFountain';
import NavigationMenu from './NavigationMenu';
import PageHeading from './PageHeading';
import React from 'react';
import logo from '../images/jerrypop.svg';
import styled from 'styled-components';
import useWindowSize from '@rehooks/window-size';

const StyledHome = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const StyledLogo = styled.img`
  animation: rotation 3s infinite ease-in-out;
  height: ${MAIN_LOGO_WIDE_HEIGHT_PX}px;
  margin: 48px 0 0;
  pointer-events: none;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */

  @keyframes rotation {
    0%,
    100% {
      transform: rotate(-2deg);
    }
    50% {
      transform: rotate(2deg);
    }
  }

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    height: ${MAIN_LOGO_NARROW_HEIGHT_PX}px;
  }
`;

const StyledParagraph = styled.p`
  margin: 12px;
  max-width: 600px;
`;

export default function Home() {
  const { innerWidth } = useWindowSize();

  return (
    <StyledHome>
      <StyledLogo src={logo} alt="Jerrypop logo" />
      <PageHeading>Poppin’ off with Jerrypop</PageHeading>
      <StyledParagraph>
        Life is too short to not eat popcorn. Jerrypop is dedicated to
        handcrafting quality popcorn in San Francisco, California.
      </StyledParagraph>
      <NavigationMenu />
      <KernelFountain
        delay={KERNEL_FOUNTAIN_DELAY}
        duration={KERNEL_FOUNTAIN_DURATION}
        id="home-fountain"
        kernelCount={KERNEL_FOUNTAIN_KERNEL_COUNT}
        left={getFountainLeft(innerWidth)}
        top={getFountainTop(innerWidth)}
      />
    </StyledHome>
  );
}
