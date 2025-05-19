'use client';

import Link from 'next/link';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import {
  MOBILE_NAVIGATION_BAR_HEIGHT_PX,
  WINDOW_BREAKPOINT_WIDTH_PX,
} from '../constants/breakpoint';
import WordmarkSvgDark from '../images/jerrypop-wordmark-soft-white.svg';
import { NavigationMenuItem } from '../types/navigation';
import { NAVIGATION_MENU_Z_INDEX } from '../constants/z-index';
import {
  NAVIGATION_BAR_CONTENT_STYLE,
  NAVIGATION_BAR_STYLE,
  NAVIGATION_BAR_WORDMARK_LINK_STYLE,
  NAVIGATION_MENU_LINK_STYLE,
  NAVIGATION_MENU_LIST_STYLE,
} from '../constants/css/navigation-bar';
import Image from 'next/image';

const MENU_ITEM_HEIGHT_PX = 60;

interface Slideable {
  $isOpen: boolean;
  $slideDistancePx: number;
}

const SLIDE_STYLE = css<Slideable>`
  transition: transform 0.3s ease-in-out;
  transform: ${({ $isOpen, $slideDistancePx }) =>
    `translateY(${$isOpen ? `${$slideDistancePx}px` : '0'})`};
`;

const StyledNavigationBar = styled.nav`
  display: none;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    display: block;
  }
`;

const StyledNavigationBarContent = styled.div<Slideable>`
  ${SLIDE_STYLE}
  ${NAVIGATION_BAR_STYLE}
  background-color: var(--color-background);
  left: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
`;

const StyledNavigationBarContentInner = styled.div`
  ${NAVIGATION_BAR_CONTENT_STYLE}
  height: ${MOBILE_NAVIGATION_BAR_HEIGHT_PX}px;
`;

const StyledHamburgerButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 60px;
  justify-content: space-around;
  left: 4px;
  padding: 20px;
  position: absolute;
  width: 60px;
`;

const StyledHamburgerLine = styled.div`
  background-color: var(--color-foreground);
  height: 2px;
  width: 100%;
`;

const StyledWordmarkLink = styled(Link)`
  ${NAVIGATION_BAR_WORDMARK_LINK_STYLE}
`;

const StyledWordmark = styled(Image)`
  height: 30px;
  width: 134px;
`;

const StyledCloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 100%;
`;

const StyledCloseButtonIcon = styled.div`
  align-items: center;
  color: var(--color-foreground);
  display: flex;
  font-size: 24px;
  font-weight: 500;
  // Add 2px just to be safe. Chrome on iPhone shows a tiny sliver of a gap.
  height: ${MENU_ITEM_HEIGHT_PX + 2}px;
  padding: 0 24px;
`;

const StyledMenuItems = styled.ul<Slideable>`
  display: none;

  @media (max-width: ${WINDOW_BREAKPOINT_WIDTH_PX}px) {
    ${SLIDE_STYLE}
    ${NAVIGATION_MENU_LIST_STYLE}
    background-color: var(--color-background);
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: -${({ $slideDistancePx }) => $slideDistancePx}px;
    z-index: ${NAVIGATION_MENU_Z_INDEX};
  }
`;

const StyledMenuItemLink = styled(Link)`
  ${NAVIGATION_MENU_LINK_STYLE}
  padding: 0;
`;

const StyledMenuItemLinkInner = styled.div`
  align-items: center;
  display: flex;
  font-size: 16px;
  padding: 0 24px;
  height: ${MENU_ITEM_HEIGHT_PX}px;
  text-align: left;
`;

interface Props {
  navigationMenuItems: NavigationMenuItem[];
}

const MobileNavigationBar = ({ navigationMenuItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigationMenuItemsHeightPx =
    (navigationMenuItems.length + 1) * MENU_ITEM_HEIGHT_PX;

  return (
    <StyledNavigationBar>
      <StyledNavigationBarContent
        $isOpen={isOpen}
        $slideDistancePx={navigationMenuItemsHeightPx}
      >
        <StyledNavigationBarContentInner>
          <StyledHamburgerButton
            aria-label="Toggle navigation menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <StyledHamburgerLine aria-hidden="true" />
            <StyledHamburgerLine aria-hidden="true" />
            <StyledHamburgerLine aria-hidden="true" />
          </StyledHamburgerButton>
          <StyledWordmarkLink onClick={() => setIsOpen(false)} href="/">
            <StyledWordmark
              alt="Jerrypop brand wordmark"
              height={30}
              src={WordmarkSvgDark.src}
              width={134}
            />
          </StyledWordmarkLink>
        </StyledNavigationBarContentInner>
      </StyledNavigationBarContent>
      <StyledMenuItems
        aria-hidden={isOpen ? undefined : 'true'}
        $isOpen={isOpen}
        $slideDistancePx={navigationMenuItemsHeightPx}
      >
        <li>
          <StyledCloseButton
            aria-label="Close navigation menu"
            onClick={() => setIsOpen(!isOpen)}
            tabIndex={isOpen ? 0 : -1}
          >
            <StyledCloseButtonIcon>✕</StyledCloseButtonIcon>
          </StyledCloseButton>
        </li>
        {navigationMenuItems.map(({ displayName, href, isExternal }) => (
          <li key={displayName}>
            <StyledMenuItemLink
              href={href}
              onClick={() => setIsOpen(false)}
              rel={isExternal ? 'noreferrer' : undefined}
              tabIndex={isOpen ? 0 : -1}
              target={isExternal ? '_blank' : undefined}
            >
              <StyledMenuItemLinkInner>{displayName}</StyledMenuItemLinkInner>
            </StyledMenuItemLink>
          </li>
        ))}
      </StyledMenuItems>
    </StyledNavigationBar>
  );
};

export default MobileNavigationBar;
