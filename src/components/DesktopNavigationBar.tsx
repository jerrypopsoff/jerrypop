import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { WINDOW_BREAKPOINT_WIDTH_PX } from '../constants/breakpoint';
import { NavigationMenuItem } from '../types/navigation';
import {
  NAVIGATION_BAR_CONTENT_STYLE,
  NAVIGATION_BAR_STYLE,
  NAVIGATION_MENU_LINK_STYLE,
} from '../constants/css/navigation-bar';
import WordmarkSvg from '../images/jerrypop-wordmark-navy.svg';

const StyledNavigationBar = styled.nav`
  ${NAVIGATION_BAR_STYLE}
  margin: 0 6px;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    display: none;
  }
`;

const StyledNavigationBarContent = styled.div`
  ${NAVIGATION_BAR_CONTENT_STYLE}
  flex-direction: column;
`;

const StyledWordmarkLink = styled(Link)`
  padding: 16px;
`;

const StyledWordmark = styled.img`
  height: 36px;
  margin-top: 16px;
  width: 160px;
`;

const StyledMenuItems = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const StyledNavigationMenuLink = styled(Link)`
  ${NAVIGATION_MENU_LINK_STYLE}
  font-size: 16px;
  padding: 12px 24px 20px;
`;

interface Props {
  navigationMenuItems: NavigationMenuItem[];
}

const DesktopNavigationBar: React.FC<Props> = ({ navigationMenuItems }) => {
  return (
    <StyledNavigationBar>
      <StyledNavigationBarContent>
        <StyledWordmarkLink to="/">
          <StyledWordmark alt="Jerrypop brand wordmark" src={WordmarkSvg} />
        </StyledWordmarkLink>
        <StyledMenuItems>
          {navigationMenuItems.map(({ displayName, to }) => (
            <StyledNavigationMenuLink key={displayName} to={to}>
              {displayName}
            </StyledNavigationMenuLink>
          ))}
        </StyledMenuItems>
      </StyledNavigationBarContent>
    </StyledNavigationBar>
  );
};

export default DesktopNavigationBar;
