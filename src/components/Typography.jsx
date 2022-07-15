import styled, { css } from 'styled-components';
import React from 'react';
import { WINDOW_BREAKPOINT_WIDTH_PX } from '../constants/kernel-fountain';
import { withTextShadow } from '../constants/css/shadow';

const headingStyle = css`
  text-transform: uppercase;
`;

const withDynamicStyles = css`
  margin: ${({ margin }) => margin};
  max-width: ${({ maxWidth }) => maxWidth};
  ${({ hasTextShadow }) => (hasTextShadow ? withTextShadow : undefined)}
`;

const StyledH1 = styled.h1`
  ${headingStyle}
  ${withDynamicStyles}
  font-size: 78px;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    font-size: 48px;
  }
`;

const StyledH2 = styled.h2`
  ${headingStyle}
  ${withDynamicStyles}
  font-size: 36px;
`;

const StyledH3 = styled.h3`
  ${headingStyle}
  ${withDynamicStyles}
  font-size: 18px;
`;

const StyledH4 = styled.h4`
  ${headingStyle}
  ${withDynamicStyles}
  font-size: 14px;
`;

const StyledP = styled.p`
  ${withDynamicStyles}
`;

export default function Typography({
  hasTextShadow = true,
  margin,
  type,
  ...props
}) {
  switch (type) {
    case 'h1':
      return (
        <StyledH1
          hasTextShadow={hasTextShadow}
          margin={margin ?? '48px 12px 12px'}
          {...props}
        />
      );
    case 'h2':
      return (
        <StyledH2
          hasTextShadow={hasTextShadow}
          margin={margin ?? '36px 12px 12px'}
          {...props}
        />
      );
    case 'h3':
      return (
        <StyledH3
          hasTextShadow={hasTextShadow}
          margin={margin ?? '24px 12px 12px'}
          {...props}
        />
      );
    case 'h4':
      return (
        <StyledH4
          hasTextShadow={hasTextShadow}
          margin={margin ?? '18px 12px 12px'}
          {...props}
        />
      );
    case 'p':
    default:
      return (
        <StyledP
          hasTextShadow={hasTextShadow}
          margin={margin ?? '12px'}
          {...props}
        />
      );
  }
}
