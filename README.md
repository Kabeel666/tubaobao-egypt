# توباباو مصر · TuBaoBao Egypt

Professional B2B factory website for interior PVC wall slats and marble/wood-look sheets.

**Brand:** توباباو مصر / TuBaoBao Egypt  
**Factory:** Plot 37, 5th Industrial Zone, 6th of October City  
**Hours:** 8am–8pm except Friday  
**WhatsApp:** [01116208881](https://wa.me/201116208881)

## Rich catalog branch (`feat/rich-factory-data-2026-10-01`)

This branch expands factory-style product and business data while keeping the pro UI shell (nav, WhatsApp, SEO):

| Dataset | Approx. count |
|---------|----------------|
| Finish codes (wood / linen / marble) | ~47 |
| Large sheet codes | ~29 |
| Profiles | ~10 |
| Space use-cases | ~20 |
| Egyptian cities / zones | ~44 |
| Accessories | ~12 |
| Packing items | ~10 |
| FAQ (AR + EN) | 17 each |
| Project text sketches | 6 (labelled as planning sketches, not real photos) |

Screen swatch colours are **approximate**; factory samples remain the reference. Prices are never published.

## Products
- PVC wall slats 16 / 18 / 20 × 280 cm (+ additional profiles)
- Large sheets 1.22 × 2.80 m × 5 mm
- Foam board & trims
- Export: Libya, Sudan + Egypt nationwide (after terms)
- Prices: quote on request (never published)

## Stack
Static HTML / CSS / JS — bilingual AR (RTL) / EN. Data lives mainly in `data.js`; UI boot in `boot.js` + `enhance.js`.

## Deploy
- **Production (when linked):** https://tubaobao-egypt-live.vercel.app/
- **Preview:** open a PR against `main` — Vercel may auto-preview if the project is linked to this repo
- Do not merge until visual review is done

## Local
Open `index.html` or serve the folder with any static server.

## Hard rules (content)
- Phone / WhatsApp only: `01116208881` / `wa.me/201116208881`
- No Wang Fu / wangfuegypt references
- No fake certifications, ISO badges, ratings, or client logos
- No published prices
