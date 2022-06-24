import { Link, useLocation } from 'react-router-dom';
import { offsetPulse, pulse } from '../constants/css/pulse';
import React from 'react';
import { buttonStyle } from '../constants/css/button';
import { dangleRotation } from '../constants/css/rotation';
import styled from 'styled-components';

const StyledLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
  ${pulse}

  &:nth-child(even) {
    ${offsetPulse}
  }

  &:hover,
  &:focus {
    ${dangleRotation}
  }
`;

export default function NavigationMenu({ ...props }) {
  const { pathname } = useLocation();

  return (
    <StyledLinks {...props}>
      {pathname !== '/' && <StyledLink to="/">Home</StyledLink>}
      {pathname !== '/purchase' && (
        <StyledLink to="/purchase">Purchase</StyledLink>
      )}
      {pathname !== '/recipes' && (
        <StyledLink to="/recipes">Recipes</StyledLink>
      )}
    </StyledLinks>
  );
}
