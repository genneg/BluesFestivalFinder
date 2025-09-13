import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Blues Festival Finder',
  description: 'Get in touch with our team. Ask questions, report issues, or share feedback about blues dance festivals and our platform.',
  keywords: [
    'contact blues festival finder',
    'blues dance support',
    'festival inquiry',
    'dance event help',
    'blues music contact',
    'festival feedback',
    'customer service'
  ],
  openGraph: {
    title: 'Contact Blues Festival Finder',
    description: 'Get in touch with our team. Ask questions, report issues, or share feedback about blues dance festivals and our platform.',
    type: 'website',
  },
  twitter: {
    title: 'Contact Blues Festival Finder',
    description: 'Get in touch with our team. Ask questions, report issues, or share feedback about blues dance festivals and our platform.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}