const { chromium } = require('playwright');

async function testESpanishNoCache() {
  console.log('🎯 Testing ESpanish Search - Cache Bypass Mode\n');
  
  const browser = await chromium.launch({ 
    headless: false,
    args: ['--disable-cache', '--disable-application-cache', '--disable-offline-load-stale-cache']
  });
  const context = await browser.newContext({
    // Disable cache at context level
    ignoreHTTPSErrors: true
  });
  const page = await context.newPage();
  
  // Disable cache at page level
  await page.route('**/*', route => {
    const headers = route.request().headers();
    headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    headers['Pragma'] = 'no-cache';
    headers['Expires'] = '0';
    route.continue({ headers });
  });
  
  try {
    console.log('📍 Navigating to search page (no cache)...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Hard refresh to bypass cache
    await page.reload({ waitUntil: 'networkidle' });
    
    console.log('✅ Page loaded (cache bypassed)');
    
    // Test ESpanish search
    console.log('\n🔍 Searching for "ESpanish" (fresh request)...');
    await page.fill('input[type="text"]', 'ESpanish');
    
    const startTime = Date.now();
    await page.click('button[type="submit"]');
    
    console.log('⏳ Waiting for results...');
    
    // Wait for results
    let completed = false;
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts && !completed) {
      await page.waitForTimeout(1000);
      attempts++;
      
      const hasResults = await page.$('text=Search Results');
      const hasError = await page.$('text=Search failed');
      const hasNoResults = await page.$('text=No festivals found');
      
      if (hasResults || hasError || hasNoResults) {
        completed = true;
        const duration = Date.now() - startTime;
        
        if (hasResults) {
          // Count results
          const eventCards = await page.$$('[class*="border-gold-600"]');
          const resultCount = eventCards.length;
          
          console.log(`\n📊 FRESH RESULTS: ${resultCount} events found in ${duration}ms`);
          
          if (resultCount === 1) {
            console.log('🎉 SUCCESS! API optimization working!');
            
            // Get result details
            const firstResult = eventCards[0];
            const eventName = await firstResult.$eval('h3', el => el.textContent?.trim());
            
            console.log(`📅 Event: "${eventName}"`);
            
            if (eventName && eventName.includes('ESpanish')) {
              console.log('✅ PERFECT! Correct and only result!');
              console.log('🎯 ESpanish search issue RESOLVED!');
            } else {
              console.log(`⚠️  Unexpected result: "${eventName}"`);
            }
            
          } else {
            console.log(`❌ Still getting ${resultCount} results instead of 1`);
            
            // Check if ESpanish is at least first
            if (eventCards.length > 0) {
              const firstName = await eventCards[0].$eval('h3', el => el.textContent?.trim());
              console.log(`📅 First result: "${firstName}"`);
              
              if (firstName && firstName.includes('ESpanish')) {
                console.log('✅ At least ESpanish is prioritized first');
              } else {
                console.log('❌ ESpanish not even first result');
              }
            }
          }
          
        } else if (hasNoResults) {
          console.log(`\n📝 No results found in ${duration}ms`);
          console.log('❌ API might not be working properly');
          
        } else if (hasError) {
          console.log(`\n❌ Search error in ${duration}ms`);
          console.log('   API deployment might have issues');
        }
        
        break;
      }
      
      if (attempts % 3 === 0) {
        console.log(`   Still waiting... (${attempts}s)`);
      }
    }
    
    if (!completed) {
      console.log('\n⏰ Timeout - checking network tab for API calls...');
      
      // Check network requests
      const responses = [];
      page.on('response', response => {
        if (response.url().includes('/api/search/events')) {
          responses.push({
            url: response.url(),
            status: response.status()
          });
        }
      });
    }
    
    // Take screenshot
    await page.screenshot({ path: 'espanish-nocache-test.png' });
    console.log('\n📸 Screenshot saved');
    
    // Direct API test
    console.log('\n🔧 Direct API verification...');
    const apiResponse = await page.evaluate(async () => {
      const response = await fetch('/api/search/events?query=ESpanish&limit=5');
      return await response.json();
    });
    
    console.log(`📡 Direct API result: ${apiResponse.data?.events?.length || 0} events`);
    console.log(`🔧 Search type: ${apiResponse.data?.searchMeta?.searchType || 'unknown'}`);
    
    if (apiResponse.data?.events?.length === 1) {
      console.log('✅ API is working correctly!');
      console.log('⚠️  Issue might be in frontend caching or React state');
    } else {
      console.log('❌ API still returning multiple results');
    }
    
  } catch (error) {
    console.error('❌ Test error:', error.message);
    await page.screenshot({ path: 'espanish-nocache-error.png' });
  } finally {
    await browser.close();
  }
}

testESpanishNoCache();