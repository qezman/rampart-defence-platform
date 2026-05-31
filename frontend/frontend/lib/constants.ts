export const PROTECTION_LEVELS = [
  'BR4',
  'BR6',
  'BR7',
  'STANAG L1',
  'STANAG L2',
  'STANAG L3',
] as const

export const VEHICLE_CATEGORIES = ['civilian', 'military'] as const

export const VEHICLE_STATUSES = ['available', 'made-to-order'] as const

export const ENQUIRY_TYPES = [
  'purchase',
  'repair',
  'refurbishment',
  'armouring',
  'other',
] as const

export const MAX_UPLOAD_SIZE_MB = 10
export const ENQUIRY_RESPONSE_DAYS = 2

export const CONTACT = {
  phone: '+234 (0) 800 000 0000',
  email: 'enquiries@rampartdefence.com',
  whatsapp: '+234 (0) 800 000 0000',
  address: 'Lagos, Nigeria',
  hours: 'Monday–Friday, 8:00 AM – 5:00 PM WAT',
} as const

export const CERTIFICATIONS = [
  {
    id: 'en-1063',
    standard: 'EN 1063',
    body: 'European Standards Organisation',
    covers: 'Bullet-resistant glazing — protection levels BR1–BR7',
  },
  {
    id: 'en-1522',
    standard: 'EN 1522',
    body: 'European Standards Organisation',
    covers: 'Bullet-resistant windows — frames and hardware',
  },
  {
    id: 'vpam',
    standard: 'VPAM BRV 2009',
    body: 'Vereinigung der Prüfstellen für angriffshemmende Materialien',
    covers: 'Comprehensive ballistic resistance for vehicle armour',
  },
  {
    id: 'stanag',
    standard: 'STANAG 4569',
    body: 'NATO Standardisation Agency',
    covers: 'Ballistic and mine protection levels for military vehicles',
  },
  {
    id: 'nij',
    standard: 'NIJ 0108.01',
    body: 'National Institute of Justice',
    covers: 'Ballistic-resistant protective materials',
  },
  {
    id: 'iso',
    standard: 'ISO 9001:2015',
    body: 'International Organisation for Standardisation',
    covers: 'Quality management systems — all engineering operations',
  },
] as const

export const STATS = [
  { value: 500, suffix: '+', label: 'Vehicles\nDelivered' },
  { value: 15, suffix: '+', label: 'Countries\nServed' },
  { value: 7, prefix: 'BR', suffix: '', label: 'Certified' },
  { value: 30, suffix: ' Years', label: 'Experience' },
] as const

export const NAV_LINKS = [
  { label: 'Vehicles', href: '/vehicles' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Cases', href: '/cases' },
  { label: 'Contact', href: '/contact' },
] as const
