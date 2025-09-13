import type { Metadata } from 'next'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogUrl?: string
  canonicalUrl?: string
  noIndex?: boolean
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}

export function generateMetadata(props: SEOProps): Metadata {
  const {
    title = 'Blues Festival Finder',
    description = 'Discover blues dance festivals worldwide and follow your favorite teachers and musicians.',
    keywords = ['blues dance', 'festivals', 'dance events', 'blues music', 'dance workshops'],
    ogImage = 'https://blues-festival-finder.vercel.app/og-default.jpg',
    ogUrl,
    canonicalUrl,
    noIndex = false,
    type = 'website',
    publishedTime,
    modifiedTime,
    authors,
    section,
    tags
  } = props

  const siteUrl = 'https://blues-festival-finder.vercel.app'
  const fullUrl = canonicalUrl || ogUrl || siteUrl
  const fullOgUrl = ogUrl ? `${siteUrl}${ogUrl}` : siteUrl

  const metadata: Metadata = {
    title: {
      default: title,
      template: '%s | Blues Festival Finder'
    },
    description,
    keywords: keywords.join(', '),
    authors: authors ? [{ name: authors[0] }] : undefined,
    creator: 'Blues Festival Finder',
    publisher: 'Blues Festival Finder',
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      title,
      description,
      url: fullOgUrl,
      siteName: 'Blues Festival Finder',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@BluesFestival',
      site: '@BluesFestival',
    },
    alternates: {
      canonical: fullUrl,
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_SITE_VERIFICATION,
      yahoo: process.env.YAHOO_SITE_VERIFICATION,
    },
  }

  // Article specific metadata
  if (type === 'article' && publishedTime) {
    metadata.openGraph = {
      ...metadata.openGraph,
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      authors: authors?.map(author => ({ name: author })),
      section,
      tags,
    }
  }

  return metadata
}

// Default metadata exports for common page types
export const defaultMetadata = generateMetadata({})

export function generateEventMetadata(event: {
  name: string
  description?: string
  city: string
  country: string
  startDate: string
  imageUrl?: string
}): Metadata {
  const title = `${event.name} - Blues Dance Festival`
  const description = event.description ||
    `Join ${event.name} in ${event.city}, ${event.country}. Experience the best blues dance festival with workshops, social dancing, and live music.`

  return generateMetadata({
    title,
    description,
    keywords: [
      event.name,
      'blues festival',
      'blues dance',
      event.city,
      event.country,
      'dance workshop',
      'social dancing',
      'live music',
      'blues music'
    ],
    ogImage: event.imageUrl || 'https://blues-festival-finder.vercel.app/og-event.jpg',
    type: 'article',
    publishedTime: event.startDate,
    tags: ['blues festival', 'dance event', 'workshop']
  })
}

export function generateTeacherMetadata(teacher: {
  name: string
  bio?: string
  specialties?: string[]
  imageUrl?: string
}): Metadata {
  const title = `${teacher.name} - Blues Dance Teacher`
  const description = teacher.bio ||
    `Learn blues dance from ${teacher.name}.${teacher.specialties ? ` Specializing in ${teacher.specialties.join(', ')}.` : ''}`

  return generateMetadata({
    title,
    description,
    keywords: [
      teacher.name,
      'blues dance teacher',
      'dance instructor',
      'blues dance lessons',
      ...(teacher.specialties || [])
    ],
    ogImage: teacher.imageUrl || 'https://blues-festival-finder.vercel.app/og-teacher.jpg',
    type: 'profile',
    authors: [teacher.name]
  })
}