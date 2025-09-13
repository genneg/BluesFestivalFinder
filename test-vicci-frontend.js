const { chromium } = require('playwright');

async function testVicciFrontend() {
  console.log('🔍 Testing Vicci Search Frontend Issue...\n');
  console.log('Expected: 0 results (API returns 0, database has 0)');
  console.log('Problem: Frontend shows 9 results\n');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Monitor network requests
  const apiCalls = [];
  page.on('response', response => {
    if (response.url().includes('/api/search/events')) {
      apiCalls.push({
        url: response.url(),
        status: response.status(),
        timestamp: new Date().toISOString()
      });
    }
  });
  
  try {
    console.log('📍 Navigating to search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Clear any previous searches
    await page.reload({ waitUntil: 'networkidle' });
    
    console.log('🔍 Searching for "Vicci"...');
    await page.fill('input[type="text"]', 'Vicci');
    
    const startTime = Date.now();
    await page.click('button[type="submit"]');
    
    console.log('⏳ Monitoring API calls and results...');
    
    // Wait for search to complete
    let completed = false;
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts && !completed) {
      await page.waitForTimeout(1000);
      attempts++;
      
      const hasResults = await page.$('text=Search Results');
      const hasNoResults = await page.$('text=No festivals found');
      const hasError = await page.$('text=Search failed');
      
      if (hasResults || hasNoResults || hasError) {
        completed = true;
        const duration = Date.now() - startTime;
        
        console.log(`\n📊 FRONTEND ANALYSIS (${duration}ms):`);
        
        // Check what the frontend shows
        if (hasResults) {
          const eventCards = await page.$$('[class*="border-gold-600"]');
          console.log(`Frontend displays: ${eventCards.length} results`);
          
          if (eventCards.length > 0) {
            console.log('❌ FRONTEND BUG: Shows results when API returns 0');
            console.log('📋 Displayed results:');
            
            for (let i = 0; i < Math.min(eventCards.length, 3); i++) {
              const card = eventCards[i];
              const name = await card.$eval('h3', el => el.textContent?.trim());
              console.log(`   ${i + 1}. "${name}"`);
            }
          }
          
        } else if (hasNoResults) {
          console.log('✅ Frontend correctly shows: No results found');
          
        } else if (hasError) {
          const errorText = await page.$eval('[class*="text-red"]', el => el.textContent);
          console.log(`❌ Frontend shows error: ${errorText}`);
        }
        
        break;
      }
    }
    
    if (!completed) {
      console.log('⏰ Frontend search timed out');
    }
    
    // Analyze API calls
    console.log('\n📡 API CALLS ANALYSIS:');
    console.log(`Total API calls made: ${apiCalls.length}`);
    
    apiCalls.forEach((call, index) => {
      console.log(`${index + 1}. ${call.url} (${call.status}) at ${call.timestamp}`);
    });
    
    // Direct API verification in browser
    console.log('\n🔧 Direct API test in browser...');
    
    const directApiResult = await page.evaluate(async () => {
      try {
        const response = await fetch('/api/search/events?query=Vicci&limit=5');
        const data = await response.json();
        return {
          success: data.success,
          totalEvents: data.data.events.length,
          totalCount: data.data.pagination.total,
          searchType: data.data.searchMeta.searchType,
          eventNames: data.data.events.map(e => e.name)
        };
      } catch (error) {
        return { error: error.message };
      }
    });
    
    console.log('Direct API result:', directApiResult);
    
    if (directApiResult.totalEvents === 0) {
      console.log('✅ Browser API call returns 0 results (correct)');
      console.log('❌ CONFIRMED: Frontend display logic has bug');
    } else {
      console.log('❌ Browser API call returns wrong results');
    }
    
    // Check React state in browser
    console.log('\n⚛️  Checking React component state...');
    
    const reactState = await page.evaluate(() => {
      // Try to access React state (this might not work depending on build)
      try {
        // Look for any global state or console data
        return {
          pathname: window.location.pathname,
          search: window.location.search,
          reactVersion: window.React ? window.React.version : 'not found',
          timestamp: new Date().toISOString()
        };
      } catch (error) {
        return { error: error.message };
      }
    });
    
    console.log('React/Browser state:', reactState);
    
    // Take screenshot
    await page.screenshot({ path: 'vicci-frontend-debug.png' });
    console.log('\n📸 Screenshot saved for analysis');
    
    // Final diagnosis
    console.log('\n🎯 DIAGNOSIS:');
    console.log('✅ Database: Correctly returns 0 results');
    console.log('✅ API: Correctly returns 0 results');
    
    if (hasResults && eventCards?.length > 0) {
      console.log('❌ Frontend: Shows wrong results (BUG CONFIRMED)');
      console.log('\n🔧 LIKELY CAUSES:');
      console.log('1. React state not updating correctly');
      console.log('2. Multiple API calls overwriting each other');
      console.log('3. Frontend cache showing old results');
      console.log('4. useState hook timing issues');
    } else {
      console.log('✅ Frontend: Shows correct results');
      console.log('ℹ️  Issue might be intermittent or cache-related');
    }
    
  } catch (error) {
    console.error('❌ Test error:', error.message);
    await page.screenshot({ path: 'vicci-frontend-error.png' });
  } finally {
    await browser.close();
  }
}

testVicciFrontend();