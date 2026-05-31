'use client'

import { motion } from 'framer-motion'

interface SpecTableProps {
  specs: Record<string, string>
}

export default function SpecTable({ specs }: SpecTableProps) {
  const entries = Object.entries(specs)

  return (
    <section id="specifications" className="section" style={{ background: 'var(--bg-black)' }}>
      <div className="section-inner">
        <motion.h2
          className="type-title-1 text-[var(--text-white)] mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Specifications
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {entries.map(([label, value], i) => (
            <div
              key={label}
              className="flex items-start justify-between py-4 gap-8"
              style={{
                borderBottom: i < entries.length - 1 ? '1px solid var(--border-light)' : 'none',
              }}
            >
              <p className="type-body text-[var(--text-secondary)] shrink-0 w-[40%] max-w-[280px]">
                {label}
              </p>
              <p
                className="type-body text-[var(--text-white)] text-right"
                style={{ fontVariantNumeric: 'tabular-nums' }}
              >
                {value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
