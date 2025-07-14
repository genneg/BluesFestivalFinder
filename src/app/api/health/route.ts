import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    // Basic health check
    const timestamp = new Date().toISOString()
    
    // TODO: Add database and Redis connectivity checks when Prisma is set up
    // const dbStatus = await checkDatabaseConnection()
    // const redisStatus = await checkRedisConnection()
    
    return NextResponse.json({
      status: 'healthy',
      timestamp,
      service: 'blues-dance-festival-finder',
      version: '0.1.0',
      environment: process.env.NODE_ENV || 'development',
      // database: dbStatus,
      // redis: redisStatus,
    })
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        timestamp: new Date().toISOString(),
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}