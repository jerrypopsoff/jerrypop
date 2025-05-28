'use client';

import Link from 'next/link';
import { NavigationMenuItem } from '../types/navigation';
import WordmarkSvgDark from '../images/jerrypop-wordmark-soft-white.svg';
import Image from 'next/image';

export default function DesktopNavigationBarContent({
  navigationMenuItems,
}: {
  navigationMenuItems: NavigationMenuItem[];
}) {
  return (
    <div className="z-nav absolute left-0 right-0 top-0 hidden sm:block">
      <div className="flex w-full flex-col items-center">
        <Link className="mb-1 mt-4 p-4" href="/">
          <Image
            alt="Jerrypop wordmark"
            className="h-9 w-40"
            height={36}
            priority
            src={WordmarkSvgDark}
            width={160}
          />
        </Link>
        <ul className="flex">
          {navigationMenuItems.map(({ displayName, href, isExternal }) => (
            <li key={displayName}>
              <Link
                className="block px-6 py-3 pb-4 text-sm uppercase tracking-wide"
                href={href}
                rel={isExternal ? 'noreferrer' : undefined}
                target={isExternal ? '_blank' : undefined}
              >
                {displayName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
