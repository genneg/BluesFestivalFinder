// NextAuth.js configuration for Festival Scout
// This file configures authentication providers and session management

import { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import type { Adapter } from 'next-auth/adapters'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { db } from '../../../packages/database/src'

export const authOptions: NextAuthOptions = {
  // Note: PrismaAdapter commented out for JWT session strategy
  // adapter: PrismaAdapter(db) as Adapter,

  // Configure authentication providers
  providers: [
    // Google OAuth provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      authorization: {
        params: {
          scope: 'openid email profile'
        }
      }
    }),
    
    // Facebook OAuth provider
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
      authorization: {
        params: {
          scope: 'email'
        }
      }
    }),
    
    // Email/password credentials provider
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { 
          label: 'Email', 
          type: 'email',
          placeholder: 'your@email.com' 
        },
        password: { 
          label: 'Password', 
          type: 'password',
          placeholder: 'Enter your password' 
        }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Email and password are required')
        }

        try {
          // Find user by email with account information
          const user = await db.user.findUnique({
            where: { email: credentials.email },
            include: {
              accounts: {
                where: {
                  provider: 'credentials'
                }
              }
            }
          })

          if (!user) {
            throw new Error('No user found with this email')
          }

          // Find the credentials account for this user
          const credentialsAccount = user.accounts.find(
            account => account.provider === 'credentials'
          )

          if (!credentialsAccount || !credentialsAccount.password) {
            throw new Error('Invalid authentication method')
          }

          // Verify password
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            credentialsAccount.password
          )

          if (!passwordMatch) {
            throw new Error('Invalid password')
          }

          // Return user object for NextAuth
          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name,
            image: user.avatar
          }
        } catch (error) {
          console.error('Authorization error:', error)
          return null
        }
      }
    })
  ],

  // Configure session strategy - using JWT for now
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  // Configure JWT tokens (when using JWT strategy)
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  // Custom pages
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify',
    newUser: '/auth/welcome'
  },

  // Callbacks for customizing behavior
  callbacks: {
    // Called when user signs in
    async signIn({ user, account, profile }) {
      if (!user.email) {
        return false
      }

      // For OAuth providers, PrismaAdapter handles user creation
      // For credentials provider, user is already validated
      return true
    },

    // Called when session is checked (JWT strategy)
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.id as string
        session.user.verified = token.verified as boolean
      }
      return session
    },

    // Called when JWT token is created (JWT strategy)
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.verified = user.verified || false
      }
      return token
    }
  },

  // Event handlers
  events: {
    async signIn({ user, account, profile, isNewUser }) {
      console.log(`User signed in: ${user.email} via ${account?.provider}`)
      
      // You can add analytics, logging, or other side effects here
      if (isNewUser) {
        console.log(`New user registered: ${user.email}`)
        // Could send welcome email, analytics event, etc.
      }
    },

    async signOut({ session, token }) {
      console.log(`User signed out: ${session?.user?.email}`)
    },

    async createUser({ user }) {
      console.log(`New user created: ${user.email}`)
      // Could send welcome email, analytics event, etc.
    }
  },

  // Enable debug mode in development
  debug: process.env.NODE_ENV === 'development',

  // Configure logger
  logger: {
    error(code, metadata) {
      console.error(`NextAuth Error [${code}]:`, metadata)
    },
    warn(code) {
      console.warn(`NextAuth Warning [${code}]`)
    },
    debug(code, metadata) {
      if (process.env.NODE_ENV === 'development') {
        console.debug(`NextAuth Debug [${code}]:`, metadata)
      }
    }
  },

  // Security configuration
  useSecureCookies: process.env.NODE_ENV === 'production',
  cookies: {
    sessionToken: {
      name: 'festival-scout-session',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production'
      }
    }
  }
}

export default authOptions