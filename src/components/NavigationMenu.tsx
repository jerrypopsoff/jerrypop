import { Link, useLocation } from 'react-router-dom';
import { OFFSET_PULSE_STYLE, PULSE_STYLE } from '../constants/css/pulse';
import React from 'react';
import { BUTTON_STYLE } from '../constants/css/button';
import { DANGLE_STYLE } from '../constants/css/rotation';
import styled from 'styled-components';
import { NAVIGATION_MENU_ITEMS } from '../constants/navigation';

const StyledLinks = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 24px;
`;

const StyledLink = styled(Link)`
  ${BUTTON_STYLE}
  ${PULSE_STYLE}
  text-decoration: none;

  &:nth-child(even) {
    ${OFFSET_PULSE_STYLE}
  }

  &:hover,
  &:focus {
    ${DANGLE_STYLE}
  }
`;

const NavigationMenu: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <StyledLinks>
      {NAVIGATION_MENU_ITEMS.filter((item) => pathname !== item.to).map(
        (item) => (
          <StyledLink key={item.displayName} to={item.to}>
            {item.displayName}
          </StyledLink>
        ),
      )}
    </StyledLinks>
  );
};

export default NavigationMenu;
