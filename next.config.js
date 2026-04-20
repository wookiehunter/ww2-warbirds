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
    // unoptimized=true keeps things simple: no built-in image optimizer needed,
    // plain <img> tags work without restriction, and any CDN URL renders cleanly.
    unoptimized: true,
  },
};

module.exports = nextConfig;
