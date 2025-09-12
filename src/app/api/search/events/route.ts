import { NextRequest } from 'next/server'
import { z } from 'zod'

import { db } from '@/lib/database'

// Mark route as dynamic with short caching
export const dynamic = 'force-dynamic'
export const revalidate = 60 // Cache for 60 seconds

// Simplified search schema for mock data
const searchSchema = z.object({
  page: z.string().optional().default('1'),
  limit: z.string().optional().default('20'),
  query: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  sortBy: z
    .enum(['relevance', 'date', 'distance', 'popularity', 'price'])
    .optional()
    .default('relevance'),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
})

export async function GET(request: NextRequest) {
  try {
    // Ensure database connection is healthy
    await db.$connect()

    const url = new URL(request.url)

    // Parse parameters manually to avoid dependency issues
    const page = Math.max(parseInt(url.searchParams.get('page') || '1'), 1)
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100)
    const query = url.searchParams.get('query') || ''
    const city = url.searchParams.get('city') || ''
    const country = url.searchParams.get('country') || ''
    const sortBy = url.searchParams.get('sortBy') || 'relevance'
    const sortOrder = url.searchParams.get('sortOrder') || 'desc'

    const skip = (page - 1) * limit

    // Use optimized search function for better relevance and performance
    try {
      console.log('Using optimized search function for query:', query);
      
      const searchResults = await db.$queryRaw<Array<{
        total_count: bigint
        id: number
        name: string
        description: string | null
        from_date: Date
        to_date: Date
        city: string | null
        country: string | null
        website: string | null
        style: string | null
        image_url: string | null
        ai_quality_score: number | null
        ai_completeness_score: number | null
        extraction_method: string | null
        created_at: Date
        updated_at: Date
        search_rank: number
      }>>`
        SELECT * FROM search_events_optimized(
          ${query || null}::text,
          ${city || null}::text, 
          ${country || null}::text,
          ${limit}::integer,
          ${skip}::integer,
          ${sortBy}::text,
          ${sortOrder}::text
        )
      `;

      const total = searchResults.length > 0 ? Number(searchResults[0].total_count) : 0
      
      // If no results, return early
      if (total === 0) {
        return Response.json({
          data: {
            events: [],
            pagination: {
              page,
              limit,
              total: 0,
              totalPages: 0,
              hasNext: false,
              hasPrev: false,
            },
            searchMeta: {
              query,
              sorting: { sortBy, sortOrder },
              filters: { city, country },
              totalMatches: 0,
              searchType: 'optimized'
            },
          },
          success: true,
          timestamp: new Date().toISOString(),
        })
      }

      // Get related data efficiently for each event
      const events = await Promise.all(
        searchResults.map(async (event) => {
          const [venues, prices] = await Promise.all([
            db.venue.findMany({
              where: {
                event_venues: {
                  some: {
                    event_id: event.id
                  }
                }
              },
              select: {
                name: true,
                address: true,
              },
              take: 1
            }),
            db.event_Price.findMany({
              where: { event_id: event.id },
              select: {
                amount: true,
                currency: true,
                type: true,
              },
              take: 1
            })
          ]);

          return {
            ...event,
            venues: venues,
            event_prices: prices
          };
        })
      )

      // Transform to expected format
      const transformedEvents = events.map(event => {
        const primaryVenue = event.venues?.[0]

        return {
          id: event.id.toString(),
          name: event.name,
          description: event.description,
          startDate: event.from_date,
          endDate: event.to_date,
          country: event.country,
          city: event.city,
          website: event.website,
          style: event.style,
          imageUrl: event.image_url?.startsWith('/uploads/')
            ? `https://tqvvseagpkmdnsiuwabv.supabase.co/storage/v1/object/public/bluesbucket/${event.image_url.replace('/uploads/', '')}`
            : event.image_url,
          aiQualityScore: event.ai_quality_score,
          aiCompletenessScore: event.ai_completeness_score,
          extractionMethod: event.extraction_method,
          createdAt: event.created_at,
          updatedAt: event.updated_at,
          searchRank: event.search_rank, // Include search rank from optimized function
          venue: primaryVenue
            ? {
                name: primaryVenue.name,
                address: primaryVenue.address,
                city: event.city,
                country: event.country,
              }
            : null,
          pricing:
            event.event_prices?.map(price => ({
              price: Number(price.amount),
              currency: price.currency,
              type: price.type,
            })) || [],
        }
      })

    const totalPages = Math.ceil(total / limit)

    return Response.json({
      data: {
        events: transformedEvents,
        pagination: {
          page,
          limit,
          total,
          totalPages,
          hasNext: page < totalPages,
          hasPrev: page > 1,
        },
        searchMeta: {
          query,
          sorting: { sortBy, sortOrder },
          filters: { city, country },
          totalMatches: total,
          searchType: 'optimized'
        },
      },
      success: true,
      timestamp: new Date().toISOString(),
    })
    
    } catch (optimizedSearchError) {
      console.log('Optimized search failed, falling back to standard search:', optimizedSearchError.message);
      
      // Fallback to original Prisma search
      const where: any = {}

      // Text search across multiple fields
      if (query) {
        where.OR = [
          { name: { contains: query, mode: 'insensitive' } },
          { description: { contains: query, mode: 'insensitive' } },
          { city: { contains: query, mode: 'insensitive' } },
          { country: { contains: query, mode: 'insensitive' } },
          { style: { contains: query, mode: 'insensitive' } },
        ]
      }

      // Filter by city
      if (city) {
        where.city = { contains: city, mode: 'insensitive' }
      }

      // Filter by country
      if (country) {
        where.country = { contains: country, mode: 'insensitive' }
      }

      // Build order by clause
      let orderBy: any = { from_date: 'asc' } // Default sort by date
      if (sortBy === 'date') {
        orderBy = { from_date: sortOrder as 'asc' | 'desc' }
      } else if (sortBy === 'popularity') {
        orderBy = { name: sortOrder as 'asc' | 'desc' } // Simple name sort for now
      }

      const total = await db.event.count({ where })
      
      // If no results, return early
      if (total === 0) {
        return Response.json({
          data: {
            events: [],
            pagination: {
              page,
              limit,
              total: 0,
              totalPages: 0,
              hasNext: false,
              hasPrev: false,
            },
            searchMeta: {
              query,
              sorting: { sortBy, sortOrder },
              filters: { city, country },
              totalMatches: 0,
              searchType: 'fallback'
            },
          },
          success: true,
          timestamp: new Date().toISOString(),
        })
      }

      const events = await db.event.findMany({
        where,
        take: limit,
        skip: skip,
        select: {
          id: true,
          name: true,
          description: true,
          from_date: true,
          to_date: true,
          country: true,
          city: true,
          website: true,
          style: true,
          image_url: true,
          venues: {
            select: {
              name: true,
              address: true,
            },
            take: 1,
          },
          event_prices: {
            select: {
              amount: true,
              currency: true,
              type: true,
            },
            take: 1,
          },
        },
        orderBy,
      })

      // Transform fallback results
      const transformedFallbackEvents = events.map(event => {
        const primaryVenue = event.venues?.[0]

        return {
          id: event.id.toString(),
          name: event.name,
          description: event.description,
          startDate: event.from_date,
          endDate: event.to_date,
          country: event.country,
          city: event.city,
          website: event.website,
          style: event.style,
          imageUrl: event.image_url?.startsWith('/uploads/')
            ? `https://tqvvseagpkmdnsiuwabv.supabase.co/storage/v1/object/public/bluesbucket/${event.image_url.replace('/uploads/', '')}`
            : event.image_url,
          aiQualityScore: event.ai_quality_score,
          aiCompletenessScore: event.ai_completeness_score,
          extractionMethod: event.extraction_method,
          createdAt: event.created_at,
          updatedAt: event.updated_at,
          venue: primaryVenue
            ? {
                name: primaryVenue.name,
                address: primaryVenue.address,
                city: event.city,
                country: event.country,
              }
            : null,
          pricing:
            event.event_prices?.map(price => ({
              price: Number(price.amount),
              currency: price.currency,
              type: price.type,
            })) || [],
        }
      })

      const totalPages = Math.ceil(total / limit)

      return Response.json({
        data: {
          events: transformedFallbackEvents,
          pagination: {
            page,
            limit,
            total,
            totalPages,
            hasNext: page < totalPages,
            hasPrev: page > 1,
          },
          searchMeta: {
            query,
            sorting: { sortBy, sortOrder },
            filters: { city, country },
            totalMatches: total,
            searchType: 'fallback'
          },
        },
        success: true,
        timestamp: new Date().toISOString(),
      })
    }
  } catch (error) {
    console.error('Search events error:', error)

    // Handle specific database connection errors
    if (error instanceof Error) {
      if (error.message.includes('connection pool') || error.message.includes('timeout')) {
        return Response.json(
          {
            success: false,
            error: 'Database is temporarily unavailable. Please try again in a moment.',
          },
          { status: 503 }
        )
      }

      if (error.message.includes('Database query timeout')) {
        return Response.json(
          {
            success: false,
            error: 'Search request timed out. Please try with more specific filters.',
          },
          { status: 408 }
        )
      }
    }

    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Search failed',
      },
      { status: 500 }
    )
  } finally {
    // Don't disconnect in serverless environments - let connection pooling handle it
    if (process.env.NODE_ENV === 'development') {
      await db.$disconnect().catch(() => {}) // Silent fail for cleanup
    }
  }
}
