import type { Metadata } from "next";
import { getAllTeamMembers } from "@/lib/mock-data/team";
import { CERTIFICATIONS } from "@/lib/constants";
import TeamCard from "@/components/team/team-card";
import CertCard from "@/components/about/cert-card";
import SectionLabel from "@/components/ui/section-label";
import PillButton from "@/components/ui/pill-button";

export const metadata: Metadata = {
  title: "About - Engineering Protection Since Day One",
  description:
    "Rampart Defence Engineering. Founded 2004. EN 1063, STANAG 4569, and VPAM certified. Serving civilian and military clients across 15+ countries.",
};

const VALUES = [
  {
    name: "Precision",
    description:
      "Every weld, every plate, every test is documented and certified.",
  },
  {
    name: "Confidentiality",
    description:
      "Client identities and vehicle specifications are never disclosed.",
  },
  {
    name: "Readiness",
    description:
      "Vehicles leave our facility certified and ready for immediate deployment.",
  },
  {
    name: "Integrity",
    description: "We advise on what is needed. Nothing more.",
  },
];

export default function AboutPage() {
  const team = getAllTeamMembers();

  return (
    <>
      {/* Header */}
      <section className="section" style={{ background: "var(--bg-black)" }}>
        <div
          className="section-inner"
          style={{ paddingTop: "var(--space-80)" }}
        >
          <SectionLabel className="mb-5">About</SectionLabel>
          <h1 className="type-headline text-[var(--text-white)]">
            Engineering protection. Since day one.
          </h1>
        </div>
      </section>

      {/* Company Story */}
      <section
        className="section"
        style={{ background: "var(--bg-near-black)" }}
      >
        <div className="section-inner max-w-[720px]">
          <p className="type-body text-[var(--text-secondary)] mb-6">
            Rampart Defence Engineering was founded in 2004 with a single
            mandate: bring European ballistic certification standards to
            armoured vehicle engineering in Sub-Saharan Africa. At the time, the
            region's procurement market depended on imported platforms with
            limited in-country support. We changed that.
          </p>
          <p className="type-body text-[var(--text-secondary)] mb-6">
            Our facility operates to EN 1063, STANAG 4569, and VPAM standards
            across all three service lines. Every vehicle that leaves our
            workshop carries a signed ballistic test certificate, a full
            documentation package, and a post-delivery support commitment. No
            exceptions.
          </p>
          <p className="type-body text-[var(--text-secondary)]">
            We serve heads of state, national armed forces, multinational
            corporations, and humanitarian organisations across 15 countries.
            Our clients do not advertise their security arrangements. Neither do
            we.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "var(--bg-black)" }}>
        <div className="section-inner">
          <h2 className="type-headline text-[var(--text-white)] mb-12">
            What we stand on.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.name}
                className="rounded-card p-10"
                style={{
                  background: "var(--bg-surface-1)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <p className="type-title-2 text-[var(--text-white)] mb-3">
                  {value.name}
                </p>
                <p className="type-body text-[var(--text-secondary)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section
        className="section"
        style={{ background: "var(--bg-near-black)" }}
      >
        <div className="section-inner">
          <h2 className="type-headline text-[var(--text-white)] mb-12">
            Leadership
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <TeamCard key={member.id} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section" style={{ background: "var(--bg-black)" }}>
        <div className="section-inner">
          <h2 className="type-headline text-[var(--text-white)] mb-4">
            Certifications
          </h2>
          <p className="type-body text-[var(--text-secondary)] mb-12">
            Every standard we hold is independently verified and current.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {CERTIFICATIONS.map((cert, i) => (
              <CertCard key={cert.id} cert={cert} index={i} />
            ))}
          </div>
          <PillButton
            href="/specs/compliance-portfolio.pdf"
            variant="ghost"
            id="about-cta-compliance"
          >
            Download Our Compliance Portfolio (PDF)
          </PillButton>
        </div>
      </section>
    </>
  );
}
