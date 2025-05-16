import '../app.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { getMetadata } from '../utilities/metadata';
import { getViewport } from '../utilities/viewport';
import { isProduction } from '../utilities/environment';
import { GLOBAL_STYLE as GlobalStyle } from '../constants/css/global-style';
import Footer from '../components/Footer';
import StyledComponentsRegistry from '../components/StyledComponentsRegistry';
import ClickPop from '../components/ClickPop';
import ConsoleAsciiArt from '../components/ConsoleAsciiArt';
import { ThemeProvider } from 'next-themes';

export const metadata = getMetadata();

export const viewport = getViewport();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /**
     * suppressHydrationWarning needed for `next-themes`
     * https://github.com/pacocoursey/next-themes
     */
    // eslint-disable-next-line react/no-unknown-property
    <html lang="en" prefix="og: https://ogp.me/ns#" suppressHydrationWarning>
      <head></head>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            <GlobalStyle />
            <ConsoleAsciiArt />
            <ClickPop />
            {children}
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
        {isProduction() && <GoogleAnalytics gaId="G-4NGQXKPCPQ" />}
      </body>
    </html>
  );
}
