# InsuranceExit.org — Interface Design System

**Aesthetic direction:** Archival document meets editorial journalism.
Think: long-form investigative magazine, government report cover, Consumer Reports.
Cold, serious, trustworthy. Not fintech. Not SaaS. Not startup.

**Audience reminder:** 45–70, anxious homeowner, mobile + desktop, reading under stress.
Every choice should reduce anxiety, not perform cleverness.

---

## Color

OKLCH throughout. Source of truth: `public/styles/global.css`.

| Token | Value | Role |
|---|---|---|
| `--bg` | `oklch(99% 0.004 85)` | Warm near-white page background |
| `--surface` | `oklch(97.5% 0.005 85)` | Slightly elevated surface (cards, aside) |
| `--border` | `oklch(88% 0.010 85)` | Default border — warm gray |
| `--border-strong` | `oklch(72% 0.018 85)` | Emphasized border (section rules) |
| `--text` | `oklch(22% 0.010 255)` | Body text — near-black with slight blue-gray |
| `--text-muted` | `oklch(52% 0.012 255)` | Captions, datelines, metadata |
| `--accent` | `oklch(42% 0.14 145)` | Forest green — links, icons, active states |
| `--accent-hover` | `oklch(35% 0.14 145)` | Darker green on hover |

**Rationale:** Warm off-white (not pure white) reduces eye strain for long-form reading. Forest green accent reads as "public interest / civic" not "fintech." No blues (banking), no reds (alarm), no orange (startup).

---

## Severity System

Market stress encoded as left-border bands on state pages.

| Level | States | CSS class | Hue | Label |
|---|---|---|---|---|
| `critical` | FL, CA, LA | `.severity-badge--critical` | Red (~25°) | "Market Crisis" |
| `high` | TX, CO | `.severity-badge--high` | Amber (~52°) | "High Stress" |
| `elevated` | AZ, NM, ID, MT | `.severity-badge--elevated` | Yellow-green (~70°) | "Elevated Risk" |

Implemented via:
- `severity` prop on `StatePage.astro`
- `.severity-band` + `.severity-band--{level}` wrapper div
- `.severity-badge` + `.severity-badge--{level}` inline badge above `<h1>`
- CSS custom property `--severity-color` controls left border color

**Rationale:** Visual hierarchy without requiring readers to parse text. Severity communicates at a glance during skim-read.

---

## Typography

```css
--font-display: 'Playfair Display', Georgia, serif;   /* headlines h1–h3 */
--font-body:    'Lora', Georgia, serif;               /* article body */
--font-ui:      'DM Sans', system-ui, sans-serif;     /* UI chrome, labels, badges */
```

Loaded via Google Fonts in `src/layouts/Base.astro`.

**Scale:**
- `h1`: 2rem / 2.25rem (desktop), Playfair Display, weight 700
- `h2`: 1.375rem, Playfair Display, weight 700
- `h3`: 1.125rem, DM Sans, weight 600, uppercase tracking
- Body: 1.0625rem / 1.75 line-height, Lora
- Small/UI: 0.75–0.875rem, DM Sans

**Rationale:** Playfair Display = editorial authority, print heritage. Lora = readable serif for dense insurance content. DM Sans = clean UI contrast. Mixing serif headline + serif body is intentional — matches archival document aesthetic.

---

## Depth Model: Borders Only

**No box shadows.** No `transform: translateY` hover tricks. No gradients as decorative elements.

Elevation is expressed through:
- `border: 1px solid var(--border)` for cards
- `border-color: var(--accent)` on hover (color shift, no movement)
- `border-left` for section emphasis (severity bands, blockquotes)
- `border-top` / `border-bottom` for section separation

**Rationale:** Shadows feel SaaS/app. Hard borders feel print/archival. The site is a reference document, not a product interface.

---

## Layout

- Max content width: `780px` (article), `1100px` (pillar grid)
- Container: `.container { max-width: 1100px; margin: 0 auto; padding: 0 1.25rem; }`
- Pillar grid: `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))` — 2-up on tablet, 4-up on desktop
- Article layout: centered single column, `max-width: 780px`

---

## Components

### Pillar Cards (`index.astro`)
```css
.pillar-card {
  display: flex; flex-direction: column; gap: 0.875rem;
  padding: 1.625rem; border: 1px solid var(--border); border-radius: 4px;
  text-decoration: none; color: inherit; background: var(--bg);
  transition: border-color 140ms ease;
}
.pillar-card:hover { border-color: var(--accent); }
```
- Icon slot (`.pillar-card-icon`, accent color, 36px SVG) above text
- Text slot (`.pillar-card-text`) with h2 + p
- No shadow, no background shift on hover

### Hero (Homepage)
```css
.home-hero { margin: 3rem 0 2.5rem; padding-bottom: 2rem; border-bottom: 1px solid var(--border); }
.home-hero-rule { width: 2.5rem; height: 3px; background: var(--accent); margin-bottom: 1rem; }
.home-dateline { font-family: var(--font-ui); font-size: 0.75rem; font-weight: 600;
  letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-muted); }
```
- Accent rule above dateline (editorial magazine convention)
- Dateline: "Updated May 2026 · U.S. Homeowners Insurance Crisis" — keeps page dated at a glance

### Severity Badge (StatePage.astro)
```astro
<div class={`severity-badge severity-badge--${severity}`}>
  <span class="severity-dot"></span>
  {severityLabel[severity]}
</div>
```
- 6px dot + ALL CAPS label, DM Sans, tight tracking
- Appears above `<h1>` on every state page

### Disclaimer Block
- Top and bottom of every page (CLAUDE.md requirement)
- Styled with left border, muted text, DM Sans, italic

---

## Icons (`src/components/Icons.astro`)

Stroke-based SVG, 24×24 viewBox, `stroke-width="1.5"`, `fill="none"`.
Single component, inline `set:html` for zero-overhead.

Available: `non-renewed`, `zip-next`, `fortifying`, `residual`, `wildfire`, `hurricane`, `hail`, `flood`, `freeze`

```astro
<Icons name="wildfire" size={36} />
```

Used at 36px in pillar cards. Can use at any size.

---

## What to Avoid

- `box-shadow` on content elements
- `transform` on hover (no lift/bounce effects)
- Purple, teal, or gradient backgrounds
- Inter, Roboto, or system-sans for body text
- "Compare quotes" CTAs or anything with affiliate energy
- Animations beyond `transition: color/border-color 140ms ease`

---

## Files

| File | Role |
|---|---|
| `public/styles/global.css` | All tokens + component CSS |
| `src/layouts/Base.astro` | Font loading, global meta |
| `src/layouts/Article.astro` | Article pages |
| `src/layouts/Pillar.astro` | Pillar landing pages |
| `src/layouts/StatePage.astro` | State pages with severity system |
| `src/components/Icons.astro` | SVG icon component |
| `src/pages/index.astro` | Homepage with pillar cards |

*Last updated: May 2026 — feature_redesign branch*
