'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const TEXT = "Speaking of the 'engineering underneath it' - here's mine  >>>"

export function Transition() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const words = TEXT.split(' ')

  return (
    <section ref={ref} className="relative py-6 overflow-hidden bg-accent" aria-label="Transition">
      <div className="relative flex justify-center items-center">
        <p className="font-body font-black text-base md:text-xl uppercase tracking-wide text-accent-foreground px-4">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </p>
      </div>
    </section>
  )
}