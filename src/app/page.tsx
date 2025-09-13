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
        {/* Enhanced Hero Section with Vintage Aesthetics */}
        <div className="hero-section vintage-spotlight relative overflow-hidden rounded-2xl p-8 md:p-12 mb-8">
          <div className="hero-overlay vintage-pattern"></div>
          
          {/* Art Deco Corner Decorations */}
          <div className="art-deco-corner absolute top-4 left-4 w-6 h-6 z-20"></div>
          <div className="art-deco-corner absolute bottom-4 right-4 w-6 h-6 z-20" style={{transform: 'rotate(180deg)'}}></div>
          
          {/* Musical Note Decorations */}
          <div className="musical-notes absolute top-8 right-8 z-20"></div>
          
          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Main Title with Jazz Typography */}
            <h1 className="font-jazz text-5xl md:text-6xl lg:text-7xl mb-4 text-gradient-gold leading-tight font-bold tracking-wide">
              Discover the Soul
            </h1>
            <h2 className="font-vintage text-3xl md:text-4xl lg:text-5xl mb-6 text-cream-200 leading-tight tracking-wider">
              OF BLUES DANCE
            </h2>
            
            {/* Subtitle with enhanced styling */}
            <div className="jazz-lines relative mb-8 py-4">
              <p className="text-cream-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                Connect with legendary artists, discover authentic festivals worldwide, and immerse yourself in the timeless elegance of blues and jazz culture.
              </p>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/search">
                <button className="btn-primary text-lg px-8 py-3 font-semibold tracking-wide shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 hover:scale-105">
                  🎭 Explore Festivals
                </button>
              </Link>
              <Link href="/teachers">
                <button className="btn-secondary text-lg px-8 py-3 font-semibold tracking-wide border-cream-300 text-cream-200 hover:bg-cream-100 hover:text-navy-900 transition-all duration-300">
                  👥 Meet Artists
                </button>
              </Link>
            </div>
            
          </div>
          
          {/* Floating Art Deco Elements */}
          <div className="absolute top-1/4 left-8 w-4 h-4 border-2 border-gold-600 rotate-45 animate-jazz-glow opacity-60"></div>
          <div className="absolute bottom-1/3 right-12 w-3 h-3 bg-copper-600 rounded-full animate-vintage-bounce opacity-70"></div>
        </div>


        {/* Enhanced Featured Festivals Section */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gold-600 to-transparent flex-1"></div>
              <div className="mx-4 w-3 h-3 bg-gold-600 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-gold-600 to-transparent flex-1"></div>
            </div>
            <h3 className="font-jazz text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
              Featured Festivals
            </h3>
            <p className="text-cream-200 text-lg font-medium">Handpicked events from the global blues scene</p>
            <div className="mt-6 flex justify-center">
              <Link href="/search">
                <button className="btn-outline px-6 py-2 text-sm font-semibold tracking-wide border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-navy-900 transition-all duration-300">
                  🎪 View All Festivals
                </button>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            {isLoadingFestivals && (
              <div className="card p-8 text-center">
                <div className="spinner mx-auto mb-4"></div>
                <p className="text-white/80">Discovering amazing blues festivals worldwide...</p>
                <p className="text-white/60 text-sm mt-2">Searching blues dance festivals worldwide</p>
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

        {/* Enhanced Teachers Section */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-copper-600 to-transparent flex-1"></div>
              <div className="mx-4 w-3 h-3 bg-copper-600 rounded-full animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-copper-600 to-transparent flex-1"></div>
            </div>
            <h3 className="font-jazz text-4xl md:text-5xl font-bold text-copper-600 mb-2">
              Master Teachers
            </h3>
            <p className="text-cream-200 text-lg font-medium">Learn from legendary blues dance instructors</p>
            <div className="mt-6 flex justify-center">
              <Link href="/teachers">
                <button className="btn-outline px-6 py-2 text-sm font-semibold tracking-wide border-copper-600 text-copper-600 hover:bg-copper-600 hover:text-cream-100 transition-all duration-300">
                  👥 Meet All Teachers
                </button>
              </Link>
            </div>
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