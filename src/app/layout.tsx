import '../css/app.css';
import { METADATA } from '../constants/metadata';
import { VIEWPORT } from '../constants/viewport';
import { OPEN_SANS } from '../utilities/font';
import { ScrollToTopOnPathChange } from '../components/ScrollToTopOnPathChange';
import { NavigationBar } from '../components/NavigationBar';
import { Footer } from '../components/Footer';
import { ClickPop } from '../components/ClickPop';
import { ConsoleAsciiArt } from '../components/ConsoleAsciiArt';
import { ReactNode } from 'react';
import { PostHogProvider } from '../components/PostHogProvider';

export const metadata = METADATA;

export const viewport = VIEWPORT;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    // eslint-disable-next-line react/no-unknown-property
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head></head>
      <body
        className={`${OPEN_SANS.className} bg-background text-foreground sm:pt-34 pt-25 antialiased`}
      >
        <ConsoleAsciiArt />
        <ClickPop />
        <ScrollToTopOnPathChange />
        <NavigationBar />
        <PostHogProvider apiKey={process.env.NEXT_PUBLIC_POSTHOG_KEY}>
          {children}
        </PostHogProvider>
        <Footer />
      </body>
    </html>
  );
}
