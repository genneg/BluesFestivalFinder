'use client'

import { useState, useEffect } from 'react'
import { SearchBarSimple } from '@/components/features/SearchBarSimple'
import { FilterPanel } from '@/components/features/FilterPanel'
import { EventList } from '@/components/features/EventList'
import { useAdvancedSearch } from '@/hooks/useAdvancedSearch'

export default function EventsPage() {
  const { 
    filters, 
    results, 
    isLoading, 
    error, 
    updateFilters, 
    search 
  } = useAdvancedSearch()

  const [showFilters, setShowFilters] = useState(false)

  // Perform initial search when component mounts
  useEffect(() => {
    search()
  }, [])

  const handleFiltersChange = (newFilters: any) => {
    updateFilters(newFilters)
  }

  return (
    <div className="app-container">
      <div className="max-w-md mx-auto bg-background min-h-screen relative">
        {/* Header Section */}
        <div className="content-wrapper">
          <div className="hero-section rounded-2xl p-12 mb-12">
            <div className="hero-overlay"></div>
            <div className="relative z-10 text-center">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 text-white leading-tight font-bold">
                Blues Dance Festivals
              </h1>
              <p className="text-white text-lg mb-8 leading-relaxed max-w-md mx-auto font-medium">
                Discover amazing blues dance festivals happening around the world
              </p>
              
              <SearchBarSimple
                onSearch={(query) => updateFilters({ query })}
                onToggleFilters={() => setShowFilters(!showFilters)}
                filtersActive={showFilters}
                className="max-w-full"
              />
            </div>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="card p-6 mb-12">
              <FilterPanel
                filters={filters}
                onFiltersChange={handleFiltersChange}
                onApply={() => search()}
                onReset={() => {
                  updateFilters({})
                  search()
                }}
              />
            </div>
          )}

          {/* Events List */}
          <div className="space-y-6">
            {error && (
              <div className="card p-4 border-error-600/30 bg-error-900/20">
                <p className="text-error-300 text-sm">{error}</p>
              </div>
            )}

            {isLoading && !results && (
              <div className="card p-8 text-center">
                <div className="spinner mx-auto mb-4"></div>
                <p className="text-white/80">Loading events...</p>
              </div>
            )}

            {results && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-white text-base font-medium">
                    {results.searchMeta.totalMatches} events found
                  </p>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="btn-ghost btn-sm flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                    </svg>
                    <span>Filters</span>
                  </button>
                </div>

                <EventList events={results.events} />

                {results.pagination.hasNext && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => {
                        // Load more events
                        // This would typically call search with next page
                      }}
                      className="btn-primary"
                    >
                      Load More Events
                    </button>
                  </div>
                )}
              </div>
            )}

            {!isLoading && results && results.events.length === 0 && (
              <div className="card p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gold-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <h3 className="text-xl font-semibold text-primary mb-3">No events found</h3>
                <p className="text-white text-base font-medium">
                  Try adjusting your search criteria or removing some filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}