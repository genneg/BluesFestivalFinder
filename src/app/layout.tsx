import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { AuthProvider } from '@/components/providers/AuthProvider'
import { QueryProvider } from '@/components/providers/QueryProvider'
import { Header, Footer } from '@/components/layout'
import { OfflineBanner } from '@/components/ui/NetworkStatus'
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={`${inter.className} bg-gradient-to-br from-navy-900 via-primary-900 to-primary-950 text-gray-100`}>
        <QueryProvider>
          <AuthProvider>
            <div className="min-h-screen flex flex-col">
              <OfflineBanner />
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  )
}