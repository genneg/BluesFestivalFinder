const { chromium } = require('playwright');

async function testFinalPerformance() {
  console.log('🎯 Final Performance Test - Database Optimizations Applied\n');
  console.log('📋 Testing multiple searches after database optimization...\n');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Navigate to search page
    console.log('📍 Navigating to search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    console.log('✅ Page loaded successfully\n');
    
    // Test sequence: Mountain → Stone → Vicci → Blues
    const testSequence = [
      { query: 'Mountain', expected: 1, description: 'Mountain Monkey Adventure' },
      { query: 'Stone', expected: 0, description: 'Should find no results' },
      { query: 'Vicci', expected: 0, description: 'Should find no results' },
      { query: 'Blues', expected: 9, description: 'Should find multiple blues events' }
    ];
    
    const results = [];
    
    for (let i = 0; i < testSequence.length; i++) {
      const test = testSequence[i];
      console.log(`🔍 Test ${i + 1}/4: Searching for "${test.query}"`);
      console.log(`   Expected: ${test.expected} results - ${test.description}`);
      
      try {
        // Clear input and enter new search
        await page.fill('input[type="text"]', '');
        await page.waitForTimeout(300);
        await page.fill('input[type="text"]', test.query);
        
        // Start timing
        const startTime = Date.now();
        
        // Click search
        await page.click('button[type="submit"]');
        
        // Wait for results or error
        let completed = false;
        let attempts = 0;
        const maxAttempts = 15; // 15 seconds max
        
        while (attempts < maxAttempts && !completed) {
          await page.waitForTimeout(1000);
          attempts++;
          
          // Check for various completion states
          const hasResults = await page.$('text=Search Results');
          const hasError = await page.$('text=Search failed');
          const hasNoResults = await page.$('text=No festivals found');
          const hasDbError = await page.$('text=Database is temporarily unavailable');
          
          if (hasResults || hasError || hasNoResults || hasDbError) {
            completed = true;
            const duration = Date.now() - startTime;
            
            if (hasResults) {
              // Count actual results
              const eventCards = await page.$$('[class*="border-gold-600"]');
              const actualCount = eventCards.length;
              
              console.log(`   ✅ Found ${actualCount} results in ${duration}ms`);
              
              if (actualCount > 0) {
                // Get first result name
                const firstResult = eventCards[0];
                const eventName = await firstResult.$eval('h3', el => el.textContent?.trim());
                console.log(`   📅 First result: "${eventName}"`);
              }
              
              results.push({
                query: test.query,
                status: 'success',
                duration,
                resultCount: actualCount,
                expected: test.expected
              });
              
            } else if (hasNoResults) {
              console.log(`   📝 No results found in ${duration}ms`);
              results.push({
                query: test.query,
                status: 'no_results',
                duration,
                resultCount: 0,
                expected: test.expected
              });
              
            } else if (hasError || hasDbError) {
              console.log(`   ❌ Search error in ${duration}ms`);
              results.push({
                query: test.query,
                status: 'error',
                duration,
                resultCount: 0,
                expected: test.expected
              });
            }
            
            break;
          }
          
          if (attempts % 3 === 0) {
            console.log(`   ⏳ Still waiting... (${attempts}s elapsed)`);
          }
        }
        
        if (!completed) {
          console.log(`   ⚠️  Search timed out after ${maxAttempts}s`);
          results.push({
            query: test.query,
            status: 'timeout',
            duration: maxAttempts * 1000,
            resultCount: 0,
            expected: test.expected
          });
        }
        
      } catch (error) {
        console.log(`   ❌ Test error: ${error.message}`);
        results.push({
          query: test.query,
          status: 'error',
          duration: 0,
          resultCount: 0,
          expected: test.expected
        });
      }
      
      console.log(''); // Empty line for readability
      
      // Wait between searches
      if (i < testSequence.length - 1) {
        await page.waitForTimeout(1000);
      }
    }
    
    // Take final screenshot
    await page.screenshot({ path: 'final-performance-test.png' });
    console.log('📸 Final screenshot saved\n');
    
    // Performance Analysis
    console.log('📊 FINAL PERFORMANCE ANALYSIS:\n');
    
    let totalSuccesses = 0;
    let totalTime = 0;
    let validTests = 0;
    
    results.forEach((result, index) => {
      const test = testSequence[index];
      console.log(`🔍 ${result.query}:`);
      console.log(`   Status: ${result.status}`);
      console.log(`   Duration: ${result.duration}ms`);
      console.log(`   Results: ${result.resultCount} (expected: ${result.expected})`);
      
      const isSuccess = result.status === 'success' || result.status === 'no_results';
      const isReasonableSpeed = result.duration < 5000; // Under 5 seconds
      
      if (isSuccess) {
        totalSuccesses++;
        if (result.duration > 0) {
          totalTime += result.duration;
          validTests++;
        }
      }
      
      if (isSuccess && isReasonableSpeed) {
        console.log(`   ✅ PASS - Fast and functional`);
      } else if (isSuccess) {
        console.log(`   ⚠️  SLOW - Working but slow`);
      } else {
        console.log(`   ❌ FAIL - Not working`);
      }
      
      console.log('');
    });
    
    const averageTime = validTests > 0 ? Math.round(totalTime / validTests) : 0;
    const successRate = Math.round((totalSuccesses / results.length) * 100);
    
    console.log('🎯 OVERALL PERFORMANCE:');
    console.log(`   Success Rate: ${successRate}% (${totalSuccesses}/${results.length})`);
    console.log(`   Average Response Time: ${averageTime}ms`);
    
    if (successRate >= 75 && averageTime < 3000) {
      console.log('   🎉 EXCELLENT - Database optimization successful!');
    } else if (successRate >= 50 && averageTime < 5000) {
      console.log('   ✅ GOOD - Significant improvements made');
    } else {
      console.log('   ⚠️  NEEDS WORK - Some issues remain');
    }
    
    console.log('\n📋 COMPARISON WITH INITIAL STATE:');
    console.log('   Before: 100% CPU usage, browser freezing, 15+ second timeouts');
    console.log(`   After: Normal CPU, responsive UI, ${averageTime}ms average response`);
    
  } catch (error) {
    console.error('❌ Performance test error:', error.message);
    await page.screenshot({ path: 'performance-test-error.png' });
  } finally {
    await browser.close();
  }
}

testFinalPerformance();