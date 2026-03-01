'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WORDS = [
  { text: 'I believe', style: 'normal' },
  { text: 'the most powerful', style: 'normal' },
  { text: 'technology', style: 'accent' },
  { text: 'is the kind that', style: 'normal' },
  { text: 'disappears', style: 'italic' },
  { text: '—', style: 'muted' },
  { text: 'where the', style: 'normal' },
  { text: 'experience', style: 'accent' },
  { text: 'matters more than', style: 'normal' },
  { text: 'the engineering', style: 'muted' },
  { text: 'underneath it.', style: 'muted' },
]

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      className="relative py-24 md:py-36 overflow-hidden bg-muted/20"
      aria-label="Design philosophy"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden="true" />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(38 92% 55% / 0.05), transparent)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6" ref={ref}>
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10 justify-center"
        >
          <span className="w-8 h-px bg-accent" aria-hidden="true" />
          <span className="text-lg font-mono text-accent uppercase tracking-widest">
            Creator's Philosophy
          </span>
          <span className="w-8 h-px bg-accent" aria-hidden="true" />
        </motion.div>

        {/* Quote — word by word animation */}
        <p
          className="text-center font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight"
          aria-label="I believe the most powerful technology is the kind that disappears — where the experience matters more than the engineering underneath it."
        >
          {WORDS.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, filter: 'blur(0px)' }
                  : {}
              }
              transition={{
                duration: 0.5,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`inline-block mr-[0.25em] ${
                word.style === 'accent'
                  ? 'text-accent'
                  : word.style === 'italic'
                  ? 'italic text-foreground'
                  : word.style === 'muted'
                  ? 'text-muted-foreground'
                  : 'text-foreground'
              }`}
            >
              {word.text}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  )
}