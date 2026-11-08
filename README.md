# Bible Solitaire — website

Marketing site for the game, built with Next.js (App Router, static export). Pages:

- `/` — landing page (hero, how to play, cards, boosters, features, Church-year themes, Pax, download)
- `/privacy/` — privacy policy (required by Google Play / App Store)
- `/support/` — support & FAQ
- `/app-ads.txt` — AdMob authorised sellers file (fill in the publisher ID)

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

## Edit

- Links, studio name, support email, store URLs: `lib/site.ts`.
  Set `googlePlayUrl` / `appStoreUrl` once the listings are live — each badge switches from "Coming soon" to a live link.
- Copy and sections: `app/page.tsx`, `app/privacy/page.tsx`, `app/support/page.tsx`.
- Styling: `app/globals.css` (design tokens at the top).
- Images: `public/images/` (exported from the Holy Cards design: Pax, picture cards, boosters, icon). Store badges: `public/badges/` (official Apple/Google assets).

## Deploy

`npm run build` writes a fully static site to `out/`. Upload that folder to any static host
(Firebase Hosting, Netlify, Cloudflare Pages, GitHub Pages). Remember to serve `app-ads.txt` at the domain root.
