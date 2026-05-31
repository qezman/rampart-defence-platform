'use client'

import { motion } from 'framer-motion'
import Lightbox from '@/components/ui/lightbox'
import FallbackImage from '@/components/ui/fallback-image'
import { useLightbox } from '@/hooks/use-lightbox'
import { getVehicleImageFallback, resolveVehicleImageSrc } from '@/lib/utils/vehicle-image'

interface VehicleGalleryProps {
  images: string[]
  vehicleName: string
}

export default function VehicleGallery({ images, vehicleName }: VehicleGalleryProps) {
  const visibleImages = images.map(resolveVehicleImageSrc)
  const { isOpen, currentIndex, open, close, next, prev } = useLightbox(visibleImages)
  const [hero, ...rest] = visibleImages

  return (
    <section id="gallery" className="section" style={{ background: 'var(--bg-near-black)' }}>
      <div className="section-inner-wide mx-auto px-[var(--gutter)]">
        <motion.h2
          className="type-title-1 text-[var(--text-white)] mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h2>

        <div className="grid grid-cols-4 grid-rows-2 gap-3" style={{ height: '480px' }}>
          <button
            className="col-span-2 row-span-2 relative overflow-hidden rounded-card group"
            style={{ background: '#1a1a1a' }}
            onClick={() => open(0)}
          >
            <FallbackImage
              src={hero ?? resolveVehicleImageSrc()}
              fallbackSrc={getVehicleImageFallback()}
              alt={`${vehicleName} gallery image 1`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <span className="absolute bottom-4 left-4 type-label text-white/50">
              {vehicleName}
            </span>
          </button>

          {rest.slice(0, 4).map((image, i) => (
            <button
              key={`${image}-${i}`}
              className="relative overflow-hidden rounded-card group"
              style={{ background: '#1a1a1a' }}
              onClick={() => open(i + 1)}
            >
              <FallbackImage
                src={image}
                fallbackSrc={getVehicleImageFallback()}
                alt={`${vehicleName} gallery image ${i + 2}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/35" />
              <span className="absolute inset-0 flex items-center justify-center type-caption text-white/70 opacity-0 group-hover:opacity-100 transition-opacity">
                View
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={visibleImages.length > 0 ? visibleImages : [getVehicleImageFallback()]}
        fallbackSrc={getVehicleImageFallback()}
        isOpen={isOpen}
        currentIndex={currentIndex}
        onClose={close}
        onNext={next}
        onPrev={prev}
      />
    </section>
  )
}
