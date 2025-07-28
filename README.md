# Blues Dance Festival Finder

A comprehensive web application for discovering blues dance festivals worldwide, with advanced features for following teachers and musicians.

## 🎯 Project Overview

Blues Dance Festival Finder centralizes information about blues dance festivals globally, allowing users to:

- **Discover Events**: Search and filter festivals by date, location, teachers, and more
- **Follow Artists**: Track your favorite teachers and musicians across festivals
- **Get Notified**: Receive personalized notifications about new events and registration deadlines
- **Plan Your Journey**: Organize your festival calendar and never miss opportunities

## 🛠 Technology Stack

- **Frontend**: Next.js 14+ with TypeScript and Tailwind CSS
- **Backend**: Node.js with Next.js API routes
- **Database**: PostgreSQL with Prisma ORM
- **Scraping**: Python scripts with BeautifulSoup/Scrapy + Selenium
- **Cache**: Redis for performance optimization
- **Deployment**: Vercel (recommended) or AWS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Python 3.11+
- Docker and Docker Compose (for local database)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd FestivalScout
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database configuration
   # The project uses an external PostgreSQL database: swing_events
   ```

4. **Configure database connection**
   ```bash
   # Update .env.local with external database:
   DATABASE_URL="postgresql://scraper:scraper_password@localhost:5432/swing_events"
   ```

5. **Start the database** (requires Docker)
   ```bash
   docker-compose up -d postgres redis
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### 🐳 Docker Development (Alternative)

If you prefer using Docker for development:

1. **Install Docker Desktop**

2. **Start the complete environment**
   ```bash
   npm run docker:dev
   ```

3. **Access the application**
   Navigate to [http://localhost:3000](http://localhost:3000)

For detailed Docker instructions, see [DOCKER.md](./DOCKER.md)

## 📁 Project Structure

```
FestivalScout/
├── src/
│   ├── app/                 # Next.js App Router pages and API routes
│   │   ├── api/             # REST API endpoints (25+)
│   │   ├── auth/            # Authentication pages
│   │   ├── events/          # Event pages and details
│   │   ├── teachers/        # Teacher profile pages
│   │   ├── musicians/       # Musician profile pages
│   │   ├── dashboard/       # User dashboard
│   │   └── profile/         # User profile management
│   ├── components/          # React components (40+)
│   │   ├── auth/            # Authentication components
│   │   ├── dashboard/       # Dashboard widgets
│   │   ├── features/        # Core feature components
│   │   ├── layout/          # Layout components
│   │   ├── profile/         # Profile management
│   │   └── ui/              # Reusable UI components
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions and services
│   ├── stores/              # State management (Zustand)
│   ├── styles/              # Global styles and themes
│   └── types/               # TypeScript type definitions
├── docs/                    # Technical documentation
├── e2e/                     # End-to-end tests (Playwright)
├── scripts/                 # Database and utility scripts
├── public/                  # Static assets
└── __tests__/               # Unit and integration tests
```

## 🧞 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## 🐳 Docker Development

Start the full development environment:

```bash
# Start databases
docker-compose up -d

# In separate terminal, start the app
npm run dev
```

Services available:
- **PostgreSQL**: `localhost:5432`
- **Redis**: `localhost:6379`

## 📋 Development Status

**Current Version**: 1.0.0-beta  
**Development Stage**: Near Production Ready (85% Complete)  
**Last Updated**: July 25, 2025

### ✅ Completed Features

#### 🏗️ Infrastructure & Backend (100%)
- [x] Complete development environment with Docker
- [x] Next.js 14+ with TypeScript and Tailwind CSS
- [x] PostgreSQL database with Prisma ORM
- [x] External database integration (swing_events)
- [x] 22+ comprehensive database models
- [x] Redis caching and session storage
- [x] Testing framework (Jest, Playwright, React Testing Library)

#### 🔐 Authentication System (100%)
- [x] NextAuth.js integration with multiple providers
- [x] Google & Facebook OAuth configuration
- [x] Email/password authentication with bcrypt
- [x] Session management and protected routes
- [x] User profile system with preferences

#### 🎨 Frontend UI/UX (95%)
- [x] 40+ React components with TypeScript
- [x] Blues-inspired design system and theme
- [x] Responsive mobile-first layout
- [x] Core pages: Homepage, Events, Teachers, Musicians, Dashboard
- [x] Advanced search and filtering system
- [x] Following management UI
- [x] User authentication pages

#### 🚀 Backend API (95%)
- [x] 25+ REST endpoints fully implemented
- [x] Events API with pagination and filtering
- [x] Teachers & Musicians API with profiles
- [x] Following system (follow/unfollow, status)
- [x] User management and dashboard data
- [x] Search API with multiple entity types
- [x] Comprehensive error handling and validation

#### 🗄️ Database & Data (100%)
- [x] Production database with real festival data
- [x] 3 events, 3 teachers, 2 musicians, 3 venues
- [x] Geographic data support with PostGIS
- [x] Following relationships and notification system
- [x] Performance optimized with indexes

### 🚧 In Progress

#### 🗺️ Maps Integration (Planned)
- [ ] Google Maps API setup
- [ ] Venue location display on event pages
- [ ] Interactive map for geographic search

#### 📧 Email Notifications (Planned)
- [ ] SendGrid integration
- [ ] Email templates for user notifications
- [ ] Following-based notification triggers

#### 📱 PWA Features (Planned)
- [ ] Service worker and offline capabilities
- [ ] Push notifications
- [ ] App installation prompts

### 🎯 Quick Start

The application is fully functional with all core features working. You can:
- Browse events and search with advanced filters
- Create accounts via Google/Facebook/Email
- Follow teachers and musicians
- Use the personalized dashboard
- View detailed profiles and event information

### 🔧 Known Issues
- Minor TypeScript compilation warnings (non-blocking)
- Some advanced search filters need fine-tuning
- Email notifications require SendGrid setup

## 🎨 Design System

The application uses a blues-inspired color palette:

- **Primary**: Blue tones (#3b82f6 to #1e3a8a)
- **Blues**: Custom blues palette (#102a43 to #f0f4f8)
- **Typography**: Inter font family
- **Responsive**: Mobile-first approach

## 🤝 Contributing

1. Follow the existing code style (ESLint + Prettier)
2. Write TypeScript for all new code
3. Use meaningful commit messages
4. Test thoroughly before committing

## 📄 License

This project is part of the Blues Dance Festival Finder development initiative.

---

**Built with ❤️ for the blues dance community**