import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Output a Single-Page Application (SPA)
  distDir: 'build', // Change the build output directory to `build`
};

export default nextConfig;
