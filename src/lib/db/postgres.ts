// Direct PostgreSQL connection without Prisma
import { Pool } from 'pg'

// Connection pool singleton
let pool: Pool | null = null

export function getPostgresPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: 10,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000,
    })
  }
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

export async function findUserByEmail(email: string): Promise<(User & { accounts: Account[] }) | null> {
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
      accounts: accountsResult.rows as Account[]
    }
  } catch (error) {
    console.error('Database query error:', error)
    throw error
  }
}

export async function createUserWithCredentials(email: string, name: string, hashedPassword: string): Promise<User> {
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