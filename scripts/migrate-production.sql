-- Production Migration Script for Supabase
-- Run this in Supabase SQL Editor after creating the project

-- Enable necessary extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Note: Prisma will create tables automatically when you run:
-- npx prisma migrate deploy

-- But you can also run the schema manually if needed:

-- Optional: Create initial admin user (update with your email)
-- INSERT INTO users (email, name, verified, created_at, updated_at)
-- VALUES ('your-email@example.com', 'Admin User', true, NOW(), NOW())
-- ON CONFLICT (email) DO NOTHING;

-- Optional: Insert sample data for testing
-- This will be replaced with real data from web scraping

SELECT 'Migration script ready. Run: npx prisma migrate deploy' as status;