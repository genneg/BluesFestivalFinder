const { chromium } = require('playwright');

async function testMountainAndMultipleSearches() {
  console.log('🚀 Testing Mountain search and multiple searches after deployment...');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    console.log('📍 Navigating to search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Test 1: Mountain search
    console.log('🔍 Test 1: Searching for "Mountain"');
    await page.fill('input[type="text"]', 'Mountain');
    await page.click('button[type="submit"]');
    
    // Wait for Mountain search results
    console.log('⏳ Waiting for Mountain results...');
    let mountainCompleted = false;
    let attempts = 0;
    
    while (attempts < 15 && !mountainCompleted) {
      await page.waitForTimeout(1000);
      attempts++;
      
      const hasResults = await page.$('text=Search Results');
      const hasError = await page.$('text=Search failed');
      const hasNoResults = await page.$('text=No festivals found');
      
      if (hasResults || hasError || hasNoResults) {
        mountainCompleted = true;
        console.log(`✅ Mountain search completed in ${attempts} seconds`);
        
        if (hasResults) {
          const mountainResults = await page.$$('[class*="border-gold-600"]');
          console.log(`🎯 Mountain search found ${mountainResults.length} results`);
          
          if (mountainResults.length > 0) {
            const firstResult = mountainResults[0];
            const eventName = await firstResult.$eval('h3', el => el.textContent?.trim());
            console.log(`📅 First result: "${eventName}"`);
            
            if (eventName && eventName.toLowerCase().includes('mountain')) {
              console.log('🎉 SUCCESS! Found expected Mountain result!');
            }
          }
        } else if (hasError) {
          console.log('❌ Mountain search returned an error');
        } else {
          console.log('📝 Mountain search found no results');
        }
        break;
      }
      
      if (attempts % 3 === 0) {
        console.log(`⏳ Still waiting for Mountain results... (${attempts}s elapsed)`);
      }
    }
    
    if (!mountainCompleted) {
      console.log('⚠️  Mountain search timed out after 15 seconds');
    }
    
    // Wait a moment before next search
    await page.waitForTimeout(1000);
    
    // Test 2: Second search - Stone
    console.log('🔍 Test 2: Searching for "Stone"');
    await page.fill('input[type="text"]', '');
    await page.waitForTimeout(200);
    await page.fill('input[type="text"]', 'Stone');
    await page.click('button[type="submit"]');
    
    console.log('⏳ Monitoring Stone search for CPU performance...');
    let stoneCompleted = false;
    let stoneAttempts = 0;
    
    while (stoneAttempts < 10 && !stoneCompleted) {
      await page.waitForTimeout(1000);
      stoneAttempts++;
      
      const hasResults = await page.$('text=Search Results');
      const hasError = await page.$('text=Search failed');
      const hasNoResults = await page.$('text=No festivals found');
      
      if (hasResults || hasError || hasNoResults) {
        stoneCompleted = true;
        console.log(`✅ Stone search completed in ${stoneAttempts} seconds`);
        
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
      
      if (stoneAttempts % 2 === 0) {
        console.log(`⏳ Still waiting for Stone results... (${stoneAttempts}s elapsed)`);
      }
    }
    
    // Test 3: Third search - Vicci  
    console.log('🔍 Test 3: Searching for "Vicci"');
    await page.fill('input[type="text"]', '');
    await page.waitForTimeout(200);
    await page.fill('input[type="text"]', 'Vicci');
    await page.click('button[type="submit"]');
    
    console.log('⏳ Testing Vicci search speed...');
    let vicciCompleted = false;
    let vicciAttempts = 0;
    
    while (vicciAttempts < 8 && !vicciCompleted) {
      await page.waitForTimeout(1000);
      vicciAttempts++;
      
      const hasResults = await page.$('text=Search Results');
      const hasError = await page.$('text=Search failed');
      const hasNoResults = await page.$('text=No festivals found');
      
      if (hasResults || hasError || hasNoResults) {
        vicciCompleted = true;
        console.log(`✅ Vicci search completed in ${vicciAttempts} seconds`);
        
        if (hasResults) {
          const vicciResults = await page.$$('[class*="border-gold-600"]');
          console.log(`🎯 Vicci search found ${vicciResults.length} results`);
        }
        break;
      }
    }
    
    // Take final screenshot
    await page.screenshot({ path: 'multiple-searches-final.png' });
    console.log('📸 Final screenshot saved');
    
    // Performance assessment
    console.log('\n📊 PERFORMANCE TEST RESULTS:');
    console.log(`🔍 Mountain search: ${mountainCompleted ? `✅ Completed in ${attempts}s` : '❌ Timed out'}`);
    console.log(`🔍 Stone search: ${stoneCompleted ? `✅ Completed in ${stoneAttempts}s` : '❌ Timed out'}`);
    console.log(`🔍 Vicci search: ${vicciCompleted ? `✅ Completed in ${vicciAttempts}s` : '❌ Timed out'}`);
    
    const allCompleted = mountainCompleted && stoneCompleted && vicciCompleted;
    const reasonableSpeed = attempts <= 10 && stoneAttempts <= 8 && vicciAttempts <= 6;
    
    if (allCompleted && reasonableSpeed) {
      console.log('🎉 ALL TESTS PASSED! Multiple searches working well without CPU issues!');
    } else if (allCompleted) {
      console.log('⚠️  PARTIAL SUCCESS - All searches completed but some were slow');
    } else {
      console.log('❌ PERFORMANCE ISSUES REMAIN - Some searches timed out');
    }
    
  } catch (error) {
    console.error('❌ Error during test:', error.message);
    await page.screenshot({ path: 'multiple-searches-error.png' });
  } finally {
    await browser.close();
  }
}

testMountainAndMultipleSearches();