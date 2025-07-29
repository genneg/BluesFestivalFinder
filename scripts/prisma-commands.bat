@echo off
REM Prisma Migration Commands for Supabase Setup (Windows)
REM Run these commands in order after setting up Supabase

echo 🗄️  Prisma Migration Commands for Supabase
echo =============================================
echo.

REM Check if DATABASE_URL is set
if "%DATABASE_URL%"=="" (
  echo ❌ DATABASE_URL environment variable not set
  echo Set it to your Supabase connection string:
  echo set DATABASE_URL=postgresql://postgres:password@db.ref.supabase.co:5432/postgres
  pause
  exit /b 1
)

echo 📡 Database URL: %DATABASE_URL:~0,30%...
echo.

REM Step 1: Generate Prisma Client
echo 1️⃣  Generating Prisma Client...
cd packages\database
npx prisma generate
if %errorlevel% neq 0 (
  echo ❌ Failed to generate Prisma client
  pause
  exit /b 1
)
echo ✅ Prisma client generated successfully
echo.

REM Step 2: Check database connection  
echo 2️⃣  Testing database connection...
npx prisma db pull --print
if %errorlevel% neq 0 (
  echo ❌ Cannot connect to database
  pause
  exit /b 1
)
echo ✅ Database connection successful
echo.

REM Step 3: Create initial migration
echo 3️⃣  Creating initial migration...
npx prisma migrate dev --name init --create-only
if %errorlevel% neq 0 (
  echo ❌ Failed to create migration
  pause
  exit /b 1
)
echo ✅ Initial migration created
echo.

REM Step 4: Apply migration to Supabase
echo 4️⃣  Deploying migration to Supabase...
npx prisma migrate deploy
if %errorlevel% neq 0 (
  echo ❌ Migration deployment failed
  pause
  exit /b 1
)
echo ✅ Migration deployed successfully
echo.

REM Step 5: Verify schema
echo 5️⃣  Verifying database schema...
npx prisma db pull --print
echo.

REM Step 6: Generate updated client
echo 6️⃣  Regenerating Prisma client with new schema...
npx prisma generate
if %errorlevel% neq 0 (
  echo ❌ Failed to regenerate client
  pause
  exit /b 1
)
echo ✅ Prisma client regenerated
echo.

echo 🎉 Prisma setup completed successfully!
echo.
echo Next steps:
echo 1. Run data migration: node scripts/data-migration.js
echo 2. Verify app connection: npm run dev  
echo 3. Check /api/test-db endpoint
echo.

echo ✅ Setup completed! Your database is ready.
pause