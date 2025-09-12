const { chromium } = require('playwright');

async function testMountainSearchComplete() {
  console.log('🚀 Starting complete Mountain search test...');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Navigate to search page
    console.log('📍 Navigating to search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // Type "Mountain" in the search input
    console.log('⌨️  Typing "Mountain" in search input...');
    await page.fill('input[type="text"]', 'Mountain');
    
    // Click the search button
    console.log('🔘 Clicking search button...');
    await page.click('button[type="submit"]');
    
    // Wait for loading to disappear (spinner)
    console.log('⏳ Waiting for search to complete...');
    
    try {
      // Wait for either results or no results message
      await page.waitForSelector('.space-y-4, text=No festivals found, text=Search Results', { timeout: 15000 });
      
      // Check if we have the search results section
      const searchResults = await page.$('text=Search Results');
      if (searchResults) {
        console.log('✅ Found "Search Results" heading');
        
        // Count event cards
        const eventCards = await page.$$('[class*="border-gold-600"]');
        console.log(`🎯 Found ${eventCards.length} event results`);
        
        if (eventCards.length > 0) {
          // Get details of the first result
          const firstEvent = eventCards[0];
          const eventName = await firstEvent.$eval('h3', el => el.textContent?.trim());
          const eventLocation = await firstEvent.$eval('[class*="text-white/60"]', el => el.textContent?.trim());
          
          console.log(`📅 First result: "${eventName}"`);
          console.log(`📍 Location: ${eventLocation}`);
          
          // Check if it contains "Mountain"
          if (eventName && eventName.toLowerCase().includes('mountain')) {
            console.log('🎉 SUCCESS! Found Mountain-related festival!');
          } else {
            console.log(`⚠️  Event name doesn't contain "Mountain": ${eventName}`);
          }
        }
      } else {
        // Check for no results
        const noResults = await page.$('text=No festivals found');
        if (noResults) {
          console.log('📝 No festivals found for "Mountain" search');
          console.log('🔍 This might be expected if no Mountain festivals exist in database');
        } else {
          console.log('❓ Unexpected page state - checking content...');
          
          // Check if still loading
          const loading = await page.$('.spinner');
          if (loading) {
            console.log('⏳ Still loading... waiting longer...');
            await page.waitForTimeout(5000);
            
            // Try again after longer wait
            const finalResults = await page.$('text=Search Results');
            if (finalResults) {
              console.log('✅ Results loaded after extended wait');
            }
          }
        }
      }
      
    } catch (waitError) {
      console.log('⏰ Timeout waiting for results - checking current state...');
      
      // Check what's currently visible
      const isLoading = await page.$('.spinner');
      const hasActiveFilters = await page.$('text=Active Filters');
      
      console.log('Loading spinner visible:', !!isLoading);
      console.log('Active filters visible:', !!hasActiveFilters);
      
      if (hasActiveFilters) {
        const filterText = await hasActiveFilters.textContent();
        console.log('Active filter content:', filterText);
      }
    }
    
    // Take final screenshot
    await page.screenshot({ path: 'mountain-search-final.png' });
    console.log('📸 Final screenshot saved');
    
  } catch (error) {
    console.error('❌ Error during test:', error.message);
    await page.screenshot({ path: 'mountain-search-error-final.png' });
  } finally {
    await browser.close();
  }
}

testMountainSearchComplete();