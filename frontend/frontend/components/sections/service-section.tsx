"use client";

import { motion } from "framer-motion";
import SectionLabel from "@/components/ui/section-label";
import PillButton from "@/components/ui/pill-button";

interface ServiceSectionProps {
  id?: string;
  label: string;
  headline: string;
  body: string;
  listItems?: string[];
  tiers?: { name: string; description: string; suitableFor: string }[];
  steps?: string[];
  cta: { label: string; href: string };
  background: string;
  children?: React.ReactNode;
}

const FADE = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ServiceSection({
  id,
  label,
  headline,
  body,
  listItems,
  tiers,
  steps,
  cta,
  background,
  children,
}: ServiceSectionProps) {
  return (
    <section id={id} className="section" style={{ background }}>
      <div className="section-inner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={FADE}
          className="mb-12"
        >
          <SectionLabel className="mb-4">{label}</SectionLabel>
          <h2 className="type-headline text-[var(--text-white)] mb-6 max-w-[560px]">
            {headline}
          </h2>
          <p className="type-body text-[var(--text-secondary)] max-w-[600px]">
            {body}
          </p>
        </motion.div>

        {children}

        {listItems && (
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE}
            className="mb-10 flex flex-col"
          >
            {listItems.map((item) => (
              <li
                key={item}
                className="type-body text-[var(--text-secondary)] py-3"
                style={{ borderBottom: "1px solid var(--border-light)" }}
              >
                {item}
              </li>
            ))}
          </motion.ul>
        )}

        {tiers && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: i * 0.1, duration: 0.6 },
                  },
                }}
                className="rounded-card p-10"
                style={{
                  background: "var(--bg-surface-1)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <p className="type-title-3 text-[var(--text-white)] mb-2">
                  {tier.name}
                </p>
                <p className="type-caption text-[var(--text-secondary)] mb-3">
                  {tier.description}
                </p>
                <p className="type-label text-[var(--accent-dark-bg)]">
                  {tier.suitableFor}
                </p>
              </motion.div>
            ))}
          </div>
        )}

        {steps && (
          <motion.ol
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={FADE}
            className="mb-10 flex flex-col gap-4"
          >
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-5">
                <span
                  className="type-label shrink-0 mt-1"
                  style={{ color: "var(--accent-dark-bg)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="type-body text-[var(--text-secondary)]">{step}</p>
              </li>
            ))}
          </motion.ol>
        )}

        <PillButton
          href={cta.href}
          variant="primary"
          id={`service-cta-${label.toLowerCase().replace(/\s+/g, "-")}`}
        >
          {cta.label}
        </PillButton>
      </div>
    </section>
  );
}
