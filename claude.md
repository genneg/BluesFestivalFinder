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

## Image Management Notes
- Per aggiungere le nuove immagini ricordarsi di copiarle da C:\Users\genne\AgentProjects\DataEntry\server\uploads

[Rest of the existing content remains unchanged]