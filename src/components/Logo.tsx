import type { Theme } from '../types/theme';
import logo from '../images/colonel.svg';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const WordmarkRepeated = dynamic(() => import('./WordmarkRepeated'), {
  ssr: false,
});

export function Logo({
  onToggleTheme,
  theme,
}: {
  onToggleTheme: () => void;
  theme: Theme;
}) {
  return (
    <>
      <WordmarkRepeated
        className="h-auto w-100 max-w-[95vw]"
        fillColor={theme.mainThemeMedium}
      />
      <button
        aria-label="Change website theme colors"
        className="absolute animate-slow-wiggle cursor-pointer rounded-[50%]"
        onClick={onToggleTheme}
      >
        <Image
          alt="Jerrypop logo"
          className="h-75 w-75 max-w-[70vw] select-none"
          height={300}
          src={logo}
          width={300}
        />
      </button>
    </>
  );
}
