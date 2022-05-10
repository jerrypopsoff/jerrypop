import React from 'react';
import SocialLinks from './SocialLinks';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  align-items: center;
  display: flex;
  font-size: 11px;
  justify-content: space-around;
  margin: 48px auto 12px;
  max-width: 600px;
`;

const StyledSpan = styled.span`
  display: block;
  margin: 0 8px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <StyledSpan>© {new Date().getFullYear()} Jerrypop, LLC</StyledSpan>
      <StyledSpan>
        Art by{' '}
        <a
          href="http://anthonytesija.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Anthony Tesija
        </a>
      </StyledSpan>
      <StyledSpan>
        <SocialLinks />
      </StyledSpan>
    </StyledFooter>
  );
}
