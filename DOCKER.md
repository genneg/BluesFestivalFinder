# Docker Setup Guide - Blues Dance Festival Finder

## 🐳 Docker Environment Overview

This project includes a complete Docker development environment with:

- **PostgreSQL 15** with PostGIS extension for geographic data
- **Redis 7** for caching and session storage
- **Next.js** application with hot reload support

## 📋 Prerequisites

- Docker Desktop installed and running
- Docker Compose (included with Docker Desktop)

## 🚀 Quick Start

### 1. Start Development Environment
```bash
# Start all services (PostgreSQL, Redis, Next.js app)
npm run docker:dev

# Or start in detached mode
npm run docker:dev:detached
```

### 2. Start Only Database Services
```bash
# Start only PostgreSQL and Redis (useful for local Next.js development)
npm run docker:db
```

### 3. View Logs
```bash
# View logs from all services
npm run docker:logs

# View logs from specific service
docker-compose logs -f web
docker-compose logs -f postgres
docker-compose logs -f redis
```

### 4. Stop Services
```bash
# Stop all services
npm run docker:stop

# Stop and remove volumes/images (clean reset)
npm run docker:clean
```

## 🔧 Available Docker Scripts

| Script | Description |
|--------|-------------|
| `npm run docker:dev` | Start development environment |
| `npm run docker:dev:detached` | Start in background |
| `npm run docker:prod` | Start production environment |
| `npm run docker:stop` | Stop all services |
| `npm run docker:clean` | Complete cleanup |
| `npm run docker:logs` | View all logs |
| `npm run docker:db` | Start only databases |
| `npm run docker:test` | Run tests in container |

## 🌐 Service URLs

When running with Docker:

- **Next.js App**: http://localhost:3000
- **PostgreSQL**: localhost:5432
- **Redis**: localhost:6379
- **Health Check**: http://localhost:3000/api/health

## 📁 Docker Files Structure

```
├── Dockerfile              # Production build
├── Dockerfile.dev          # Development build with hot reload
├── docker-compose.yml      # Main compose file (development)
├── docker-compose.prod.yml # Production overrides
└── .dockerignore           # Files excluded from Docker build
```

## ⚙️ Environment Configuration

### Development Environment Variables

The Docker environment automatically sets:

```env
DATABASE_URL=postgresql://postgres:password@postgres:5432/blues_dance_finder
REDIS_URL=redis://redis:6379
NEXTAUTH_SECRET=dev-secret-key-change-in-production
NEXTAUTH_URL=http://localhost:3000
NODE_ENV=development
```

### Production Environment

For production, create a `.env.prod` file:

```env
POSTGRES_PASSWORD=your-secure-password
REDIS_PASSWORD=your-redis-password
NEXTAUTH_SECRET=your-production-secret
NEXTAUTH_URL=https://your-domain.com
```

Then run:
```bash
npm run docker:prod
```

## 🔍 Health Checks

All services include health checks:

- **PostgreSQL**: `pg_isready` command
- **Redis**: `redis-cli ping` command  
- **Next.js**: HTTP request to `/api/health`

Check service health:
```bash
docker-compose ps
```

## 🛠 Development Workflow

### 1. Code Changes with Hot Reload

The development container mounts your source code:
- Make changes to any file in `src/`
- Changes are automatically reflected in the running container
- No need to rebuild the container for code changes

### 2. Installing New Dependencies

When adding new npm packages:
```bash
# Option 1: Rebuild container
npm run docker:stop
npm run docker:dev

# Option 2: Install in running container
docker-compose exec web npm install <package-name>
```

### 3. Database Operations

Access PostgreSQL directly:
```bash
# Connect to database
docker-compose exec postgres psql -U postgres -d blues_dance_finder

# Run SQL commands
docker-compose exec postgres psql -U postgres -d blues_dance_finder -c "SELECT version();"
```

Access Redis:
```bash
# Connect to Redis CLI
docker-compose exec redis redis-cli

# Test Redis
docker-compose exec redis redis-cli ping
```

## 🐛 Troubleshooting

### Services Won't Start

1. **Check Docker is running**:
   ```bash
   docker --version
   docker-compose --version
   ```

2. **Check port conflicts**:
   ```bash
   # Kill processes using required ports
   netstat -tulpn | grep :3000
   netstat -tulpn | grep :5432
   netstat -tulpn | grep :6379
   ```

3. **Clean restart**:
   ```bash
   npm run docker:clean
   npm run docker:dev
   ```

### Database Connection Issues

1. **Wait for health checks**:
   ```bash
   docker-compose ps
   # Wait until all services show "healthy"
   ```

2. **Check database logs**:
   ```bash
   docker-compose logs postgres
   ```

3. **Verify PostGIS extension**:
   ```bash
   docker-compose exec postgres psql -U postgres -d blues_dance_finder -c "SELECT PostGIS_Version();"
   ```

### Performance Issues

1. **Increase Docker resources** (Docker Desktop settings)
2. **Use bind mounts instead of volumes** (already configured)
3. **Disable unnecessary services**:
   ```bash
   # Start only what you need
   docker-compose up postgres redis
   npm run dev  # Run Next.js locally
   ```

## 🔐 Security Notes

- **Development passwords** are hardcoded for convenience
- **Production** requires proper environment variables
- **Never commit** production credentials
- **Use Docker secrets** for production deployments

## 📊 Monitoring

View resource usage:
```bash
# Container stats
docker stats

# Disk usage
docker system df

# Clean up unused resources
docker system prune
```

## 🚀 Production Deployment

For production deployment:

1. **Build production images**:
   ```bash
   docker build -t blues-dance-festival-finder .
   ```

2. **Use production compose**:
   ```bash
   docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
   ```

3. **Scale services**:
   ```bash
   docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --scale web=3
   ```

---

**Note**: This Docker setup is optimized for development. For production, consider using orchestration tools like Kubernetes or Docker Swarm.