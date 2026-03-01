'use client'

import { motion, useMotionValue, useTransform } from 'framer-motion'
import { ArrowRight, ArrowDown } from 'lucide-react'
import { useEffect, useRef } from 'react'

const WORDS = ['builder', 'designer', 'engineer', 'tinkerer']

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-background"
      aria-label="Introduction"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-grid opacity-100" aria-hidden="true" />

      {/* Radial glow — center */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 60%, hsl(38 92% 55% / 0.08), transparent)',
        }}
      />

      {/* Floating orbs */}
      <FloatingOrbs />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-12 flex flex-col items-center text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-lg font-mono text-muted-foreground mb-8"
        >
          <span
            className="w-2 h-2 rounded-full bg-accent animate-pulse"
            aria-hidden="true"
          />
          Available for Co-op SUMMER 2026
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-display font-extrabold text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight text-foreground">
            Rishit
            <br />
            <span className="accent-gradient-text">Singh</span>
          </h1>
        </motion.div>

        {/* Rotating roles */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6"
        >
          <RotatingWords words={WORDS} />
        </motion.div>

        {/* One-liner */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-muted-foreground text-base md:text-xl max-w-2xl mx-auto leading-relaxed font-body"
        >
          CS sophomore at the University of Cincinnati building things that feel like they actually
          matter — at the intersection of{' '}
          <span className="text-foreground font-medium">hardware</span>,{' '}
          <span className="text-foreground font-medium">software</span>, and{' '}
          <span className="text-foreground font-medium">
            human-centered design
          </span>
          .
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-display font-semibold text-m transition-all glow-accent"
          >
            View My Work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </motion.a>

          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              document
                .getElementById('about')
                ?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-foreground font-display font-medium text-m hover:border-accent/40 hover:bg-card transition-all"
          >
            Get in Touch
          </motion.a>
        </motion.div>

        {/* Tech stack strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14"
        >
          <TechStrip />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
        aria-hidden="true"
      >
        <span className="text-xs font-mono tracking-widest uppercase">
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Rotating Word Component
───────────────────────────────────────── */
function RotatingWords({ words }: { words: string[] }) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center gap-3 font-mono text-sm md:text-base text-muted-foreground"
    >
      <span className="text-accent">//</span>
      <span>a passionate</span>
      <div className="relative overflow-hidden h-6 w-28 md:w-32">
        <motion.div
          animate={{ y: [0, -24, -48, -72, -96, -120, -144, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatDelay: 0.5,
          }}
          className="flex flex-col"
        >
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className="h-6 leading-6 text-accent font-semibold text-left"
            >
              {word}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────
   Floating Orbs (decorative)
───────────────────────────────────────── */
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large orb — top right */}
      <motion.div
        animate={{
          x: [0, 20, 0, -10, 0],
          y: [0, -15, 5, -10, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full"
        style={{
          background:
            'radial-gradient(circle, hsl(38 92% 55% / 0.06) 0%, transparent 70%)',
        }}
      />
      {/* Medium orb — bottom left */}
      <motion.div
        animate={{
          x: [0, -20, 10, 0],
          y: [0, 20, -10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full"
        style={{
          background:
            'radial-gradient(circle, hsl(200 80% 60% / 0.04) 0%, transparent 70%)',
        }}
      />
      {/* Small accent dot */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-accent/50"
      />
      <motion.div
        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 rounded-full bg-accent/40"
      />
    </div>
  )
}

/* ─────────────────────────────────────────
   Tech Strip marquee
───────────────────────────────────────── */
const TECH = [
  'UI/UX',
  'React',
  'Figma',
  'Python',
  'C/C++',
  'Framer Motion',
  'Arduino',
  'Raspberry Pi',
  'Git'
]

function TechStrip() {
  return (
    <div className="relative overflow-hidden" role="list" aria-label="Technologies">
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, hsl(var(--muted-background)), transparent)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(-90deg, hsl(var(--muted-background)), transparent)',
        }}
        aria-hidden="true"
      />
      <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
        {[...TECH, ...TECH].map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 mx-4 text-xs font-mono text-muted-foreground/60 uppercase tracking-widest"
          >
            {tech}
            <span className="text-accent/40">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
