import { Link, useLocation } from 'react-router-dom';
import {
  MAIN_LOGO_NARROW_HEIGHT_PX,
  MAIN_LOGO_WIDE_HEIGHT_PX,
  WINDOW_BREAKPOINT_WIDTH_PX,
} from '../constants/kernel-fountain';
import BackgroundWordmark from './BackgroundWordmark';
import React from 'react';
import { lazyDangleRotation } from '../constants/css/rotation';
import logo from '../images/colonel.svg';
import styled from 'styled-components';

const StyledLogo = styled.img`
  ${lazyDangleRotation}
  cursor: pointer;
  height: ${MAIN_LOGO_WIDE_HEIGHT_PX}px;
  margin: 48px 0 -24px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    height: ${MAIN_LOGO_NARROW_HEIGHT_PX}px;
  }
`;

export default function Logo({ onToggleTheme, theme }) {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return (
      <>
        <BackgroundWordmark fillColor={theme.mainThemeMedium} />
        <StyledLogo alt="Jerrypop logo" onClick={onToggleTheme} src={logo} />
      </>
    );
  }

  return (
    <>
      <BackgroundWordmark fillColor={theme.mainThemeMedium} />
      <Link to="/">
        <StyledLogo alt="Jerrypop logo" onClick={onToggleTheme} src={logo} />
      </Link>
    </>
  );
}
