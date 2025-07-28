import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export default function AboutPage() {
  return (
    <div className="app-container">
      <div className="max-w-md mx-auto bg-background min-h-screen relative">
        <div className="content-wrapper">
          {/* Hero Section */}
          <div className="hero-section rounded-2xl p-8 mb-6">
            <div className="hero-overlay"></div>
            <div className="relative z-10 text-center">
              <h1 className="font-playfair text-3xl mb-3 text-white leading-tight">
                About Blues Dance Festival Finder
              </h1>
              <p className="text-white/90 mb-6 leading-relaxed max-w-sm mx-auto">
                Your centralized platform for discovering blues dance festivals worldwide and staying connected with the global blues community.
              </p>
            </div>
          </div>

          {/* Mission Section */}
          <div className="card p-6 mb-6">
            <h2 className="font-playfair text-xl text-gold-600 mb-4">Our Mission</h2>
            <div className="space-y-4">
              <p className="text-white/90 leading-relaxed">
                Blues Dance Festival Finder was born from the passion of blues dancers who found themselves constantly searching across multiple websites, social media platforms, and forums just to find information about upcoming festivals. We believe that discovering your next dance adventure shouldn't be a treasure hunt.
              </p>
              <p className="text-white/90 leading-relaxed">
                Our mission is to create the most comprehensive, up-to-date, and user-friendly platform for blues dance festival discovery, making it easier than ever for dancers to connect with events, teachers, and musicians they love.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-4 mb-6">
            <div className="card p-6">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-gold-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="font-playfair text-lg text-gold-600">Comprehensive Search</h3>
              </div>
              <p className="text-white/80">
                Find festivals by location, dates, teachers, musicians, and more with our advanced search and filtering system.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-gold-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <h3 className="font-playfair text-lg text-gold-600">Follow Your Favorites</h3>
              </div>
              <p className="text-white/80">
                Follow teachers and musicians to get notified when they announce new workshops and performances.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-gold-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <h3 className="font-playfair text-lg text-gold-600">Always Up-to-Date</h3>
              </div>
              <p className="text-white/80">
                Our automated data collection ensures you always have the latest festival information and announcements.
              </p>
            </div>

            <div className="card p-6">
              <div className="flex items-center mb-3">
                <svg className="w-6 h-6 text-gold-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <h3 className="font-playfair text-lg text-gold-600">Mobile-First Design</h3>
              </div>
              <p className="text-white/80">
                Perfect experience on all devices, because we know you're often searching for festivals on the go.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="card p-6 mb-6">
            <h2 className="font-playfair text-xl text-gold-600 mb-4">Our Story</h2>
            <div className="space-y-4">
              <p className="text-white/90 leading-relaxed">
                Founded in 2025, Blues Dance Festival Finder emerged from the frustration of dancers spending hours trying to piece together information about festivals from scattered sources. As passionate blues dancers ourselves, we understood the pain of missing out on amazing events simply because the information wasn't easily accessible.
              </p>
              <p className="text-white/90 leading-relaxed">
                We started by manually collecting festival information and quickly realized that this problem affected thousands of dancers worldwide. What began as a simple list soon evolved into a comprehensive platform that now serves the global blues dance community.
              </p>
              <p className="text-white/90 leading-relaxed">
                Today, we're proud to be the go-to resource for blues dancers seeking their next adventure, whether it's a weekend workshop in their hometown or an international festival in a dream destination.
              </p>
            </div>
          </div>

          {/* Community Section */}
          <div className="card p-6 mb-6">
            <h2 className="font-playfair text-xl text-gold-600 mb-4">Join Our Community</h2>
            <p className="text-white/90 leading-relaxed mb-6">
              Blues Dance Festival Finder is more than just a search platform—it's a community of passionate dancers helping each other discover amazing experiences. Join thousands of blues dancers who rely on us to stay connected with the global blues scene.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="stats-card">
                <div className="text-2xl font-bold text-gold-600">500+</div>
                <div className="text-white/60 text-xs">Festivals Listed</div>
              </div>
              <div className="stats-card">
                <div className="text-2xl font-bold text-gold-600">1000+</div>
                <div className="text-white/60 text-xs">Active Users</div>
              </div>
              <div className="stats-card">
                <div className="text-2xl font-bold text-gold-600">50+</div>
                <div className="text-white/60 text-xs">Countries</div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="card p-6 mb-6">
            <h2 className="font-playfair text-xl text-gold-600 mb-4">Our Values</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gold-600 mb-2">Community First</h3>
                <p className="text-white/80">We prioritize the needs of the blues dance community in every decision we make.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gold-600 mb-2">Accuracy & Reliability</h3>
                <p className="text-white/80">We're committed to providing accurate, up-to-date information you can trust.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gold-600 mb-2">Accessibility</h3>
                <p className="text-white/80">Information about blues dance should be accessible to everyone, everywhere.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gold-600 mb-2">Continuous Improvement</h3>
                <p className="text-white/80">We constantly evolve based on community feedback and changing needs.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="card p-6 text-center">
            <h2 className="font-playfair text-xl text-gold-600 mb-4">
              Ready to discover your next dance adventure?
            </h2>
            <p className="text-white/80 mb-6">
              Join thousands of blues dancers who use Festival Finder to stay connected with the global blues community.
            </p>
            <div className="space-y-3">
              <Link href="/auth/signup">
                <button className="btn-primary w-full">
                  Sign Up Free
                </button>
              </Link>
              <Link href="/search">
                <button className="btn-secondary w-full">
                  Explore Festivals
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}