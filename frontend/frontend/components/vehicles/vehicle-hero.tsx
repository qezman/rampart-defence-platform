'use client'

import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import FallbackImage from '@/components/ui/fallback-image'
import ProtectionBadge from '@/components/ui/protection-badge'
import PillButton from '@/components/ui/pill-button'
import { getVehicleImageFallback, resolveVehicleImageSrc } from '@/lib/utils/vehicle-image'
import type { Vehicle } from '@/types/vehicle'

interface VehicleHeroProps {
  vehicle: Vehicle
}

export default function VehicleHero({ vehicle }: VehicleHeroProps) {
  return (
    <section
      className="relative min-h-[85vh] flex flex-col justify-end pb-20 pt-32 overflow-hidden"
      style={{ background: 'var(--bg-black)' }}
    >
      <FallbackImage
        src={resolveVehicleImageSrc(vehicle.heroImage)}
        fallbackSrc={getVehicleImageFallback()}
        alt={vehicle.name}
        fill
        priority
        className="object-cover opacity-45"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/78 to-black/35" />

      <div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] opacity-[0.06] blur-[100px] pointer-events-none"
        style={{ background: 'var(--accent)' }}
      />

      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-[60%] opacity-[0.07] pointer-events-none"
        style={{
          background: 'linear-gradient(270deg, rgba(41,151,255,0.3), transparent)',
          borderRadius: '50% 0 0 50%',
        }}
      />

      <div className="relative z-10 section-inner px-[var(--gutter)] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ProtectionBadge level={vehicle.protectionLevel} className="mb-5" />
          <h1 className="type-headline text-[var(--text-white)] mb-3 max-w-[640px]">
            {vehicle.name}
          </h1>
          <p className="type-body text-[var(--text-secondary)] mb-10">
            {vehicle.platform}
          </p>

          <div className="flex flex-wrap gap-4">
            <PillButton href="/contact" variant="primary" id="vehicle-cta-enquire">
              Request a Quotation
            </PillButton>
            <PillButton href="/specs/placeholder.pdf" variant="ghost" id="vehicle-cta-spec">
              <span className="inline-flex items-center gap-2">
                Download Spec Sheet
                <Download className="h-4 w-4" />
              </span>
            </PillButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
