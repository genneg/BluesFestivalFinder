'use client'

interface EventSchemaProps {
  name: string
  description?: string
  startDate: string
  endDate?: string
  location: {
    name?: string
    city: string
    country: string
    address?: string
  }
  imageUrl?: string
  url?: string
  organizer?: {
    name: string
    url?: string
  }
  offers?: Array<{
    price: number
    currency: string
    availability: string
  }>
  performers?: Array<{
    name: string
    type: string
  }>
}

export function EventSchema({ event }: { event: EventSchemaProps }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate || event.startDate,
    "location": {
      "@type": "Place",
      "name": event.location.name || `${event.location.city}, ${event.location.country}`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": event.location.city,
        "addressCountry": event.location.country,
        "streetAddress": event.location.address
      }
    },
    "image": event.imageUrl,
    "url": event.url,
    "organizer": event.organizer ? {
      "@type": "Organization",
      "name": event.organizer.name,
      "url": event.organizer.url
    } : undefined,
    "offers": event.offers?.map(offer => ({
      "@type": "Offer",
      "price": offer.price,
      "priceCurrency": offer.currency,
      "availability": `https://schema.org/${offer.availability}`
    })),
    "performer": event.performers?.map(performer => ({
      "@type": performer.type,
      "name": performer.name
    })),
    "attendeeMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

interface PersonSchemaProps {
  name: string
  description?: string
  imageUrl?: string
  url?: string
  jobTitle?: string
  worksFor?: string
  sameAs?: string[]
  specialties?: string[]
}

export function PersonSchema({ person }: { person?: PersonSchemaProps } = {}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": person?.name,
    "description": person?.description,
    "image": person?.imageUrl,
    "url": person?.url,
    "jobTitle": person?.jobTitle || "Blues Dance Teacher",
    "worksFor": person?.worksFor ? {
      "@type": "Organization",
      "name": person.worksFor
    } : undefined,
    "sameAs": person?.sameAs,
    "knowsAbout": person?.specialties || ["blues dance", "dance instruction"]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

interface OrganizationSchemaProps {
  name: string
  description?: string
  url?: string
  logo?: string
  contactPoint?: {
    telephone?: string
    contactType?: string
    email?: string
  }
  address?: {
    streetAddress?: string
    addressLocality?: string
    addressRegion?: string
    postalCode?: string
    addressCountry?: string
  }
  sameAs?: string[]
}

export function OrganizationSchema({ org }: { org?: OrganizationSchemaProps } = {}) {
  const defaultOrg = {
    name: "Blues Festival Finder",
    description: "Comprehensive platform for discovering blues dance festivals and events worldwide",
    url: "https://blues-festival-finder.vercel.app",
    logo: "https://blues-festival-finder.vercel.app/logo.png",
    sameAs: [
      "https://facebook.com/bluesfestivalfinder",
      "https://instagram.com/bluesfestivalfinder"
    ]
  }

  const organizationData = org || defaultOrg

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": organizationData.name,
    "description": organizationData.description,
    "url": organizationData.url,
    "logo": organizationData.logo,
    "contactPoint": organizationData.contactPoint ? {
      "@type": "ContactPoint",
      "telephone": organizationData.contactPoint.telephone,
      "contactType": organizationData.contactPoint.contactType || "customer service",
      "email": organizationData.contactPoint.email
    } : undefined,
    "address": organizationData.address ? {
      "@type": "PostalAddress",
      "streetAddress": organizationData.address.streetAddress,
      "addressLocality": organizationData.address.addressLocality,
      "addressRegion": organizationData.address.addressRegion,
      "postalCode": organizationData.address.postalCode,
      "addressCountry": organizationData.address.addressCountry
    } : undefined,
    "sameAs": organizationData.sameAs
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

interface WebsiteSchemaProps {
  name: string
  description?: string
  url?: string
  searchAction?: string
  potentialAction?: Array<{
    "@type": string
    target: string
    "query-input": string
  }>
}

export function WebsiteSchema({ site }: { site?: WebsiteSchemaProps } = {}) {
  const defaultSite = {
    name: "Blues Festival Finder",
    description: "Discover blues dance festivals and events worldwide",
    url: "https://blues-festival-finder.vercel.app"
  }

  const siteData = site || defaultSite

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteData.name,
    "description": siteData.description,
    "url": siteData.url,
    "potentialAction": siteData.potentialAction || [
      {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${siteData.url}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbSchemaProps['items'] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQSchema({ faqs }: { faqs: FAQSchemaProps['faqs'] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 2) }}
    />
  )
}