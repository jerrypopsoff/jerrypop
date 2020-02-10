import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  display: flex;
  margin: 100px 12px 12px;
  font-size: 11px;
`;

const StyledSpan = styled.span`
  display: block;
  margin: 0 24px;
`;

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
