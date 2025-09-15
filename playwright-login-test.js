const { chromium } = require('playwright');

(async () => {
  console.log('🎭 Avvio test di login SwingRadar con Playwright...');

  // Launch browser
  const browser = await chromium.launch({
    headless: false, // Visualizza il browser per debug
    slowMo: 500 // Rallenta le azioni per vedere cosa succede
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 }
  });

  const page = await context.newPage();

  try {
    // 1. Naviga alla pagina di login
    console.log('📍 Navigando a https://www.swingradar.com/auth/signin...');
    await page.goto('https://www.swingradar.com/auth/signin');

    // Attendi che la pagina si carichi completamente
    await page.waitForSelector('input[type="email"]');
    console.log('✅ Pagina di login caricata con successo');

    // 2. Inserisci le credenziali di test
    console.log('🔑 Inserimento credenziali di test...');
    await page.fill('input[type="email"]', 'test@swingradar.com');
    await page.fill('input[type="password"]', 'Test123!');

    // 3. Esegui il login
    console.log('🚀 Esecuzione del login...');
    await page.click('button[type="submit"]');

    // Attendi il redirect o la comparsa della Dashboard
    console.log('⏳ In attesa del completamento del login...');

    // Controlla se il login è andato a buon fine
    await Promise.race([
      page.waitForURL('**/dashboard**', { timeout: 10000 }),
      page.waitForSelector('text=Dashboard', { timeout: 10000 }),
      page.waitForSelector('[href*="dashboard"]', { timeout: 10000 })
    ]);

    console.log('🎉 Login completato con successo!');

    // 4. Verifica la sessione
    const currentUrl = page.url();
    console.log('📍 URL corrente:', currentUrl);

    // Controlla i cookie
    const cookies = await context.cookies();
    const sessionCookie = cookies.find(cookie => cookie.name.includes('session'));

    if (sessionCookie) {
      console.log('✅ Session cookie trovato:', sessionCookie.name);
      console.log('   - Dominio:', sessionCookie.domain);
      console.log('   - Scadenza:', new Date(sessionCookie.expires * 1000).toLocaleString());
      console.log('   - Secure:', sessionCookie.secure);
      console.log('   - HttpOnly:', sessionCookie.httpOnly);
    } else {
      console.log('❌ Nessun session cookie trovato');
    }

    // 5. Verifica la presenza di elementi della Dashboard
    console.log('🔍 Verifica elementi Dashboard...');

    // Screenshot per verifica visiva
    await page.screenshot({ path: 'swingradar-dashboard.png', fullPage: true });
    console.log('📸 Screenshot salvato come swingradar-dashboard.png');

    // Attendi qualche secondo per verificare stabilità
    await page.waitForTimeout(3000);

    // Verifica se l'utente è ancora loggato dopo 3 secondi
    const finalUrl = page.url();
    console.log('📍 URL finale dopo 3 secondi:', finalUrl);

    if (finalUrl.includes('dashboard') || finalUrl.includes('signin') === false) {
      console.log('✅ Sessione persistente - Login riuscito!');
    } else {
      console.log('❌ Sessione non persistente - Problema di login');
    }

    // 6. Test di navigazione
    console.log('🧪 Test di navigazione nella Dashboard...');

    try {
      // Cerca elementi tipici della dashboard
      const dashboardElements = await page.$$([
        'text=Dashboard',
        'text=Your Studio',
        '[href*="profile"]',
        '[href*="following"]',
        'nav a[href*="dashboard"]'
      ]);

      console.log(`📊 Trovati ${dashboardElements.length} elementi Dashboard`);

      // Se ci sono elementi dashboard, il login è riuscito
      if (dashboardElements.length > 0) {
        console.log('✅ Dashboard accessibile - Test PASSATO!');
      } else {
        console.log('⚠️  Dashboard non completamente caricata - Test PARZIALE');
      }

    } catch (navError) {
      console.log('❌ Errore durante la navigazione:', navError.message);
    }

  } catch (error) {
    console.error('❌ Errore durante il test:', error.message);

    // Screenshot per debug
    await page.screenshot({ path: 'swingradar-error.png', fullPage: true });
    console.log('📸 Screenshot di errore salvato come swingradar-error.png');

  } finally {
    // Chiudi il browser
    await browser.close();
    console.log('🔚 Test completato - Browser chiuso');
  }
})();