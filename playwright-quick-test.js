const { chromium } = require('playwright');

(async () => {
  console.log('🎭 Test rapido login SwingRadar dopo configurazione NEXTAUTH_SECRET...');

  const browser = await chromium.launch({
    headless: false,
    slowMo: 500
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });

  const page = await context.newPage();

  try {
    // 1. Naviga alla pagina di login
    console.log('📍 Navigazione alla pagina login...');
    await page.goto('https://www.swingradar.com/auth/signin');

    // 2. Inserisci credenziali
    console.log('🔑 Inserimento credenziali...');
    await page.fill('input[type="email"]', 'test@swingradar.com');
    await page.fill('input[type="password"]', 'Test123!');

    // 3. Esegui login
    console.log('🚀 Esecuzione login...');
    await page.click('button[type="submit"]');

    // 4. Attendi e verifica
    console.log('⏳ Attesa completamento login...');
    await page.waitForTimeout(5000);

    // 5. Controlla risultati
    const currentUrl = page.url();
    console.log('📍 URL corrente:', currentUrl);

    // Controlla cookie
    const cookies = await context.cookies();
    const sessionCookies = cookies.filter(c =>
      c.name.includes('session') ||
      c.name.includes('next-auth') ||
      c.name.includes('swingradar')
    );

    console.log(`🔐 Session cookie trovati: ${sessionCookies.length}`);
    sessionCookies.forEach(cookie => {
      console.log(`   - ${cookie.name}: ${cookie.domain} (secure: ${cookie.secure})`);
    });

    // 6. Verifica successo
    if (currentUrl.includes('dashboard') || sessionCookies.length > 2) {
      console.log('✅ LOGIN RIUSCITO - Sessione persistente!');

      // Screenshot di successo
      await page.screenshot({ path: 'login-success.png', fullPage: true });
      console.log('📸 Screenshot di successo salvato');

      // Prova navigazione
      if (currentUrl.includes('signin') === false) {
        console.log('✅ Redirect funzionante!');
      }

    } else {
      console.log('❌ LOGIN FALLITO - Problema persistente');

      // Screenshot di errore
      await page.screenshot({ path: 'login-failed.png', fullPage: true });
      console.log('📸 Screenshot di errore salvato');
    }

    // 7. Test session API
    console.log('🧪 Test session API...');
    try {
      const sessionResponse = await page.evaluate(async () => {
        const response = await fetch('/api/auth/session');
        return await response.json();
      });

      console.log('📡 Session API response:', JSON.stringify(sessionResponse, null, 2));

      if (sessionResponse.user) {
        console.log('✅ Session API funzionante - Utente autenticato!');
      } else {
        console.log('❌ Session API non ritorna utente');
      }

    } catch (apiError) {
      console.log('❌ Errore session API:', apiError.message);
    }

  } catch (error) {
    console.error('❌ Errore test:', error.message);

    try {
      await page.screenshot({ path: 'test-error.png', fullPage: true });
      console.log('📸 Screenshot errore salvato');
    } catch (screenshotError) {
      // Ignore screenshot error
    }

  } finally {
    await browser.close();
    console.log('🔚 Test completato');
  }
})();