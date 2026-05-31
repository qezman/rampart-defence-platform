'use client'

import { motion } from 'framer-motion'
import { CERTIFICATIONS } from '@/lib/constants'

interface CertCardProps {
  cert: (typeof CERTIFICATIONS)[number]
  index?: number
}

export default function CertCard({ cert, index = 0 }: CertCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-card p-8"
      style={{ background: 'var(--bg-surface-1)', boxShadow: 'var(--shadow-card)' }}
    >
      <p
        className="type-hero mb-3"
        style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text-white)', lineHeight: 1 }}
      >
        {cert.standard}
      </p>
      <p className="type-label text-[var(--accent-dark-bg)] mb-3">{cert.body}</p>
      <p className="type-caption text-[var(--text-secondary)]">{cert.covers}</p>
    </motion.div>
  )
}
