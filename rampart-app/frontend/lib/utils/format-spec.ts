export function formatWeight(kg: number): string {
  return `${(kg / 1000).toFixed(1)}t`
}

export function formatSpecValue(key: string, value: string): string {
  return value
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}
