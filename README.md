# Contrails & Cordite — A Dossier of WWII Aircraft

A comprehensive Next.js 14 reference site cataloguing 32 of the most significant warplanes of the Second World War, with photographs, full specifications, operational histories, a timeline, and theatre overviews.

## Setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

> **Note:** The build environment used to generate this project had network access disabled, so `node_modules` is **not** included — you'll need to run `npm install` yourself before the first `npm run dev`.

## What's Inside

- **32 aircraft entries** across 6 nations (UK, US, USSR, Germany, Japan, Italy), each with specifications, 3-paragraph operational history, notable operators, theatres, and tags
- **Aircraft index** (`/aircraft`) with filter-by-side (Allied / Axis), filter-by-nation, and free-text search
- **Aircraft detail pages** (`/aircraft/[slug]`) — statically generated at build time from the data file
- **Timeline** (`/timeline`) — 25 key aviation events, 1935–1945
- **Theatres** (`/theaters`) — five major theatres with iconic-aircraft cross-links
- **About** (`/about`) — project colophon

## Tech Stack

- **Next.js 14.2.5** (App Router)
- **TypeScript 5**
- **Tailwind CSS 3.4** with a custom military/editorial palette
- **Google Fonts** — Oswald, Playfair Display, Inter, JetBrains Mono

## Image Strategy

All aircraft photographs load via Wikimedia Commons' stable `Special:FilePath` endpoint:

```
https://commons.wikimedia.org/wiki/Special:FilePath/<filename>?width=1200
```

This means any Wikimedia Commons filename works directly — no hotlinking to `upload.wikimedia.org` hashes that can change. The helper `wm(filename)` in `lib/aircraft.ts` builds these URLs.

### If an image 404s

The filenames in `lib/aircraft.ts` are best-effort matches against Commons. If any specific image fails to resolve:

1. Find a working replacement — the Wikipedia article infobox for that aircraft is usually the fastest source. Right-click the image → "Copy image address"
2. Edit the `image:` field for that entry in `lib/aircraft.ts`
3. Any full URL works — `next.config.js` has `images.unoptimized: true` and permissive `remotePatterns`, and the site uses plain `<img>` tags for maximum flexibility

Other good sources for replacements:
- [Wikimedia Commons](https://commons.wikimedia.org/) — search by aircraft designation
- [NARA (U.S. National Archives)](https://catalog.archives.gov/)
- [IWM Collections](https://www.iwm.org.uk/collections)

## Customisation

- **Colour palette** — edit `tailwind.config.ts`. Named scales: `ink`, `bone`, `olive`, `rust`, `brass`
- **Typography** — Google Fonts import is in `app/globals.css`
- **Custom effects** — `corner-mark`, `stamp`, `scan-line`, `link-vintage`, `img-treatment`, `divider-stars` are all defined in `app/globals.css`
- **Adding an aircraft** — append an entry to the array in `lib/aircraft.ts`. It'll automatically appear in the index, get a detail page at build time, and be available to the nation/theatre filters

## Project Structure

```
ww2-aircraft/
├── app/
│   ├── aircraft/
│   │   ├── [slug]/page.tsx   # dynamic detail page
│   │   └── page.tsx          # filterable index
│   ├── timeline/page.tsx
│   ├── theaters/page.tsx
│   ├── about/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx              # home
├── components/
│   ├── AircraftCard.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── lib/
│   └── aircraft.ts           # all aircraft data + helpers
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Credits

- Photography: Wikimedia Commons contributors, Imperial War Museums, U.S. National Archives, Bundesarchiv
- Technical data: cross-referenced against Jane's *All the World's Aircraft*, William Green's *Warplanes of the Second World War*, and manufacturer archives

---

*Lest we forget.*
