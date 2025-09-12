const { chromium } = require('playwright');

async function testSearchMountain() {
  console.log('🚀 Starting Playwright test for Mountain search...');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Navigate to search page
    console.log('📍 Navigating to search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    console.log('✅ Search page loaded');
    
    // Wait for the search input to be visible
    console.log('🔍 Looking for search input...');
    await page.waitForSelector('input[type="text"]', { timeout: 10000 });
    
    // Type "Mountain" in the search input
    console.log('⌨️  Typing "Mountain" in search input...');
    await page.fill('input[type="text"]', 'Mountain');
    
    // Wait a moment for any debounced operations
    await page.waitForTimeout(500);
    
    // Click the search button
    console.log('🔘 Clicking search button...');
    await page.click('button[type="submit"]');
    
    // Wait for search results or loading state
    console.log('⏳ Waiting for search results...');
    await page.waitForTimeout(3000);
    
    // Check if we have results
    const resultsContainer = await page.$('.space-y-4');
    if (resultsContainer) {
      const eventCards = await page.$$('.border.border-gold-600\\/20');
      console.log(`🎯 Found ${eventCards.length} event cards in results`);
      
      if (eventCards.length > 0) {
        // Get the first result's details
        const firstResult = eventCards[0];
        const eventName = await firstResult.$eval('h3', el => el.textContent?.trim());
        const eventDetails = await firstResult.$eval('.text-white\\/60', el => el.textContent?.trim());
        
        console.log(`📅 First result: "${eventName}"`);
        console.log(`📍 Details: ${eventDetails}`);
        console.log('🎉 SUCCESS! Mountain search returned results!');
      } else {
        console.log('⚠️  No event cards found in results');
      }
    } else {
      // Check if there's a "no results" message
      const noResults = await page.$('text=No festivals found');
      if (noResults) {
        console.log('📝 No festivals found for "Mountain" search');
      } else {
        console.log('❓ Results container not found - checking page content...');
        const pageContent = await page.content();
        console.log('Page title:', await page.title());
      }
    }
    
    // Take a screenshot for debugging
    await page.screenshot({ path: 'mountain-search-result.png' });
    console.log('📸 Screenshot saved as mountain-search-result.png');
    
  } catch (error) {
    console.error('❌ Error during test:', error.message);
    
    // Take screenshot of error state
    try {
      await page.screenshot({ path: 'mountain-search-error.png' });
      console.log('📸 Error screenshot saved');
    } catch (screenshotError) {
      console.error('Could not take screenshot:', screenshotError.message);
    }
  } finally {
    await browser.close();
  }
}

testSearchMountain();