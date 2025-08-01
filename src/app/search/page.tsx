'use client'

import { useState } from 'react'
import { FilterPanel } from '@/components/features/FilterPanel'
import { SearchBar } from '@/components/features/SearchBar'
import { useAdvancedSearch } from '@/hooks/useAdvancedSearch'

interface FilterOptions {
  dateRange: {
    start: string
    end: string
  }
  location: {
    city: string
    country: string
    radius: number
  }
  teachers: string[]
  musicians: string[]
  priceRange: {
    min: number
    max: number
  }
}

export default function SearchPage() {
  const [showFilters, setShowFilters] = useState(false)
  
  const {
    filters,
    results,
    suggestions,
    isLoading,
    error,
    search,
    updateFilters,
    clearFilters,
    goToPage,
    hasActiveFilters
  } = useAdvancedSearch()

  const handleSearch = async (query: string) => {
    updateFilters({ query })
  }

  const handleFiltersChange = (newFilters: Partial<FilterOptions>) => {
    // Convert FilterOptions to SearchFilters format
    const searchFilters = {
      dateRange: newFilters.dateRange ? {
        start: newFilters.dateRange.start,
        end: newFilters.dateRange.end
      } : undefined,
      location: newFilters.location ? {
        city: newFilters.location.city,
        country: newFilters.location.country,
        radius: newFilters.location.radius
      } : undefined,
      teachers: newFilters.teachers,
      musicians: newFilters.musicians,
      priceRange: newFilters.priceRange
    }
    
    updateFilters(searchFilters)
  }

  const handleApplyFilters = () => {
    search()
  }

  const handleResetFilters = () => {
    clearFilters()
  }

  // Convert suggestions to simple array for SearchBar
  const searchSuggestions = [
    ...suggestions.events,
    ...suggestions.teachers,
    ...suggestions.musicians,
    ...suggestions.locations
  ]

  return (
    <div className="app-container">
      <div className="max-w-md mx-auto bg-background min-h-screen relative">
        <div className="content-wrapper">
          {/* Header */}
          <div className="hero-section rounded-2xl p-8 mb-6">
            <div className="hero-overlay"></div>
            <div className="relative z-10 text-center">
              <h1 className="font-playfair text-3xl mb-3 text-white leading-tight">
                Find Your Perfect Blues Festival
              </h1>
              <p className="text-white/90 mb-6 leading-relaxed max-w-sm mx-auto">
                Search thousands of blues dance festivals worldwide. Follow your favorite teachers and musicians.
              </p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <SearchBar
              onSearch={handleSearch}
              onToggleFilters={() => setShowFilters(!showFilters)}
              filtersActive={hasActiveFilters}
              searchSuggestions={searchSuggestions}
              className="max-w-full"
            />
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="card p-6 mb-6">
              <FilterPanel
                filters={{
                  dateRange: filters.dateRange,
                  location: filters.location,
                  teachers: filters.teachers || [],
                  musicians: filters.musicians || [],
                  priceRange: filters.priceRange,
                }}
                onFiltersChange={handleFiltersChange}
                onApply={handleApplyFilters}
                onReset={handleResetFilters}
              />
            </div>
          )}

          {/* Active Filters Summary */}
          {hasActiveFilters && (
            <div className="card p-4 mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-gold-600">Active Filters</h3>
                <button
                  onClick={handleResetFilters}
                  className="btn-ghost btn-xs"
                >
                  Clear All
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {filters.query && (
                  <span className="badge-primary">
                    Search: "{filters.query}"
                  </span>
                )}
                {filters.dateRange?.start && (
                  <span className="badge-secondary">
                    From: {filters.dateRange.start}
                  </span>
                )}
                {filters.dateRange?.end && (
                  <span className="badge-secondary">
                    To: {filters.dateRange.end}
                  </span>
                )}
                {filters.location?.city && (
                  <span className="badge-secondary">
                    {filters.location.city}
                  </span>
                )}
                {filters.location?.country && (
                  <span className="badge-secondary">
                    {filters.location.country}
                  </span>
                )}
                {filters.teachers?.map(teacher => (
                  <span key={teacher} className="badge-secondary">
                    Teacher: {teacher}
                  </span>
                ))}
                {filters.musicians?.map(musician => (
                  <span key={musician} className="badge-secondary">
                    Musician: {musician}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          <div className="card p-6">
            {error && (
              <div className="mb-4 p-4 bg-red-900/20 border border-red-500/30 rounded-lg">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}
            
            {isLoading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="spinner mb-4"></div>
                <p className="text-white/80 text-lg mb-2">Searching festivals worldwide...</p>
                <p className="text-white/60 text-sm">Looking through 127+ festivals in 40+ countries</p>
              </div>
            ) : results ? (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gold-600">
                    Search Results
                    {filters.query && (
                      <span className="text-white/60 font-normal ml-2">
                        for "{filters.query}"
                      </span>
                    )}
                  </h2>
                  <span className="text-sm text-white/60">
                    Found {results.pagination.total} festivals
                  </span>
                </div>
                
                {results.events.length > 0 ? (
                  <>
                    {/* Results */}
                    <div className="space-y-4">
                      {results.events.map((event) => (
                        <div key={event.id} className="border border-gold-600/20 rounded-lg p-4 bg-card/50">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-gold-600">
                              {event.name}
                            </h3>
                            {event.featured && (
                              <span className="badge-gold">
                                Featured
                              </span>
                            )}
                          </div>
                          
                          {event.shortDesc && (
                            <p className="text-white/80 text-sm mb-2">
                              {event.shortDesc}
                            </p>
                          )}
                          
                          <div className="flex flex-wrap gap-2 text-xs text-white/60 mb-2">
                            <span>📅 {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}</span>
                            <span>📍 {event.venue?.city || event.city}, {event.venue?.country || event.country}</span>
                            {event.distance && (
                              <span>📏 {event.distance.toFixed(1)} km away</span>
                            )}
                            {event.prices?.length > 0 && (
                              <span>💰 From ${event.prices[0].amount}</span>
                            )}
                          </div>
                          
                          {event.teachers?.length > 0 && (
                            <div className="text-xs text-white/60 mb-1">
                              👥 Teachers: {event.teachers.map(t => t.name).join(', ')}
                            </div>
                          )}
                          
                          {event.musicians?.length > 0 && (
                            <div className="text-xs text-white/60 mb-1">
                              🎵 Musicians: {event.musicians.map(m => m.name).join(', ')}
                            </div>
                          )}
                          
                          {event.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-1 mt-2">
                              {event.tags.slice(0, 4).map((tag) => (
                                <span key={tag} className="badge-secondary">
                                  {tag}
                                </span>
                              ))}
                              {event.tags.length > 4 && (
                                <span className="text-xs text-white/60">+{event.tags.length - 4} more</span>
                              )}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gold-600/20">
                      <span className="text-sm text-white/60">
                        Showing {((results.pagination.page - 1) * results.pagination.limit) + 1}-{Math.min(results.pagination.page * results.pagination.limit, results.pagination.total)} of {results.pagination.total} results
                      </span>
                      <div className="flex space-x-2">
                        <button 
                          disabled={!results.pagination.hasPrev}
                          onClick={() => goToPage(results.pagination.page - 1)}
                          className="btn-secondary btn-sm"
                        >
                          Previous
                        </button>
                        <button 
                          disabled={!results.pagination.hasNext}
                          onClick={() => goToPage(results.pagination.page + 1)}
                          className="btn-secondary btn-sm"
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-gold-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="text-lg font-medium text-gold-600 mb-2">
                      No festivals found
                    </h3>
                    <p className="text-white/80 mb-4">
                      Try adjusting your search criteria or filters.
                    </p>
                  </div>
                )}
              </div>
            ) : hasActiveFilters ? (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gold-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gold-600 mb-2">
                  Ready to Search
                </h3>
                <p className="text-white/80 mb-4">
                  Click "Apply Filters" to search with your current settings.
                </p>
                <button onClick={search} className="btn-primary">
                  Search Now
                </button>
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gold-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gold-600 mb-2">
                  Start Your Search
                </h3>
                <p className="text-white/80 mb-4">
                  Search for festivals, teachers, musicians, or locations to get started.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Damon Stone', 'London', 'This Weekend', 'Beginner Friendly'].map((suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => handleSearch(suggestion)}
                      className="btn-secondary btn-sm"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}