import Link from 'next/link'
import FallbackImage from '@/components/ui/fallback-image'
import ProtectionBadge from '@/components/ui/protection-badge'
import { getVehicleImageFallback, resolveVehicleImageSrc } from '@/lib/utils/vehicle-image'
import type { Vehicle } from '@/types/vehicle'

interface VehicleCardProps {
  vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  return (
    <Link
      href={`/vehicles/${vehicle.slug}`}
      className="group block rounded-card overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
      style={{ background: 'var(--bg-surface-1)', boxShadow: 'var(--shadow-card)' }}
    >
      <div className="relative h-[240px] overflow-hidden bg-[#1a1a1a]">
        <FallbackImage
          src={resolveVehicleImageSrc(vehicle.heroImage)}
          fallbackSrc={getVehicleImageFallback()}
          alt={vehicle.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute top-3 right-3">
          {vehicle.status === 'available' ? (
            <span
              className="flex items-center gap-1.5 type-label rounded-[980px] px-2.5 py-1"
              style={{ background: 'rgba(0,0,0,0.7)', color: '#30d158' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#30d158]" />
              Available
            </span>
          ) : (
            <span
              className="type-label rounded-[980px] px-2.5 py-1"
              style={{ background: 'rgba(0,0,0,0.7)', color: 'rgba(255,255,255,0.72)' }}
            >
              Made to Order
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-1">
          <p className="type-title-3 text-[var(--text-white)]">{vehicle.name}</p>
        </div>
        <p className="type-caption text-[var(--text-tertiary)] mb-3">{vehicle.platform}</p>

        <ProtectionBadge level={vehicle.protectionLevel} className="mb-4" />

        <p className="type-caption text-[var(--text-secondary)] mb-5">
          {vehicle.weight} / {vehicle.seats} seats / {vehicle.protectionLevel}
        </p>

        <span className="type-caption font-medium" style={{ color: 'var(--accent-dark-bg)' }}>
          View Details
        </span>
      </div>
    </Link>
  )
}
