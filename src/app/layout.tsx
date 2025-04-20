import { GoogleAnalytics } from '@next/third-parties/google';
import { getMetadata } from '../utilities/metadata';
import { getViewport } from '../utilities/viewport';

export const metadata = getMetadata();

export const viewport = getViewport();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        {/* Todo: https://nextjs.org/docs/app/building-your-application/optimizing/metadata */}
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
      </head>
      <body>
        <div id="root">{children}</div>
        {process.env.NODE_ENV === 'production' && (
          <GoogleAnalytics gaId="G-4NGQXKPCPQ" />
        )}
      </body>
    </html>
  );
}
