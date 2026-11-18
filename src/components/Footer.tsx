'use client';

import { SocialLinks } from './SocialLinks';
import { Logo } from './Logo';
import { useJerrypopTheme } from '../hooks/use-jerrypop-theme';
import { increaseKernelCount } from '../utilities/click-pop';
import { usePathname } from 'next/navigation';

export function Footer() {
  const [jerrypopTheme, incrementJerrypopTheme] = useJerrypopTheme();

  // Todo: remove after gift page is removed
  const pathname = usePathname();
  if (pathname === '/gikui' || pathname === '/secret' || pathname === '/bpt') {
    return null;
  }

  return (
    <footer className="mt-14 flex flex-col items-center justify-center">
      <div className="flex h-69 w-full items-center justify-center overflow-hidden bg-[var(--main-theme-dark)] xs:h-88 dark:bg-navy">
        <Logo onToggleTheme={incrementJerrypopTheme} theme={jerrypopTheme} />
      </div>
      <div className="my-6 flex w-full max-w-xl flex-col-reverse items-center justify-between xs:flex-row">
        <button
          className="mx-2 mt-2 p-2 xs:mt-0"
          onClick={() => increaseKernelCount()}
        >
          <p className="text-xs">© {new Date().getFullYear()} Jerrypop, LLC</p>
        </button>
        <div className="mx-2">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
