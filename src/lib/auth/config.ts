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
  // TODO: Re-enable Prisma adapter once User table is implemented
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
          // TODO: Implement user authentication once User table is created
          // Find user by email
          // const user = await db.user.findUnique({
          //   where: { email: credentials.email },
          //   include: { 
          //     preferences: true,
          //     accounts: true
          //   }
          // })

          // TODO: Implement user authentication once User table is created
          // Temporary: Return null until User table is implemented
          return null
        } catch (error) {
          console.error('Authorization error:', error)
          throw error
        }
      }
    })
  ],

  // Configure session strategy
  session: {
    strategy: 'database',
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

      try {
        // Check if user exists
        const existingUser = await db.user.findUnique({
          where: { email: user.email }
        })

        // If user doesn't exist, create them
        if (!existingUser) {
          const newUser = await db.user.create({
            data: {
              email: user.email,
              name: user.name || user.email.split('@')[0],
              avatar: user.image || null,
              verified: false, // Will be set to true after email verification
              preferences: {
                create: {
                  email_notifications: true,
                  push_notifications: true,
                  new_event_notifications: true
                }
              }
            }
          })
          user.id = newUser.id.toString()
        } else {
          user.id = existingUser.id.toString()
          
          // Update user info if changed
          if (existingUser.name !== user.name || existingUser.avatar !== user.image) {
            await db.user.update({
              where: { id: existingUser.id },
              data: {
                name: user.name || existingUser.name,
                avatar: user.image || existingUser.avatar
              }
            })
          }
        }

        return true
      } catch (error) {
        console.error('SignIn callback error:', error)
        return false
      }
    },

    // Called when session is checked
    async session({ session, user }) {
      if (session.user && user) {
        session.user.id = user.id
        session.user.verified = user.verified
      }
      return session
    },

    // Called when JWT token is created
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
        token.verified = user.verified
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