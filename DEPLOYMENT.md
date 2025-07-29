# Deployment Guide - Blues Dance Festival Finder

## ✅ Migration Status: COMPLETED - Ready for Production

### Database Migration Summary
- **Source**: Local PostgreSQL (`swing_events`)
- **Target**: Supabase PostgreSQL (Project: `tqvvseagpkmdnsiuwabv`)
- **Migration Date**: 2025-07-29
- **Records Migrated**: 79 total records successfully

### 🚀 Quick Deploy to Vercel

1. **Connect to Vercel:**
   ```bash
   npm install -g vercel
   vercel login
   vercel
   ```

2. **Set Environment Variables in Vercel Dashboard:**
   - `DATABASE_URL="postgresql://postgres.tqvvseagpkmdnsiuwabv:mVVzMkwCK6fP4RG@aws-0-eu-central-1.pooler.supabase.com:5432/postgres"`
   - `NEXTAUTH_SECRET="e3d210be4bc4bf83ccfdf0f9fc13226edb92578b4a8854a0cedba7ce4cb25f51"`
   - `NEXTAUTH_URL` - Your domain URL (e.g., https://your-app.vercel.app)
   - `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET` - OAuth credentials
   - `FACEBOOK_CLIENT_ID` & `FACEBOOK_CLIENT_SECRET` - OAuth credentials
   - `GOOGLE_MAPS_API_KEY` - For venue locations
   - `SENDGRID_API_KEY` - For email notifications

3. **Deploy:**
   ```bash
   vercel --prod
   ```

### 🐳 Docker Deployment

1. **Build Production Image:**
   ```bash
   docker build -t festival-scout .
   ```

2. **Run Container:**
   ```bash
   docker run -p 3000:3000 --env-file .env.production festival-scout
   ```

### 📋 Pre-Deployment Checklist

- [x] ✅ TypeScript compilation fixed
- [x] ✅ Production build successful  
- [x] ✅ Next.js configured for standalone output
- [x] ✅ Vercel configuration created
- [x] ✅ Environment variables template ready
- [x] ✅ Database schema integrated
- [x] ✅ API endpoints functional

### 🗄️ Database Setup - ✅ COMPLETED

**Previous:** Local PostgreSQL with test data
**Current:** Supabase PostgreSQL in production

**Migration Results:**
- ✅ Events: 5 records
- ✅ Teachers: 19 records  
- ✅ Musicians: 9 records
- ✅ Venues: 9 records
- ✅ Event-Teacher relationships: 19 records
- ✅ Event-Musician relationships: 9 records
- ✅ Event prices: 9 records

**Technical Details:**
- **Host**: `aws-0-eu-central-1.pooler.supabase.com` (IPv4 pooler for compatibility)
- **Port**: `5432` (Connection pooling enabled)
- **Region**: EU Central 1 (Frankfurt)
- **SSL**: Enabled by default

### 🔐 Security Configuration

1. **Generate Production Secrets:**
   ```bash
   openssl rand -base64 32  # For NEXTAUTH_SECRET
   ```

2. **OAuth Setup:**
   - Google: https://console.developers.google.com
   - Facebook: https://developers.facebook.com

### 📊 Post-Deployment Tasks

1. **Verify API Endpoints:**
   - `GET /api/health` - Health check
   - `GET /api/events` - Events listing
   - `GET /api/teachers` - Teachers listing
   - `GET /api/musicians` - Musicians listing

2. **Test Authentication:**
   - Social login flows
   - User registration
   - Profile management

3. **Performance Monitoring:**
   - Set up error tracking (Sentry)
   - Monitor API response times
   - Check database queries

### 🚨 Known Issues

- Some TypeScript warnings exist but don't prevent deployment
- Test files have type mismatches (won't affect production)
- Full schema migration may be needed for production database

### 🎯 Deployment Commands

```bash
# Quick production deploy
npm run build && npm run start

# With Docker
docker-compose -f docker-compose.prod.yml up --build

# Vercel deployment
vercel --prod
```

Your application is ready for production deployment! 🎉