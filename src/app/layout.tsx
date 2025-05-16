import '../app.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { getMetadata } from '../utilities/metadata';
import { getViewport } from '../utilities/viewport';
import { isProduction } from '../utilities/environment';
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
          <ThemeProvider>
            {children}
          </ThemeProvider>
        {isProduction() && <GoogleAnalytics gaId="G-4NGQXKPCPQ" />}
      </body>
    </html>
  );
}
