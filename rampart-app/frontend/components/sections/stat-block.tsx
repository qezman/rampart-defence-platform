"use client";

import { motion } from "framer-motion";
import { useCounter } from "@/hooks/use-counter";
import { STATS } from "@/lib/constants";

function StatItem({
  value,
  suffix,
  prefix,
  label,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="flex flex-col items-center text-center gap-3">
      <p className="type-hero text-[var(--text-white)]">
        {prefix}
        {count}
        {suffix}
      </p>
      <p
        className="type-label whitespace-pre-line"
        style={{ color: "rgba(255,255,255,0.48)" }}
      >
        {label}
      </p>
    </div>
  );
}

export default function StatBlock() {
  return (
    <section className="section" style={{ background: "var(--bg-black)" }}>
      <div className="section-inner">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {STATS.map((stat) => (
            <StatItem
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={"prefix" in stat ? stat.prefix : undefined}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
