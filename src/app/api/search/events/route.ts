import { NextRequest } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/database'

// Simplified search schema for mock data
const searchSchema = z.object({
  page: z.string().optional().default('1'),
  limit: z.string().optional().default('20'),
  query: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  sortBy: z.enum(['relevance', 'date', 'distance', 'popularity', 'price']).optional().default('relevance'),
  sortOrder: z.enum(['asc', 'desc']).optional().default('desc'),
})

export async function GET(request: NextRequest) {
  try {
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
    
    // Build where clause for search
    const where: any = {}
    
    // Text search across multiple fields
    if (query) {
      where.OR = [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { city: { contains: query, mode: 'insensitive' } },
        { country: { contains: query, mode: 'insensitive' } },
        { style: { contains: query, mode: 'insensitive' } }
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
    
    // Get events and total count
    const [events, total] = await Promise.all([
      db.event.findMany({
        where,
        take: limit,
        skip: skip,
        include: {
          venues: true,
          event_prices: true
        },
        orderBy
      }),
      db.event.count({ where })
    ])
    
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
        imageUrl: event.image_url?.startsWith('/uploads/') ? `/api${event.image_url}` : event.image_url,
        aiQualityScore: event.ai_quality_score,
        aiCompletenessScore: event.ai_completeness_score,
        extractionMethod: event.extraction_method,
        createdAt: event.created_at,
        updatedAt: event.updated_at,
        venue: primaryVenue ? {
          name: primaryVenue.name,
          address: primaryVenue.address,
          city: event.city,
          country: event.country
        } : null,
        pricing: event.event_prices?.map(price => ({
          price: Number(price.amount),
          currency: price.currency,
          type: price.type
        })) || []
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
          hasPrev: page > 1
        },
        searchMeta: {
          query,
          sorting: { sortBy, sortOrder },
          filters: { city, country },
          totalMatches: total
        }
      },
      success: true,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Search events error:', error)
    return Response.json({
      success: false,
      error: error instanceof Error ? error.message : 'Search failed'
    }, { status: 500 })
  }
}