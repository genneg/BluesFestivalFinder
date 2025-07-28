'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { EventDetails } from '@/components/features/EventDetails'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { Festival } from '@/types'

export default function EventDetailPage() {
  const params = useParams()
  const [event, setEvent] = useState<Festival | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(`/api/events/${params.id}`)
        
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Event not found')
          }
          throw new Error('Failed to load event')
        }
        
        const apiResponse = await response.json()
        
        if (!apiResponse.success) {
          throw new Error(apiResponse.error || 'Failed to load event')
        }
        
        const eventData = apiResponse.data
        
        // Convert date strings to Date objects
        const processedEvent: Festival = {
          ...eventData,
          startDate: new Date(eventData.startDate),
          endDate: new Date(eventData.endDate),
          registrationDeadline: eventData.registrationDeadline 
            ? new Date(eventData.registrationDeadline) 
            : undefined,
        }
        
        setEvent(processedEvent)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    if (params.id) {
      fetchEvent()
    }
  }, [params.id])

  if (isLoading) {
    return (
      <div className="app-container">
        <div className="max-w-md mx-auto bg-background min-h-screen relative flex items-center justify-center">
          <div className="text-center">
            <LoadingSpinner className="mx-auto mb-6" />
            <p className="text-white text-lg font-medium">Loading event details...</p>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="app-container">
        <div className="max-w-md mx-auto bg-background min-h-screen relative flex items-center justify-center">
          <div className="text-center">
            <div className="card p-8 border-error-600/30 bg-error-900/20 max-w-md">
              <svg className="w-16 h-16 text-error-400 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z" />
              </svg>
              <h2 className="text-2xl font-bold text-error-300 mb-4">
                {error === 'Event not found' ? 'Event Not Found' : 'Error Loading Event'}
              </h2>
              <p className="text-error-200 mb-6 font-medium">{error}</p>
              <a href="/events" className="btn-error inline-flex items-center">
                ← Back to Events
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!event) {
    return null
  }

  return (
    <div className="app-container">
      <div className="max-w-4xl mx-auto bg-background min-h-screen relative">
        <div className="content-wrapper">
          <EventDetails event={event} />
        </div>
      </div>
    </div>
  )
}