import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllCaseStudies, getCaseStudyBySlug } from '@/lib/mock-data/cases'
import SectionLabel from '@/components/ui/section-label'
import PillButton from '@/components/ui/pill-button'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return getAllCaseStudies().map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const c = getCaseStudyBySlug(params.slug)
  if (!c) return {}
  return { title: c.title, description: c.challenge.slice(0, 160) }
}

const SECTOR_LABELS: Record<string, string> = {
  military: 'Military',
  'vip-civilian': 'VIP Civilian',
  'law-enforcement': 'Law Enforcement',
  commercial: 'Commercial',
}

export default function CaseDetailPage({ params }: PageProps) {
  const c = getCaseStudyBySlug(params.slug)
  if (!c) notFound()

  return (
    <>
      {/* Hero */}
      <section className="section" style={{ background: 'var(--bg-black)' }}>
        <div className="section-inner" style={{ paddingTop: 'var(--space-80)' }}>
          <SectionLabel className="mb-5">{SECTOR_LABELS[c.sector] ?? c.sector}</SectionLabel>
          <h1 className="type-headline text-[var(--text-white)] mb-6 max-w-[640px]">{c.title}</h1>

          {/* Scope cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: 'Client Type', value: c.scope.clientType },
              { label: 'Scope', value: `${c.scope.vehicles} vehicles` },
              { label: 'Timeline', value: c.scope.timeline },
              { label: 'Outcome', value: c.scope.outcome },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-card p-6"
                style={{ background: 'var(--bg-surface-1)' }}
              >
                <p className="type-label text-[var(--text-tertiary)] mb-2">{item.label}</p>
                <p className="type-body text-[var(--text-white)]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge */}
      <section className="section" style={{ background: 'var(--bg-near-black)' }}>
        <div className="section-inner max-w-[720px]">
          <h2 className="type-title-1 text-[var(--text-white)] mb-6">The Challenge</h2>
          <p className="type-body text-[var(--text-secondary)]">{c.challenge}</p>
        </div>
      </section>

      {/* Solution */}
      <section className="section" style={{ background: 'var(--bg-black)' }}>
        <div className="section-inner max-w-[720px]">
          <h2 className="type-title-1 text-[var(--text-white)] mb-6">The Solution</h2>
          <p className="type-body text-[var(--text-secondary)]">{c.solution}</p>
        </div>
      </section>

      {/* Results */}
      <section className="section" style={{ background: 'var(--bg-near-black)' }}>
        <div className="section-inner">
          <h2 className="type-title-1 text-[var(--text-white)] mb-8">Results</h2>
          <div className="flex flex-col gap-4">
            {c.results.map((result, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-5"
                style={{ borderBottom: '1px solid var(--border-light)' }}
              >
                <span className="type-label shrink-0 mt-1" style={{ color: 'var(--accent-dark-bg)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="type-body text-[var(--text-secondary)]">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--bg-black)' }}>
        <div className="section-inner text-center">
          <h2 className="type-title-1 text-[var(--text-white)] mb-4">
            Similar requirements?
          </h2>
          <p className="type-body text-[var(--text-secondary)] mb-10">
            Our team responds within two working days.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <PillButton href="/contact" variant="primary" id="case-cta-contact">Submit an Enquiry</PillButton>
            <PillButton href="/cases" variant="ghost" id="case-cta-back">View All Cases</PillButton>
          </div>
        </div>
      </section>
    </>
  )
}
