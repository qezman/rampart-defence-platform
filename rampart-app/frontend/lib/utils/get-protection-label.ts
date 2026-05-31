const PROTECTION_LABELS: Record<string, string> = {
  BR4: 'Rifle protection — EN 1063 BR4',
  BR6: 'High-power rifle — EN 1063 BR6',
  BR7: 'Armour-piercing — EN 1063 BR7',
  'STANAG L1': 'STANAG 4569 Level 1 — Small arms',
  'STANAG L2': 'STANAG 4569 Level 2 — 7.62mm AP',
  'STANAG L3': 'STANAG 4569 Level 3 — 14.5mm AP',
}

export function getProtectionLabel(level: string): string {
  return PROTECTION_LABELS[level] ?? level
}

export function getProtectionColor(level: string): string {
  if (level.startsWith('STANAG')) return '#2997ff'
  return '#0071e3'
}
