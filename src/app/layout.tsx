import '../css/app.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { METADATA } from '../constants/metadata';
import { VIEWPORT } from '../constants/viewport';
import { isProduction } from '../utilities/environment';
import ScrollToTopOnPathChange from '../components/ScrollToTopOnPathChange';
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';
import ClickPop from '../components/ClickPop';
import ConsoleAsciiArt from '../components/ConsoleAsciiArt';
import { ReactNode } from 'react';

export const metadata = METADATA;

export const viewport = VIEWPORT;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head></head>
      <body
        className="
          bg-background text-foreground font-default sm:pt-34 pt-25 antialiased
        "
      >
        <ConsoleAsciiArt />
        <ClickPop />
        <ScrollToTopOnPathChange />
        <NavigationBar />
        {children}
        <Footer />
        {isProduction() && <GoogleAnalytics gaId="G-4NGQXKPCPQ" />}
      </body>
    </html>
  );
}
