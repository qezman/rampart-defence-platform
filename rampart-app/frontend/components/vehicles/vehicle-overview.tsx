'use client'

import { motion } from 'framer-motion'
import type { Vehicle } from '@/types/vehicle'

interface VehicleOverviewProps {
  vehicle: Vehicle
}

export default function VehicleOverview({ vehicle }: VehicleOverviewProps) {
  return (
    <section id="overview" className="section" style={{ background: 'var(--bg-near-black)' }}>
      <div className="section-inner">
        <motion.p
          className="type-body text-[var(--text-secondary)] max-w-[660px] mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {vehicle.description}
        </motion.p>

        {/* Highlight callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: 'var(--border-light)' }}>
          {vehicle.highlights.map((highlight, i) => (
            <motion.div
              key={highlight}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8"
              style={{ background: 'var(--bg-near-black)' }}
            >
              <p className="type-title-3 text-[var(--text-white)] mb-2">{highlight}</p>
              <p className="type-caption text-[var(--text-secondary)]">
                {i === 0 && 'Armour integration indistinguishable from the OEM exterior.'}
                {i === 1 && 'Hutchinson run-flat inserts allow continued mobility after tyre strike.'}
                {i === 2 && `Meets EN 1063 ${vehicle.protectionLevel} and VPAM standards.`}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
