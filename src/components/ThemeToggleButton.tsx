import React from 'react';
import { WHITE } from '../constants/color';
import { LARGE_PULSE_STYLE } from '../constants/css/pulse';
import { BUTTON_STYLE } from '../constants/css/button';
import styled from 'styled-components';
import { WITH_BOX_SHADOW_STYLE } from '../constants/css/shadow';

const StyledButton = styled.button`
  ${BUTTON_STYLE}

  background-color: transparent;
  box-shadow: none;
  margin: 0 8px;
  min-width: unset;
  padding: 4px;
`;

const StyledButtonIcon = styled.span`
  ${LARGE_PULSE_STYLE}
  ${WITH_BOX_SHADOW_STYLE}

  background-color: var(--main-theme-medium);
  border: 1px solid ${WHITE};
  border-radius: 50%;
  height: 24px;
  width: 24px;
`;

interface Props {
  onToggleTheme: () => void;
}

const ThemeToggleButton: React.FC<Props> = ({ onToggleTheme }) => {
  return (
    <StyledButton aria-label="Toggle color scheme" onClick={onToggleTheme}>
      <StyledButtonIcon aria-hidden="true" />
    </StyledButton>
  );
};

export default ThemeToggleButton;
