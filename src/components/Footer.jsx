import React from 'react';
import SocialLinks from './SocialLinks';
import ThemeToggleButton from './ThemeToggleButton';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  font-size: 11px;
  justify-content: space-between;
  margin: 48px auto 0;
  max-width: 600px;
  padding: 0 16px 24px;
`;

const StyledSpan = styled.span`
  display: block;
  margin: 0 8px;
`;

export default function Footer({ onToggleTheme }) {
  return (
    <StyledFooter>
      <StyledSpan>© {new Date().getFullYear()} Jerrypop, LLC</StyledSpan>
      <ThemeToggleButton onToggleTheme={onToggleTheme} />
      <StyledSpan>
        <SocialLinks />
      </StyledSpan>
    </StyledFooter>
  );
}
