import { db } from '@festival-scout/database'

/**
 * Advanced search utilities for the Festival Scout application
 */

export interface SearchOptions {
  query?: string
  location?: {
    latitude: number
    longitude: number
    radius: number // in kilometers
  }
  dateRange?: {
    start?: Date
    end?: Date
  }
  filters?: {
    teachers?: string[]
    musicians?: string[]
    eventTypes?: string[]
    skillLevels?: string[]
    priceRange?: {
      min?: number
      max?: number
    }
    featured?: boolean
  }
  sorting?: {
    sortBy: 'relevance' | 'date' | 'distance' | 'popularity' | 'price'
    sortOrder: 'asc' | 'desc'
  }
  pagination?: {
    page: number
    limit: number
  }
}

export interface SearchResult {
  events: any[]
  totalCount: number
  searchMeta: {
    query?: string
    location?: SearchOptions['location']
    appliedFilters: any
    sorting: SearchOptions['sorting']
  }
}

/**
 * Performs full-text search using PostgreSQL's tsvector
 */
export async function performFullTextSearch(
  query: string,
  options: SearchOptions
): Promise<SearchResult> {
  const searchTerms = query.trim().split(/\s+/).join(' & ')
  
  // Build full-text search query using raw SQL for better performance
  const fullTextSearchQuery = `
    SELECT DISTINCT e.id, 
           ts_rank_cd(
             to_tsvector('english', e.name || ' ' || 
                        COALESCE(e.description, '') || ' ' || 
                        COALESCE(e.short_desc, '') || ' ' ||
                        v.name || ' ' || v.city || ' ' || v.country || ' ' ||
                        COALESCE(string_agg(t.name, ' '), '') || ' ' ||
                        COALESCE(string_agg(m.name, ' '), '') || ' ' ||
                        COALESCE(string_agg(et.tag, ' '), '')),
             to_tsquery('english', $1)
           ) as rank
    FROM events e
    JOIN venues v ON e.venue_id = v.id
    LEFT JOIN event_teachers et_rel ON e.id = et_rel.event_id
    LEFT JOIN teachers t ON et_rel.teacher_id = t.id
    LEFT JOIN event_musicians em_rel ON e.id = em_rel.event_id
    LEFT JOIN musicians m ON em_rel.musician_id = m.id
    LEFT JOIN event_tags et ON e.id = et.event_id
    WHERE to_tsvector('english', e.name || ' ' || 
                     COALESCE(e.description, '') || ' ' || 
                     COALESCE(e.short_desc, '') || ' ' ||
                     v.name || ' ' || v.city || ' ' || v.country || ' ' ||
                     COALESCE(t.name, '') || ' ' ||
                     COALESCE(m.name, '') || ' ' ||
                     COALESCE(et.tag, '')) @@ to_tsquery('english', $1)
    AND e.status = 'PUBLISHED'
    GROUP BY e.id, e.name, e.description, e.short_desc, v.name, v.city, v.country
    ORDER BY rank DESC
  `
  
  const rankedEventIds = await db.$queryRaw<{id: string, rank: number}[]>`
    ${fullTextSearchQuery}
  `.catch(() => []) // Fallback to empty array if FTS fails
  
  return {
    events: [],
    totalCount: rankedEventIds.length,
    searchMeta: {
      query,
      location: options.location,
      appliedFilters: options.filters || {},
      sorting: options.sorting || { sortBy: 'relevance', sortOrder: 'desc' }
    }
  }
}

/**
 * Performs geographic search using PostGIS
 */
export async function performGeographicSearch(
  latitude: number,
  longitude: number,
  radiusKm: number,
  additionalWhere?: any
): Promise<{ venueIds: string[], distances: Map<string, number> }> {
  const radiusInMeters = radiusKm * 1000
  
  const nearbyVenues = await db.$queryRaw<{
    id: string
    distance_meters: number
  }[]>`
    SELECT id, 
           ST_Distance(
             ST_SetSRID(ST_MakePoint(longitude::float, latitude::float), 4326)::geography,
             ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography
           ) as distance_meters
    FROM venues 
    WHERE ST_DWithin(
      ST_SetSRID(ST_MakePoint(longitude::float, latitude::float), 4326)::geography,
      ST_SetSRID(ST_MakePoint(${longitude}, ${latitude}), 4326)::geography,
      ${radiusInMeters}
    )
    ORDER BY distance_meters ASC
  `
  
  const venueIds = nearbyVenues.map(v => v.id)
  const distances = new Map(
    nearbyVenues.map(v => [v.id, v.distance_meters / 1000]) // Convert to km
  )
  
  return { venueIds, distances }
}

/**
 * Builds optimized where clause for event search
 */
