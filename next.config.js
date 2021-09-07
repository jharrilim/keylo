/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/unsplash/:path*',
        destination: 'https://unsplash.com/photos/:path*' // Proxy to Backend
      }
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};
