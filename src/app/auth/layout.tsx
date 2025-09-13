import type { Metadata } from 'next'
import Link from 'next/link'
import { Music, Calendar, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Authentication - Festival Scout',
  description: 'Sign in or create your Festival Scout account to discover blues dance festivals',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-bordeaux-900 to-gold-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gold-600 rounded-full flex items-center justify-center jazz-glow">
              <Music className="w-8 h-8 text-navy-900" />
            </div>
          </div>
          <h2 className="jazz-font text-3xl text-cream-100">Welcome Back</h2>
          <p className="mt-2 text-cream-200">Sign in to your Festival Scout account</p>
        </div>

        {/* Features Banner */}
        <div className="bg-cream-100/10 backdrop-blur-sm rounded-lg p-4 border border-gold-400/30">
          <div className="flex flex-wrap items-center justify-center gap-4 text-cream-100 text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-gold-400" />
              <span>Discover Events</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-gold-400" />
              <span>Follow Teachers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Music className="w-4 h-4 text-gold-400" />
              <span>Track Musicians</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gradient-to-br from-cream-50 to-bordeaux-50 rounded-xl shadow-2xl p-8 border border-gold-400/20">
          {children}
        </div>

        {/* Footer */}
        <div className="text-center text-cream-200 text-sm">
          <p>© 2024 Festival Scout. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/" className="hover:text-gold-400 transition-colors">
              Home
            </Link>
            <Link href="/privacy" className="hover:text-gold-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-gold-400 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}