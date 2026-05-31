export type ServiceType = 'repair' | 'refurbishment' | 'armouring' | 'purchase' | 'other'

export interface ServiceTier {
  name: string
  description: string
  suitableFor: string
}
