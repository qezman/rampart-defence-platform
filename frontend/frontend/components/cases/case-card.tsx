"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FallbackImage from "@/components/ui/fallback-image";
import { IMAGE_FALLBACKS } from "@/lib/utils/image-fallbacks";
import type { CaseStudy } from "@/types/case-study";

const SECTOR_LABELS: Record<CaseStudy["sector"], string> = {
  military: "Military",
  "vip-civilian": "VIP Civilian",
  "law-enforcement": "Law Enforcement",
  commercial: "Commercial",
};

interface CaseCardProps {
  caseStudy: CaseStudy;
  index?: number;
}

export default function CaseCard({ caseStudy, index = 0 }: CaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <Link
        href={`/cases/${caseStudy.slug}`}
        className="group block rounded-card overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
        style={{
          background: "var(--bg-surface-1)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <div
          className="h-[280px] relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #1a2535 0%, #0d0d0d 100%)",
          }}
        >
          <FallbackImage
            src={caseStudy.heroImage}
            fallbackSrc={IMAGE_FALLBACKS.case}
            alt={caseStudy.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>

        <div className="p-8">
          <p
            className="type-label mb-3"
            style={{ color: "var(--accent-dark-bg)" }}
          >
            {SECTOR_LABELS[caseStudy.sector]}
          </p>
          <h3 className="type-title-2 text-[var(--text-white)] mb-2 leading-snug">
            {caseStudy.title}
          </h3>
          <p className="type-caption text-[var(--text-tertiary)] mb-4">
            {caseStudy.scope.vehicles} vehicles / {caseStudy.scope.timeline} /{" "}
            {caseStudy.scope.clientType}
          </p>
          <p className="type-body text-[var(--text-secondary)] mb-6 line-clamp-3">
            {caseStudy.challenge}
          </p>
          <span
            className="type-caption font-medium"
            style={{ color: "var(--accent-dark-bg)" }}
          >
            Read More
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
