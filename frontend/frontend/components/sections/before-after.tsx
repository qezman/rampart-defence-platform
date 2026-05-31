'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

interface BeforeAfterProps {
  beforeLabel?: string
  afterLabel?: string
}

export default function BeforeAfter({ beforeLabel = 'Before', afterLabel = 'After' }: BeforeAfterProps) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const updateSlider = (clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const pos = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100))
    setSliderPos(pos)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="w-full overflow-hidden rounded-card select-none"
      style={{ aspectRatio: '16/7', position: 'relative', cursor: 'col-resize' }}
      ref={containerRef}
      onMouseDown={() => { isDragging.current = true }}
      onMouseMove={(e) => { if (isDragging.current) updateSlider(e.clientX) }}
      onMouseUp={() => { isDragging.current = false }}
      onMouseLeave={() => { isDragging.current = false }}
      onTouchMove={(e) => updateSlider(e.touches[0]?.clientX ?? 0)}
    >
      {/* Before (full) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)' }}
      >
        <div className="text-center">
          <div className="w-32 h-20 mx-auto mb-4 rounded opacity-60"
            style={{ background: 'linear-gradient(180deg, #3a3a3a, #252525)' }} />
          <p className="type-caption text-white/30">Degraded — pre-refurbishment</p>
        </div>
      </div>

      {/* After (clipped) */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          background: 'linear-gradient(135deg, #0d1117 0%, #1a2535 50%, #0d1117 100%)',
          clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
        }}
      >
        <div className="text-center">
          <div className="w-32 h-20 mx-auto mb-4 rounded"
            style={{ background: 'linear-gradient(180deg, #2d3a4a, #1a2535)', boxShadow: '0 4px 20px rgba(0,113,227,0.3)' }} />
          <p className="type-caption text-[var(--accent-dark-bg)]">Restored — fully certified</p>
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-[2px]"
        style={{ left: `${sliderPos}%`, background: 'white', transform: 'translateX(-50%)' }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white flex items-center justify-center"
          style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.4)' }}
        >
          <span className="text-black text-xs font-semibold">⇔</span>
        </div>
      </div>

      {/* Labels */}
      <span className="absolute top-4 left-4 type-label text-white/60">{beforeLabel}</span>
      <span className="absolute top-4 right-4 type-label text-[var(--accent-dark-bg)]">{afterLabel}</span>
    </motion.div>
  )
}
