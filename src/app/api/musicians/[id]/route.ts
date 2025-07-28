import { NextRequest } from 'next/server'
import { z } from 'zod'
import { 
  apiResponse, 
  apiError, 
  validatePagination,
  extractSearchParams,
  handleApiError,
  validateMethod
} from '@/lib/api/utils'
import { getMusicianById } from '@/lib/services/musicianService'
import type { Musician, Festival } from '@/types'

interface RouteParams {
  params: {
    id: string
  }
}

/**
 * GET /api/musicians/[id] - Get specific musician with event history
 * Query parameters:
 * - includeEvents: boolean to include associated events (default: true)
 * - eventsPage: page number for events (default: 1)
 * - eventsLimit: items per page for events (default: 10, max: 50)
 * - upcomingOnly: boolean to show only upcoming events (default: false)
 */
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    validateMethod(request, ['GET'])
    
    const { id } = params
    if (!id) {
      return apiError('Musician ID is required', 400)
    }
    
    // Validate ID format
    const idSchema = z.string().min(1)
    const validatedId = idSchema.parse(id)
    
    // Get musician from database
    const musician = await getMusicianById(validatedId)
    
    if (!musician) {
      return apiError('Musician not found', 404)
    }
    
    // Transform to match the expected Musician interface
    const transformedMusician: Musician = {
      id: musician.id,
      name: musician.name,
      bio: musician.bio,
      genre: musician.genres,
      website: musician.website,
      socialLinks: {}, // TODO: Add social links when available in database
      followers: [], // TODO: Get actual followers
      festivals: [] // TODO: Get musician's events/festivals
    }
    
    const response = {
      ...transformedMusician,
      stats: {
        totalEvents: musician.eventCount,
        upcomingEvents: musician.upcomingEvents,
        totalFollowers: musician.followerCount
      }
    }
    
    return apiResponse(response, true, 'Musician retrieved successfully')
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return apiError('Invalid musician ID format')
    }
    
    return handleApiError(error)
  }
}

/**
 * PUT /api/musicians/[id] - Update musician information (for future admin functionality)
 */
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    validateMethod(request, ['PUT'])
    
    // TODO: Implement authentication check for admin users
    // TODO: Implement musician update with Prisma
    
    return apiError('Musician update not implemented yet', 501)
    
  } catch (error) {
    return handleApiError(error)
  }
}

/**
 * DELETE /api/musicians/[id] - Delete musician (for future admin functionality)
 */
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    validateMethod(request, ['DELETE'])
    
    // TODO: Implement authentication check for admin users
    // TODO: Implement musician deletion with Prisma
    
    return apiError('Musician deletion not implemented yet', 501)
    
  } catch (error) {
    return handleApiError(error)
  }
}