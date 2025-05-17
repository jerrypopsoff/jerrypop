import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    // https://nextjs.org/docs/app/guides/css-in-js#styled-components
    styledComponents: true,
  },
};

export default nextConfig;
