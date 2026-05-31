"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Zone {
  id: string;
  label: string;
  spec: string;
  cx: string;
  cy: string;
  x: string;
  y: string;
  textAnchor?: "inherit" | "middle" | "end" | "start";
}

const ZONES: Zone[] = [
  {
    id: "doors",
    label: "Doors",
    spec: "Ballistic steel + polycarbonate composite",
    cx: "28%",
    cy: "52%",
    x: "28%",
    y: "80%",
    textAnchor: "middle",
  },
  {
    id: "glass",
    label: "Glazing",
    spec: "Laminated multi-layer OptiWhite glass",
    cx: "35%",
    cy: "30%",
    x: "35%",
    y: "16%",
    textAnchor: "middle",
  },
  {
    id: "roof",
    label: "Roof",
    spec: "Overhead blast plate — 6mm AR500",
    cx: "50%",
    cy: "18%",
    x: "68%",
    y: "10%",
    textAnchor: "start",
  },
  {
    id: "floor",
    label: "Floor",
    spec: "ERB blast-resistant underbody liner",
    cx: "50%",
    cy: "82%",
    x: "68%",
    y: "90%",
    textAnchor: "start",
  },
  {
    id: "fuel",
    label: "Fuel Tank",
    spec: "Armoured, self-sealing polyurethane",
    cx: "70%",
    cy: "70%",
    x: "72%",
    y: "82%",
    textAnchor: "start",
  },
  {
    id: "arches",
    label: "Wheel Arches",
    spec: "Reinforced arches — tyre-strike resistant",
    cx: "22%",
    cy: "74%",
    x: "18%",
    y: "60%",
    textAnchor: "end",
  },
];

export default function ProtectionDiagram() {
  const [activeZone, setActiveZone] = useState<string | null>(null);
  const active = ZONES.find((z) => z.id === activeZone);

  return (
    <section
      id="protection"
      className="section"
      style={{ background: "var(--bg-near-black)" }}
    >
      <div className="section-inner">
        <motion.h2
          className="type-title-1 text-[var(--text-white)] mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Protection Zones
        </motion.h2>
        <p className="type-body text-[var(--text-secondary)] mb-10">
          Hover each zone to see the ballistic specification for that area.
        </p>

        <div className="relative w-full" style={{ aspectRatio: "16/7" }}>
          {/* SVG diagram */}
          <svg
            viewBox="0 0 800 350"
            className="w-full h-full"
            style={{ overflow: "visible" }}
          >
            {/* Vehicle body — stylised side silhouette */}
            <rect
              x="60"
              y="120"
              width="680"
              height="160"
              rx="12"
              fill="#1a1a1a"
              stroke="rgba(255,255,255,0.08)"
              strokeWidth="1.5"
            />
            <rect
              x="160"
              y="60"
              width="380"
              height="120"
              rx="8"
              fill="#141414"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />

            {/* Wheels */}
            <circle
              cx="160"
              cy="285"
              r="45"
              fill="#111"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="2"
            />
            <circle
              cx="160"
              cy="285"
              r="28"
              fill="#0a0a0a"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
            <circle
              cx="640"
              cy="285"
              r="45"
              fill="#111"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="2"
            />
            <circle
              cx="640"
              cy="285"
              r="28"
              fill="#0a0a0a"
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />

            {/* Windscreen */}
            <rect
              x="175"
              y="70"
              width="140"
              height="100"
              rx="4"
              fill="rgba(41,151,255,0.08)"
              stroke="rgba(41,151,255,0.25)"
              strokeWidth="1"
            />

            {/* Zone hotspots */}
            {ZONES.map((zone) => (
              <g
                key={zone.id}
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setActiveZone(zone.id === activeZone ? null : zone.id)
                }
              >
                <circle
                  cx={zone.cx}
                  cy={zone.cy}
                  r="5%"
                  fill={
                    activeZone === zone.id
                      ? "rgba(0,113,227,0.3)"
                      : "rgba(255,255,255,0.04)"
                  }
                  stroke={
                    activeZone === zone.id
                      ? "var(--accent)"
                      : "rgba(255,255,255,0.18)"
                  }
                  strokeWidth="1.5"
                  strokeDasharray={activeZone === zone.id ? "none" : "4 3"}
                />
                <text
                  x={zone.x}
                  y={zone.y}
                  textAnchor={zone.textAnchor ?? "middle"}
                  fill={
                    activeZone === zone.id
                      ? "#2997ff"
                      : "rgba(255,255,255,0.48)"
                  }
                  fontSize="11"
                  fontWeight="500"
                  letterSpacing="0.06em"
                  style={{ textTransform: "uppercase" }}
                >
                  {zone.label}
                </text>
              </g>
            ))}
          </svg>

          {/* Tooltip */}
          {active && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-3 rounded-card text-center"
              style={{
                background: "var(--bg-surface-1)",
                boxShadow: "var(--shadow-card)",
                maxWidth: 280,
              }}
            >
              <p className="type-title-3 text-[var(--text-white)] mb-1">
                {active.label}
              </p>
              <p className="type-caption text-[var(--text-secondary)]">
                {active.spec}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
