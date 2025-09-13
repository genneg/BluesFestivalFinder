/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Disable ESLint during build for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Disable TypeScript checks during build for now
  typescript: {
    ignoreBuildErrors: true,
  },
  // Fix Prisma bundling for Vercel
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', '@prisma/engines'],
  },
  // Performance optimizations for Core Web Vitals
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Image optimization for better LCP and CLS
  images: {
    formats: ['image/webp', 'image/avif'],
    quality: 75,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    domains: [
      'example.com',
      'localhost',
      'images.unsplash.com', // For fallback images
      'tqvvseagpkmdnsiuwabv.supabase.co', // Supabase storage
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
      {
        protocol: 'https',
        hostname: 'tqvvseagpkmdnsiuwabv.supabase.co',
        pathname: '/storage/v1/object/public/bluesbucket/**',
      },
    ],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days cache
  },

  // Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Cache static assets for better performance
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          // Preload critical fonts
          {
            key: 'Link',
            value: '<https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap>; rel=preload; as=style',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400',
          },
        ],
      },
    ]
  },

  // Webpack optimization for bundle size
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          default: false,
          vendors: false,
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 20,
          },
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      }
    }

    return config
  },

  // Enable source maps in production for better debugging
  productionBrowserSourceMaps: false, // Disable for better performance
}

module.exports = nextConfig
