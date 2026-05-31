'use client'

import { getAllVehicles } from '@/lib/mock-data/vehicles'
import FilterBar from '@/components/vehicles/filter-bar'
import VehicleGrid from '@/components/vehicles/vehicle-grid'
import SectionLabel from '@/components/ui/section-label'
import { useFilter } from '@/hooks/use-filter'

export default function VehiclesPage() {
  const allVehicles = getAllVehicles()
  const { filters, filtered, setCategory, setProtectionLevel, setStatus, reset } =
    useFilter(allVehicles)

  return (
    <>
      {/* Header */}
      <section className="section" style={{ background: 'var(--bg-black)', paddingBottom: '60px' }}>
        <div className="section-inner" style={{ paddingTop: 'var(--space-80)' }}>
          <SectionLabel className="mb-5">Our Vehicles</SectionLabel>
          <h1 className="type-headline text-[var(--text-white)] mb-4">
            Every platform. Every protection level.
          </h1>
          <p className="type-body text-[var(--text-secondary)] max-w-[480px]">
            Civilian and military armoured vehicles, available to order or made to spec.
          </p>
        </div>
      </section>

      <FilterBar
        filters={filters}
        onCategoryChange={setCategory}
        onProtectionChange={setProtectionLevel}
        onStatusChange={setStatus}
        onReset={reset}
        resultCount={filtered.length}
      />

      <VehicleGrid vehicles={filtered} />
    </>
  )
}
