import VehicleCard from './vehicle-card'
import type { Vehicle } from '@/types/vehicle'

interface RelatedVehiclesProps {
  vehicles: Vehicle[]
}

export default function RelatedVehicles({ vehicles }: RelatedVehiclesProps) {
  if (vehicles.length === 0) return null

  return (
    <section className="section" style={{ background: 'var(--bg-black)' }}>
      <div className="section-inner">
        <h2 className="type-title-1 text-[var(--text-white)] mb-10">
          You may also consider
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vehicles.map((v) => (
            <VehicleCard key={v.slug} vehicle={v} />
          ))}
        </div>
      </div>
    </section>
  )
}
