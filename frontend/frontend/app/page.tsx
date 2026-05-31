import type { Metadata } from "next";
import HeroTile from "@/components/sections/hero-tile";
import CapabilityStrip from "@/components/sections/capability-strip";
import StatBlock from "@/components/sections/stat-block";
import PillButton from "@/components/ui/pill-button";
import SectionLabel from "@/components/ui/section-label";
import { CONTACT } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title:
    "Rampart Defence Engineering — Armoured Vehicle Sales, Repair & Refurbishment",
};

const SERVICE_CARDS = [
  {
    title: "Repair & Maintenance",
    body: "Fast turnaround. Every armour class. Ballistic glass to underbody blast protection.",
    href: "/services#repair",
  },
  {
    title: "Refurbishment",
    body: "Extend fleet life. Upgrade protection ratings. Full re-certification included.",
    href: "/services#refurbishment",
  },
  {
    title: "Custom Armouring",
    body: "Your vehicle. Your specification. BR4 to BR7. STANAG Level 1–3.",
    href: "/services#armouring",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroTile />
      <CapabilityStrip />

      {/* Civilian Range Tile */}
      <section className="section" style={{ background: "var(--bg-black)" }}>
        <div className="section-inner flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <SectionLabel className="mb-5">Civilian Range</SectionLabel>
            <h2 className="type-headline text-[var(--text-white)] mb-5">
              Protection for those who move in harm's way.
            </h2>
            <p className="type-body text-[var(--text-secondary)] mb-8 max-w-[440px]">
              SUVs, saloons, buses and pickups armoured to BR4–BR7. Engineered
              to be invisible from the outside.
            </p>
            <PillButton
              href="/vehicles?category=civilian"
              variant="primary"
              id="home-cta-civilian"
            >
              View Civilian Vehicles →
            </PillButton>
          </div>
          <div className="flex-1 w-full aspect-[4/3] rounded-card overflow-hidden">
            <img
              src="/images/vehicles/suv.jpg"
              alt="Armoured civilian SUV"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Military Range Tile */}
      <section
        className="section"
        style={{ background: "var(--bg-near-black)" }}
      >
        <div className="section-inner flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="flex-1 w-full aspect-[4/3] rounded-card overflow-hidden">
            <img
              src="/images/vehicles/STANAG.jpg"
              alt="STANAG certified military vehicle"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <SectionLabel className="mb-5">
              Military & security Range
            </SectionLabel>
            <h2 className="type-headline text-[var(--text-white)] mb-5">
              Combat-proven platforms, built on demand.
            </h2>
            <p className="type-body text-[var(--text-secondary)] mb-8 max-w-[440px]">
              APCs, MRAPs, IFVs and specialist vehicles to STANAG 4569. Built
              for theatre, tested for certainty.
            </p>
            <PillButton
              href="/vehicles?category=military"
              variant="primary"
              id="home-cta-military"
            >
              View Military Vehicles →
            </PillButton>
          </div>
        </div>
      </section>

      {/* Services Tile — light */}
      <section className="section" style={{ background: "var(--bg-light)" }}>
        <div className="section-inner">
          <h2
            className="type-headline mb-12 text-center"
            style={{ color: "var(--text-dark)" }}
          >
            Three service lines. One engineering team.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-card p-10 bg-white"
                style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.08)" }}
              >
                <p
                  className="type-title-3 mb-3"
                  style={{ color: "var(--text-dark)" }}
                >
                  {card.title}
                </p>
                <p
                  className="type-body mb-6"
                  style={{ color: "rgba(29,29,31,0.72)" }}
                >
                  {card.body}
                </p>
                <a
                  href={card.href}
                  className="type-caption font-medium"
                  style={{ color: "var(--accent)" }}
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatBlock />

      {/* Featured Case Study */}
      <section
        className="section"
        style={{ background: "var(--bg-near-black)" }}
      >
        <div className="section-inner">
          <SectionLabel className="mb-5">Case Study</SectionLabel>
          <h2 className="type-headline text-[var(--text-white)] mb-5 max-w-[560px]">
            Fleet refurbishment for a West African security agency.
          </h2>
          <p className="type-body text-[var(--text-secondary)] max-w-[520px] mb-10">
            24 vehicles. 90-day programme. Full ballistic re-certification.
            Every platform returned to operational readiness.
          </p>
          <PillButton
            href="/cases/west-african-military-apc-fleet"
            variant="ghost"
            id="home-cta-case"
          >
            Read the Case Study →{/* <ArrowRight className="ml-2" /> */}
          </PillButton>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="section" style={{ background: "var(--bg-black)" }}>
        <div className="section-inner text-center">
          <h2 className="type-headline text-[var(--text-white)] mb-4">
            Ready to discuss your requirements?
          </h2>
          <p className="type-body text-[var(--text-secondary)] mb-10">
            Our team responds within two working days.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <PillButton href="/contact" variant="primary" id="home-cta-enquiry">
              Submit an Enquiry
            </PillButton>
            <a
              href={`tel:${CONTACT.phone}`}
              className="type-body"
              style={{ color: "var(--accent-dark-bg)" }}
            >
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
