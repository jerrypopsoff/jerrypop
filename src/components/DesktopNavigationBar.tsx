import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { WINDOW_BREAKPOINT_WIDTH_PX } from '../constants/breakpoint';
import { NavigationMenuItem } from '../types/navigation';
import {
  NAVIGATION_BAR_CONTENT_STYLE,
  NAVIGATION_BAR_STYLE,
  NAVIGATION_BAR_WORDMARK_LINK_STYLE,
  NAVIGATION_MENU_LINK_STYLE,
  NAVIGATION_MENU_LIST_STYLE,
} from '../constants/css/navigation-bar';
import WordmarkSvg from '../images/jerrypop-wordmark-navy.svg';
import WordmarkSvgDark from '../images/jerrypop-wordmark-soft-white.svg';
import { isDarkMode } from '../utilities/dark-mode';

const StyledNavigationBar = styled.nav`
  ${NAVIGATION_BAR_STYLE}
  margin: 0 auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    display: none;
  }
`;

const StyledNavigationBarContent = styled.div`
  ${NAVIGATION_BAR_CONTENT_STYLE}
  flex-direction: column;
`;

const StyledWordmarkLink = styled(Link)`
  ${NAVIGATION_BAR_WORDMARK_LINK_STYLE}
`;

const StyledWordmark = styled.img`
  height: 36px;
  margin: 16px 4px 0 0;
  width: 160px;
`;

const StyledMenuItems = styled.ul`
  ${NAVIGATION_MENU_LIST_STYLE}
  display: flex;
`;

const StyledNavigationMenuLink = styled(Link)`
  ${NAVIGATION_MENU_LINK_STYLE}
  font-size: 14px;
  padding: 12px 24px 16px;
`;

interface Props {
  navigationMenuItems: NavigationMenuItem[];
}

const DesktopNavigationBar = ({ navigationMenuItems }: Props) => {
  const isDark = isDarkMode();

  return (
    <StyledNavigationBar>
      <StyledNavigationBarContent>
        <StyledWordmarkLink to="/">
          <StyledWordmark
            alt="Jerrypop brand wordmark"
            src={isDark ? WordmarkSvgDark : WordmarkSvg}
          />
        </StyledWordmarkLink>
        <StyledMenuItems>
          {navigationMenuItems.map(({ displayName, isExternal, to }) => (
            <li key={displayName}>
              <StyledNavigationMenuLink
                rel={isExternal ? 'noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
                to={to}
              >
                {displayName}
              </StyledNavigationMenuLink>
            </li>
          ))}
        </StyledMenuItems>
      </StyledNavigationBarContent>
    </StyledNavigationBar>
  );
};

export default DesktopNavigationBar;
