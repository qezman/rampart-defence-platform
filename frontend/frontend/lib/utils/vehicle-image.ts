import { IMAGE_FALLBACKS } from '@/lib/utils/image-fallbacks'

export function resolveVehicleImageSrc(src?: string): string {
  return src || IMAGE_FALLBACKS.vehicle
}

export function getVehicleImageFallback(): string {
  return IMAGE_FALLBACKS.vehicle
}
