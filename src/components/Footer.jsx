import { StyledFooter, StyledSpan } from '../styled-components/Footer';
import React from 'react';
import SocialLinks from './SocialLinks';

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
