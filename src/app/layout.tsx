import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { Header, Footer } from '@/components/layout'
import BreadcrumbNavigation from '@/components/ui/BreadcrumbNavigation'
import { OfflineBanner } from '@/components/ui/NetworkStatus'
import { Phase4Integration } from '@/components/features/Phase4Integration'
import { OrganizationSchema, WebsiteSchema } from '@/components/seo/SchemaMarkup'
import { WebVitalsReporter } from '@/components/performance/WebVitalsReporter'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Blues Dance Festival Finder',
  description: 'Discover blues dance festivals worldwide and follow your favorite teachers and musicians.',
  keywords: [
    'blues dance festivals',
    'blues festivals 2025',
    'blues dance events',
    'blues dance workshops',
    'blues music festivals',
    'dance festivals Europe',
    'blues teachers',
    'blues musicians',
    'social dancing',
    'dance workshops'
  ],
  authors: [{ name: 'Blues Festival Finder Team' }],
  creator: 'Blues Festival Finder',
  publisher: 'Blues Festival Finder',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://blues-festival-finder.vercel.app',
    siteName: 'Blues Festival Finder',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@BluesFestival',
    creator: '@BluesFestival',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://blues-festival-finder.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Organization Schema */}
        <OrganizationSchema
          org={{
            name: 'Blues Festival Finder',
            description: 'Discover blues dance festivals worldwide and follow your favorite teachers and musicians.',
            url: 'https://blues-festival-finder.vercel.app',
            logo: 'https://blues-festival-finder.vercel.app/logo.png',
            contactPoint: {
              email: 'hello@bluesfestivalfinder.com',
              contactType: 'Customer Service'
            },
            address: {
              addressLocality: 'Online',
              addressCountry: 'Worldwide'
            },
            sameAs: [
              'https://facebook.com/bluesfestivalfinder',
              'https://twitter.com/BluesFestival',
              'https://instagram.com/bluesfestivalfinder'
            ]
          }}
        />

        {/* Website Schema */}
        <WebsiteSchema
          site={{
            name: 'Blues Festival Finder',
            description: 'Discover blues dance festivals worldwide and follow your favorite teachers and musicians.',
            url: 'https://blues-festival-finder.vercel.app'
          }}
        />
      </head>
      <body className={`${inter.className} bg-gradient-to-br from-navy-900 via-primary-900 to-primary-950 text-gray-100`}>
        <QueryProvider>
          <AuthProvider>
            <Phase4Integration>
              <WebVitalsReporter debug={process.env.NODE_ENV === 'development'} />
              <div className="min-h-screen flex flex-col">
                <OfflineBanner />
                <Header />
                <div className="bg-navy-800/30 border-b border-gold-600/20">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <BreadcrumbNavigation className="text-sm" />
                  </div>
                </div>
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
            </Phase4Integration>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}