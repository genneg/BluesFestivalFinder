export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blues-900 via-blues-800 to-primary-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Blues Dance Festival Finder
          </h1>
          <p className="text-xl md:text-2xl text-blues-100 mb-8 max-w-3xl mx-auto">
            Discover blues dance festivals worldwide and follow your favorite teachers and musicians.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Explore Festivals
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blues-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </div>
        
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-3">Follow Teachers</h3>
            <p className="text-blues-100">
              Stay updated when your favorite teachers announce new workshops and festivals.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-3">Discover Events</h3>
            <p className="text-blues-100">
              Find blues dance festivals happening around the world with advanced search and filtering.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg p-6 text-white">
            <h3 className="text-xl font-semibold mb-3">Plan Your Journey</h3>
            <p className="text-blues-100">
              Get personalized recommendations and never miss registration deadlines.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}