import React from 'react';
import { WINDOW_BREAKPOINT_WIDTH_PX } from '../constants/kernel-fountain';
import styled from 'styled-components';
import { withTextShadow } from '../constants/css/shadow';

export const StyledPageHeading = styled.h1`
  ${withTextShadow}
  font-family: 'Impact', 'Helvetica Neue', sans-serif;
  font-size: 78px;
  margin: 48px 0 12px;
  text-transform: uppercase;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    font-size: 48px;
  }
`;

export default function PageHeading({ ...props }) {
  return <StyledPageHeading {...props} />;
}
