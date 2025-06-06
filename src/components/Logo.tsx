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
        className="w-100 h-auto max-w-[95vw]"
        fillColor={theme.mainThemeMedium}
      />
      <button
        aria-label="Change website theme colors"
        className="animate-slow-wiggle absolute cursor-pointer rounded-[50%]"
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
