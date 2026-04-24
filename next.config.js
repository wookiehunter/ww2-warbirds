/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Wikimedia Commons Special:FilePath redirector
      {
        protocol: 'https',
        hostname: 'commons.wikimedia.org',
        pathname: '/**',
      },
      // Wikimedia CDN — where Special:FilePath ultimately resolves to.
      // The imageinfo API returns direct thumbnail URLs on this host.
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
    ],
    // unoptimized=true: the project uses plain <img> tags via SafeImage, so the
    // Next.js Image optimizer is not active. The remotePatterns above are
    // informational and would apply if next/image components were added.
    unoptimized: true,
  },
};

module.exports = nextConfig;
