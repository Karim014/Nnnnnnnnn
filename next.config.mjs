/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
    localeDetection: false,
  },
  images: {
    domains: [],
  },
};

export default nextConfig;