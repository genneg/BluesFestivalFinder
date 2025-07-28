'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

import { Button } from '@/components/ui/Button'
import { Navigation, mainNavItems } from './Navigation'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const isActive = (href: string) => {
    if (!isMounted) return false // Prevent hydration mismatch
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 11-1.414-1.414A7.971 7.971 0 0017 12c0-1.594-.471-3.077-1.343-4.343a1 1 0 010-1.414zm-2.829 2.829a1 1 0 011.415 0A5.983 5.983 0 0115 12a5.984 5.984 0 01-.757 2.828 1 1 0 01-1.415-1.414A3.989 3.989 0 0013 12a3.988 3.988 0 00-.172-1.172 1 1 0 010-1.415z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">
                Blues Festival Finder
              </span>
              <span className="text-lg font-bold text-gray-900 sm:hidden">
                BFF
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-primary-600',
                  isActive(item.href)
                    ? 'text-primary-600 border-b-2 border-primary-600 pb-4'
                    : 'text-gray-600'
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Search Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/search">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search</span>
              </Button>
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {/* Dashboard Link for logged in users */}
            <Link href="/dashboard" className="hidden md:inline-flex">
              <Button variant="ghost" size="sm" className="flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                <span>Dashboard</span>
              </Button>
            </Link>

            <Link href="/auth/signin">
              <Button variant="ghost" size="sm" className="hidden md:inline-flex">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'px-3 py-3 text-base font-medium transition-colors rounded-lg',
                    isActive(item.href)
                      ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="pt-4 mt-4 border-t border-gray-200">
                <Link
                  href="/search"
                  className="flex items-center px-3 py-3 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search Events
                </Link>
                <Link
                  href="/dashboard"
                  className="flex items-center px-3 py-3 text-base font-medium text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Dashboard
                </Link>
              </div>
              
              <div className="pt-4 mt-4 border-t border-gray-200 space-y-2">
                <Link href="/auth/signin" className="block">
                  <Button variant="ghost" size="sm" className="w-full justify-start">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                    Sign In
                  </Button>
                </Link>
                <Link href="/auth/signup" className="block">
                  <Button variant="primary" size="sm" className="w-full justify-start">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Get Started
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}