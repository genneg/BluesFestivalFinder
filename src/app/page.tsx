'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import InternalLinking from '@/components/seo/InternalLinking'
import { EventCard } from '@/components/features/EventCard'
import { BottomNavigationEnhanced } from '@/components/layout/BottomNavigationEnhanced'
import { Button } from '@/components/ui/Button'
import { Music, Sparkles, TrendingUp } from 'lucide-react'
import {
  MainContent,
  AccessibleHeading,
  Landmark
} from '@/components/ui/SkipNavigation'
import { ContentClarity } from '@/components/ui/ContentClarity'
import {
  ArtDecoLoader,
  VintageErrorState,
  VintageSkeleton,
  VintageEventCardSkeleton,
  InlineJazzLoading
} from '@/components/ui/VintageLoadingStates'
import { VintageApiError } from '@/hooks/useVintageApi'

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
        <div className="hero-section vintage-spotlight relative overflow-hidden rounded-2xl p-6 md:p-12 mb-8">
          <div className="hero-overlay vintage-pattern"></div>
          
          {/* Art Deco Corner Decorations */}
          <div className="art-deco-corner absolute top-4 left-4 w-6 h-6 z-20"></div>
          <div className="art-deco-corner absolute bottom-4 right-4 w-6 h-6 z-20" style={{transform: 'rotate(180deg)'}}></div>
          
          {/* Musical Note Decorations */}
          <div className="musical-notes absolute top-8 right-8 z-20"></div>
          
          {/* Main Content */}
          <div className="relative z-10 text-center">
            {/* Main Title with Jazz Typography */}
            <h1 className="font-jazz text-4xl md:text-6xl lg:text-7xl mb-4 text-gradient-gold leading-tight font-bold tracking-wide">
              SwingRadar
            </h1>
            <h2 className="font-vintage text-3xl md:text-4xl lg:text-5xl mb-6 text-cream-200 leading-tight tracking-wider">
              YOUR RADAR FOR SWING DANCE
            </h2>

            {/* Subtitle with enhanced styling */}
            <div className="jazz-lines relative mb-8 py-4">
              <p className="text-cream-100 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                Detect authentic festivals and track legendary artists across Blues, Swing, Balboa, Shag, and Boogie Woogie worldwide. Your precision radar for swing dance culture with vintage style and modern technology.
              </p>
            </div>

            {/* Dance Styles Showcase */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <div className="style-blues px-4 py-2 rounded-full bg-navy-800/50 border border-amber-400/30 text-amber-400 text-sm font-medium">
                🎺 Blues
              </div>
              <div className="style-swing px-4 py-2 rounded-full bg-emerald-800/50 border border-emerald-400/30 text-emerald-400 text-sm font-medium">
                🎷 Swing
              </div>
              <div className="style-balboa px-4 py-2 rounded-full bg-orange-800/50 border border-amber-400/30 text-amber-400 text-sm font-medium">
                💃 Balboa
              </div>
              <div className="style-shag px-4 py-2 rounded-full bg-teal-800/50 border border-teal-400/30 text-teal-400 text-sm font-medium">
                🕺 Shag
              </div>
              <div className="style-boogie px-4 py-2 rounded-full bg-purple-800/50 border border-purple-400/30 text-purple-400 text-sm font-medium">
                🎹 Boogie Woogie
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/search">
                <button className="btn-primary text-lg px-8 py-3 font-semibold tracking-wide shadow-gold-lg hover:shadow-gold-xl transition-all duration-300 hover:scale-105">
                  📡 Start Detection
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


        {/* Enhanced Featured Events Section */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gold-600 to-transparent flex-1"></div>
              <div className="mx-4 w-3 h-3 bg-gold-600 rounded-full animate-jazz-glow"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-gold-600 to-transparent flex-1"></div>
            </div>
            <h3 className="font-jazz text-4xl md:text-5xl font-bold text-gradient-gold mb-2">
              Featured Events
            </h3>
            <p className="text-cream-200 text-lg font-medium">Handpicked festivals and workshops from the global swing dance community</p>

            {/* Style Filter Indicators */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 mb-6">
              <div className="text-xs text-cream-300 mr-2">Featuring:</div>
              <div className="filter-style-indicator style-blues text-xs">Blues</div>
              <div className="filter-style-indicator style-swing text-xs">Swing</div>
              <div className="filter-style-indicator style-balboa text-xs">Balboa</div>
              <div className="filter-style-indicator style-shag text-xs">Shag</div>
              <div className="filter-style-indicator style-boogie text-xs">Boogie</div>
            </div>

            <div className="mt-6 flex justify-center">
              <Link href="/search">
                <button className="btn-outline px-6 py-2 text-sm font-semibold tracking-wide border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-navy-900 transition-all duration-300">
                  📡 View All Events
                </button>
              </Link>
            </div>
          </div>
          <div className="space-y-6">
            {isLoadingFestivals && (
              <ArtDecoLoader
                text="Discovering amazing swing dance events worldwide..."
                size="lg"
                className="py-8"
              />
            )}

            {festivalsError && (
              <VintageErrorState
                error={new VintageApiError('ServerError', 'The dance floor connection dropped')}
                onRetry={() => {
                  setFestivalsError(null)
                  // Refetch festivals
                  const fetchFestivals = async () => {
                    try {
                      setIsLoadingFestivals(true)
                      const response = await fetch('/api/events?limit=3')
                      const data = await response.json()

                      if (data.success) {
                        setFestivals(data.data.events)
                      } else {
                        setFestivalsError('Failed to load events')
                      }
                    } catch (error) {
                      setFestivalsError('Failed to load events')
                      console.error('Error fetching festivals:', error)
                    } finally {
                      setIsLoadingFestivals(false)
                    }
                  }
                  fetchFestivals()
                }}
                retryText="Reconnect to Events"
                className="my-6"
              />
            )}
            
            {!isLoadingFestivals && !festivalsError && festivals.map((festival) => (
              <EventCard key={festival.id} event={festival} />
            ))}
            
            {!isLoadingFestivals && !festivalsError && festivals.length === 0 && (
              <div className="text-center py-12">
                <div className="vintage-radar-icon w-16 h-16 mx-auto mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-to-b from-green-600 to-green-700 rounded-full mx-auto relative border-4 border-green-500">
                    <div className="absolute inset-2 bg-gradient-to-b from-green-400 to-green-500 rounded-full opacity-50"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-green-300 rounded-full animate-radar-sweep"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-1 h-6 bg-green-300 rounded-full opacity-60"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90 w-1 h-6 bg-green-300 rounded-full opacity-40"></div>
                  </div>
                </div>
                <h3 className="jazz-font text-xl text-green-400 mb-3">
                  Radar Scanning
                </h3>
                <p className="vintage-text text-cream-200 mb-4">
                  Our dance radar is detecting new events across all swing styles. Check back soon for exciting discoveries!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Enhanced Teachers Section */}
        <div className="space-y-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-copper-600 to-transparent flex-1"></div>
              <div className="mx-4 w-3 h-3 bg-copper-600 rounded-full animate-vintage-bounce"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-copper-600 to-transparent flex-1"></div>
            </div>
            <h3 className="font-jazz text-4xl md:text-5xl font-bold text-copper-600 mb-2">
              Master Instructors
            </h3>
            <p className="text-cream-200 text-lg font-medium">Connect with legendary teachers across all swing dance styles</p>

            {/* Multi-Style Teacher Specializations */}
            <div className="flex flex-wrap justify-center gap-2 mt-4 mb-6">
              <div className="text-xs text-cream-300 mr-2">Specializing in:</div>
              <div className="px-3 py-1 rounded-full bg-navy-800/30 border border-amber-400/20 text-amber-400 text-xs">Blues Masters</div>
              <div className="px-3 py-1 rounded-full bg-emerald-800/30 border border-emerald-400/20 text-emerald-400 text-xs">Swing Legends</div>
              <div className="px-3 py-1 rounded-full bg-orange-800/30 border border-amber-400/20 text-amber-400 text-xs">Balboa Experts</div>
              <div className="px-3 py-1 rounded-full bg-teal-800/30 border border-teal-400/20 text-teal-400 text-xs">Shag Specialists</div>
              <div className="px-3 py-1 rounded-full bg-purple-800/30 border border-purple-400/20 text-purple-400 text-xs">Boogie Pros</div>
            </div>

            <div className="mt-6 flex justify-center">
              <Link href="/teachers">
                <button className="btn-outline px-6 py-2 text-sm font-semibold tracking-wide border-copper-600 text-copper-600 hover:bg-copper-600 hover:text-cream-100 transition-all duration-300">
                  👥 Meet All Instructors
                </button>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            {isLoadingTeachers && (
              <div className="space-y-4">
                <VintageSkeleton lines={2} showAvatar={true} />
                <VintageSkeleton lines={2} showAvatar={true} />
              </div>
            )}

            {teachersError && (
              <VintageErrorState
                error={new VintageApiError('NetworkError', 'The instructor studio connection dropped')}
                onRetry={() => {
                  setTeachersError(null)
                  // Refetch teachers
                  const fetchTeachers = async () => {
                    try {
                      setIsLoadingTeachers(true)
                      const response = await fetch('/api/teachers?limit=2')
                      const data = await response.json()

                      if (data.success) {
                        setTeachers(data.data.teachers)
                      } else {
                        setTeachersError('Failed to load instructors')
                      }
                    } catch (error) {
                      setTeachersError('Failed to load instructors')
                      console.error('Error fetching teachers:', error)
                    } finally {
                      setIsLoadingTeachers(false)
                    }
                  }
                  fetchTeachers()
                }}
                retryText="Reconnect to Instructors"
                className="my-6"
              />
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
              <div className="text-center py-12">
                <div className="vintage-dancer-icon w-16 h-16 mx-auto mb-6 relative">
                  <div className="w-8 h-14 bg-gradient-to-b from-copper-600 to-copper-700 rounded-t-full mx-auto relative">
                    <div className="absolute inset-1 bg-gradient-to-b from-copper-400 to-copper-500 rounded-t-full"></div>
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gold-600 rounded-full"></div>
                  </div>
                  <div className="w-6 h-4 bg-copper-700 mx-auto rounded-full mt-1"></div>
                  <div className="absolute bottom-2 left-2 w-3 h-1 bg-copper-600 rounded-full transform rotate-12"></div>
                  <div className="absolute bottom-2 right-2 w-3 h-1 bg-copper-600 rounded-full transform -rotate-12"></div>
                </div>
                <h3 className="jazz-font text-xl text-copper-400 mb-3">
                  Instructors in Session
                </h3>
                <p className="vintage-text text-cream-200 mb-4">
                  Our master instructors are currently teaching across the dance floors. New profiles added regularly!
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Internal Linking Section */}
        <div className="mb-12">
          <InternalLinking
            title="Explore the World of Swing Dance"
            columns={2}
            showDescriptions={true}
          />
        </div>
      </div>
    );
  };

  return (
    <MainContent>
      <div className="app-container">
        <div className="max-w-md mx-auto bg-background min-h-screen relative">
          {/* Main Content */}
          <div className="content-wrapper">
            <ContentClarity>
              {renderContent()}
            </ContentClarity>
          </div>

          {/* Bottom Navigation */}
          <BottomNavigationEnhanced activeTab={activeTab} onTabChange={setActiveTab} />
        </div>
      </div>
    </MainContent>
  )
}