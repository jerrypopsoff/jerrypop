import BackgroundWordmark from './BackgroundWordmark';
import React from 'react';
import type { Theme } from '../types/theme';
import { SLOW_DANGLE_STYLE } from '../constants/css/rotation';
import logo from '../images/colonel.svg';
import styled from 'styled-components';
import { LOGO_Z_INDEX } from '../constants/z-index';
import { WINDOW_NARROW_WIDTH_PX } from '../constants/breakpoint';

const StyledButton = styled.button`
  ${SLOW_DANGLE_STYLE}
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  z-index: ${LOGO_Z_INDEX};
`;

const StyledLogo = styled.img`
  height: 275px;
  width: 275px;

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Edge, Opera and Firefox */

  @media (max-width: ${WINDOW_NARROW_WIDTH_PX}px) {
    height: 175px;
    width: 175px;
  }
`;

interface Props {
  onToggleTheme: () => void;
  theme: Theme;
}

const Logo: React.FC<Props> = ({ onToggleTheme, theme }) => {
  return (
    <>
      <BackgroundWordmark fillColor={theme.mainThemeMedium} />
      <StyledButton aria-label="Toggle website theme" onClick={onToggleTheme}>
        <StyledLogo alt="Jerrypop logo" src={logo} />
      </StyledButton>
    </>
  );
};

export default Logo;
