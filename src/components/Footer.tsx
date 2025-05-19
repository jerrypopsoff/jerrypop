'use client';

import SocialLinks from './SocialLinks';
import Logo from './Logo';
import { useJerrypopTheme } from '../hooks/use-jerrypop-theme';
import { increaseKernelCount } from '../utilities/click-pop';

const Footer = () => {
  const [jerrypopTheme, incrementJerrypopTheme] = useJerrypopTheme();

  return (
    <footer className="flex flex-col items-center justify-center mt-14">
      <div
        className="
          flex items-center justify-center w-full h-[280px] xs:h-[350px]
          overflow-hidden bg-[var(--color-theme-background)] dark:bg-navy
        "
      >
        <Logo onToggleTheme={incrementJerrypopTheme} theme={jerrypopTheme} />
      </div>
      <div
        className="
          flex flex-col-reverse items-center justify-between w-full max-w-xl my-6
          xs:flex-row
        "
      >
        <button
          className="
            bg-transparent border-none text-[var(--color-foreground)] p-2 mx-2
            mt-2 xs:mt-0
          "
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
