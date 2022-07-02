import React from 'react';
import { bigPulse } from '../constants/css/pulse';
import { buttonStyle } from '../constants/css/button';
import styled from 'styled-components';
import { toggleTheme } from '../utilities/theme';

const StyledButton = styled.button`
  ${buttonStyle}

  background-color: transparent;
  margin: 0 8px;
  min-width: unset;
  padding: 4px;
`;

const StyledButtonIcon = styled.span`
  ${bigPulse}

  background-color: var(--main-theme-medium);
  border: 1px solid var(--main-theme-light);
  border-radius: 50%;
  height: 24px;
  width: 24px;
`;

export default function ThemeToggleButton() {
  return (
    <StyledButton aria-label="Toggle color scheme" onClick={toggleTheme}>
      <StyledButtonIcon aria-hidden="true" />
    </StyledButton>
  );
}
