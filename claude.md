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

## Deployment & Infrastructure

### Vercel Deployment

- **Project Name:** `blues-festival-finder`
- **Production URL:** https://blues-festival-finder.vercel.app
- **Framework:** Next.js (auto-detected)
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Node.js Version:** 22.x

#### Vercel Commands

```bash
# Check login status
vercel whoami

# List projects
vercel projects list

# Deploy to production
vercel --prod

# Inspect deployment
vercel inspect https://blues-festival-finder.vercel.app

# Environment variables
vercel env list
```

### Supabase Database

- **Host:** `aws-0-eu-central-1.pooler.supabase.com` (pooled - recommended for production)
- **Database:** PostgreSQL 17.4
- **Connection:** Use pooled endpoint to avoid IPv6 issues

#### Database Connection

```javascript
// Production connection string (pooled)
DATABASE_URL =
  'postgresql://postgres.tqvvseagpkmdnsiuwabv:mVVzMkwCK6fP4RG@aws-0-eu-central-1.pooler.supabase.com:5432/postgres'

// Backup connection (direct)
DATABASE_URL =
  'postgresql://postgres:mVVzMkwCK6fP4RG@db.tqvvseagpkmdnsiuwabv.supabase.co:5432/postgres'
```

#### Database Schema Summary

- **Events:** 8 records (festivals/workshops)
- **Teachers:** 30 records (dance instructors)
- **Musicians:** 15 records (live music performers)
- **Venues:** 11 records (event locations)

#### Key Database Commands

```bash
# Test database connection
npm run db:status

# Run migrations
npm run db:migrate

# Open database studio
npm run db:studio

# Generate Prisma client
npm run db:generate
```

#### Database Health Check

```javascript
// Quick connection test
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Test query
const result = await prisma.$queryRaw`SELECT NOW(), COUNT(*) FROM events`
```

## Image Management Notes

- Per aggiungere le nuove immagini ricordarsi di copiarle da C:\Users\genne\AgentProjects\DataEntry\server\uploads
- Images are stored locally in development
- For production: consider Vercel Blob or Supabase Storage

## Development Workflow

### Local Development

```bash
npm run dev          # Start development server
npm run db:studio    # Open database GUI
npm run lint         # Check code style
npm run type-check   # TypeScript validation
```

### Production Deployment

⚠️ **CRITICAL: Always Test on Production**

1. **Local Testing**: Test all changes locally first
2. **Commit & Push**: Push to main branch (auto-deploys to Vercel)
3. **Wait for Deployment**: Allow 2-3 minutes for Vercel build/deploy
4. **Production Testing**: **ALWAYS** test on production URL
   - Test API endpoints: `https://blues-festival-finder.vercel.app/api/...`
   - Test UI functionality on live site
   - Verify search, filters, and all features work on production
5. **Verify Database Connectivity**: Ensure production connects to correct Supabase DB
6. **Monitor Deployment Logs**: Check Vercel dashboard for errors

**🚨 IMPORTANT**: Never assume local functionality works in production. Different environments can have different database connections, environment variables, or deployment configurations. Always verify critical features work on the live Vercel deployment.

#### Essential Production Tests

After each deployment, test these critical endpoints:

```bash
# Teacher search (text query)
curl "https://blues-festival-finder.vercel.app/api/search/events?query=Vicci"

# Teacher filter (specific filter)
curl "https://blues-festival-finder.vercel.app/api/search/events?teachers=Vicci%20%26%20Adamo"

# General search functionality
curl "https://blues-festival-finder.vercel.app/api/search/events?query=Blues"

# Homepage loads
curl "https://blues-festival-finder.vercel.app/"

# Search page loads
curl "https://blues-festival-finder.vercel.app/search"
```

**Expected Results:**
- Teacher searches should return exactly 3 events for Vicci/Vicci & Adamo
- Search results should have `"searchType": "optimized"` 
- Teacher matches should have `"searchRank": "70"` or `"90"`
- No results should return `"total": 0` but still succeed (`"success": true`)

## Environment Variables Setup

### Required for Vercel Production

```bash
DATABASE_URL="postgresql://postgres.tqvvseagpkmdnsiuwabv:mVVzMkwCK6fP4RG@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"
NEXTAUTH_SECRET="production-secret-key"
NEXTAUTH_URL="https://blues-festival-finder.vercel.app"
```

### Supabase Integration Status

✅ Database accessible and operational
✅ Prisma schema configured  
✅ Connection pooling enabled
⚠️ Consider setting up Supabase Storage for images in production
