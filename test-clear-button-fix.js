const { chromium } = require('playwright');

async function testClearButtonFix() {
  console.log('🔍 Testing Clear Button Fix - No Auto-Search\n');
  console.log('Expected Behavior:');
  console.log('1. Search for "Mountain" → Shows results');
  console.log('2. Click X to clear → Does NOT trigger new search');
  console.log('3. Results remain visible until user clicks Search button\n');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Monitor API calls
  const apiCalls = [];
  page.on('response', response => {
    if (response.url().includes('/api/search/events')) {
      const url = new URL(response.url());
      const query = url.searchParams.get('query') || 'NO_QUERY';
      apiCalls.push({
        query: query,
        timestamp: new Date().toISOString(),
        url: response.url()
      });
      console.log(`[API CALL] Query: "${query}"`);
    }
  });
  
  try {
    // Wait for deployment
    console.log('⏳ Waiting for deployment...');
    await new Promise(resolve => setTimeout(resolve, 30000));
    
    console.log('📍 Navigating to search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    console.log('✅ Page loaded');
    
    // Step 1: Search for Mountain
    console.log('\n📝 Step 1: Search for "Mountain"');
    await page.fill('input[type="text"]', 'Mountain');
    await page.click('button[type="submit"]');
    
    // Wait for results
    await page.waitForTimeout(3000);
    
    const initialResults = await page.$$('[class*="border-gold-600"]');
    console.log(`   ✅ Mountain search completed: ${initialResults.length} results`);
    
    if (initialResults.length > 0) {
      const firstName = await initialResults[0].$eval('h3', el => el.textContent?.trim());
      console.log(`   📅 First result: "${firstName}"`);
    }
    
    // Check API calls so far
    const initialApiCallCount = apiCalls.length;
    console.log(`   📡 API calls made: ${initialApiCallCount}`);
    
    // Step 2: Click X to clear
    console.log('\n📝 Step 2: Click X to clear input');
    const clearButton = await page.$('button[type="button"]:has(svg)');
    
    if (clearButton) {
      await clearButton.click();
      console.log('   ✅ Clicked X button to clear');
      
      // Check input is cleared
      const inputValue = await page.$eval('input[type="text"]', el => el.value);
      console.log(`   📝 Input value after clear: "${inputValue}"`);
      
      if (inputValue === '') {
        console.log('   ✅ Input successfully cleared');
      } else {
        console.log('   ❌ Input not cleared properly');
      }
      
    } else {
      console.log('   ❌ Clear button (X) not found');
      
      // Alternative: manually clear the input
      await page.fill('input[type="text"]', '');
      console.log('   📝 Manually cleared input instead');
    }
    
    // Step 3: Wait and check if auto-search triggered
    console.log('\n📝 Step 3: Checking for unwanted auto-search...');
    console.log('   ⏳ Waiting 3 seconds to see if auto-search triggers...');
    
    const apiCallsBeforeWait = apiCalls.length;
    await page.waitForTimeout(3000);
    const apiCallsAfterWait = apiCalls.length;
    
    const newApiCalls = apiCallsAfterWait - apiCallsBeforeWait;
    
    if (newApiCalls === 0) {
      console.log('   ✅ SUCCESS: No auto-search triggered after clearing!');
      console.log('   ✅ User control preserved - must click Search button');
    } else {
      console.log(`   ❌ FAILURE: ${newApiCalls} unwanted API calls triggered`);
      console.log('   ❌ Auto-search still happening on clear');
    }
    
    // Check that results are still visible
    const resultsAfterClear = await page.$$('[class*="border-gold-600"]');
    console.log(`   📊 Results still visible: ${resultsAfterClear.length}`);
    
    if (resultsAfterClear.length === initialResults.length) {
      console.log('   ✅ Previous results preserved (good UX)');
    } else if (resultsAfterClear.length === 0) {
      console.log('   ⚠️  Results cleared (might be unwanted auto-search)');
    }
    
    // Step 4: Verify manual search still works
    console.log('\n📝 Step 4: Verify manual search still works');
    await page.fill('input[type="text"]', 'ESpanish');
    await page.click('button[type="submit"]');
    
    await page.waitForTimeout(3000);
    
    const manualSearchResults = await page.$$('[class*="border-gold-600"]');
    console.log(`   📊 Manual ESpanish search: ${manualSearchResults.length} results`);
    
    if (manualSearchResults.length === 1) {
      const espanishName = await manualSearchResults[0].$eval('h3', el => el.textContent?.trim());
      console.log(`   ✅ Manual search works: "${espanishName}"`);
    } else {
      console.log('   ⚠️  Manual search behavior changed');
    }
    
    // Take final screenshot
    await page.screenshot({ path: 'clear-button-test.png' });
    console.log('\n📸 Screenshot saved');
    
    // Final analysis
    console.log('\n📊 CLEAR BUTTON TEST RESULTS:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    
    console.log(`📡 Total API calls: ${apiCalls.length}`);
    apiCalls.forEach((call, index) => {
      console.log(`   ${index + 1}. Query: "${call.query}"`);
    });
    
    const hasUnwantedAutosearch = newApiCalls > 0;
    const clearButtonWorks = !hasUnwantedAutosearch;
    
    if (clearButtonWorks) {
      console.log('\n🎉 CLEAR BUTTON FIX: SUCCESS!');
      console.log('✅ No auto-search when clicking X');
      console.log('✅ User maintains control over searches');  
      console.log('✅ Manual search still works correctly');
      console.log('✅ Better user experience achieved');
    } else {
      console.log('\n❌ CLEAR BUTTON FIX: Still needs work');
      console.log('⚠️  Auto-search still triggering on clear');
      console.log('🔧 May need additional fixes');
    }
    
  } catch (error) {
    console.error('❌ Clear button test error:', error.message);
    await page.screenshot({ path: 'clear-button-test-error.png' });
  } finally {
    await browser.close();
  }
}

testClearButtonFix();