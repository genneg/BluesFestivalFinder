// Standard Prisma client for production use
import { PrismaClient } from '@prisma/client'

// Global Prisma client instance
declare global {
  var __prisma: PrismaClient | undefined
}

// Configure database URL with connection pooling
function getDatabaseUrl() {
  const url = process.env.DATABASE_URL
  if (!url) {
    throw new Error('DATABASE_URL environment variable is not set')
  }

  // For production/serverless environments, add connection pool parameters
  if (process.env.NODE_ENV === 'production' || process.env.VERCEL) {
    const urlObj = new URL(url)
    
    // Add connection pool parameters if not already present
    if (!urlObj.searchParams.has('connection_limit')) {
      urlObj.searchParams.set('connection_limit', '20')
    }
    if (!urlObj.searchParams.has('pool_timeout')) {
      urlObj.searchParams.set('pool_timeout', '30')
    }
    if (!urlObj.searchParams.has('connect_timeout')) {
      urlObj.searchParams.set('connect_timeout', '60')
    }
    
    return urlObj.toString()
  }
  
  return url
}

// Create singleton Prisma client
export const db = globalThis.__prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  datasources: {
    db: {
      url: getDatabaseUrl(),
    },
  },
})

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = db
}

// Connection helpers
export async function connectDatabase() {
  try {
    await db.$connect()
    console.log('Database connected successfully')
  } catch (error) {
    console.error('Database connection failed:', error)
    throw error
  }
}

export async function disconnectDatabase() {
  try {
    await db.$disconnect()
    console.log('Database disconnected successfully')
  } catch (error) {
    console.error('Database disconnection failed:', error)
    throw error
  }
}

// Health check
export async function checkDatabaseHealth() {
  try {
    await db.$queryRaw`SELECT 1`
    return { status: 'healthy', timestamp: new Date() }
  } catch (error) {
    return { status: 'unhealthy', error: error instanceof Error ? error.message : 'Unknown error', timestamp: new Date() }
  }
}