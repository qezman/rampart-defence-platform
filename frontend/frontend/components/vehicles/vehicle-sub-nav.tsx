'use client'

import Link from 'next/link'
import { useScrollNav } from '@/hooks/use-scroll-nav'
import { cn } from '@/lib/utils/cn'

const SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'specifications', label: 'Specifications' },
  { id: 'protection', label: 'Protection' },
  { id: 'gallery', label: 'Gallery' },
]

export default function VehicleSubNav() {
  const { activeSection } = useScrollNav(SECTIONS.map((s) => s.id))

  return (
    <div
      className="sticky top-11 z-30 flex items-center h-11 px-[var(--gutter)] overflow-x-auto"
      style={{
        background: 'rgba(29,29,31,0.90)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="flex items-center gap-8 mr-auto">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={cn(
              'type-caption whitespace-nowrap transition-colors duration-200',
              activeSection === s.id
                ? 'text-[var(--accent-dark-bg)]'
                : 'text-[var(--text-secondary)] hover:text-white',
            )}
          >
            {s.label}
          </a>
        ))}
      </div>
      <Link
        href="/contact"
        className="shrink-0 type-label text-[var(--accent-dark-bg)] hover:underline"
      >
        Enquire →
      </Link>
    </div>
  )
}
