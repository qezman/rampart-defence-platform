export type CaseStudySector = 'military' | 'vip-civilian' | 'law-enforcement' | 'commercial'

export interface CaseStudyScope {
  vehicles: number
  timeline: string
  clientType: string
  outcome: string
}

export interface CaseStudy {
  slug: string
  title: string
  sector: CaseStudySector
  heroImage: string
  scope: CaseStudyScope
  challenge: string
  solution: string
  results: string[]
  vehiclesUsed: string[]
}