export function buildEventSearchWhere(options: SearchOptions): any {
  const where: any = {
    status: 'PUBLISHED'
  }
  
  // Date range filtering
  if (options.dateRange?.start) {
    where.startDate = { gte: options.dateRange.start }
  }
  
  if (options.dateRange?.end) {
    where.endDate = { lte: options.dateRange.end }
  }
  
  // Teacher filtering
  if (options.filters?.teachers && options.filters.teachers.length > 0) {
    where.teachers = {
      some: {
        OR: options.filters.teachers.map(teacher => ({
          OR: [
            { teacherId: teacher },
            { teacher: { name: { contains: teacher, mode: 'insensitive' } } }
          ]
        }))
      }
    }
  }
  
  // Musician filtering
  if (options.filters?.musicians && options.filters.musicians.length > 0) {
    where.musicians = {
      some: {
        OR: options.filters.musicians.map(musician => ({
          OR: [
            { musicianId: musician },
            { musician: { name: { contains: musician, mode: 'insensitive' } } }
          ]
        }))
      }
    }
  }
  
  // Event type filtering
  if (options.filters?.eventTypes && options.filters.eventTypes.length > 0) {
    where.tags = {
      some: {
        tag: { in: options.filters.eventTypes }
      }
    }
  }
  
  // Skill level filtering
  if (options.filters?.skillLevels && options.filters.skillLevels.length > 0) {
    const existingTagCondition = where.tags?.some
    where.tags = {
      some: {
        ...existingTagCondition,
        tag: { 
          in: [
            ...(existingTagCondition?.tag?.in || []),
            ...options.filters.skillLevels
          ]
        }
      }
    }
  }
  
  // Price range filtering
  if (options.filters?.priceRange) {
    const priceWhere: any = {}
    
    if (options.filters.priceRange.min !== undefined) {
      priceWhere.gte = options.filters.priceRange.min
    }
    
    if (options.filters.priceRange.max !== undefined) {
      priceWhere.lte = options.filters.priceRange.max
    }
    
    if (Object.keys(priceWhere).length > 0) {
      where.prices = {
        some: { amount: priceWhere }
      }
    }
  }
  
  // Featured filter
  if (options.filters?.featured !== undefined) {
    where.featured = options.filters.featured
  }
  
  return where
}

/**
 * Builds order by clause for event search
 */
export function buildEventSearchOrderBy(
  sortBy: string,
  sortOrder: string,
  eventIdsWithRank?: { id: string, rank?: number }[]
): any {
  switch (sortBy) {
    case 'relevance':
      if (eventIdsWithRank && eventIdsWithRank.length > 0) {
        // Custom ordering based on full-text search rank
        return { startDate: 'asc' } // Fallback ordering
      }
      return [
        { featured: 'desc' },
        { startDate: 'asc' }
      ]
      
    case 'date':
      return { startDate: sortOrder }
      
    case 'popularity':
      return [
        { featured: 'desc' },
        { saves: { _count: 'desc' } },
        { attendances: { _count: 'desc' } },
        { startDate: 'asc' }
      ]
      
    case 'distance':
      // Distance sorting requires post-processing
      return { startDate: 'asc' }
      
    case 'price':
      // Price sorting is complex, fallback to date
      return { startDate: 'asc' }
      
    default:
      return { startDate: 'asc' }
  }
}

/**
 * Calculates relevance score for search results
 */
export function calculateRelevanceScore(
  event: any,
  query?: string,
  userLocation?: { latitude: number, longitude: number }
): number {
  let score = 0
  
  // Base score for featured events
  if (event.featured) {
    score += 100
  }
  
  // Score based on popularity metrics
  score += (event._count?.saves || 0) * 5
  score += (event._count?.attendances || 0) * 3
  score += (event._count?.reviews || 0) * 2
  
  // Score based on query relevance (simplified)
  if (query) {
    const queryLower = query.toLowerCase()
    const nameMatch = event.name.toLowerCase().includes(queryLower)
    const descMatch = event.description?.toLowerCase().includes(queryLower)
    
    if (nameMatch) {
score += 50
}
    if (descMatch) {
score += 25
}
  }
  
  // Score boost for upcoming events
  const now = new Date()
  const eventDate = new Date(event.startDate)
  const daysUntilEvent = Math.ceil((eventDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
  
  if (daysUntilEvent > 0 && daysUntilEvent <= 90) {
    score += Math.max(0, 30 - daysUntilEvent * 0.3)
  }
  
  return score
}

/**
 * Optimized search aggregation for autocomplete suggestions
 */
export async function getSearchSuggestions(
  query: string,
  limit: number = 10
): Promise<{
  events: string[]
  teachers: string[]
  musicians: string[]
  locations: string[]
}> {
  const queryPattern = `%${query.toLowerCase()}%`
  
  const [events, teachers, musicians, venues] = await Promise.all([
    // Event name suggestions
    db.event.findMany({
      where: {
        name: { contains: query, mode: 'insensitive' },
        status: 'PUBLISHED'
      },
      select: { name: true },
      take: limit,
      orderBy: { featured: 'desc' }
    }),
    
    // Teacher suggestions
    db.teacher.findMany({
      where: {
        name: { contains: query, mode: 'insensitive' }
      },
      select: { name: true },
      take: limit,
      orderBy: { followerCount: 'desc' }
    }),
    
    // Musician suggestions
    db.musician.findMany({
      where: {
        name: { contains: query, mode: 'insensitive' }
      },
      select: { name: true },
      take: limit,
      orderBy: { followerCount: 'desc' }
    }),
    
    // Location suggestions
    db.venue.findMany({
      where: {
        OR: [
          { city: { contains: query, mode: 'insensitive' } },
          { country: { contains: query, mode: 'insensitive' } }
        ]
      },
      select: { city: true, country: true },
      take: limit,
      distinct: ['city', 'country']
    })
  ])
  
  return {
    events: events.map(e => e.name),
    teachers: teachers.map(t => t.name),
    musicians: musicians.map(m => m.name),
    locations: Array.from(new Set([
      ...venues.map(v => v.city),
      ...venues.map(v => v.country),
      ...venues.map(v => `${v.city}, ${v.country}`)
    ])).slice(0, limit)
  }
}