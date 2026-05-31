import type { CaseStudy } from "@/types/case-study";

export const caseStudies: CaseStudy[] = [
  {
    slug: "west-african-military-apc-fleet",
    title: "APC Fleet Refurbishment Programme, West Africa",
    sector: "military",
    heroImage: "/images/cases/west-africa-military.jpg",
    scope: {
      vehicles: 24,
      timeline: "90 days",
      clientType: "National Armed Forces",
      outcome: "Full operational readiness, new ballistic certificates issued",
    },
    challenge:
      "A West African national defence force presented 24 ageing armoured personnel carriers — some over 15 years in service — requiring full structural assessment and protection re-certification before redeployment. The programme had a 90-day window tied to an operational commitment. Several vehicles had sustained blast damage that compromised the underbody protection system.",
    solution:
      "Rampart conducted a systematic intake inspection across all 24 platforms, categorising each into three refurbishment tiers. Structural weld repairs were executed by our EN 287-certified team. Armour plate replacement, ballistic glass refurbishment, and full mechanical overhaul were completed in parallel across two workshop bays. Each vehicle underwent live ballistic testing before certification sign-off.",
    results: [
      "All 24 platforms returned to full STANAG Level 2 certification within 87 days",
      "Zero vehicles failed ballistic testing on first submission",
      "Full EN 1063 and STANAG documentation package delivered for each platform",
    ],
    vehiclesUsed: ["armoured-personnel-carrier"],
  },
  {
    slug: "oil-gas-vip-lc300-armouring",
    title: "VIP Fleet Armouring, Oil & Gas Multinational",
    sector: "vip-civilian",
    heroImage: "/images/cases/oil-gas-vip.jpg",
    scope: {
      vehicles: 6,
      timeline: "45 days",
      clientType: "Oil & Gas Multinational",
      outcome: "6 × BR7 vehicles delivered, indistinguishable from factory",
    },
    challenge:
      "A major oil and gas operator needed to relocate six senior executives into an elevated-threat operating environment. The security requirement was BR7 protection. The business requirement was equally demanding: vehicles had to be visually indistinguishable from the standard fleet and could not disrupt the existing logistics chain. Client supply chain expected the vehicles on-site within 45 days.",
    solution:
      "Rampart sourced six Toyota Land Cruiser 300 GXR units directly from a regional distributor and began simultaneous conversion. Our civilian armouring team integrated the full BR7 package — ballistic steel, polycarbonate composite, laminated glass — without any departure from the OEM exterior profile. Run-flat systems and self-sealing fuel tanks were integrated as standard. Each vehicle was handed over with a full EN 1063 certificate.",
    results: [
      "Six vehicles delivered to BR7 standard in 43 days",
      "All units passed independent ballistic verification",
      "Zero visual distinction from standard Land Cruiser 300 GXR in field review",
    ],
    vehiclesUsed: ["armoured-land-cruiser-300"],
  },
  {
    slug: "law-enforcement-mrap-repair",
    title: "MRAP Repair Programme, Law Enforcement Agency",
    sector: "law-enforcement",
    heroImage: "/images/cases/law-enforcement-mrap.jpg",
    scope: {
      vehicles: 8,
      timeline: "60 days",
      clientType: "National Law Enforcement Agency",
      outcome: "8 MRAPs returned to operational readiness post-incident",
    },
    challenge:
      "A national law enforcement agency presented eight MRAPs for repair assessment following operational deployments. Three vehicles had sustained IED blast damage affecting the V-hull integrity. The remaining five required varying degrees of ballistic glass replacement, structural weld repair, and drivetrain overhaul. The agency had no alternative platforms available and required the vehicles back within 60 days.",
    solution:
      "The three blast-damaged vehicles were triaged as priority. Our engineering team conducted structural scan and weld analysis before executing full V-hull plate replacement on two of the three. The third was a partial replacement. Ballistic glass units were fabricated in-house to match original specification. Drivetrain overhauls were completed concurrently across the remaining five platforms.",
    results: [
      "All eight MRAPs returned to service within 58 days",
      "V-hull integrity restored to original STANAG Level 3 specification",
      "New ballistic and structural certificates issued for all platforms",
    ],
    vehiclesUsed: ["mine-resistant-ambush-protected"],
  },
  {
    slug: "cit-fleet-conversion-private-security",
    title: "Cash-in-Transit Fleet Conversion, Private Security Firm",
    sector: "commercial",
    heroImage: "/images/cases/cit-conversion.jpg",
    scope: {
      vehicles: 12,
      timeline: "120 days",
      clientType: "Private Security & Logistics Firm",
      outcome: "12 × BR7 CIT vehicles, fully certified and deployed",
    },
    challenge:
      "A private security firm operating cash-in-transit services across three countries needed to expand and upgrade their fleet. The existing vehicles were ageing BR4 platforms inadequate for the high-value shipment profiles the firm was contracted to handle. The client required 12 new BR7 platforms, uniformly specified, with dual-key electronic vault systems and GPS fleet management.",
    solution:
      "Rampart sourced 12 Toyota Land Cruiser 79 Series units and began parallel conversion. Each vehicle received a BR7 armour package, welded rear vault compartment with dual-key electronic and manual override, run-flat systems on all axles, and an integrated GPS fleet management unit. All 12 were built to identical specification for operational standardisation. An in-country handover programme included crew familiarisation training.",
    results: [
      "12 vehicles delivered to BR7 standard, fully certified, within 118 days",
      "Fleet standardisation achieved — identical specification across all 12 units",
      "Client passed regulatory audit for armoured fleet operations in all three jurisdictions",
    ],
    vehiclesUsed: ["cash-in-transit-vehicle"],
  },
];

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
