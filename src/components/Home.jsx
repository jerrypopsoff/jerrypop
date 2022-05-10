import {
  KERNEL_FOUNTAIN_DELAY,
  KERNEL_FOUNTAIN_DURATION,
  KERNEL_FOUNTAIN_KERNEL_COUNT,
} from '../constants/Animation';
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
  height: 40vmin;
  margin: 48px 12px 24px;
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
`;

export default function Home() {
  const windowSize = useWindowSize();

  return (
    <StyledHome>
      <StyledLogo src={logo} alt="Jerrypop logo" />
      <PageHeading>Poppin’ off with Jerry</PageHeading>
      <NavigationMenu />
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
