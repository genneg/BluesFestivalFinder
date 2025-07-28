import { NextRequest } from 'next/server'
import { 
  apiResponse, 
  apiError, 
  validatePagination, 
  buildTextSearchConditions,
  extractSearchParams,
  handleApiError,
  validateMethod
} from '@/lib/api/utils'
import type { Teacher } from '@/types'
import { getTeachers } from '@/lib/services/teacherService'

/**
 * GET /api/teachers - Get list of teachers with optional filtering
 * Query parameters:
 * - page: page number (default: 1)
 * - limit: items per page (default: 10, max: 100)
 * - search: search term for name and bio
 * - specialties: comma-separated list of specialties
 * - hasUpcomingEvents: boolean to filter teachers with upcoming events
 */
export async function GET(request: NextRequest) {
  try {
    validateMethod(request, ['GET'])
    
    const params = extractSearchParams(request.url)
    const { page, limit, skip, take } = validatePagination(params.page, params.limit)
    
    // Build search conditions
    const where: Record<string, any> = {}
    
    // Text search across name and bio
    if (params.search) {
      const searchConditions = buildTextSearchConditions(
        params.search,
        ['name', 'bio']
      )
      where.OR = searchConditions
    }
    
    // Filter by specialties
    if (params.specialties) {
      const specialtiesArray = params.specialties.split(',').map(s => s.trim())
      where.specialties = {
        hasSome: specialtiesArray
      }
    }
    
    // Filter teachers with upcoming events
    if (params.hasUpcomingEvents === 'true') {
      where.festivals = {
        some: {
          startDate: {
            gte: new Date()
          }
        }
      }
    }
    
    // Get teachers from database using the teacher service
    const filters = {
      search: params.search,
      limit: take,
      offset: skip
    }
    
    const result = await getTeachers(filters)
    
    // Calculate pagination metadata
    const totalPages = Math.ceil(result.total / limit)
    const hasNext = page < totalPages
    const hasPrev = page > 1
    
    const response = {
      teachers: result.teachers,
      pagination: {
        page,
        limit,
        total: result.total,
        totalPages,
        hasNext,
        hasPrev
      }
    }
    
    return apiResponse(response, true, 'Teachers retrieved successfully')
    
  } catch (error) {
    return handleApiError(error)
  }
}

/**
 * POST /api/teachers - Create a new teacher (for future admin functionality)
 */
export async function POST(request: NextRequest) {
  try {
    validateMethod(request, ['POST'])
    
    // TODO: Implement authentication check for admin users
    // TODO: Implement teacher creation with Prisma
    
    return apiError('Teacher creation not implemented yet', 501)
    
  } catch (error) {
    return handleApiError(error)
  }
}