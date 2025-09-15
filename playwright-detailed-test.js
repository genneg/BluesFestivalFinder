const { chromium } = require('playwright');

(async () => {
  console.log('🎭 Avvio test dettagliato SwingRadar login...');

  const browser = await chromium.launch({
    headless: false,
    slowMo: 800,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true // Per debug
  });

  const page = await context.newPage();

  // Abilita logging della rete
  await context.route('**/*', route => {
    const request = route.request();
    console.log(`🌐 ${request.method()} ${request.url()}`);
    route.continue();
  });

  // Monitora risposte
  page.on('response', response => {
    const status = response.status();
    const url = response.url();
    if (url.includes('auth') || status >= 400) {
      console.log(`📡 Response: ${status} ${url}`);
    }
  });

  // Monitora console del browser
  page.on('console', msg => {
    console.log(`🖥️  Browser console: ${msg.type()}: ${msg.text()}`);
  });

  // Monitora errori di pagina
  page.on('pageerror', error => {
    console.log(`❌ Page error: ${error.message}`);
  });

  try {
    // 1. Naviga alla pagina di login
    console.log('📍 Step 1: Navigazione alla pagina login...');
    await page.goto('https://www.swingradar.com/auth/signin', {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    // 2. Analisi della pagina
    console.log('🔍 Step 2: Analisi struttura pagina...');
    const pageContent = await page.content();

    // Cerca il form di login
    const loginForm = await page.$('form');
    if (loginForm) {
      console.log('✅ Form di login trovato');

      // Analizza campi del form
      const emailInput = await page.$('input[type="email"]');
      const passwordInput = await page.$('input[type="password"]');
      const submitButton = await page.$('button[type="submit"]');

      console.log(`📋 Campi trovati: Email=${!!emailInput}, Password=${!!passwordInput}, Submit=${!!submitButton}`);

      if (emailInput && passwordInput && submitButton) {
        console.log('✅ Tutti i campi del form sono presenti');

        // 3. Inserimento credenziali
        console.log('🔑 Step 3: Inserimento credenziali...');
        await emailInput.fill('test@swingradar.com');
        await passwordInput.fill('Test123!');

        // Verifica valori inseriti
        const emailValue = await emailInput.inputValue();
        const passwordValue = await passwordInput.inputValue();
        console.log(`📝 Valori inseriti: Email=${emailValue}, Password=${passwordValue ? '***' : ''}`);

        // 4. Screenshot prima del submit
        await page.screenshot({ path: 'before-submit.png', fullPage: true });
        console.log('📸 Screenshot prima del submit salvato');

        // 5. Submit del form
        console.log('🚀 Step 4: Submit del form...');

        // Ascolta le richieste network
        const apiResponses = [];
        page.on('response', response => {
          if (response.url().includes('/api/auth')) {
            apiResponses.push(response);
            console.log(`🎯 API Response: ${response.status()} ${response.url()}`);
          }
        });

        // Click submit con timeout
        await Promise.all([
          submitButton.click(),
          page.waitForTimeout(2000) // Attende 2 secondi per il submit
        ]);

        console.log('✅ Form submit eseguito');

        // 6. Attendi risposta
        console.log('⏳ Step 5: Attesa risposta...');

        try {
          // Attendi cambiamenti nella pagina
          await page.waitForTimeout(5000);

          // Controlla URL corrente
          const currentUrl = page.url();
          console.log(`📍 URL corrente: ${currentUrl}`);

          // Controlla se c'è stato un redirect
          if (currentUrl !== 'https://www.swingradar.com/auth/signin') {
            console.log('🔄 Redirect rilevato!');
          } else {
            console.log('⚠️  Nessun redirect - URL rimasto sulla pagina login');
          }

          // 7. Analizza risultati
          console.log('🔍 Step 6: Analisi risultati...');

          // Controlla errori visibili
          const errorMessages = await page.$$eval(
            '[class*="error"], [class*="Error"], .text-red-500, .error-message',
            elements => elements.map(el => el.textContent?.trim()).filter(text => text)
          );

          if (errorMessages.length > 0) {
            console.log('❌ Messaggi di errore trovati:', errorMessages);
          } else {
            console.log('✅ Nessun messaggio di errore visibile');
          }

          // Controlla cookie
          const cookies = await context.cookies();
          console.log(`🍪 Cookie trovati: ${cookies.length}`);

          const sessionCookies = cookies.filter(c =>
            c.name.includes('session') ||
            c.name.includes('next-auth') ||
            c.name.includes('swingradar')
          );

          console.log(`🔐 Session cookie: ${sessionCookies.length}`);
          sessionCookies.forEach(cookie => {
            console.log(`   - ${cookie.name}: ${cookie.domain} (secure: ${cookie.secure})`);
          });

          // 8. Screenshot finale
          await page.screenshot({ path: 'after-submit.png', fullPage: true });
          console.log('📸 Screenshot dopo il submit salvato');

          // 9. Analisi HTML della pagina
          const finalHTML = await page.content();

          // Cerca indicatori di successo
          const successIndicators = [
            'dashboard',
            'logout',
            'profile',
            'welcome',
            'signed in'
          ];

          const foundIndicators = successIndicators.filter(indicator =>
            finalHTML.toLowerCase().includes(indicator)
          );

          console.log(`✅ Indicatori di successo trovati: ${foundIndicators.join(', ')}`);

          // 10. Test click su eventuali link
          console.log('🧪 Step 7: Test click su link dashboard...');

          const dashboardLinks = await page.$$('[href*="dashboard"], a:has-text("Dashboard"), .dashboard-link');

          if (dashboardLinks.length > 0) {
            console.log(`🔗 Trovati ${dashboardLinks.length} link dashboard`);

            // Prova a cliccare il primo link dashboard
            try {
              await dashboardLinks[0].click();
              await page.waitForTimeout(3000);
              console.log('✅ Click su link dashboard eseguito');

              const dashboardUrl = page.url();
              console.log(`📍 URL dopo click dashboard: ${dashboardUrl}`);

            } catch (clickError) {
              console.log(`❌ Errore click dashboard: ${clickError.message}`);
            }
          } else {
            console.log('⚠️  Nessun link dashboard trovato');
          }

        } catch (waitError) {
          console.log(`❌ Errore durante attesa: ${waitError.message}`);
        }

      } else {
        console.log('❌ Campi del form incompleti');
      }
    } else {
      console.log('❌ Form di login non trovato');
      console.log('🔍 Analisi HTML per trovare form...');

      // Cerca qualsiasi form sulla pagina
      const allForms = await page.$$('form');
      console.log(`📋 Trovati ${allForms.length} form totali`);

      // Cerca input email e password
      const allEmailInputs = await page.$$('input[type="email"], input[name*="email"], input[id*="email"]');
      const allPasswordInputs = await page.$$('input[type="password"], input[name*="password"], input[id*="password"]');

      console.log(`📧 Input email: ${allEmailInputs.length}`);
      console.log(`🔒 Input password: ${allPasswordInputs.length}`);

      // Salva screenshot per analisi
      await page.screenshot({ path: 'page-analysis.png', fullPage: true });
    }

  } catch (error) {
    console.error('❌ Errore critico del test:', error);
    console.error('Stack:', error.stack);

    // Screenshot di errore
    try {
      await page.screenshot({ path: 'critical-error.png', fullPage: true });
      console.log('📸 Screenshot di errore critico salvato');
    } catch (screenshotError) {
      console.log('❌ Impossibile salvare screenshot:', screenshotError.message);
    }
  } finally {
    await browser.close();
    console.log('🔚 Test completato');
  }
})();