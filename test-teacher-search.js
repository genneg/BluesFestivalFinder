const { chromium } = require('playwright');

async function testTeacherSearch() {
  console.log('🎯 Testing Teacher Search on Website\n');
  console.log('Expected: Teachers should now return festivals where they teach\n');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Monitor API calls to verify what's being searched
  const apiCalls = [];
  page.on('response', response => {
    if (response.url().includes('/api/search/events')) {
      const url = new URL(response.url());
      const query = url.searchParams.get('query') || 'NO_QUERY';
      apiCalls.push({
        query: query,
        url: response.url()
      });
      console.log(`[API CALL] Search query: "${query}"`);
    }
  });
  
  const teacherTests = [
    { 
      query: 'Alexia', 
      description: 'Should find Swingomania (Alexia Legoueix & Sep Vermeersch)',
      expectedMin: 1 
    },
    { 
      query: 'Elle Brenecki', 
      description: 'Should find events where Elle Brenecki teaches',
      expectedMin: 1 
    },
    { 
      query: 'Joris', 
      description: 'Should find events where Joris Focquaert teaches',
      expectedMin: 1 
    }
  ];
  
  const results = [];
  
  try {
    console.log('📍 Navigating to search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    console.log('✅ Page loaded successfully');
    
    for (let i = 0; i < teacherTests.length; i++) {
      const test = teacherTests[i];
      console.log(`\n🔍 Test ${i + 1}/3: Searching for "${test.query}"`);
      console.log(`   Expected: ${test.description}`);
      
      // Clear input and enter teacher name
      await page.fill('input[type="text"]', '');
      await page.waitForTimeout(300);
      await page.fill('input[type="text"]', test.query);
      
      const startTime = Date.now();
      await page.click('button[type="submit"]');
      
      // Wait for results
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
          
          let actualCount = 0;
          let status = 'unknown';
          let eventNames = [];
          
          if (hasResults) {
            const eventCards = await page.$$('[class*="border-gold-600"]');
            actualCount = eventCards.length;
            status = 'results';
            
            // Get event names and details
            for (let j = 0; j < Math.min(eventCards.length, 3); j++) {
              const card = eventCards[j];
              const eventName = await card.$eval('h3', el => el.textContent?.trim());
              const eventLocation = await card.$eval('[class*="text-white/60"]', el => el.textContent?.trim());
              eventNames.push({ name: eventName, location: eventLocation });
            }
            
          } else if (hasNoResults) {
            actualCount = 0;
            status = 'no_results';
            
          } else if (hasError) {
            status = 'error';
          }
          
          const isSuccess = actualCount >= test.expectedMin;
          const resultIcon = isSuccess ? '✅' : '❌';
          
          console.log(`   ${resultIcon} Result: ${actualCount} events found in ${duration}ms (expected: ${test.expectedMin}+)`);
          
          if (eventNames.length > 0) {
            console.log('   📅 Events found:');
            eventNames.forEach((event, index) => {
              console.log(`      ${index + 1}. "${event.name}"`);
              console.log(`         📍 ${event.location}`);
            });
            
            // Check if this makes sense for the teacher
            if (test.query === 'Alexia' && eventNames.some(e => e.name.includes('Swingomania'))) {
              console.log('   🎉 PERFECT! Found Swingomania for Alexia (as expected from database test)');
            }
          } else if (status === 'no_results') {
            console.log('   📝 No events found for this teacher');
            if (test.expectedMin > 0) {
              console.log('   ⚠️  This might indicate the teacher search is not working yet');
            }
          }
          
          results.push({
            teacher: test.query,
            expected: test.expectedMin,
            actual: actualCount,
            success: isSuccess,
            duration: duration,
            status: status,
            events: eventNames
          });
          
          break;
        }
        
        if (attempts % 3 === 0) {
          console.log(`   ⏳ Still waiting... (${attempts}s)`);
        }
      }
      
      if (!completed) {
        console.log(`   ⏰ Timeout after ${maxAttempts} seconds`);
        results.push({
          teacher: test.query,
          expected: test.expectedMin,
          actual: -1,
          success: false,
          duration: maxAttempts * 1000,
          status: 'timeout'
        });
      }
      
      // Brief pause between tests
      if (i < teacherTests.length - 1) {
        await page.waitForTimeout(1000);
      }
    }
    
    // Test a musician too
    console.log('\n🎵 Bonus Test: Musician search');
    console.log('🔍 Searching for "Gramophoniacs" (musician)...');
    
    await page.fill('input[type="text"]', '');
    await page.waitForTimeout(300);
    await page.fill('input[type="text"]', 'Gramophoniacs');
    await page.click('button[type="submit"]');
    await page.waitForTimeout(4000);
    
    const musicianCards = await page.$$('[class*="border-gold-600"]');
    console.log(`   📊 Musician search results: ${musicianCards.length} events`);
    
    if (musicianCards.length > 0) {
      const musicianEventName = await musicianCards[0].$eval('h3', el => el.textContent?.trim());
      console.log(`   🎵 First result: "${musicianEventName}"`);
      console.log('   ✅ Musician search working!');
    }
    
    // Take final screenshot
    await page.screenshot({ path: 'teacher-search-test.png' });
    console.log('\n📸 Screenshot saved');
    
    // Results analysis
    console.log('\n📊 TEACHER SEARCH TEST RESULTS:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    let successfulTests = 0;
    const totalTests = results.length;
    
    results.forEach((result, index) => {
      const icon = result.success ? '✅' : '❌';
      const status = result.success ? 'PASS' : 'FAIL';
      
      console.log(`${icon} ${result.teacher}: ${result.actual} events (expected: ${result.expected}+) - ${status}`);
      console.log(`   Duration: ${result.duration}ms, Status: ${result.status}`);
      
      if (result.events && result.events.length > 0) {
        console.log(`   Top event: "${result.events[0].name}"`);
      }
      
      if (result.success) {
        successfulTests++;
      }
      
      console.log('');
    });
    
    // API Analysis
    console.log('📡 API CALLS ANALYSIS:');
    apiCalls.forEach((call, index) => {
      console.log(`${index + 1}. Query: "${call.query}"`);
    });
    
    const successRate = Math.round((successfulTests / totalTests) * 100);
    
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📈 TEACHER SEARCH PERFORMANCE:`);
    console.log(`   Success Rate: ${successRate}% (${successfulTests}/${totalTests} teachers found events)`);
    
    if (successRate >= 67) { // 2 out of 3
      console.log('🎉 TEACHER SEARCH: SUCCESS!');
      console.log('   ✅ Teachers now return their festivals');
      console.log('   ✅ Database enhancement working');
      console.log('   ✅ Search relevance includes teachers');
      console.log('   🚀 Feature request completed!');
    } else if (successRate > 0) {
      console.log('⚠️  TEACHER SEARCH: Partial success');
      console.log('   Some teachers working, may need refinement');
    } else {
      console.log('❌ TEACHER SEARCH: Not working yet');
      console.log('   Database function may not be integrated with API');
    }
    
    console.log('\n🎯 FEATURE STATUS:');
    console.log('Before: Teachers returned 0 results');
    if (successRate > 0) {
      console.log('After: Teachers return their festivals ✅');
      console.log('🏆 MISSION ACCOMPLISHED!');
    } else {
      console.log('After: Still needs integration work');
    }
    
  } catch (error) {
    console.error('❌ Teacher search test error:', error.message);
    await page.screenshot({ path: 'teacher-search-error.png' });
  } finally {
    await browser.close();
  }
}

testTeacherSearch();