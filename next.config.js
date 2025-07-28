/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: [
      'example.com',
      'localhost',
      'images.unsplash.com', // For fallback images
    ],
    // Allow API routes for images
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/api/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Enable source maps in production for better debugging
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig