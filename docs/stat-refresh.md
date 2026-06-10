# Stat-refresh process — InsuranceExit.org

The site's value depends on data being **current and dated**. Every statistic
carries a date ("As of Q1 2026…"). Those dates rot. This is the repeatable
process to re-verify them so the site never quietly serves a stale number.

## Cadence

- **Quarterly**, aligned to the "As of Q__ 2026" labels: review at the start of
  each quarter (early Jan / Apr / Jul / Oct).
- **Event-driven**, on top of the quarterly pass, when any of these happen:
  - A major hurricane or wildfire in a covered state.
  - A named carrier exits, pauses, or re-enters a covered state.
  - New state legislation or a major rate filing (e.g. a Citizens glide-path change).
  - A new edition of the FIO or Senate Budget Committee report.

Crisis states first, every pass: **Florida, California, Louisiana** — highest
intent, fastest-moving. Then Texas, then the elevated states.

## Where the numbers live

| Data | Location | Notes |
|---|---|---|
| Carrier action tables (all 9 states) | `src/data/carrier-actions.ts` | Single source of truth. Keyed by state slug. Edit here once → propagates to every state page. |
| Inline "As of Q_ 2026" stats | each page's `.astro` body | Per-page prose and tables. |
| Page freshness date | `lastUpdated` prop on `<StatePage>` / `<Article>` + the "Last updated: __" line in the sources slot | Bump BOTH when the page changes. |
| Source "Accessed __" dates | sources `<li>` lines | Bump only for sources actually re-accessed this pass. |

## Sources to check, per pass

| Source | What to pull | URL hint |
|---|---|---|
| **NAIC** | Market share, non-renewal / cancellation data | naic.org |
| **State DOIs** | Complaint data, rate filings, carrier actions | FL OIR, CA CDI, LA LDI, TX TDI, AZ DIFI, CO DOI, NM OSI, ID DOI, MT CSI |
| **Residual markets** | Policy counts, financials, assessment ("hurricane tax") risk | FL Citizens, CA FAIR Plan, LA Citizens public reports |
| **SEC EDGAR (10-Ks)** | Carrier exits / drawdowns (e.g. State Farm CA) | sec.gov/edgar |
| **FIO report** | Newer edition than Jan 2025? | home.treasury.gov |
| **Senate Budget Committee** | Newer edition than Dec 2024? | budget.senate.gov |
| **FEMA / NOAA / USGS** | Hazard data (hurricane, wildfire, flood) | per-agency |
| **IBHS** | FORTIFIED standards / uptake | ibhs.org |

## Procedure (per state)

1. Pull the latest figures from the sources above for that state.
2. For each number on the page, decide: **confirmed unchanged**, **updated**, or
   **can no longer verify**. Never carry forward a number you could not re-verify
   — replace it or remove it.
3. Update `src/data/carrier-actions.ts` for any carrier-table change (one edit
   covers the table on that state's page).
4. Update inline "As of Q_ 2026" stats and their date labels in the page body.
5. Bump the `lastUpdated` prop AND the "Last updated: __" line in the sources slot.
6. Bump "Accessed __" only on the source lines you actually re-checked.
7. `npm run build` — confirm clean. Word count stays in the 1,800–2,800 band.

## Per-quarter checklist

Copy this block each quarter, fill the date, tick as you go.

```
Stat refresh — Q_ 20__   (started ____)

Crisis states:
[ ] Florida      [ ] California   [ ] Louisiana
High/elevated:
[ ] Texas        [ ] Arizona      [ ] Colorado
[ ] New Mexico   [ ] Idaho        [ ] Montana

Cross-cutting:
[ ] carrier-actions.ts reconciled with latest DOI/EDGAR actions
[ ] FIO report — still Jan 2025 latest? (else cite new edition sitewide)
[ ] Senate Budget report — still Dec 2024 latest?
[ ] Residual-market pages (FL Citizens solvency, CA FAIR Plan, LA Citizens)
[ ] All edited pages: lastUpdated + sources date bumped
[ ] npm run build clean, all pages still in 1,800–2,800 band
```

## Principle

From CLAUDE.md §4.4 and §12: never publish a floating, undated statistic, and
never carry forward an undated number from a prior draft. When a number cannot
be re-verified this pass, change it or cut it — do not let it age silently.
