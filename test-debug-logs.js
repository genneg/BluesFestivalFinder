const { chromium } = require('playwright');

async function testDebugLogs() {
  console.log('🔍 Testing with Debug Logs to Find React State Issue...\n');
  
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  // Capture console logs
  const logs = [];
  page.on('console', msg => {
    logs.push({
      type: msg.type(),
      text: msg.text(),
      timestamp: new Date().toISOString()
    });
    console.log(`[BROWSER ${msg.type().toUpperCase()}] ${msg.text()}`);
  });
  
  try {
    // Wait for deployment
    console.log('⏳ Waiting for debug deployment...');
    await new Promise(resolve => setTimeout(resolve, 30000));
    
    console.log('📍 Navigating to search page...');
    await page.goto('https://blues-festival-finder.vercel.app/search', { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    console.log('🔍 Testing Vicci search with debug logging...');
    await page.fill('input[type="text"]', 'Vicci');
    
    console.log('🔘 Clicking search button...');
    await page.click('button[type="submit"]');
    
    // Wait for logs and results
    console.log('⏳ Waiting for debug logs and results...');
    await page.waitForTimeout(5000);
    
    // Check what happened
    const hasResults = await page.$('text=Search Results');
    const hasNoResults = await page.$('text=No festivals found');
    
    if (hasResults) {
      const eventCards = await page.$$('[class*="border-gold-600"]');
      console.log(`\n📊 Frontend shows: ${eventCards.length} results`);
    } else if (hasNoResults) {
      console.log('\n📊 Frontend shows: No results found');
    } else {
      console.log('\n📊 Frontend shows: Unknown state');
    }
    
    // Summary of logs
    console.log('\n📋 CONSOLE LOGS ANALYSIS:');
    const searchLogs = logs.filter(log => 
      log.text.includes('Search called') || 
      log.text.includes('filters:') ||
      log.text.includes('Built params:')
    );
    
    if (searchLogs.length > 0) {
      console.log('Debug logs captured:');
      searchLogs.forEach((log, index) => {
        console.log(`${index + 1}. [${log.type}] ${log.text}`);
      });
    } else {
      console.log('❌ No debug logs found - deployment might not be ready');
    }
    
    // Look for specific patterns
    const queryLogs = logs.filter(log => log.text.includes('query'));
    if (queryLogs.length > 0) {
      console.log('\nQuery-related logs:');
      queryLogs.forEach(log => console.log(`   ${log.text}`));
    }
    
    // Take screenshot
    await page.screenshot({ path: 'debug-logs-test.png' });
    console.log('\n📸 Screenshot with debug logs saved');
    
    // Open DevTools to see logs manually
    console.log('\n🔧 Check browser DevTools Console tab for complete logs');
    await page.waitForTimeout(5000); // Keep browser open for manual inspection
    
  } catch (error) {
    console.error('❌ Debug test error:', error.message);
  } finally {
    await browser.close();
  }
}

testDebugLogs();