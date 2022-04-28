import {
  KERNEL_FOUNTAIN_DELAY,
  KERNEL_FOUNTAIN_DURATION,
  KERNEL_FOUNTAIN_KERNEL_COUNT,
} from '../constants/Animation';
import {
  StyledContent,
  StyledHeading,
  StyledHome,
  StyledLogo,
} from '../styled-components/Home';
import { getFountainLeft, getFountainTop } from '../utilities/KernelFountain';
import InteractiveLink from './InteractiveLink';
import KernelFountain from './KernelFountain';
import React from 'react';
import SocialLinks from './SocialLinks';
import logo from '../images/jerrypop.svg';
import useWindowSize from '@rehooks/window-size';

export default function Home() {
  const windowSize = useWindowSize();

  return (
    <StyledHome>
      <StyledLogo src={logo} alt="Jerrypop Logo" />
      <StyledHeading>Poppin’ off with Jerry</StyledHeading>
      <StyledContent>
        Life is too short to not eat popcorn. Find yourself an enormous bowl,
        and give these recipes a shot.
      </StyledContent>
      <InteractiveLink
        defaultText="🍿 Pop off 🍿"
        interactiveText="💥 Pop off 💥"
        to="/user/IfGqGIjqLIP4soMIrBI9ULIUmUy2"
      />
      <SocialLinks />
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
