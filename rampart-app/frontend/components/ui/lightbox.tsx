'use client'

import { useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import FallbackImage from '@/components/ui/fallback-image'
import { useLightbox } from '@/hooks/use-lightbox'

interface LightboxProps {
  images: string[]
  fallbackSrc: string
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({
  images,
  fallbackSrc,
  isOpen,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
    },
    [onClose, onNext, onPrev],
  )

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, handleKeyDown])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.96)' }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="h-8 w-8" />
      </button>

      <p className="absolute top-6 left-1/2 -translate-x-1/2 type-caption text-white/50">
        {currentIndex + 1} / {images.length}
      </p>

      <button
        onClick={(e) => { e.stopPropagation(); onPrev() }}
        className="absolute left-6 text-white/60 hover:text-white transition-colors p-4"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-10 w-10" />
      </button>

      <div
        className="relative w-full max-w-5xl mx-16 aspect-video"
        onClick={(e) => e.stopPropagation()}
      >
        <FallbackImage
          src={images[currentIndex] ?? fallbackSrc}
          fallbackSrc={fallbackSrc}
          alt={`Gallery image ${currentIndex + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>

      <button
        onClick={(e) => { e.stopPropagation(); onNext() }}
        className="absolute right-6 text-white/60 hover:text-white transition-colors p-4"
        aria-label="Next image"
      >
        <ChevronRight className="h-10 w-10" />
      </button>
    </div>
  )
}

export { useLightbox }
