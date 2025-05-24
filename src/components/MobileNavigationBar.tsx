'use client';

import Link from 'next/link';
import { useState } from 'react';
import WordmarkSvgDark from '../images/jerrypop-wordmark-soft-white.svg';
import { NavigationMenuItem } from '../types/navigation';
import Image from 'next/image';

interface Props {
  navigationMenuItems: NavigationMenuItem[];
}

const MobileNavigationBar = ({ navigationMenuItems }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sm:hidden">
      <div
        className="
          z-nav bg-background z-nav absolute left-0 right-0 top-[-21.5rem] flex
          flex-col-reverse justify-center transition-transform duration-300
          ease-in-out
        "
        style={{
          transform: isOpen ? 'translateY(21.5rem)' : 'translateY(0)',
        }}
      >
        <div className="flex justify-center py-5">
          <button
            aria-label="Toggle navigation menu"
            className="
            column h-15 w-15 z-hamburger absolute left-1 flex flex-col
            justify-around p-5
          "
            onClick={() => setIsOpen(!isOpen)}
          >
            <div aria-hidden="true" className="bg-foreground h-0.5 w-full" />
            <div aria-hidden="true" className="bg-foreground h-0.5 w-full" />
            <div aria-hidden="true" className="bg-foreground h-0.5 w-full" />
          </button>
          <Link className="p-4" onClick={() => setIsOpen(false)} href="/">
            <Image
              alt="Jerrypop brand wordmark"
              className="w-31 h-7"
              height={28}
              src={WordmarkSvgDark.src}
              width={124}
            />
          </Link>
        </div>
        <ul aria-hidden={isOpen ? undefined : 'true'}>
          <li>
            <button
              className="w-full px-6 py-4 text-left text-lg font-semibold"
              aria-label="Close navigation menu"
              onClick={() => setIsOpen(!isOpen)}
              tabIndex={isOpen ? 0 : -1}
            >
              ✕
            </button>
          </li>
          {navigationMenuItems.map(({ displayName, href, isExternal }) => (
            <li key={displayName}>
              <Link
                className="block px-6 py-4 uppercase tracking-wide no-underline"
                href={href}
                onClick={() => setIsOpen(false)}
                rel={isExternal ? 'noreferrer' : undefined}
                tabIndex={isOpen ? 0 : -1}
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
