import { Link, useLocation } from 'react-router-dom';
import {
  MAIN_LOGO_NARROW_SIZE_PX,
  MAIN_LOGO_WIDE_SIZE_PX,
  WINDOW_BREAKPOINT_WIDTH_PX,
} from '../constants/breakpoint';
import { BLACK } from '../constants/color';
import BackgroundWordmark from './BackgroundWordmark';
import React from 'react';
import type { Theme } from '../types/theme';
import { SLOW_DANGLE_STYLE } from '../constants/css/rotation';
import logo from '../images/colonel.svg';
import styled from 'styled-components';

const StyledLogo = styled.img`
  ${SLOW_DANGLE_STYLE}
  cursor: pointer;
  height: ${MAIN_LOGO_WIDE_SIZE_PX}px;
  margin: 48px 0 -24px;
  width: ${MAIN_LOGO_WIDE_SIZE_PX}px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    height: ${MAIN_LOGO_NARROW_SIZE_PX}px;
    width: ${MAIN_LOGO_NARROW_SIZE_PX}px;
  }
`;

interface Props {
  onToggleTheme: () => void;
  theme: Theme;
}

const Logo: React.FC<Props> = ({ onToggleTheme, theme }) => {
  const { pathname } = useLocation();
  const logoElement =
    pathname === '/' ? (
      <StyledLogo alt="Jerrypop logo" onClick={onToggleTheme} src={logo} />
    ) : (
      <Link to="/">
        <StyledLogo alt="Jerrypop logo" src={logo} />
      </Link>
    );

  return (
    <>
      <BackgroundWordmark fillColor={BLACK} isFixed={true} />
      <BackgroundWordmark fillColor={theme.mainThemeMedium} />
      {logoElement}
    </>
  );
};

export default Logo;
