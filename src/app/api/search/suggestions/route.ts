import { NextRequest } from 'next/server'
import { z } from 'zod'

import { getSearchSuggestions } from '@/lib/api/search'
import { 
  apiResponse, 
  apiError, 
  handleApiError,
  extractSearchParams
} from '@/lib/api/utils'

// Search suggestions schema
const suggestionsQuerySchema = z.object({
  query: z.string().min(1).max(100),
  limit: z.string().optional().default('8'),
  type: z.enum(['all', 'events', 'teachers', 'musicians', 'locations']).optional().default('all')
})

export async function GET(request: NextRequest) {
  try {
    const params = extractSearchParams(request.url)
    const validatedParams = suggestionsQuerySchema.parse(params)
    
    const query = validatedParams.query.trim()
    const limit = Math.min(parseInt(validatedParams.limit), 20) // Max 20 suggestions
    
    if (query.length < 2) {
      return apiResponse({
        events: [],
        teachers: [],
        musicians: [],
        locations: []
      })
    }
    
    // Get suggestions based on type
    if (validatedParams.type === 'all') {
      const suggestions = await getSearchSuggestions(query, limit)
      return apiResponse(suggestions)
    }
    
    // Get specific type suggestions
    const suggestions = await getSearchSuggestions(query, limit)
    
    const response = {
      events: validatedParams.type === 'events' ? suggestions.events : [],
      teachers: validatedParams.type === 'teachers' ? suggestions.teachers : [],
      musicians: validatedParams.type === 'musicians' ? suggestions.musicians : [],
      locations: validatedParams.type === 'locations' ? suggestions.locations : []
    }
    
    return apiResponse(response)
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return apiError('Invalid query parameters: ' + error.issues.map((e: any) => e.message).join(', '))
    }
    
    return handleApiError(error)
  }
}