import React from 'react';
import { WHITE } from '../constants/color';
import { bigPulse } from '../constants/css/pulse';
import { buttonStyle } from '../constants/css/button';
import styled from 'styled-components';
import { withBoxShadow } from '../constants/css/shadow';

const StyledButton = styled.button`
  ${buttonStyle}

  background-color: transparent;
  box-shadow: none;
  margin: 0 8px;
  min-width: unset;
  padding: 4px;
`;

const StyledButtonIcon = styled.span`
  ${bigPulse}
  ${withBoxShadow}

  background-color: var(--main-theme-medium);
  border: 1px solid ${WHITE};
  border-radius: 50%;
  height: 24px;
  width: 24px;
`;

export default function ThemeToggleButton({ onToggleTheme }) {
  return (
    <StyledButton aria-label="Toggle color scheme" onClick={onToggleTheme}>
      <StyledButtonIcon aria-hidden="true" />
    </StyledButton>
  );
}
