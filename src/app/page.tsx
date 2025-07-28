'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { EventCard } from '@/components/features/EventCard'
import { BottomNavigationEnhanced } from '@/components/layout/BottomNavigationEnhanced'
import { Button } from '@/components/ui/Button'
import { Music, Sparkles, TrendingUp } from 'lucide-react'

// Types for API responses
interface Festival {
  id: string
  name: string
  city: string
  country: string
  startDate: string
  endDate: string
  imageUrl?: string | null
  image?: string | null
  prices?: Array<{
    amount: number
    currency: string
    type: string
  }>
  venue?: {
    name: string | null
    city: string
    country: string
  } | null
  style: string | null
  description?: string
  teachers?: Array<{
    id: string
    name: string
  }>
  musicians?: Array<{
    id: string
    name: string
  }>
  website?: string
}

interface Teacher {
  id: string
  name: string
  bio?: string | null
  specialties?: string[]
  imageUrl?: string | null
}

export default function Home() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("home")
  const [festivals, setFestivals] = useState<Festival[]>([])
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [isLoadingFestivals, setIsLoadingFestivals] = useState(true)
  const [isLoadingTeachers, setIsLoadingTeachers] = useState(true)
  const [festivalsError, setFestivalsError] = useState<string | null>(null)
  const [teachersError, setTeachersError] = useState<string | null>(null)

  const handleSearch = (query: string) => {
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  // Fetch festivals from API
  useEffect(() => {
    const fetchFestivals = async () => {
      try {
        setIsLoadingFestivals(true)
        const response = await fetch('/api/events?limit=3')
        const data = await response.json()
        
        if (data.success) {
          setFestivals(data.data.events)
        } else {
          setFestivalsError('Failed to load festivals')
        }
      } catch (error) {
        setFestivalsError('Failed to load festivals')
        console.error('Error fetching festivals:', error)
      } finally {
        setIsLoadingFestivals(false)
      }
    }

    fetchFestivals()
  }, [])

  // Fetch teachers from API
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        setIsLoadingTeachers(true)
        const response = await fetch('/api/teachers?limit=2')
        const data = await response.json()
        
        if (data.success) {
          setTeachers(data.data.teachers)
        } else {
          setTeachersError('Failed to load teachers')
        }
      } catch (error) {
        setTeachersError('Failed to load teachers')
        console.error('Error fetching teachers:', error)
      } finally {
        setIsLoadingTeachers(false)
      }
    }

    fetchTeachers()
  }, [])

  const renderContent = () => {
    return (
      <div className="space-y-12">
        {/* Hero Section */}
        <div className="hero-section relative overflow-hidden rounded-2xl p-12">
          <div className="hero-overlay"></div>
          <div className="relative z-10 text-center">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight font-bold">
              Discover the Soul of Blues
            </h1>
            <p className="text-white text-lg mb-8 leading-relaxed max-w-md mx-auto font-medium">
              Find authentic festivals, connect with legendary artists, and immerse yourself in the timeless world of blues and jazz.
            </p>
            <Link href="/search">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-2.5">
                Explore Festivals
              </Button>
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="stats-card">
            <Music className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">127</p>
            <p className="text-sm font-medium text-white">Festivals</p>
          </div>
          <div className="stats-card">
            <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">1.2k</p>
            <p className="text-sm font-medium text-white">Artists</p>
          </div>
          <div className="stats-card">
            <Sparkles className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">89k</p>
            <p className="text-sm font-medium text-white">Music Lovers</p>
          </div>
        </div>

        {/* Featured Festivals Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-white">Featured Festivals</h3>
            <Link href="/search">
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-6">
            {isLoadingFestivals && (
              <div className="card p-8 text-center">
                <div className="spinner mx-auto mb-4"></div>
                <p className="text-white/80">Discovering amazing blues festivals worldwide...</p>
                <p className="text-white/60 text-sm mt-2">Searching through 127+ festivals in 40+ countries</p>
              </div>
            )}
            
            {festivalsError && (
              <div className="card p-6 border-red-600/30 bg-red-900/20">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <h4 className="text-red-300 font-medium">Unable to load festivals</h4>
                </div>
                <p className="text-red-200 text-sm mb-3">We're having trouble connecting to our festival database.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="btn-secondary btn-sm"
                >
                  Try Again
                </button>
              </div>
            )}
            
            {!isLoadingFestivals && !festivalsError && festivals.map((festival) => (
              <EventCard key={festival.id} event={festival} />
            ))}
            
            {!isLoadingFestivals && !festivalsError && festivals.length === 0 && (
              <div className="card p-8 text-center">
                <p className="text-white/80">No festivals found</p>
              </div>
            )}
          </div>
        </div>

        {/* Teachers Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-white">Featured Teachers</h3>
            <Link href="/teachers">
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </Link>
          </div>
          <div className="space-y-4">
            {isLoadingTeachers && (
              <div className="card p-8 text-center">
                <div className="spinner mx-auto mb-4"></div>
                <p className="text-white/80">Finding legendary blues teachers...</p>
                <p className="text-white/60 text-sm mt-2">Curating profiles from the global blues community</p>
              </div>
            )}
            
            {teachersError && (
              <div className="card p-6 border-red-600/30 bg-red-900/20">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <h4 className="text-red-300 font-medium">Unable to load teachers</h4>
                </div>
                <p className="text-red-200 text-sm mb-3">We're having trouble connecting to our teacher database.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="btn-secondary btn-sm"
                >
                  Try Again
                </button>
              </div>
            )}
            
            {!isLoadingTeachers && !teachersError && teachers.map((teacher) => (
              <Link key={teacher.id} href={`/teachers/${teacher.id}`}>
                <div className="card p-4 hover:bg-white/5 transition-colors cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center">
                      {teacher.imageUrl ? (
                        <img 
                          src={teacher.imageUrl} 
                          alt={teacher.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-white">{teacher.name}</h4>
                      {teacher.specialties && teacher.specialties.length > 0 && (
                        <p className="text-sm text-white/60">{teacher.specialties.join(', ')}</p>
                      )}
                    </div>
                    <svg className="w-5 h-5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
            
            {!isLoadingTeachers && !teachersError && teachers.length === 0 && (
              <div className="card p-8 text-center">
                <p className="text-white/80">No teachers found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="app-container">
      <div className="max-w-md mx-auto bg-background min-h-screen relative">
        {/* Main Content */}
        <div className="content-wrapper">
          {renderContent()}
        </div>

        {/* Bottom Navigation */}
        <BottomNavigationEnhanced activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  )
}