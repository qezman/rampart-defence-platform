import type { Metadata } from 'next'
import ServiceSection from '@/components/sections/service-section'
import BeforeAfter from '@/components/sections/before-after'
import SectionLabel from '@/components/ui/section-label'

export const metadata: Metadata = {
  title: 'Services — Repair, Refurbishment & Custom Armouring',
  description:
    'Armoured vehicle repair, refurbishment, and custom armouring. EN 287-certified team. All armour classes. Full ballistic re-certification.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="section" style={{ background: 'var(--bg-black)' }}>
        <div className="section-inner" style={{ paddingTop: 'var(--space-80)' }}>
          <SectionLabel className="mb-5">Services</SectionLabel>
          <h1 className="type-headline text-[var(--text-white)] mb-4">
            We keep armoured vehicles mission-ready.
          </h1>
          <p className="type-body text-[var(--text-secondary)]">
            Three service lines. One engineering team.
          </p>
        </div>
      </section>

      <ServiceSection
        id="repair"
        label="Repair & Maintenance"
        headline="Back in the field. Fast."
        body="We repair all classes of armoured vehicles — ballistic glass replacement, armour plate patching and welding, run-flat servicing, underbody blast liner replacement, and full mechanical overhaul. Our technicians hold EN 287-certified weld qualifications and work to manufacturer tolerances."
        listItems={[
          'Ballistic glazing and glass replacement',
          'Armour plate welding and structural repair',
          'Blast protection and underbody liner',
          'Engine, drivetrain, and suspension',
          'Run-flat tire systems',
          'Electrical, intercom, and communication systems',
        ]}
        cta={{ label: 'Request a Repair Assessment →', href: '/contact' }}
        background="var(--bg-near-black)"
      />

      <ServiceSection
        id="refurbishment"
        label="Refurbishment & Modernisation"
        headline="A new operational life for ageing platforms."
        body="Fleet refurbishment to upgrade protection ratings, extend vehicle life, and return platforms to certified standards. We issue new ballistic test certificates on every completed refurbishment."
        tiers={[
          { name: 'Tactical Refresh', description: 'Interior, cosmetics, and systems update', suitableFor: '5–8 year-old fleet' },
          { name: 'Ballistic Upgrade', description: 'New armour package and recertification', suitableFor: 'BR4 → BR6/7' },
          { name: 'Full Revival', description: 'Complete structural and mechanical rebuild', suitableFor: '10+ year platforms' },
        ]}
        cta={{ label: 'Discuss Your Fleet →', href: '/contact' }}
        background="var(--bg-black)"
      >
        <div className="mb-12">
          <BeforeAfter />
        </div>
      </ServiceSection>

      <ServiceSection
        id="armouring"
        label="Custom Armouring"
        headline="Your vehicle. Your specification."
        body="We convert any base vehicle platform to your required protection level. Client-supplied or sourced by us. BR4 through BR7. STANAG Level 1–3. Indistinguishable from the factory original."
        steps={[
          'Platform selection or client supply',
          'Specification agreement and engineering review',
          'Armour cutting, forming and integration',
          'Ballistic glass installation',
          'Quality control and live ballistic testing',
          'Certification and delivery',
        ]}
        cta={{ label: 'Start a Conversion Project →', href: '/contact' }}
        background="var(--bg-near-black)"
      />
    </>
  )
}
