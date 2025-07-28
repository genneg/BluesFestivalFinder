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
import { getTeacherByIdWithEvents } from '@/lib/services/teacherService'
import type { Teacher, Festival } from '@/types'

interface RouteParams {
  params: {
    id: string
  }
}

/**
 * GET /api/teachers/[id] - Get specific teacher with event history
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
      return apiError('Teacher ID is required', 400)
    }
    
    // Validate ID format
    const idSchema = z.string().min(1)
    const validatedId = idSchema.parse(id)
    
    // Get teacher from database with events
    const teacher = await getTeacherByIdWithEvents(validatedId)
    
    if (!teacher) {
      return apiError('Teacher not found', 404)
    }
    
    // Transform to match the expected Teacher interface
    const transformedTeacher = {
      id: teacher.id,
      name: teacher.name,
      bio: teacher.bio,
      specialties: teacher.specialties,
      website: teacher.website,
      imageUrl: teacher.imageUrl, // Add teacher image
      socialLinks: {}, // TODO: Add social links when available in database
      followers: [], // TODO: Get actual followers
      festivals: teacher.events || [], // Include actual events
      stats: {
        totalEvents: teacher.totalEvents,
        upcomingEvents: teacher.upcomingEvents,
        totalFollowers: 0 // TODO: Get actual follower count
      }
    }
    
    return apiResponse(transformedTeacher, true, 'Teacher retrieved successfully')
    
  } catch (error) {
    if (error instanceof z.ZodError) {
      return apiError('Invalid teacher ID format')
    }
    
    return handleApiError(error)
  }
}

/**
 * PUT /api/teachers/[id] - Update teacher information (for future admin functionality)
 */
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    validateMethod(request, ['PUT'])
    
    // TODO: Implement authentication check for admin users
    // TODO: Implement teacher update with Prisma
    
    return apiError('Teacher update not implemented yet', 501)
    
  } catch (error) {
    return handleApiError(error)
  }
}

/**
 * DELETE /api/teachers/[id] - Delete teacher (for future admin functionality)
 */
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    validateMethod(request, ['DELETE'])
    
    // TODO: Implement authentication check for admin users
    // TODO: Implement teacher deletion with Prisma
    
    return apiError('Teacher deletion not implemented yet', 501)
    
  } catch (error) {
    return handleApiError(error)
  }
}