export interface CarrierAction {
  carrier: string;
  action: string;
  date: string;
}

export const carrierActions: Record<string, CarrierAction[]> = {
  florida: [
    { carrier: 'Southern Fidelity Insurance', action: 'Declared insolvent, placed in receivership', date: 'June 2022' },
    { carrier: 'FedNat Holding Company', action: 'Entered run-off; significant non-renewals in FL', date: '2022–2023' },
    { carrier: 'Avatar Property & Casualty', action: 'Placed in receivership', date: 'February 2023' },
    { carrier: 'Weston Property & Casualty', action: 'Placed in receivership', date: 'March 2023' },
    { carrier: 'Farmers Insurance', action: 'Announced withdrawal from Florida market', date: 'July 2023' },
    { carrier: 'State Farm', action: 'Reduced new business; continued renewals with rate increases', date: 'Ongoing 2022–2026' },
    { carrier: 'Bankers Insurance / First Protective', action: 'Placed in receivership', date: '2023' },
  ],

  california: [
    { carrier: 'State Farm General', action: 'Stopped writing new homeowners policies in California', date: 'May 2023' },
    { carrier: 'State Farm General', action: 'Issued ~72,000 non-renewals statewide', date: 'March 2024' },
    { carrier: 'Allstate', action: 'Paused new homeowners and condo policies in California', date: 'Late 2022 (confirmed publicly in 2023)' },
    { carrier: 'Farmers Insurance', action: 'Capped new homeowners policies; reduced exposure in high-risk ZIP codes', date: '2023–2024' },
    { carrier: 'AIG / Lexington Insurance', action: 'Restricted new policies in wildfire-exposed areas', date: '2022–2023' },
    { carrier: 'Tokio Marine / Pacific Specialty', action: 'Non-renewals in high-risk wildfire zones', date: '2023' },
    { carrier: 'State Farm General', action: 'CDI approved 17% emergency interim homeowners rate increase after the Jan 2025 LA fires (settlement confirmed early 2026)', date: '2025' },
  ],

  louisiana: [
    { carrier: 'Lighthouse Property Insurance', action: 'Went into receivership', date: 'August 2021' },
    { carrier: 'Access Home Insurance', action: 'Went into receivership', date: 'October 2021' },
    { carrier: 'State National Insurance', action: 'Withdrew from Louisiana homeowners market', date: '2022' },
    { carrier: 'Southern Fidelity Insurance', action: 'Declared insolvent (also active in FL)', date: 'June 2022' },
    { carrier: 'Maison Insurance Company', action: 'Went into receivership', date: '2022' },
    { carrier: 'Americas Insurance Company', action: 'Went into receivership', date: '2022' },
    { carrier: 'Farmers Insurance', action: 'Announced withdrawal from Louisiana', date: 'July 2023' },
  ],

  texas: [
    { carrier: 'Multiple admitted carriers (aggregate per TDI data)', action: 'Non-renewals in TWIA-eligible coastal counties', date: 'Ongoing since 2017; accelerated post-Uri (2021)' },
    { carrier: 'Farmers Insurance', action: 'Restricted new homeowners policies in high-hail-risk ZIP codes', date: '2022–2023' },
    { carrier: 'State Farm', action: 'Applied higher wind/hail deductibles; some ZIP code-level non-renewals', date: 'Ongoing 2021–2026' },
    { carrier: 'Allstate', action: 'Rate increases and non-renewals in coastal and hail-belt areas', date: '2022–2024' },
    { carrier: 'Multiple smaller admitted carriers', action: 'Exited coastal TWIA-eligible counties entirely', date: '2017–2024' },
  ],

  arizona: [
    { carrier: 'Multiple admitted carriers (aggregate per DIFI)', action: 'Non-renewals and new-business restrictions in WUI ZIP codes', date: 'Ongoing 2022–2026; specific carriers vary by ZIP code' },
    { carrier: 'State Farm', action: 'Elevated wildfire scores required; some non-renewals in AZ WUI areas', date: '2022–2024' },
    { carrier: 'Farmers Insurance', action: 'Restrictions in high-fire-risk ZIP codes', date: '2022–2024' },
    { carrier: 'Allstate', action: 'Non-renewals in Prescott-area and Flagstaff-area WUI zones', date: '2022–2024' },
  ],

  colorado: [
    { carrier: 'Multiple admitted carriers (aggregate per DOI)', action: 'Non-renewals and new-business restrictions in WUI ZIP codes in Jefferson, Boulder, Clear Creek, Park, Teller counties', date: 'Ongoing 2020–2026; accelerated post-Marshall Fire' },
    { carrier: 'State Farm', action: 'Elevated wildfire score requirements in WUI counties; some non-renewals', date: '2022–2024' },
    { carrier: 'Farmers Insurance', action: 'Restricted new business and non-renewals in WUI areas', date: '2022–2024' },
    { carrier: 'Allstate', action: 'Non-renewals in high-fire-risk ZIP codes', date: '2022–2024' },
  ],

  'new-mexico': [
    { carrier: 'Multiple admitted carriers (aggregate per OSI)', action: 'Non-renewals and new-business restrictions in northern NM WUI ZIP codes', date: 'Ongoing 2022–2026; accelerated post-Hermits Peak Fire' },
    { carrier: 'State Farm', action: 'WUI restrictions in highest-fire-score areas of northern NM', date: '2022–2024' },
    { carrier: 'Farmers Insurance', action: 'Restrictions in high-fire-risk ZIP codes in northern NM', date: '2022–2024' },
  ],

  idaho: [
    { carrier: 'Multiple admitted carriers (aggregate per DOI)', action: 'Non-renewals and new-business restrictions in Boise foothills and northern Idaho WUI ZIP codes', date: 'Ongoing 2021–2026' },
    { carrier: 'State Farm', action: 'Elevated wildfire score requirements; some WUI non-renewals in Idaho', date: '2022–2024' },
    { carrier: 'Farmers Insurance', action: 'Restrictions in high-fire-risk Idaho ZIP codes', date: '2022–2024' },
    { carrier: 'Allstate', action: 'Non-renewals in WUI areas', date: '2022–2024' },
  ],

  montana: [
    { carrier: 'Multiple admitted carriers (aggregate per CSI)', action: 'Non-renewals and new-business restrictions in western Montana WUI ZIP codes', date: 'Ongoing 2020–2026' },
    { carrier: 'State Farm', action: 'Elevated wildfire score requirements; WUI non-renewals in Montana', date: '2021–2024' },
    { carrier: 'Farmers Insurance', action: 'Restrictions in high-fire-risk Montana ZIP codes', date: '2022–2024' },
    { carrier: 'Allstate', action: 'Non-renewals in WUI areas', date: '2022–2024' },
  ],
};
