'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { WINDOW_BREAKPOINT_WIDTH_REM } from '../constants/breakpoint';
import { NavigationMenuItem } from '../types/navigation';
import {
  NAVIGATION_BAR_CONTENT_STYLE,
  NAVIGATION_BAR_STYLE,
  NAVIGATION_BAR_WORDMARK_LINK_STYLE,
  NAVIGATION_MENU_LINK_STYLE,
  NAVIGATION_MENU_LIST_STYLE,
} from '../constants/css/navigation-bar';
import WordmarkSvgDark from '../images/jerrypop-wordmark-soft-white.svg';
import Image from 'next/image';

const StyledNavigationBar = styled.nav`
  ${NAVIGATION_BAR_STYLE}
  margin: 0 auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;

  @media (width < ${WINDOW_BREAKPOINT_WIDTH_REM}rem) {
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

const StyledWordmark = styled(Image)`
  height: 36px;
  margin: 16px 0 2px;
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
  return (
    <StyledNavigationBar>
      <StyledNavigationBarContent>
        <StyledWordmarkLink href="/">
          <StyledWordmark
            alt="Jerrypop wordmark"
            height={36}
            src={WordmarkSvgDark.src}
            width={160}
          />
        </StyledWordmarkLink>
        <StyledMenuItems>
          {navigationMenuItems.map(({ displayName, href, isExternal }) => (
            <li key={displayName}>
              <StyledNavigationMenuLink
                href={href}
                rel={isExternal ? 'noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
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
