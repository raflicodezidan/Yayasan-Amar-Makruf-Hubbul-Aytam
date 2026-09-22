/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: './',
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
