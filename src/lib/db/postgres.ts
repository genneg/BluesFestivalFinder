// Direct PostgreSQL connection without Prisma
import { Pool } from 'pg'

// Connection pool singleton
let pool: Pool | null = null

export function getPostgresPool(): Pool {
  // For Supabase, we need to handle SSL certificate issues by modifying the connection string
  let connectionString = process.env.DATABASE_URL ?? ''

  // If we're in production, add SSL parameters to handle certificate issues
  if (process.env.NODE_ENV === 'production') {
    // Ensure sslmode=require and rejectUnauthorized=false are in the connection string
    if (!connectionString.includes('sslmode')) {
      connectionString += connectionString.includes('?') ? '&' : '?'
      connectionString += 'sslmode=require'
    }
    if (!connectionString.includes('rejectUnauthorized')) {
      connectionString += '&rejectUnauthorized=false'
    }
  }

  pool ??= new Pool({
    connectionString,
    ssl:
      process.env.NODE_ENV === 'production'
        ? {
            rejectUnauthorized: false,
          }
        : false,
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
    keepAlive: true,
    keepAliveInitialDelayMillis: 10000,
  })
  return pool
}

export interface User {
  id: number
  email: string
  name: string | null
  avatar: string | null
  verified: boolean
  created_at: Date
  updated_at: Date
}

export interface Account {
  id: number
  user_id: number
  type: string
  provider: string
  providerAccountId: string
  password: string | null
  created_at: Date
  updated_at: Date
}

export async function findUserByEmail(
  email: string
): Promise<(User & { accounts: Account[] }) | null> {
  const pool = getPostgresPool()

  try {
    // Get user
    const userResult = await pool.query(
      'SELECT id, email, name, avatar, verified, created_at, updated_at FROM users WHERE email = $1',
      [email]
    )

    if (userResult.rows.length === 0) {
      return null
    }

    const user = userResult.rows[0] as User

    // Get user's accounts
    const accountsResult = await pool.query(
      'SELECT id, user_id, type, provider, "providerAccountId", password, created_at, updated_at FROM accounts WHERE user_id = $1',
      [user.id]
    )

    return {
      ...user,
      accounts: accountsResult.rows as Account[],
    }
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}

export async function createUserWithCredentials(
  email: string,
  name: string,
  hashedPassword: string
): Promise<User> {
  const pool = getPostgresPool()
  const client = await pool.connect()

  try {
    await client.query('BEGIN')

    // Create user
    const userResult = await client.query(
      'INSERT INTO users (email, name, verified, created_at, updated_at) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING id, email, name, avatar, verified, created_at, updated_at',
      [email, name, false]
    )

    const user = userResult.rows[0] as User

    // Create credentials account
    await client.query(
      'INSERT INTO accounts (user_id, type, provider, "providerAccountId", password, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, NOW(), NOW())',
      [user.id, 'credentials', 'credentials', email, hashedPassword]
    )

    await client.query('COMMIT')
    return user
  } catch (error) {
    await client.query('ROLLBACK')
    throw error
  } finally {
    client.release()
  }
}

export async function testConnection(): Promise<boolean> {
  try {
    const pool = getPostgresPool()
    const result = await pool.query('SELECT NOW() as timestamp, COUNT(*) as user_count FROM users')
    console.log('Database connection test successful:', result.rows[0])
    return true
  } catch (error) {
    console.error('Database connection test failed:', error)
    return false
  }
}

export async function testConnectionDetailed(): Promise<{
  success: boolean
  error?: string
  details?: Record<string, unknown>
}> {
  try {
    const pool = getPostgresPool()
    const client = await pool.connect()

    try {
      // Test basic connection
      const pingResult = await client.query('SELECT NOW() as timestamp')

      // Test users table
      const userCountResult = await client.query('SELECT COUNT(*) as count FROM users')

      // Test accounts table
      const accountCountResult = await client.query('SELECT COUNT(*) as count FROM accounts')

      return {
        success: true,
        details: {
          timestamp: pingResult.rows[0].timestamp,
          userCount: parseInt(userCountResult.rows[0].count),
          accountCount: parseInt(accountCountResult.rows[0].count),
          databaseUrl:
            process.env.DATABASE_URL?.substring(0, 20) +
            '...' +
            process.env.DATABASE_URL?.substring(process.env.DATABASE_URL?.lastIndexOf('@') || 0),
        },
      }
    } finally {
      client.release()
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: {
        databaseUrl:
          process.env.DATABASE_URL?.substring(0, 20) +
          '...' +
          process.env.DATABASE_URL?.substring(process.env.DATABASE_URL?.lastIndexOf('@') || 0),
        env: process.env.NODE_ENV,
      },
    }
  }
}
