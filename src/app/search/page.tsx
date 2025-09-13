'use client'

import { useState } from 'react'
import { FilterPanel } from '@/components/features/FilterPanel'
import { SearchBar } from '@/components/features/SearchBar'
import { EnhancedSearchBar } from '@/components/features/EnhancedSearchBar'
import { FilterPresets } from '@/components/features/FilterPresets'
import { EnhancedEventCard } from '@/components/features/EnhancedEventCard'
import { useAdvancedSearch } from '@/hooks/useAdvancedSearch'
import {
  ArtDecoLoader,
  VintageErrorState,
  VintageSkeleton,
  VintageEventCardSkeleton
} from '@/components/ui/VintageLoadingStates'
import { VintageApiError } from '@/hooks/useVintageApi'

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
  const [showPresets, setShowPresets] = useState(false)
  
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
    // Use the new query directly to avoid stale state issues
    setTimeout(() => {
      search({ ...filters, query })
    }, 100)
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

  const handleApplyPreset = (preset: any) => {
    updateFilters(preset.filters)
    setShowPresets(false)
    setTimeout(() => {
      search({ ...filters, ...preset.filters })
    }, 100)
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

          {/* Enhanced Search Bar */}
          <div className="mb-6">
            <EnhancedSearchBar
              onSearch={handleSearch}
              onToggleFilters={() => setShowFilters(!showFilters)}
              filtersActive={hasActiveFilters}
              searchSuggestions={searchSuggestions}
              value={filters.query || ''}
              className="max-w-full"
            />
          </div>

          {/* Filter Presets */}
          {!showFilters && (
            <div className="mb-6">
              <button
                onClick={() => setShowPresets(!showPresets)}
                className="flex items-center space-x-2 px-4 py-2 bg-gold-100 hover:bg-gold-200 text-navy-900 rounded-lg border border-gold-400/30 transition-colors vintage-button"
              >
                <span>🎯</span>
                <span className="font-medium">Popular Searches</span>
                {showPresets ? <span>▼</span> : <span>▶</span>}
              </button>

              {showPresets && (
                <div className="mt-4 p-6 bg-cream-50 border-2 border-gold-400/30 rounded-xl">
                  <FilterPresets
                    onApplyPreset={handleApplyPreset}
                    currentFilters={hasActiveFilters ? filters : undefined}
                  />
                </div>
              )}
            </div>
          )}

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
              <VintageErrorState
                error={error}
                onRetry={() => search()}
                retryText="Search Again"
                className="mb-6"
              />
            )}

            {isLoading ? (
              <ArtDecoLoader
                text="Searching festivals worldwide..."
                size="lg"
                className="py-8"
              />
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
                    {/* Enhanced Results Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      {results.events.map((event) => (
                        <EnhancedEventCard
                          key={event.id}
                          event={event}
                          showDistance={!!event.distance}
                          highlightQuery={filters.query}
                          enhanced={true}
                          className="vintage-card"
                        />
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
                    <div className="vintage-microphone-icon w-16 h-16 mx-auto mb-6 relative">
                      <div className="w-12 h-16 bg-gradient-to-b from-gold-600 to-gold-700 rounded-t-full mx-auto relative">
                        <div className="absolute inset-2 bg-gradient-to-b from-gold-400 to-gold-500 rounded-t-full"></div>
                        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-navy-900 rounded-full opacity-20"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-navy-900 rounded-full opacity-20"></div>
                      </div>
                      <div className="w-6 h-4 bg-gold-700 mx-auto rounded-b-sm"></div>
                      <div className="w-8 h-2 bg-navy-800 mx-auto rounded-full mt-1"></div>
                    </div>
                    <h3 className="jazz-font text-xl text-gold-400 mb-3">
                      The Stage is Empty
                    </h3>
                    <p className="vintage-text text-cream-200 mb-4">
                      No festivals match your criteria. Try adjusting your search or explore different terms.
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