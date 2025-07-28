'use client'

import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

interface AuthProviderProps {
  children: ReactNode
  session?: any
}

/**
 * NextAuth.js Session Provider wrapper
 * This component provides authentication context to the entire app
 */
export function AuthProvider({ children, session }: AuthProviderProps) {
  return (
    <SessionProvider session={session} refetchInterval={5 * 60} refetchOnWindowFocus={true}>
      {children}
    </SessionProvider>
  )
}