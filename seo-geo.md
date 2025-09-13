# Blues Festival Finder - SEO/GEO Optimization Project

## Project Overview
Sito web per la ricerca di festival blues: https://blues-festival-finder.vercel.app/
Obiettivo: Implementare ottimizzazioni SEO e GEO (Generative Engine Optimization) seguendo un piano in 5 fasi.

## Tech Stack
- Framework: Next.js / React (da verificare nel codebase)
- Language: JavaScript/TypeScript
- Styling: TailwindCSS (presumibilmente)
- Hosting: Vercel
- CMS/Data: Da identificare durante l'audit

## Project Structure
- `/public`: File statici (robots.txt, sitemap.xml, immagini)
- `/src`: Codice sorgente principale
- `/pages` o `/app`: Pagine del sito
- `/components`: Componenti React riutilizzabili
- `/lib`: Utilities e configurazioni
- `/styles`: File CSS/styling

## SEO/GEO Optimization Goals
1. **Fase 1**: Audit tecnico e mappatura contenuti
2. **Fase 2**: Implementazione basi tecniche SEO
3. **Fase 3**: Creazione contenuti ottimizzati E-E-A-T
4. **Fase 4**: Link building e autorevolezza
5. **Fase 5**: Monitoraggio continuo

## SEO Technical Requirements
- File robots.txt ottimizzato
- Sitemap.xml completa e aggiornata
- Meta tag (title, description) unici per ogni pagina
- Struttura heading corretta (H1, H2, H3)
- Schema Markup: Event, Organization, Person, FAQPage
- URL SEO-friendly e clean
- Ottimizzazione performance (Core Web Vitals)
- Mobile-first responsive design
- Alt text per tutte le immagini

## GEO (Generative Engine Optimization) Requirements
- File llms.txt per documentazione LLM
- Contenuti strutturati per AI search
- FAQ ottimizzate per query dirette
- Risposte concise e ben organizzate
- Linguaggio naturale e conversazionale
- Dati strutturati accessibili (non solo via JS)

## Content Strategy
- Homepage ottimizzata per "blues dance festivals 2025"
- Pagina /events con listing completo festival
- Sezione /faq con domande comuni
- Pagine /teachers e /musicians (future)
- Blog/Resources per autorevolezza
- Pagine dedicate per ogni festival con schema Event

## Code Style & SEO Best Practices
- Componenti con nomi semantici per SEO
- Lazy loading per immagini e contenuti non critici
- Structured data implementation con JSON-LD
- Internal linking strategy nei componenti
- Meta tag dinamici per pagine evento
- Breadcrumb navigation per UX e SEO

## Commands to Remember
- `npm run dev`: Development server
- `npm run build`: Production build
- `npm run lint`: Code linting
- `npm run test`: Run tests (se presenti)
- `vercel --prod`: Deploy to production

## Working Relationship
- Start each major task by creating a detailed implementation plan
- Break complex SEO tasks into smaller, manageable steps
- Always verify technical implementations (robots.txt, sitemap, schema)
- Test all SEO features before marking complete
- Document SEO decisions and reasoning
- Ask for clarification on content strategy if needed

## Do Not
- Do not implement changes that could break existing functionality
- Do not remove existing content without approval
- Do not add Schema Markup without proper validation
- Do not modify URL structure without creating redirects
- Do not deploy changes without testing locally first