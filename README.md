# SAITEK SARL — Construction Métallique & Charpente

Site vitrine pour SAITEK SARL (Benslimane, Maroc) — Fabrication bennes, remorques, citernes, carrosseries.

- `index.html` — page principale (259 LOC, semantic, JSON-LD)
- `css/tailwind.css` — build purgé 25KB (via `npm run build`)
- `css/input.css` — source Tailwind + custom layers
- `js/main.js` / `js/config.js` — modules ES (dark mode, nav, gallery, form)
- `assets/images/` — à remplir (WebP optimisés)

## Dev
```bash
export PATH="/tmp/node/bin:$PATH" # if Node in /tmp
npm install
npm run dev   # watch tailwind
npm run build # minify
python3 -m http.server 8000
# http://localhost:8000
```

## Infos Société
Zone d'activité Benslimane Lot B7 N°1/2/3/4 — 33.5993461,-7.1424196 — RC 4499 ICE 001615703000023
