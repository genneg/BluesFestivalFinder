const { chromium } = require('playwright');

async function testStonePerformance() {
  console.log('🚀 Testing Stone search performance after fixes...');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    console.log('📍 Navigating to search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // First search: Vicci (to simulate user's workflow)
    console.log('🔍 Step 1: Search for "Vicci"');
    await page.fill('input[type="text"]', 'Vicci');
    await page.click('button[type="submit"]');
    
    // Wait for results
    console.log('⏳ Waiting for Vicci results...');
    await page.waitForTimeout(3000);
    
    // Check if we got results for Vicci
    const vicciResults = await page.$$('[class*="border-gold-600"]');
    console.log(`✅ Vicci search found ${vicciResults.length} results`);
    
    // Clear and search for Stone
    console.log('🔍 Step 2: Clear and search for "Stone"');
    await page.fill('input[type="text"]', '');
    await page.waitForTimeout(200);
    await page.fill('input[type="text"]', 'Stone');
    await page.click('button[type="submit"]');
    
    // Monitor Stone search with shorter timeout to catch issues faster
    console.log('⏳ Monitoring Stone search performance...');
    let stoneCompleted = false;
    let attempts = 0;
    const maxAttempts = 10; // 10 seconds total
    
    while (attempts < maxAttempts && !stoneCompleted) {
      await page.waitForTimeout(1000);
      attempts++;
      
      // Check if results appeared or error occurred
      const hasResults = await page.$('text=Search Results');
      const hasError = await page.$('text=Search failed');
      const hasNoResults = await page.$('text=No festivals found');
      
      if (hasResults || hasError || hasNoResults) {
        stoneCompleted = true;
        console.log(`✅ Stone search completed in ${attempts} seconds`);
        
        if (hasResults) {
          const stoneResults = await page.$$('[class*="border-gold-600"]');
          console.log(`🎯 Stone search found ${stoneResults.length} results`);
        } else if (hasError) {
          console.log('❌ Stone search returned an error');
        } else {
          console.log('📝 Stone search found no results');
        }
        break;
      }
      
      if (attempts % 2 === 0) {
        console.log(`⏳ Still waiting... (${attempts}s elapsed)`);
      }
    }
    
    if (!stoneCompleted) {
      console.log('⚠️  Stone search did not complete within 10 seconds');
      // Check if it's still loading
      const isLoading = await page.$('.spinner');
      console.log(`Loading spinner visible: ${!!isLoading}`);
    }
    
    // Take screenshot
    await page.screenshot({ path: 'stone-performance-test.png' });
    console.log('📸 Screenshot saved');
    
    // Final assessment
    if (stoneCompleted && attempts <= 5) {
      console.log('🎉 PERFORMANCE TEST PASSED - Stone search completed quickly!');
    } else if (stoneCompleted) {
      console.log('⚠️  PERFORMANCE WARNING - Stone search was slow but completed');
    } else {
      console.log('❌ PERFORMANCE TEST FAILED - Stone search timed out');
    }
    
  } catch (error) {
    console.error('❌ Error during performance test:', error.message);
    await page.screenshot({ path: 'stone-performance-error.png' });
  } finally {
    await browser.close();
  }
}

testStonePerformance();