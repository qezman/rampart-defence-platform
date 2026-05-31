export type VehicleCategory = 'civilian' | 'military'
export type VehicleStatus = 'available' | 'made-to-order'

export interface VehicleSpec {
  label: string
  value: string
}

export interface Vehicle {
  slug: string
  name: string
  category: VehicleCategory
  platform: string
  protectionLevel: string
  status: VehicleStatus
  heroImage: string
  galleryImages: string[]
  specs: Record<string, string>
  highlights: string[]
  description: string
  optionalUpgrades: string[]
  weight: string
  seats: number
}
