# InsuranceExit.org — Architecture

```
╔══════════════════════════════════════════════════════════════════╗
║                    InsuranceExit.org — Architecture              ║
╚══════════════════════════════════════════════════════════════════╝

  SOURCES                    BUILD                      OUTPUT
  ──────                     ─────                      ──────

  src/pages/                 Astro 5                    dist/
  ├── index.astro            static site                (24 HTML files)
  ├── glossary/              generator                  Deployed to CDN
  │   └── index.astro            │
  ├── non-renewed/           ┌───┴────────────────┐
  │   ├── index.astro        │  npm run build     │
  │   ├── what-a-non-*.astro │  npm run dev       │
  │   └── ... (5 articles)   │  localhost:4321    │
  ├── is-my-zip-next/        └───┬────────────────┘
  │   ├── index.astro            │
  │   ├── florida/               │
  │   │   └── index.astro ───────┤
  │   ├── california/ ────────── │ uses @layouts/StatePage
  │   ├── louisiana/             │ imports @data/carrier-actions
  │   ├── texas/                 │
  │   ├── arizona/               │
  │   ├── colorado/              │
  │   ├── new-mexico/            │
  │   ├── idaho/                 │
  │   └── montana/               │
  ├── residual-markets/          │
  └── fortifying-vs-selling/     │

  src/layouts/               ────┤
  ├── Article.astro          ◄───┘  Wrap pages. All inject:
  ├── Pillar.astro                  • Google Fonts (preconnect)
  └── StatePage.astro               • /styles/global.css
        │ 10 named slots            • Disclaimer (top + bottom)
        │ (summary, carriers,       • Nav + footer w/ Glossary link
        │  hazards, regulators,
        │  fortification, etc.)

  src/components/
  └── Disclaimer.astro        CLAUDE.md §4.1 verbatim text block

  src/data/
  └── carrier-actions.ts ─────────► all 9 state pages
        CarrierAction[]              {carriers.map(c => <tr>)}
        keyed by state slug          Edit ONE file → updates all
        (florida, california,        carrier tables sitewide
         'new-mexico', etc.)

  public/
  └── styles/global.css       OKLCH color tokens
        --bg / --text          Fonts: Playfair Display
        --accent (forest grn)         Lora (body)
        --warm (amber)                DM Sans (UI)
        --font-display/body/ui

  ┌─────────────────────────────────────────────────────────┐
  │  Path aliases (tsconfig.json + astro.config.mjs both)   │
  │  @components/* → src/components/                        │
  │  @layouts/*    → src/layouts/                           │
  │  @data/*       → src/data/                              │
  └─────────────────────────────────────────────────────────┘

  CONTENT PILLARS (nav)
  ┌──────────────────┬──────────────────┬──────────────────┬──────────────────┐
  │  I Just Got      │  Is My ZIP Next  │  Fortifying vs.  │  Residual        │
  │  Non-Renewed     │  (9 state pages) │  Selling         │  Markets         │
  │  5 articles      │  + topic pages   │  2 articles      │  2 articles      │
  └──────────────────┴──────────────────┴──────────────────┴──────────────────┘
                                  +
                         /glossary/ (28 terms, A–W)
```
