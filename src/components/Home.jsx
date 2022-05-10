import {
  KERNEL_FOUNTAIN_DELAY,
  KERNEL_FOUNTAIN_DURATION,
  KERNEL_FOUNTAIN_KERNEL_COUNT,
} from '../constants/Animation';
import { StyledHome, StyledLogo } from '../styled-components/Home';
import { getFountainLeft, getFountainTop } from '../utilities/KernelFountain';
import KernelFountain from './KernelFountain';
import NavigationMenu from './NavigationMenu';
import PageHeading from './PageHeading';
import React from 'react';
import logo from '../images/jerrypop.svg';
import useWindowSize from '@rehooks/window-size';

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
