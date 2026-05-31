'use client'

import { motion } from 'framer-motion'
import VehicleCard from './vehicle-card'
import type { Vehicle } from '@/types/vehicle'

interface VehicleGridProps {
  vehicles: Vehicle[]
}

export default function VehicleGrid({ vehicles }: VehicleGridProps) {
  if (vehicles.length === 0) {
    return (
      <div className="section flex flex-col items-center justify-center text-center" style={{ minHeight: '40vh' }}>
        <p className="type-title-2 text-[var(--text-white)] mb-3">No vehicles match your filters.</p>
        <p className="type-body text-[var(--text-secondary)]">Adjust the filters above to see more results.</p>
      </div>
    )
  }

  return (
    <section className="section" style={{ background: 'var(--bg-near-black)' }}>
      <div className="section-inner-wide mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle, i) => (
            <motion.div
              key={vehicle.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: Math.min(i * 0.06, 0.4),
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <VehicleCard vehicle={vehicle} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
