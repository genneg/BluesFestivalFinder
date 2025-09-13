const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://postgres.tqvvseagpkmdnsiuwabv:mVVzMkwCK6fP4RG@aws-0-eu-central-1.pooler.supabase.com:5432/postgres'
    }
  }
});

async function testVicciSearch() {
  console.log('🔍 Analyzing Vicci Search Issue...\n');
  
  try {
    await prisma.$connect();
    
    // First, check if "Vicci" actually exists in any field
    console.log('1. Checking if "Vicci" exists in database...');
    
    const vicciEvents = await prisma.$queryRaw`
      SELECT id, name, description, city, country, style
      FROM events 
      WHERE 
        LOWER(name) LIKE LOWER('%Vicci%') OR
        LOWER(description) LIKE LOWER('%Vicci%') OR
        LOWER(city) LIKE LOWER('%Vicci%') OR
        LOWER(country) LIKE LOWER('%Vicci%') OR
        LOWER(style) LIKE LOWER('%Vicci%')
    `;
    
    console.log(`Found ${vicciEvents.length} events containing "Vicci"`);
    
    if (vicciEvents.length > 0) {
      console.log('📋 Events containing "Vicci":');
      vicciEvents.forEach((event, index) => {
        console.log(`${index + 1}. "${event.name}" - ${event.city}, ${event.country}`);
        console.log(`   Description: ${event.description ? event.description.substring(0, 100) + '...' : 'None'}\n`);
      });
    } else {
      console.log('✅ No events actually contain "Vicci" - search should return 0 results');
    }
    
    // Test the optimized search function
    console.log('2. Testing optimized search function...');
    
    const optimizedResults = await prisma.$queryRaw`
      SELECT * FROM search_events_optimized('Vicci', NULL, NULL, 10, 0, 'relevance', 'desc')
    `;
    
    const optimizedCount = optimizedResults.length > 0 ? Number(optimizedResults[0].total_count) : 0;
    console.log(`Optimized function returns: ${optimizedCount} results`);
    
    if (optimizedCount > 0) {
      console.log('⚠️  WARNING: Function returns results when it shouldn\'t');
      console.log('📋 Results from optimized function:');
      optimizedResults.forEach((result, index) => {
        console.log(`${index + 1}. "${result.name}" (rank: ${result.search_rank})`);
      });
    } else {
      console.log('✅ Optimized function correctly returns 0 results');
    }
    
    // Test fallback search (Prisma)
    console.log('\n3. Testing fallback search (Prisma)...');
    
    const fallbackResults = await prisma.event.findMany({
      where: {
        OR: [
          { name: { contains: 'Vicci', mode: 'insensitive' } },
          { description: { contains: 'Vicci', mode: 'insensitive' } },
          { city: { contains: 'Vicci', mode: 'insensitive' } },
          { country: { contains: 'Vicci', mode: 'insensitive' } },
          { style: { contains: 'Vicci', mode: 'insensitive' } },
        ]
      },
      select: {
        id: true,
        name: true,
        city: true,
        country: true
      },
      take: 10
    });
    
    console.log(`Fallback search returns: ${fallbackResults.length} results`);
    
    if (fallbackResults.length > 0) {
      console.log('⚠️  WARNING: Fallback also returns results');
      console.log('📋 Fallback results:');
      fallbackResults.forEach((result, index) => {
        console.log(`${index + 1}. "${result.name}"`);
      });
    } else {
      console.log('✅ Fallback correctly returns 0 results');
    }
    
    // Test API directly
    console.log('\n4. Testing API directly...');
    
    // We'll use fetch to test the actual API
    const apiTest = `
    fetch('/api/search/events?query=Vicci&limit=5')
      .then(r => r.json())
      .then(data => ({
        count: data.data.events.length,
        total: data.data.pagination.total,
        searchType: data.data.searchMeta.searchType,
        events: data.data.events.map(e => e.name)
      }))
    `;
    
    console.log('API test command:');
    console.log(apiTest);
    
    // Conclusion
    console.log('\n📊 ANALYSIS SUMMARY:');
    
    if (vicciEvents.length === 0 && optimizedCount === 0 && fallbackResults.length === 0) {
      console.log('✅ All database queries correctly return 0 results');
      console.log('⚠️  Issue might be in frontend or API integration');
    } else {
      console.log('❌ Database queries are returning false positives');
      console.log('🔧 Need to fix search logic to be more precise');
    }
    
  } catch (error) {
    console.error('❌ Error testing Vicci search:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testVicciSearch();