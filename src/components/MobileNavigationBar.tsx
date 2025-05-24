'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import WordmarkSvgDark from '../images/jerrypop-wordmark-soft-white.svg';
import { NavigationMenuItem } from '../types/navigation';
import Image from 'next/image';
import HamburgerIcon from './icons/HamburgerIcon';
import dynamic from 'next/dynamic';

const CloseIcon = dynamic(() => import('./icons/CloseIcon'), {
  ssr: false,
});

interface Props {
  navigationMenuItems: NavigationMenuItem[];
}

const MobileNavigationBar = ({ navigationMenuItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuItemsClassName, setMenuItemsClassName] = useState(
    isOpen ? undefined : 'invisible',
  );

  /**
   * If the menu is closed, set the class to 'invisible' after a delay matching
   * the transition duration. This prevents the menu items from being visible
   * when the menu is closed when scrolling above the top of the page on desktop
   * browsers.
   */
  useEffect(() => {
    if (isOpen) {
      setMenuItemsClassName(undefined);
      return;
    }

    const timeoutId = setTimeout(() => {
      setMenuItemsClassName('invisible');
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const slideableTransform = isOpen
    ? 'translate-y-[22.25rem]'
    : 'translate-y-0';
  const hamburgerButtonAriaLabel = isOpen
    ? 'Close navigation menu'
    : 'Open navigation menu';
  const menuItemsAriaHidden = isOpen ? undefined : 'true';
  const menuItemTabIndex = isOpen ? 0 : -1;

  return (
    <nav className="sm:hidden">
      <div
        className={`
          z-nav bg-background z-nav absolute left-0 right-0 top-[-22.25rem] flex
          flex-col-reverse justify-center transition-transform duration-200
          ease-in-out ${slideableTransform}
        `}
      >
        <div className="flex justify-center py-5">
          <button
            aria-label={hamburgerButtonAriaLabel}
            className="
              column z-hamburger absolute left-0 flex flex-col justify-around
              p-5
            "
            onClick={toggleMenu}
          >
            <HamburgerIcon className="h-5 w-5" />
          </button>
          <Link className="p-4" onClick={closeMenu} href="/">
            <Image
              alt="Jerrypop brand wordmark"
              className="w-31 h-7"
              height={28}
              src={WordmarkSvgDark.src}
              width={124}
            />
          </Link>
        </div>
        <ul aria-hidden={menuItemsAriaHidden} className={menuItemsClassName}>
          <li>
            <button
              className="w-full p-5 pt-10 text-left text-xl font-semibold"
              aria-label="Close navigation menu"
              onClick={toggleMenu}
              tabIndex={menuItemTabIndex}
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </li>
          {navigationMenuItems.map(({ displayName, href, isExternal }) => (
            <li key={displayName}>
              <Link
                className="block px-5 py-4 uppercase tracking-wide no-underline"
                href={href}
                onClick={closeMenu}
                rel={isExternal ? 'noreferrer' : undefined}
                tabIndex={menuItemTabIndex}
                target={isExternal ? '_blank' : undefined}
              >
                {displayName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MobileNavigationBar;
