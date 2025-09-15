// NextAuth.js configuration for SwingRadar
// This file configures authentication providers and session management
import bcrypt from 'bcryptjs'
import { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'


import { findUserByEmail } from '../db/postgres'

export const authOptions: NextAuthOptions = {
  // Note: PrismaAdapter commented out for JWT session strategy
  // adapter: PrismaAdapter(db) as Adapter,

  // Secret key for JWT and session encryption
  secret: process.env.NEXTAUTH_SECRET ?? 'fallback-secret-key-change-in-production',

  // Configure authentication providers
  providers: [
    // Google OAuth provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope: 'openid email profile',
        },
      },
    }),

    // Facebook OAuth provider
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET ?? '',
      authorization: {
        params: {
          scope: 'email',
        },
      },
    }),

    // Email/password credentials provider
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'your@email.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          console.error('Missing credentials')
          return null
        }

        try {
          // Find user by email with account information using direct PostgreSQL
          const user = await findUserByEmail(credentials.email)

          if (!user) {
            console.error('No user found with email:', credentials.email)
            return null
          }

          // Find the credentials account for this user
          const credentialsAccount = user.accounts.find(
            account => account.provider === 'credentials'
          )

          if (!credentialsAccount?.password) {
            console.error('No credentials account found for user:', user.email)
            return null
          }

          // Verify password
          const passwordMatch = await bcrypt.compare(
            credentials.password,
            credentialsAccount.password
          )

          if (!passwordMatch) {
            console.error('Password mismatch for user:', user.email)
            return null
          }

          // console.log('User authenticated successfully:', user.email)

          // Return user object for NextAuth
          return {
            id: user.id.toString(),
            email: user.email,
            name: user.name,
            image: user.avatar,
            verified: user.verified,
          }
        } catch (error) {
          console.error('Authorization error:', error)
          return null
        }
      },
    }),
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
    secret: process.env.NEXTAUTH_SECRET ?? 'fallback-secret-key-change-in-production',
  },

  // Custom pages
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
    verifyRequest: '/auth/verify',
    newUser: '/auth/welcome',
  },

  // Callbacks for customizing behavior
  callbacks: {
    // Called when user signs in
    async signIn({ user, account: _account, profile: _profile }) {
      // eslint-disable-next-line no-console
      console.log('NextAuth signIn callback:', { email: user?.email, provider: _account?.provider })

      if (!user.email) {
        // eslint-disable-next-line no-console
        console.error('NextAuth signIn failed: No email provided')
        return false
      }

      // For OAuth providers, PrismaAdapter handles user creation
      // For credentials provider, user is already validated
      // eslint-disable-next-line no-console
      console.log('NextAuth signIn successful:', user.email)
      return true
    },

    // Called when session is checked (JWT strategy)
    async session({ session, token }) {
      // eslint-disable-next-line no-console
      console.log('NextAuth session callback:', { session: session?.user, token })

      if (session.user && token) {
        session.user.id = token.id
        session.user.verified = token.verified
        // eslint-disable-next-line no-console
        console.log('NextAuth session enhanced with user data:', {
          id: token.id,
          verified: token.verified,
        })
      }
      return session
    },

    // Called when JWT token is created (JWT strategy)
    async jwt({ token, user }) {
      // eslint-disable-next-line no-console
      console.log('NextAuth JWT callback:', { token, user })

      if (user) {
        token.id = user.id
        token.verified = user.verified || false
        // eslint-disable-next-line no-console
        console.log('NextAuth JWT enhanced with user data:', {
          id: user.id,
          verified: user.verified,
        })
      }
      return token
    },
  },

  // Event handlers
  events: {
    async signIn({ user, account, profile: _profile, isNewUser: _isNewUser }) {
      // eslint-disable-next-line no-console
      console.log(`NextAuth event: User signed in: ${user.email} via ${account?.provider}`)
      // eslint-disable-next-line no-console
      console.log('NextAuth event details:', { user, account, isNewUser })

      // You can add analytics, logging, or other side effects here
      if (_isNewUser) {
        // eslint-disable-next-line no-console
        console.log(`NextAuth event: New user registered: ${user.email}`)
        // Could send welcome email, analytics event, etc.
      }
      return true
    },

    async signOut({ session: _session }) {
      // eslint-disable-next-line no-console
      console.log(`NextAuth event: User signed out: ${_session?.user?.email}`)
    },

    async createUser({ user: _user }) {
      // eslint-disable-next-line no-console
      console.log(`NextAuth event: New user created: ${_user.email}`)
      // Could send welcome email, analytics event, etc.
    },
  },

  // Enable debug mode in development
  debug: true,

  // Configure logger
  logger: {
    error(code, metadata) {
      // eslint-disable-next-line no-console
      console.error(`NextAuth Error [${code}]:`, metadata)
    },
    warn(code) {
      // eslint-disable-next-line no-console
      console.warn(`NextAuth Warning [${code}]`)
    },
    debug(code, metadata) {
      // eslint-disable-next-line no-console
      console.debug(`NextAuth Debug [${code}]:`, metadata)
    },
  },

  // Security configuration
  useSecureCookies: process.env.NODE_ENV === 'production',
  cookies: {
    sessionToken: {
      name: 'swingradar-session',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        domain: process.env.NODE_ENV === 'production' ? '.swingradar.com' : undefined,
      },
    },
  },
}

export default authOptions
