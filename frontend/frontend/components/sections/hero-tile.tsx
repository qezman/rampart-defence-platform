'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import SectionLabel from '@/components/ui/section-label'
import PillButton from '@/components/ui/pill-button'

interface CarouselVehicle {
  name: string
  tagline: string
  slug: string
  protection: string
  engine: string
  weight: string
  blast: string
  seats: string
  color: string
  svgType: 'lc300' | 'mrap' | 'apc'
}

const CAROUSEL_VEHICLES: CarouselVehicle[] = [
  {
    name: 'Armoured Land Cruiser 300',
    tagline: 'Flagship Executive Protection',
    slug: 'armoured-land-cruiser-300',
    protection: 'EN 1063 BR7 / VPAM VR7',
    engine: '3.5L Twin-Turbo V6 / 305 hp',
    weight: '5,200 kg',
    blast: 'ERB Level 2',
    seats: '5 + 1 Crew',
    color: '#2997ff', // Radiant Blue
    svgType: 'lc300',
  },
  {
    name: 'Mine Resistant Ambush Protected',
    tagline: 'Heavy Blast & IED Shielding',
    slug: 'mine-resistant-ambush-protected',
    protection: 'STANAG 4569 Level 3',
    engine: 'Cummins ISB / 285 hp',
    weight: '18,000 kg',
    blast: 'STANAG L3 Mine Blast',
    seats: '6 + 2 Crew',
    color: '#ff9f0a', // Amber/Orange
    svgType: 'mrap',
  },
  {
    name: 'Armoured Personnel Carrier',
    tagline: 'Tactical Infantry Mobility',
    slug: 'armoured-personnel-carrier',
    protection: 'STANAG 4569 Level 2',
    engine: 'Cummins 6BT / 190 hp',
    weight: '12,500 kg',
    blast: 'STANAG L2 Mine Blast',
    seats: '10 + 2 Crew',
    color: '#30d158', // Green
    svgType: 'apc',
  },
]

