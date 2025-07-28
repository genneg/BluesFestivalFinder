import { NextRequest } from 'next/server'
import { z } from 'zod'

import { 
  apiResponse, 
  apiError, 
  validatePagination, 
  calculatePaginationMeta,
  extractSearchParams
} from '@/lib/api/utils'
import { searchEvents } from '@/lib/services/eventService'

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
    const params = extractSearchParams(request.url)
    const validatedParams = searchSchema.parse(params)
    const { page, limit } = validatePagination(validatedParams.page, validatedParams.limit)
    
    // Build filters for the event service
    const filters = {
      city: validatedParams.city,
      country: validatedParams.country,
      limit,
      offset: (page - 1) * limit
    }
    
    // Get events from database using the search service
    const result = await searchEvents(validatedParams.query || '', filters)
    
    const paginationMeta = calculatePaginationMeta(result.total, page, limit)
    
    // Build search metadata
    const searchMeta = {
      query: validatedParams.query,
      sorting: {
        sortBy: validatedParams.sortBy,
        sortOrder: validatedParams.sortOrder
      },
      filters: {
        city: validatedParams.city,
        country: validatedParams.country
      },
      totalMatches: result.total
    }
    
    return apiResponse({
      events: result.events,
      pagination: paginationMeta,
      searchMeta
    })
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return apiError('Invalid query parameters: ' + error.issues.map((e: any) => e.message).join(', '))
    }
    
    return apiError('Search failed: ' + (error as Error).message)
  }
}