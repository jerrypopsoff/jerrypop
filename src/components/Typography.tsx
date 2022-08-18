import styled, { css } from 'styled-components';
import { withLowTextShadow, withTextShadow } from '../constants/css/shadow';
import React from 'react';

const headingStyle = css<{ hasTextShadow?: boolean }>`
  ${({ hasTextShadow }) => (hasTextShadow ? withTextShadow : undefined)}
  text-transform: uppercase;
`;

const withDynamicStyles = css<{
  fontSize?: number;
  margin?: string;
  maxWidth?: string;
}>`
  font-size: ${({ fontSize }) => fontSize}px;
  margin: ${({ margin }) => margin};
  max-width: ${({ maxWidth }) => maxWidth};
`;

type TypeographyType = 'h1' | 'h2' | 'h3' | 'h4' | 'p';

interface Props {
  children: React.ReactNode;
  hasTextShadow?: boolean;
  fontSize?: number;
  margin?: string;
  maxWidth?: string;
  type: TypeographyType;
}

type StyledTypography = Omit<Props, 'type'>;

const StyledH1 = styled.h1<StyledTypography>`
  ${headingStyle}
  ${withDynamicStyles}
`;

const StyledH2 = styled.h2<StyledTypography>`
  ${headingStyle}
  ${withDynamicStyles}
`;

const StyledH3 = styled.h3<StyledTypography>`
  ${headingStyle}
  ${withDynamicStyles}
`;

const StyledH4 = styled.h4<StyledTypography>`
  ${headingStyle}
  ${withDynamicStyles}
`;

const StyledP = styled.p<StyledTypography>`
  ${withDynamicStyles}
  ${({ hasTextShadow }) => (hasTextShadow ? withLowTextShadow : undefined)}
`;

const Typography: React.FC<Props> = ({
  hasTextShadow = true,
  fontSize,
  margin,
  type,
  ...props
}) => {
  switch (type) {
    case 'h1':
      return (
        <StyledH1
          hasTextShadow={hasTextShadow}
          fontSize={fontSize ?? 78}
          margin={margin ?? '48px 12px 12px'}
          {...props}
        />
      );
    case 'h2':
      return (
        <StyledH2
          hasTextShadow={hasTextShadow}
          fontSize={fontSize ?? 36}
          margin={margin ?? '36px 12px 12px'}
          {...props}
        />
      );
    case 'h3':
      return (
        <StyledH3
          hasTextShadow={hasTextShadow}
          fontSize={fontSize ?? 18}
          margin={margin ?? '24px 12px 12px'}
          {...props}
        />
      );
    case 'h4':
      return (
        <StyledH4
          hasTextShadow={hasTextShadow}
          fontSize={fontSize ?? 14}
          margin={margin ?? '18px 12px 12px'}
          {...props}
        />
      );
    case 'p':
    default:
      return (
        <StyledP
          hasTextShadow={hasTextShadow}
          fontSize={fontSize ?? 16}
          margin={margin ?? '12px'}
          {...props}
        />
      );
  }
};

export default Typography;
