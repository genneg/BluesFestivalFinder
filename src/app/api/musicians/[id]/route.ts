import { NextRequest } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/database'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    if (!id) {
      return Response.json({
        success: false,
        error: 'Musician ID is required'
      }, { status: 400 })
    }
    
    // Parse ID as integer
    const numericId = parseInt(id, 10)
    
    if (isNaN(numericId)) {
      return Response.json({
        success: false,
        error: 'Invalid musician ID. Must be a number.'
      }, { status: 400 })
    }
    
    // Fetch musician with full details
    const musician = await db.musician.findUnique({
      where: {
        id: numericId
      },
      include: {
        event_musicians: {
          include: {
            events: {
              select: {
                id: true,
                name: true,
                from_date: true,
                to_date: true,
                city: true,
                country: true,
                image_url: true
              }
            }
          }
        }
      }
    })
    
    if (!musician) {
      return Response.json({
        success: false,
        error: 'Musician not found'
      }, { status: 404 })
    }
    
    // Transform image URL from /uploads/ to /api/uploads/
    const transformImageUrl = (url: string | null): string | null => {
      if (!url) return null
      if (url.startsWith('/uploads/')) {
        return `/api${url}`
      }
      return url
    }
    
    // Transform to expected format
    const transformedMusician = {
      id: musician.id.toString(),
      name: musician.name,
      bio: musician.bio,
      genre: ['Blues', 'Jazz'], // Default genres
      website: musician.website,
      imageUrl: transformImageUrl(musician.image_url),
      socialLinks: {},
      followers: [],
      festivals: musician.event_musicians?.map((em: any) => ({
        id: em.events.id.toString(),
        name: em.events.name,
        startDate: em.events.from_date,
        endDate: em.events.to_date,
        city: em.events.city,
        country: em.events.country,
        image: transformImageUrl(em.events.image_url)
      })) || [],
      stats: {
        totalEvents: musician.event_musicians?.length || 0,
        upcomingEvents: musician.event_musicians?.filter((em: any) => 
          new Date(em.events.from_date) > new Date()
        ).length || 0,
        totalFollowers: musician.followerCount || 0
      }
    }
    
    return Response.json({
      data: transformedMusician,
      success: true,
      timestamp: new Date().toISOString()
    })
    
  } catch (error) {
    console.error('Musician API error:', error)
    return Response.json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch musician'
    }, { status: 500 })
  }
}