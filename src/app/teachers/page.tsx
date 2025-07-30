'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { SearchBar } from '@/components/features/SearchBar'
import { BottomNavigationEnhanced } from '@/components/layout/BottomNavigationEnhanced'

interface Teacher {
  id: string
  name: string
  bio: string | null
  website: string | null
  imageUrl: string | null
  aiRelevanceScore: number | null
  specialties: string[]
  upcomingEvents: number
  totalEvents: number
}

interface TeachersResponse {
  teachers: Teacher[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("teachers")
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)

  useEffect(() => {
    fetchTeachers()
  }, [currentPage, searchQuery])

  const fetchTeachers = async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      const params = new URLSearchParams({
        page: currentPage.toString(),
        limit: '12'
      })
      
      if (searchQuery) {
        params.append('search', searchQuery)
      }
      
      const response = await fetch(`/api/teachers?${params}`)
      
      if (!response.ok) {
        throw new Error('Failed to load teachers')
      }
      
      const data: { data: TeachersResponse } = await response.json()
      setTeachers(data.data.teachers)
      setTotalPages(data.data.pagination.totalPages)
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      console.error('Error fetching teachers:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    setCurrentPage(1) // Reset to first page when searching
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-600 text-lg mb-4">⚠️ {error}</div>
          <button 
            onClick={() => fetchTeachers()} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🎵</span>
              <span className="text-xl font-bold text-gray-900">Blues Festival Finder</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Blues Dance Teachers
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing blues dance teachers from around the world
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <SearchBar 
            onSearch={handleSearch}
            placeholder="Search teachers by name or bio..."
            className="max-w-md mx-auto"
          />
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="flex justify-center items-center py-12">
            <LoadingSpinner />
          </div>
        )}

        {/* Teachers Grid */}
        {!isLoading && teachers.length > 0 && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {teachers.map((teacher) => (
                <Link 
                  key={teacher.id} 
                  href={`/teachers/${teacher.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                    {/* Teacher Image */}
                    {teacher.imageUrl ? (
                      <div className="aspect-w-3 aspect-h-4">
                        <img
                          src={teacher.imageUrl}
                          alt={teacher.name}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                        <span className="text-4xl">👨‍🏫</span>
                      </div>
                    )}
                    
                    {/* Teacher Info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {teacher.name}
                      </h3>
                      
                      {teacher.bio && (
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                          {teacher.bio.substring(0, 120)}...
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{teacher.totalEvents} events</span>
                        {teacher.specialties.length > 0 && (
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                            {teacher.specialties[0]}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Previous
                </button>
                
                <span className="px-4 py-2 text-gray-700">
                  Page {currentPage} of {totalPages}
                </span>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}

        {/* No Results */}
        {!isLoading && teachers.length === 0 && (
          <div className="text-center py-12">
            <span className="text-6xl mb-4 block">🎭</span>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No teachers found
            </h3>
            <p className="text-gray-600">
              {searchQuery ? 'Try adjusting your search terms' : 'Teachers will appear here soon'}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigationEnhanced activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}