"use client";

import { motion } from "framer-motion";
import { RefreshCw, Settings, ShieldCheck, Wrench } from "lucide-react";

const CAPABILITIES = [
  {
    Icon: ShieldCheck,
    label: "Sales",
    description: "Civilian and military armoured platforms",
  },
  {
    Icon: Wrench,
    label: "Repair",
    description: "All armour classes, all platforms",
  },
  {
    Icon: RefreshCw,
    label: "Refurbishment",
    description: "Fleet modernisation and upgrades",
  },
  {
    Icon: Settings,
    label: "Armouring",
    description: "Convert any base vehicle to your spec",
  },
];

const FADE_UP = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function CapabilityStrip() {
  return (
    <section className="section" style={{ background: "var(--bg-near-black)" }}>
      <div className="section-inner">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              variants={FADE_UP}
              className="flex flex-col items-start gap-3"
            >
              <cap.Icon
                className="h-8 w-8 text-[var(--accent-dark-bg)]"
                strokeWidth={1.8}
              />
              <div>
                <p className="type-title-3 text-[var(--text-white)] mb-1">
                  {cap.label}
                </p>
                <p className="type-caption text-[var(--text-secondary)]">
                  {cap.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
