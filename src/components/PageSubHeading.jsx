import React from 'react';
import styled from 'styled-components';

const StyledPageSubHeading = styled.h2`
  font-size: 36px;
  margin: 24px 0 16px;
  text-transform: uppercase;
`;

export default function PageSubHeading({ ...props }) {
  return <StyledPageSubHeading {...props} />;
}
