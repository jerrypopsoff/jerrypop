import { GoogleAnalytics } from '@next/third-parties/google';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" prefix="og: https://ogp.me/ns#">
      <head>
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.svg" type="image/svg+xml" />
        <title>Jerrypop</title>
        <meta
          name="description"
          content="Locally crafted San Francisco popcorn. Bold flavors. Compostable packaging."
        />
        <meta name="theme-color" content="#0072da" />
        <meta property="og:title" content="Jerrypop" />
        <meta
          property="og:description"
          content="Locally crafted San Francisco popcorn. Bold flavors. Compostable packaging."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jerrypop.com" />
        <meta property="og:image" content="https://jerrypop.com/jerrypop.png" />

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
