import { StyledFooter, StyledSpan } from '../styled-components/Footer';
import React from 'react';

export default function Footer() {
  return (
    <StyledFooter>
      <StyledSpan>© {new Date().getFullYear()} Jerrypop</StyledSpan>
      <StyledSpan>
        Artwork by{' '}
        <a
          href="http://anthonytesija.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Anthony Tesija
        </a>
      </StyledSpan>
    </StyledFooter>
  );
}
