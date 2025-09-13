const { chromium } = require('playwright');

async function testClearSimple() {
  console.log('🔍 Simple Clear Button Test\n');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    console.log('📍 Loading search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'domcontentloaded',
      timeout: 20000 
    });
    
    console.log('✅ Page loaded, waiting for elements...');
    await page.waitForTimeout(3000);
    
    // Check if search elements are present
    const searchInput = await page.$('input[type="text"]');
    const searchButton = await page.$('button[type="submit"]');
    
    console.log(`Search input found: ${!!searchInput}`);
    console.log(`Search button found: ${!!searchButton}`);
    
    if (searchInput && searchButton) {
      console.log('\n🔍 Testing search and clear...');
      
      // Type in search box
      await page.type('input[type="text"]', 'Mountain');
      console.log('✅ Typed "Mountain"');
      
      // Click search
      await searchButton.click();
      console.log('✅ Clicked search button');
      
      // Wait for results
      await page.waitForTimeout(4000);
      
      // Check if clear button appeared
      const clearButton = await page.$('button[aria-label="Clear"] svg, button:has(svg):not([type="submit"])');
      
      if (clearButton) {
        console.log('✅ Clear button (X) found');
        
        // Click clear button
        await clearButton.click();
        console.log('✅ Clicked clear button');
        
        // Check input is cleared
        const inputValue = await page.$eval('input[type="text"]', el => el.value);
        console.log(`Input value after clear: "${inputValue}"`);
        
        if (inputValue === '') {
          console.log('🎉 SUCCESS: Clear button works!');
          console.log('🔍 Now checking if it triggers unwanted search...');
          
          // Wait to see if search triggers
          await page.waitForTimeout(3000);
          console.log('⏳ Waited 3 seconds - if no new search happened, fix is working');
          
        } else {
          console.log('❌ Clear button did not clear input');
        }
        
      } else {
        console.log('⚠️  Clear button not found or not visible');
        
        // Try to find any button with X
        const anyXButton = await page.$('button svg[viewBox*="24"], button:has([stroke="currentColor"])');
        console.log(`Alternative X button found: ${!!anyXButton}`);
      }
      
    } else {
      console.log('❌ Required elements not found');
    }
    
    // Take screenshot
    await page.screenshot({ path: 'clear-simple-test.png' });
    console.log('\n📸 Screenshot saved for analysis');
    
    // Keep browser open for manual inspection
    console.log('\n🔧 Browser staying open for 10 seconds for manual inspection...');
    await page.waitForTimeout(10000);
    
  } catch (error) {
    console.error('❌ Simple clear test error:', error.message);
    await page.screenshot({ path: 'clear-simple-error.png' });
  } finally {
    await browser.close();
  }
}

testClearSimple();