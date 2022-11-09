import { Link, useLocation } from 'react-router-dom';
import { offsetPulse, pulse } from '../constants/css/pulse';
import React from 'react';
import { buttonStyle } from '../constants/css/button';
import { dangleRotation } from '../constants/css/rotation';
import styled from 'styled-components';
import { NAVIGATION_MENU_ITEMS } from '../constants/navigation';

const StyledLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
`;

const StyledLink = styled(Link)`
  ${buttonStyle}
  ${pulse}
  text-decoration: none;

  &:nth-child(even) {
    ${offsetPulse}
  }

  &:hover,
  &:focus {
    ${dangleRotation}
  }
`;

const NavigationMenu: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <StyledLinks>
      {NAVIGATION_MENU_ITEMS.filter((item) => pathname !== item.to).map(
        (item) => (
          <StyledLink to={item.to}>{item.displayName}</StyledLink>
        ),
      )}
    </StyledLinks>
  );
};

export default NavigationMenu;
