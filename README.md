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
   # Edit .env.local with your configuration
   ```

4. **Start the database** (requires Docker)
   ```bash
   docker-compose up -d postgres redis
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
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
├── apps/
│   ├── web/                 # Next.js frontend (future)
│   └── scraper/             # Python scraping services (future)
├── packages/
│   ├── database/            # Prisma schema and migrations (future)
│   ├── ui/                  # Shared UI components (future)
│   └── types/               # Shared TypeScript types (future)
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # React components
│   ├── lib/                 # Utility functions
│   ├── styles/              # Global styles
│   └── types/               # TypeScript type definitions
├── docs/                    # Documentation
└── scripts/                 # Build and deployment scripts
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

### ✅ Completed (TASK-001)
- [x] Development environment setup
- [x] Next.js project initialization with TypeScript
- [x] Tailwind CSS configuration with blues-inspired design
- [x] ESLint and Prettier setup
- [x] Git repository initialization
- [x] Docker environment for PostgreSQL and Redis
- [x] Basic project structure and type definitions
- [x] Cursor IDE configuration

### 🔄 Next Steps (TASK-002 onwards)
- [ ] Database schema design with Prisma
- [ ] Authentication system with NextAuth.js
- [ ] Basic scraping system implementation
- [ ] Core API endpoints
- [ ] Event listing and search UI

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