import React from 'react';
import SocialLinks from './SocialLinks';
import ThemeToggleButton from './ThemeToggleButton';
import Typography from './Typography';
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

const StyledSocialLinksContainer = styled.div`
  margin: 0 8px;
`;

export default function Footer({ onToggleTheme }) {
  return (
    <StyledFooter>
      <Typography margin="0 8px" type="p">
        © {new Date().getFullYear()} Jerrypop, LLC
      </Typography>
      <ThemeToggleButton onToggleTheme={onToggleTheme} />
      <StyledSocialLinksContainer>
        <SocialLinks />
      </StyledSocialLinksContainer>
    </StyledFooter>
  );
}
