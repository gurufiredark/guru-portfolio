import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/guru-portfolio',
  assetPrefix: '/guru-portfolio',
};

export default nextConfig;
