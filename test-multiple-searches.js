const { chromium } = require('playwright');

async function testMultipleSearches() {
  console.log('🚀 Testing multiple searches for CPU performance...');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // Navigate to search page
    console.log('📍 Navigating to search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    // First search: Vicci
    console.log('🔍 First search: "Vicci"');
    await page.fill('input[type="text"]', 'Vicci');
    await page.click('button[type="submit"]');
    
    // Wait for results
    await page.waitForTimeout(3000);
    console.log('✅ Vicci search completed');
    
    // Clear and second search: Stone
    console.log('🔍 Second search: "Stone" (watching for CPU spike)');
    await page.fill('input[type="text"]', '');
    await page.waitForTimeout(500);
    await page.fill('input[type="text"]', 'Stone');
    await page.click('button[type="submit"]');
    
    // Monitor for a longer period to catch CPU issues
    console.log('⏳ Monitoring for CPU issues over 10 seconds...');
    await page.waitForTimeout(10000);
    
    console.log('✅ Stone search monitoring completed');
    
    // Take screenshot of final state
    await page.screenshot({ path: 'multiple-searches.png' });
    console.log('📸 Screenshot saved');
    
  } catch (error) {
    console.error('❌ Error during multiple search test:', error.message);
    await page.screenshot({ path: 'multiple-searches-error.png' });
  } finally {
    await browser.close();
  }
}

testMultipleSearches();