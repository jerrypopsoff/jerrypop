import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    // https://nextjs.org/docs/app/guides/css-in-js#styled-components
    styledComponents: true,
  },
  output: 'export', // Output a Single-Page Application (SPA)
  distDir: 'build', // Change the build output directory to `build`
};

export default nextConfig;
