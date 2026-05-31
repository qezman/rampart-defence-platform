'use client'

import { motion } from 'framer-motion'

interface OptionalUpgradesProps {
  upgrades: string[]
}

export default function OptionalUpgrades({ upgrades }: OptionalUpgradesProps) {
  return (
    <section className="section" style={{ background: 'var(--bg-black)' }}>
      <div className="section-inner">
        <motion.h2
          className="type-title-1 text-[var(--text-white)] mb-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Optional Upgrades
        </motion.h2>
        <p className="type-body text-[var(--text-secondary)] mb-10">
          Each platform can be configured to your specific operational requirements.
        </p>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {upgrades.map((upgrade) => (
            <div
              key={upgrade}
              className="rounded-card px-5 py-3"
              style={{ background: 'var(--bg-surface-1)' }}
            >
              <p className="type-caption text-[var(--text-secondary)]">{upgrade}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
