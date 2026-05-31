import type { Vehicle, VehicleCategory, VehicleStatus } from '@/types/vehicle'

export interface VehicleFilters {
  category: VehicleCategory | 'all'
  protectionLevel: string | 'all'
  status: VehicleStatus | 'all'
}

export function filterVehicles(
  vehicles: Vehicle[],
  filters: VehicleFilters,
): Vehicle[] {
  return vehicles.filter((v) => {
    if (filters.category !== 'all' && v.category !== filters.category) return false
    if (filters.protectionLevel !== 'all' && v.protectionLevel !== filters.protectionLevel) return false
    if (filters.status !== 'all' && v.status !== filters.status) return false
    return true
  })
}
