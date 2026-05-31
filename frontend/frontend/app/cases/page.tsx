import type { Metadata } from 'next'
import { getAllCaseStudies } from '@/lib/mock-data/cases'
import CaseCard from '@/components/cases/case-card'
import SectionLabel from '@/components/ui/section-label'

export const metadata: Metadata = {
  title: 'Case Studies — Projects That Speak for Themselves',
  description:
    'Armoured vehicle refurbishment, repair, and custom armouring projects. West Africa, Gulf, and global deployments.',
}

export default function CasesPage() {
  const cases = getAllCaseStudies()

  return (
    <>
      {/* Header */}
      <section className="section" style={{ background: 'var(--bg-black)' }}>
        <div className="section-inner" style={{ paddingTop: 'var(--space-80)' }}>
          <SectionLabel className="mb-5">Case Studies</SectionLabel>
          <h1 className="type-headline text-[var(--text-white)]">
            Projects that speak for themselves.
          </h1>
        </div>
      </section>

      {/* Cases grid */}
      <section className="section" style={{ background: 'var(--bg-near-black)' }}>
        <div className="section-inner">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((c, i) => (
              <CaseCard key={c.slug} caseStudy={c} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
