'use client';

import SocialLinks from './SocialLinks';
import Logo from './Logo';
import { useJerrypopTheme } from '../hooks/use-jerrypop-theme';
import { increaseKernelCount } from '../utilities/click-pop';

const Footer = () => {
  const [jerrypopTheme, incrementJerrypopTheme] = useJerrypopTheme();

  return (
    <footer className="mt-14 flex flex-col items-center justify-center">
      <div className="xs:h-88 dark:bg-navy h-69 flex w-full items-center justify-center overflow-hidden bg-[var(--main-theme-dark)]">
        <Logo onToggleTheme={incrementJerrypopTheme} theme={jerrypopTheme} />
      </div>
      <div className="xs:flex-row my-6 flex w-full max-w-xl flex-col-reverse items-center justify-between">
        <button
          className="xs:mt-0 mx-2 mt-2 p-2"
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
};

export default Footer;
