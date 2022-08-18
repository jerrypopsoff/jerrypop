import { Link, useLocation } from 'react-router-dom';
import { MAIN_LOGO_WIDE_SIZE_PX } from '../constants/breakpoint';
import { BLACK } from '../constants/color';
import BackgroundWordmark from './BackgroundWordmark';
import React from 'react';
import type { Theme } from '../types/theme';
import logo from '../images/colonel.svg';
import styled from 'styled-components';

const StyledLogo = styled.img`
  cursor: pointer;
  height: ${MAIN_LOGO_WIDE_SIZE_PX}px;
  margin: 353px 0; // Screen dimensions: 680x1156
  width: ${MAIN_LOGO_WIDE_SIZE_PX}px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */
`;

interface Props {
  onToggleTheme: () => void;
  theme: Theme;
}

const Logo: React.FC<Props> = ({ onToggleTheme, theme }) => {
  const { pathname } = useLocation();

  if (pathname === '/') {
    return (
      <>
        <BackgroundWordmark fillColor={BLACK} isFixed={true} />
        <BackgroundWordmark fillColor={theme.mainThemeMedium} />
        <StyledLogo alt="Jerrypop logo" onClick={onToggleTheme} src={logo} />
      </>
    );
  }

  return (
    <>
      <BackgroundWordmark fillColor={BLACK} isFixed={true} />
      <BackgroundWordmark fillColor={theme.mainThemeMedium} />
      <Link to="/">
        <StyledLogo alt="Jerrypop logo" src={logo} />
      </Link>
    </>
  );
};

export default Logo;
