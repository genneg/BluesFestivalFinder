'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FestivalCardEnhanced } from '@/components/features/FestivalCardEnhanced'
import { ArtistCardEnhanced } from '@/components/features/ArtistCardEnhanced'
import { BottomNavigationEnhanced } from '@/components/layout/BottomNavigationEnhanced'
import { SearchBarSimple } from '@/components/features/SearchBarSimple'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
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
  pricing?: Array<{
    price: number | null
    currency: string | null
    type: string | null
  }>
  venue?: {
    name: string | null
    address: string | null
  } | null
  style: string | null
}

interface Artist {
  id: string
  name: string
  bio?: string | null
  specialties?: string[]
  genres?: string[]
  imageUrl?: string | null
}

export default function Home() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("home")
  const [selectedCategory, setSelectedCategory] = useState("festivals")
  const [festivals, setFestivals] = useState<Festival[]>([])
  const [artists, setArtists] = useState<Artist[]>([])
  const [isLoadingFestivals, setIsLoadingFestivals] = useState(true)
  const [isLoadingArtists, setIsLoadingArtists] = useState(true)
  const [festivalsError, setFestivalsError] = useState<string | null>(null)
  const [artistsError, setArtistsError] = useState<string | null>(null)

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

  // Fetch artists from API
  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setIsLoadingArtists(true)
        const response = await fetch('/api/teachers?limit=2')
        const data = await response.json()
        
        if (data.success) {
          setArtists(data.data.teachers)
        } else {
          setArtistsError('Failed to load artists')
        }
      } catch (error) {
        setArtistsError('Failed to load artists')
        console.error('Error fetching artists:', error)
      } finally {
        setIsLoadingArtists(false)
      }
    }

    fetchArtists()
  }, [])

  // Transform festival data for FestivalCardEnhanced component
  const transformFestivalForCard = (festival: Festival) => {
    const startDate = new Date(festival.startDate)
    const endDate = new Date(festival.endDate)
    const dateRange = `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}-${endDate.getDate()}`
    
    const price = festival.pricing?.[0]?.price 
      ? `${festival.pricing[0].currency || '$'}${festival.pricing[0].price}`
      : 'TBA'
    
    return {
      id: festival.id,
      title: festival.name,
      location: `${festival.city}, ${festival.country}`,
      date: dateRange,
      price,
      genre: festival.style || 'Blues',
      featured: true,
      attendees: 0,
      rating: 4.8,
      imageUrl: festival.imageUrl || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      artists: []
    }
  }

  // Transform artist data for ArtistCardEnhanced component
  const transformArtistForCard = (artist: Artist) => {
    return {
      id: artist.id,
      name: artist.name,
      instrument: artist.specialties?.[0] || 'Teacher',
      location: 'Various',
      nextShow: 'TBA',
      followers: 0,
      imageUrl: artist.imageUrl || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
      genres: artist.specialties || ['Blues'],
      isFollowing: false
    }
  }

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
            <p className="text-sm font-medium text-black">Festivals</p>
          </div>
          <div className="stats-card">
            <TrendingUp className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">1.2k</p>
            <p className="text-sm font-medium text-black">Artists</p>
          </div>
          <div className="stats-card">
            <Sparkles className="w-5 h-5 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-primary">89k</p>
            <p className="text-sm font-medium text-black">Music Lovers</p>
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
              <FestivalCardEnhanced key={festival.id} {...transformFestivalForCard(festival)} />
            ))}
            
            {!isLoadingFestivals && !festivalsError && festivals.length === 0 && (
              <div className="card p-8 text-center">
                <p className="text-white/80">No festivals found</p>
              </div>
            )}
          </div>
        </div>

        {/* Artists Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-white">Trending Artists</h3>
            <Link href="/musicians">
              <Button variant="ghost" size="sm" className="text-primary">
                View All
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {isLoadingArtists && (
              <div className="card p-8 text-center">
                <div className="spinner mx-auto mb-4"></div>
                <p className="text-white/80">Finding legendary blues teachers and musicians...</p>
                <p className="text-white/60 text-sm mt-2">Curating profiles from the global blues community</p>
              </div>
            )}
            
            {artistsError && (
              <div className="card p-6 border-red-600/30 bg-red-900/20">
                <div className="flex items-center mb-3">
                  <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <h4 className="text-red-300 font-medium">Unable to load artists</h4>
                </div>
                <p className="text-red-200 text-sm mb-3">We're having trouble connecting to our artist database.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="btn-secondary btn-sm"
                >
                  Try Again
                </button>
              </div>
            )}
            
            {!isLoadingArtists && !artistsError && artists.map((artist) => (
              <ArtistCardEnhanced key={artist.id} {...transformArtistForCard(artist)} />
            ))}
            
            {!isLoadingArtists && !artistsError && artists.length === 0 && (
              <div className="card p-8 text-center">
                <p className="text-white/80">No artists found</p>
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