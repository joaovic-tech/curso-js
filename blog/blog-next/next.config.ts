import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'avatars.githubusercontent.com'],
  },
  compiler: {
    styledComponents: true,
  },
  transpilePackages: ['styled-components'],
};

export default nextConfig;
