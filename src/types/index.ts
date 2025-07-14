// Core types for Blues Dance Festival Finder

export interface User {
  id: string
  email: string
  name: string
  image?: string
  createdAt: Date
  updatedAt: Date
}

export interface Festival {
  id: string
  name: string
  description?: string
  startDate: Date
  endDate: Date
  registrationDeadline?: Date
  website?: string
  venue: Venue
  teachers: Teacher[]
  musicians: Musician[]
  prices?: Price[]
  createdAt: Date
  updatedAt: Date
}

export interface Venue {
  id: string
  name: string
  address: string
  city: string
  country: string
  latitude?: number
  longitude?: number
}

export interface Teacher {
  id: string
  name: string
  bio?: string
  specialties: string[]
  website?: string
  socialLinks?: SocialLinks
  followers: User[]
  festivals: Festival[]
}

export interface Musician {
  id: string
  name: string
  bio?: string
  genre: string[]
  website?: string
  socialLinks?: SocialLinks
  followers: User[]
  festivals: Festival[]
}

export interface Price {
  id: string
  category: string
  amount: number
  currency: string
  description?: string
}

export interface SocialLinks {
  facebook?: string
  instagram?: string
  youtube?: string
  spotify?: string
}

export interface Following {
  id: string
  userId: string
  targetId: string
  targetType: 'teacher' | 'musician' | 'festival'
  createdAt: Date
}

export interface SearchFilters {
  query?: string
  dateRange?: {
    start: Date
    end: Date
  }
  location?: {
    city?: string
    country?: string
    radius?: number
    coordinates?: {
      lat: number
      lng: number
    }
  }
  teachers?: string[]
  musicians?: string[]
  priceRange?: {
    min: number
    max: number
  }
}

export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  error?: string
}