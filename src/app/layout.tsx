import '../app.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import { getMetadata } from '../utilities/metadata';
import { getViewport } from '../utilities/viewport';
import { isProduction } from '../utilities/environment';

export const metadata = getMetadata();

export const viewport = getViewport();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head></head>
      <body>
        <div id="root">{children}</div>
        {isProduction() && <GoogleAnalytics gaId="G-4NGQXKPCPQ" />}
      </body>
    </html>
  );
}
