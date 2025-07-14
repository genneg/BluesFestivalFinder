# Blues Dance Festival Finder - Development Guide

## Project Overview

**Project Name:** Blues Dance Festival Finder  
**Type:** Full-stack web application  
**Goal:** Centralized platform for discovering blues dance festivals with advanced following system for teachers and musicians

### Key Value Propositions
- Automated data collection via web scraping from multiple festival sources
- Follow system for teachers/musicians with personalized notifications
- Clean, blues-inspired UI with excellent mobile experience
- Comprehensive search and filtering capabilities

## Technical Architecture

### Stack Decisions
- **Frontend:** Next.js 14+ with TypeScript, Tailwind CSS
- **Backend:** Node.js with Express or Next.js API routes
- **Database:** PostgreSQL with Prisma ORM
- **Scraping:** Python scripts with BeautifulSoup/Scrapy + Selenium for dynamic content
- **Cache:** Redis for performance optimization
- **Deployment:** Vercel/AWS with automated CI/CD

### Project Structure
```
blues-dance-finder/
├── apps/
│   ├── web/                 # Next.js frontend
│   ├── api/                 # Backend API (if separate)
│   └── scraper/             # Python scraping services
├── packages/
│   ├── database/            # Prisma schema and migrations
│   ├── ui/                  # Shared UI components
│   └── types/               # Shared TypeScript types
├── docs/                    # Documentation
└── scripts/                 # Build and deployment scripts
```

## Core Features to Implement

### Phase 1: MVP (Months 1-3)
1. **Database Schema & Models**
   - Users, Events, Teachers, Musicians, Venues
   - Following relationships
   - Event metadata (dates, locations, prices)

2. **Basic Web Scraping System**
   - Festival websites data extraction
   - Facebook Events API integration
   - Data validation and normalization

3. **Frontend Core**
   - Event listing and search
   - User registration/authentication
   - Responsive design with mobile-first approach

4. **Essential APIs**
   - Events CRUD operations
   - User management
   - Basic search and filtering

### Phase 2: Enhanced Features (Months 4-6)
1. **Following System**
   - Follow/unfollow teachers and musicians
   - Personalized dashboard
   - Email notification system

2. **Advanced Search**
   - Geographic filters with map integration
   - Date range filtering
   - Teacher/musician-specific searches

3. **User Experience**
   - Personal calendar integration
   - Event bookmarking
   - Mobile optimization

## Database Schema Guidelines

### Core Entities
```typescript
// Key models to implement
User {
  id, email, name, preferences
  following: Teacher[], Musician[], Festival[]
}

Event {
  id, name, description, startDate, endDate
  venue: Venue
  teachers: Teacher[]
  musicians: Musician[]
  registrationDeadline, prices
}

Teacher {
  id, name, bio, specialties
  events: Event[]
  followers: User[]
}

Musician {
  id, name, bio, genre
  events: Event[]
  followers: User[]
}
```

## Development Priorities

### Critical Path Items
1. **Data Pipeline:** Scraping system must be robust and scalable
2. **Search Performance:** Fast queries with proper indexing
3. **Mobile UX:** Majority of users will access via mobile
4. **Follow Notifications:** Core differentiator feature

### Code Quality Standards
- TypeScript strict mode enabled
- ESLint + Prettier configuration
- Unit tests for critical business logic
- API integration tests
- Accessibility compliance (WCAG 2.1 AA)

## UI/UX Design Guidelines

### Design System
- **Color Palette:** Blues-inspired (navy, midnight blue, jazz accent colors)
- **Typography:** Modern, readable fonts (Inter/Roboto)
- **Components:** Card-based layouts, clean spacing
- **Mobile-first:** All components responsive from mobile up

### Key User Flows
1. **Discovery:** Home → Search/Filter → Event Details → Save
2. **Following:** Profile → Manage Following → Notifications → Events
3. **Planning:** Calendar View → Event Details → External Registration

### UI Components Priority
1. EventCard component with all metadata
2. SearchFilters with geographic and date options
3. FollowButton for teachers/musicians
4. PersonalDashboard with personalized recommendations
5. NotificationCenter for updates

## API Design Patterns

### RESTful Endpoints
```
GET    /api/events              # List events with filters
GET    /api/events/:id          # Event details
POST   /api/users/:id/follow    # Follow teacher/musician
GET    /api/users/:id/dashboard # Personalized dashboard
POST   /api/scraper/trigger     # Manual scraping trigger
```

### Data Fetching Strategy
- Server-side rendering for SEO (event pages)
- Client-side for interactive features (following, search)
- Progressive loading for large event lists
- Aggressive caching for static content

## Scraping Implementation Notes

### Target Sources
- Festival official websites
- Facebook Events
- Eventbrite listings
- Community calendars
- Teacher/musician personal sites

### Scraping Best Practices
- Respect robots.txt and rate limits
- Use proxy rotation for large-scale scraping
- Implement retry logic with exponential backoff
- Data validation and deduplication
- Error logging and monitoring

### Data Quality
- Manual review process for new events
- User reporting system for incorrect data
- Automated validation rules
- Regular data freshness checks

## Security & Performance

### Security Requirements
- Authentication with JWT tokens
- Input validation and sanitization
- Rate limiting on API endpoints
- GDPR compliance for EU users
- Secure password handling

### Performance Targets
- Page load time: < 2 seconds
- Search response: < 500ms
- 99.9% uptime
- Progressive Web App capabilities

## Testing Strategy

### Frontend Testing
- Component testing with React Testing Library
- E2E testing with Playwright
- Visual regression testing
- Mobile device testing

### Backend Testing
- Unit tests for business logic
- Integration tests for APIs
- Database migration testing
- Scraping script validation

## Deployment & DevOps

### Environment Setup
- Development: Local with Docker
- Staging: Branch deployments
- Production: Main branch auto-deploy
- Database: Managed PostgreSQL service

### Monitoring
- Application performance monitoring
- Error tracking (Sentry)
- Scraping job monitoring
- User analytics

## Specific Implementation Notes

### Critical Decisions
- Use server actions for form submissions in Next.js
- Implement background jobs for scraping (cron + queue)
- Geographic search with PostGIS extensions
- Email notifications with template system

### Third-party Integrations
- Google Maps for venue locations
- SendGrid for email notifications
- Stripe for future premium features
- Social login providers (Google, Facebook)

### Mobile Considerations
- Touch-friendly interface elements
- Offline capability for saved events
- Push notifications support
- App-like navigation patterns

## Current Development Status
- [ ] Project initialization and setup
- [ ] Database schema design
- [ ] Basic scraping proof of concept
- [ ] Frontend component library
- [ ] Authentication system
- [ ] Core API endpoints

## Next Steps for Claude Code
1. Initialize Next.js project with TypeScript and Tailwind
2. Set up Prisma with PostgreSQL schema
3. Create basic scraping script for one festival source
4. Implement user authentication
5. Build event listing and search components
6. Set up following system backend logic

---

**Note for Claude Code:** This project emphasizes the unique following system and clean mobile UX. Focus on these differentiators while building robust data collection infrastructure. Prioritize performance and user experience over feature complexity in early iterations.