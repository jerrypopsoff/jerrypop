import React from 'react';
import { getFluidFontSizeStyle } from '../utilities/Style';
import styled from 'styled-components';

export const StyledPageHeading = styled.h1`
  ${getFluidFontSizeStyle(48, 78)}
  margin: 12px;
  text-transform: uppercase;
`;

export default function PageHeading({ ...props }) {
  return <StyledPageHeading {...props} />;
}
