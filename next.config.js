/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'commons.wikimedia.org',
        pathname: '/**',
      },
    ],
    // Using unoptimized so the site works without a running image optimizer
    // and also so replaced images from any source load cleanly.
    unoptimized: true,
  },
};

module.exports = nextConfig;
