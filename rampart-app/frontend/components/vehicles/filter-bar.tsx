'use client'

import { ChevronDown } from 'lucide-react'
import { PROTECTION_LEVELS } from '@/lib/constants'
import { cn } from '@/lib/utils/cn'
import type { VehicleFilters } from '@/lib/utils/filter-vehicles'

interface FilterBarProps {
  filters: VehicleFilters
  onCategoryChange: (c: VehicleFilters['category']) => void
  onProtectionChange: (p: string) => void
  onStatusChange: (s: VehicleFilters['status']) => void
  onReset: () => void
  resultCount: number
}

const CATEGORY_TABS: { label: string; value: VehicleFilters['category'] }[] = [
  { label: 'All', value: 'all' },
  { label: 'Civilian', value: 'civilian' },
  { label: 'Military & Security', value: 'military' },
]

export default function FilterBar({
  filters,
  onCategoryChange,
  onProtectionChange,
  onStatusChange,
  resultCount,
}: FilterBarProps) {
  return (
    <div
      className="sticky top-11 z-30 py-3 px-[var(--gutter)]"
      style={{
        background: 'rgba(29,29,31,0.90)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="section-inner-wide mx-auto flex flex-wrap items-center gap-4">
        <div
          className="flex gap-1 rounded-[980px] p-[3px]"
          style={{ background: 'rgba(255,255,255,0.08)' }}
        >
          {CATEGORY_TABS.map((tab) => (
            <button
              key={tab.value}
              onClick={() => onCategoryChange(tab.value)}
              className={cn(
                'type-label rounded-[980px] px-4 py-1.5 transition-all duration-200',
                filters.category === tab.value
                  ? 'bg-white text-[var(--text-dark)]'
                  : 'text-[var(--text-secondary)] hover:text-white',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="relative">
          <select
            value={filters.protectionLevel}
            onChange={(e) => onProtectionChange(e.target.value)}
            className="type-caption rounded-[980px] border border-white/14 bg-white py-2 pl-4 pr-10 text-[var(--text-dark)] shadow-sm outline-none appearance-none cursor-pointer focus:border-[var(--accent-dark-bg)]"
          >
            <option value="all">Protection Level</option>
            {PROTECTION_LEVELS.map((l) => (
              <option key={l} value={l}>{l}</option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-dark)]" />
        </div>

        <div className="relative">
          <select
            value={filters.status}
            onChange={(e) => onStatusChange(e.target.value as VehicleFilters['status'])}
            className="type-caption rounded-[980px] border border-white/14 bg-white py-2 pl-4 pr-10 text-[var(--text-dark)] shadow-sm outline-none appearance-none cursor-pointer focus:border-[var(--accent-dark-bg)]"
          >
            <option value="all">All Status</option>
            <option value="available">Available</option>
            <option value="made-to-order">Made to Order</option>
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-dark)]" />
        </div>

        <p className="type-caption text-[var(--text-tertiary)] ml-auto">
          {resultCount} vehicle{resultCount !== 1 ? 's' : ''}
        </p>
      </div>
    </div>
  )
}