const FADE_UP = {
  hidden: { opacity: 0, y: 15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
}

export default function HeroTile() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const activeVehicle = CAROUSEL_VEHICLES[activeIndex]

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % CAROUSEL_VEHICLES.length)
    setProgress(0)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + CAROUSEL_VEHICLES.length) % CAROUSEL_VEHICLES.length)
    setProgress(0)
  }

  // Auto-play interval linked with progress bar
  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide()
          return 0
        }
        return prev + 1
      })
    }, 60) // 60ms * 100 steps = 6000ms (6 seconds per slide)

    return () => clearInterval(interval)
  }, [activeIndex, isHovered])

  // Reset progress when manual slide action occurs
  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-28 pb-16 lg:py-28"
      style={{ background: 'var(--bg-black)' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background gradient — simulates dramatic photography */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 via-black to-black" />

      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Accent glow matching active vehicle theme color */}
      <div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] opacity-[0.09] blur-[100px] transition-all duration-1000 pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${activeVehicle.color} 0%, transparent 70%)`,
        }}
      />

      <div className="relative z-10 section-inner-wide px-6 lg:px-[var(--gutter)] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Headline, active slide desc, controls */}
          <div className="lg:col-span-5 flex flex-col justify-between min-h-[440px]">
            <div>
              <motion.div initial="hidden" animate="visible" custom={0} variants={FADE_UP}>
                <SectionLabel>Tactical Armoury & Engineering</SectionLabel>
              </motion.div>

              <motion.h1
                className="type-hero text-[var(--text-white)] mt-4 mb-6 leading-[1.12]"
                initial="hidden"
                animate="visible"
                custom={1}
                variants={FADE_UP}
              >
                Built to<br />protect.
              </motion.h1>

              <motion.p
                className="type-body text-[var(--text-secondary)] max-w-[420px] mb-8"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={FADE_UP}
              >
                Rampart Defence Engineering design, manufacture, and repair certified light-tactical,
                civilian, and military armored platforms built to stand hostile environments.
              </motion.p>
            </div>

            {/* Dynamic content showing active vehicle information */}
            <div className="border-t border-[var(--border)] pt-6 mt-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <p
                    className="type-label mb-2 font-bold transition-all duration-300"
                    style={{ color: activeVehicle.color }}
                  >
                    {activeVehicle.tagline}
                  </p>
                  <h3 className="type-title-2 text-[var(--text-white)] mb-4">
                    {activeVehicle.name}
                  </h3>
                  <div className="flex gap-4">
                    <PillButton href={`/vehicles/${activeVehicle.slug}`} variant="primary" id={`hero-link-${activeVehicle.slug}`}>
                      View Details
                    </PillButton>
                    <PillButton href="/contact" variant="ghost" id="hero-contact-cta">
                      Enquire
                    </PillButton>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Slider Navigators */}
              <div className="flex items-center gap-6 mt-8">
                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)] hover:bg-[var(--border)] transition-colors text-[var(--text-white)]"
                    aria-label="Previous Vehicle"
                  >
                    ←
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--border)] hover:bg-[var(--border)] transition-colors text-[var(--text-white)]"
                    aria-label="Next Vehicle"
                  >
                    →
                  </button>
                </div>

                <div className="flex-1 max-w-[120px] h-[2px] bg-white/10 rounded-full relative overflow-hidden">
                  <div
                    className="h-full transition-all duration-[60ms] ease-linear"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: activeVehicle.color,
                    }}
                  />
                </div>

                <div className="flex items-center gap-1.5">
                  {CAROUSEL_VEHICLES.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleDotClick(idx)}
                      className="w-2.5 h-2.5 rounded-full transition-all"
                      style={{
                        backgroundColor: idx === activeIndex ? activeVehicle.color : 'rgba(255,255,255,0.15)',
                        transform: idx === activeIndex ? 'scale(1.2)' : 'scale(1)',
                      }}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech HUD schematic card of active vehicle */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              className="relative w-full max-w-[620px] aspect-[16/10] rounded-card p-6 overflow-hidden flex flex-col justify-between border transition-all duration-700"
              style={{
                background: 'rgba(20, 20, 22, 0.65)',
                borderColor: 'var(--border)',
                backdropFilter: 'blur(16px)',
                boxShadow: 'var(--shadow-card)',
              }}
            >
              {/* High-tech scanner laser line */}
              <motion.div
                className="absolute top-0 bottom-0 w-[2px] opacity-20 pointer-events-none"
                animate={{ left: ['0%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  background: `linear-gradient(to bottom, transparent, ${activeVehicle.color}, transparent)`,
                }}
              />

              {/* Grid calibration corner lines */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l opacity-25" style={{ borderColor: activeVehicle.color }} />
              <div className="absolute top-3 right-3 w-4 h-4 border-t border-r opacity-25" style={{ borderColor: activeVehicle.color }} />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l opacity-25" style={{ borderColor: activeVehicle.color }} />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r opacity-25" style={{ borderColor: activeVehicle.color }} />

              {/* HUD Header */}
              <div className="flex justify-between items-center relative z-10">
                <div>
                  <p className="type-label text-[10px] text-white/30 tracking-widest font-mono">
                    SYS: CAD_SCHEMATIC_v3.9
                  </p>
                  <p className="text-[12px] font-mono text-[var(--text-white)] font-bold">
                    PLATFORM: {activeVehicle.svgType.toUpperCase()}_REV2
                  </p>
                </div>
                <div
                  className="type-label text-[10px] px-2.5 py-1 rounded font-mono border font-bold"
                  style={{
                    color: activeVehicle.color,
                    borderColor: `${activeVehicle.color}40`,
                    background: `${activeVehicle.color}10`,
                  }}
                >
                  {activeVehicle.protection}
                </div>
              </div>

              {/* SVG Vector Blueprint Area */}
              <div className="flex-1 flex items-center justify-center my-4 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 0.92, rotateY: 10 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.95, rotateY: -10 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <VehicleVector type={activeVehicle.svgType} color={activeVehicle.color} />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* HUD Details Panel */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/5 relative z-10">
                <div>
                  <p className="type-label text-[9px] text-white/40 tracking-wider mb-0.5">Blast Standard</p>
                  <p className="text-[12px] text-[var(--text-white)] font-mono font-semibold">{activeVehicle.blast}</p>
                </div>
                <div>
                  <p className="type-label text-[9px] text-white/40 tracking-wider mb-0.5">Propulsion</p>
                  <p className="text-[12px] text-[var(--text-white)] font-mono font-semibold truncate" title={activeVehicle.engine}>
                    {activeVehicle.engine.split(' / ')[0]}
                  </p>
                </div>
                <div>
                  <p className="type-label text-[9px] text-white/40 tracking-wider mb-0.5">Combat Weight</p>
                  <p className="text-[12px] text-[var(--text-white)] font-mono font-semibold">{activeVehicle.weight}</p>
                </div>
                <div>
                  <p className="type-label text-[9px] text-white/40 tracking-wider mb-0.5">Payload Capacity</p>
                  <p className="text-[12px] text-[var(--text-white)] font-mono font-semibold">{activeVehicle.seats}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────────────────────────────────
   VEHICLE VECTOR COMPONENT (BLUEPRINT STYLE)
   ────────────────────────────────────────────────────────────────────────── */
interface VehicleVectorProps {
  type: 'lc300' | 'mrap' | 'apc'
  color: string
}

function VehicleVector({ type, color }: VehicleVectorProps) {
  if (type === 'lc300') {
    return (
      <svg viewBox="0 0 500 220" className="w-full max-h-[170px]" fill="none">
        {/* Schematic Grid Lines */}
        <line x1="50" y1="20" x2="50" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="250" y1="20" x2="250" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="450" y1="20" x2="450" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="20" y1="110" x2="480" y2="110" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

        {/* Chassis / Car Body silhouette */}
        <path
          d="M 50,150 L 50,132 L 80,128 L 132,126 L 168,76 L 332,76 L 398,78 L 442,106 L 452,128 L 452,160 L 418,160 M 356,160 L 210,160 M 148,160 L 50,160"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Dynamic Highlight Window Armor Plates */}
        <polygon
          points="174,84 316,84 316,118 142,118"
          fill={`${color}08`}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon
          points="326,84 384,85 410,118 326,118"
          fill={`${color}08`}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Door Protection Plate Highlights */}
        <path
          d="M 140,123 L 314,123 L 314,158 L 140,158 Z"
          fill="rgba(255,255,255,0.03)"
          stroke="rgba(255,255,255,0.12)"
          strokeWidth="1"
        />

        {/* Wheels */}
        <circle cx="178" cy="160" r="32" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="178" cy="160" r="22" stroke={`${color}50`} strokeWidth="1.5" />
        <circle cx="178" cy="160" r="6" fill={color} />

        <circle cx="388" cy="160" r="32" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="388" cy="160" r="22" stroke={`${color}50`} strokeWidth="1.5" />
        <circle cx="388" cy="160" r="6" fill={color} />

        {/* Run-flat labels */}
        <path d="M 178,128 L 220,100" stroke={color} strokeWidth="0.8" strokeDasharray="2 2" />
        <text x="226" y="98" fill={color} fontSize="8" className="font-mono">RUNFLAT_SYS</text>

        {/* Calibrator Text */}
        <text x="50" y="190" fill="rgba(255,255,255,0.2)" fontSize="8" className="font-mono">L: 4980MM</text>
        <text x="400" y="190" fill="rgba(255,255,255,0.2)" fontSize="8" className="font-mono">H: 1950MM</text>
      </svg>
    )
  }

  if (type === 'mrap') {
    return (
      <svg viewBox="0 0 500 220" className="w-full max-h-[170px]" fill="none">
        {/* Schematic Grid Lines */}
        <line x1="50" y1="20" x2="50" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="250" y1="20" x2="250" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="450" y1="20" x2="450" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

        {/* Turret Mount */}
        <rect x="230" y="32" width="40" height="12" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
        <path d="M 235,32 L 210,12" stroke={color} strokeWidth="1.5" />

        {/* Heavy cabin outline */}
        <path
          d="M 60,140 L 70,110 L 115,108 L 160,65 L 345,65 L 430,95 L 438,140 L 418,140 M 344,140 L 220,140 M 156,140 L 60,140"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* V-hull Blast Deflector Highlight */}
        <polygon
          points="130,140 250,158 370,140 250,132"
          fill={`${color}08`}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Large tactical tires */}
        <circle cx="188" cy="140" r="38" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="188" cy="140" r="26" stroke={`${color}50`} strokeWidth="1.5" />
        <circle cx="188" cy="140" r="8" fill={color} />

        <circle cx="380" cy="140" r="38" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="380" cy="140" r="26" stroke={`${color}50`} strokeWidth="1.5" />
        <circle cx="380" cy="140" r="8" fill={color} />

        {/* Underbody blast line indicator */}
        <path d="M 210,172 L 250,162 L 290,172" stroke={color} strokeWidth="1" strokeDasharray="3 3" />
        <text x="250" y="185" fill={color} fontSize="8" className="font-mono" textAnchor="middle">V_HULL_DEFLECTION</text>

        {/* Cab glass panel */}
        <polygon
          points="170,72 250,72 250,96 142,96"
          stroke="rgba(255,255,255,0.15)"
          strokeWidth="1"
        />
      </svg>
    )
  }

  if (type === 'apc') {
    return (
      <svg viewBox="0 0 500 220" className="w-full max-h-[170px]" fill="none">
        {/* Schematic Grid Lines */}
        <line x1="50" y1="20" x2="50" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="250" y1="20" x2="250" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />
        <line x1="450" y1="20" x2="450" y2="200" stroke="rgba(255,255,255,0.03)" strokeDasharray="3 3" />

        {/* Armored APC angular profile */}
        <path
          d="M 40,144 L 80,95 L 140,84 L 436,84 L 452,105 L 452,144 L 418,144 M 356,144 L 144,144 M 94,144 L 40,144"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Front Sloped Glacis Plate Highlight */}
        <polygon
          points="40,144 80,95 130,95 106,144"
          fill={`${color}08`}
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Gun Port and hatch outlines */}
        <circle cx="210" cy="112" r="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <circle cx="270" cy="112" r="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <circle cx="330" cy="112" r="3" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />

        {/* Axle layout / Multi wheels */}
        <circle cx="120" cy="144" r="24" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="120" cy="144" r="16" stroke={`${color}50`} strokeWidth="1" />
        <circle cx="120" cy="144" r="5" fill={color} />

        <circle cx="180" cy="144" r="24" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="180" cy="144" r="16" stroke={`${color}50`} strokeWidth="1" />
        <circle cx="180" cy="144" r="5" fill={color} />

        <circle cx="320" cy="144" r="24" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="320" cy="144" r="16" stroke={`${color}50`} strokeWidth="1" />
        <circle cx="320" cy="144" r="5" fill={color} />

        <circle cx="380" cy="144" r="24" stroke="rgba(255,255,255,0.22)" strokeWidth="2" />
        <circle cx="380" cy="144" r="16" stroke={`${color}50`} strokeWidth="1" />
        <circle cx="380" cy="144" r="5" fill={color} />

        {/* Dimension markings */}
        <path d="M 40,70 L 452,70" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="2 2" />
        <text x="246" y="64" fill="rgba(255,255,255,0.2)" fontSize="8" className="font-mono" textAnchor="middle">8x8_TACTICAL_WHEELBASE</text>
      </svg>
    )
  }

  return null
}
