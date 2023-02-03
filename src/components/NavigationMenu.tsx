import { Link, useLocation } from 'react-router-dom';
import { OFFSET_PULSE_STYLE, PULSE_STYLE } from '../constants/css/pulse';
import React from 'react';
import { BUTTON_INNER_STYLE, BUTTON_STYLE } from '../constants/css/button';
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

const StyledInnerLink = styled.div`
  ${BUTTON_INNER_STYLE}
`;

const NavigationMenu: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <StyledLinks>
      {NAVIGATION_MENU_ITEMS.filter((item) => pathname !== item.to).map(
        (item) => (
          <StyledLink key={item.displayName} to={item.to}>
            <StyledInnerLink>{item.displayName}</StyledInnerLink>
          </StyledLink>
        ),
      )}
    </StyledLinks>
  );
};

export default NavigationMenu;
