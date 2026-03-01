'use client'

import { motion } from 'framer-motion'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Github, Mail, FileText, ArrowUpRight } from 'lucide-react'
import { TfiLinkedin } from 'react-icons/tfi'
import { FaInstagram } from 'react-icons/fa6'

const SOCIALS = [
  {
    label: 'GitHub',
    handle: '@rimerde',
    href: 'https://github.com/rimerde',
    icon: Github,
    color: '#ffffff',
    bg: '#1a1a1a',
    border: '#333333',
  },
  {
    label: 'LinkedIn',
    handle: 'singhrishit',
    href: 'https://linkedin.com/in/singhrishit',
    icon: TfiLinkedin,
    color: '#ffffff',
    bg: '#0A66C2',
    border: '#0A66C2',
  },
  {
    label: 'Email',
    handle: 'rishitsingh@outlook.com',
    href: 'mailto:rishitsingh@outlook.com',
    icon: Mail,
    color: '#1a1a1a',
    bg: '#ffffff',
    border: '#ffffff',
  },
  {
    label: 'Instagram',
    handle: 'curlyhairbandkid',
    href: 'https://instagram.com/curlyhairbandkid',
    icon: FaInstagram,
    color: '',
    bg: '#d62976',
    border: '',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="section-padding bg-background relative"
      aria-labelledby="about-heading"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-border to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="About"
          title="A little about me."
          id="about-heading"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: narrative */}
          <div className="space-y-5">
            <FadeIn delay={0.1}>
              <p className="text-lg text-foreground leading-relaxed">
                I'm a CS sophomore at the University of Cincinnati with a bias toward building.
                Whether it's a hardware prototype at 2am or a design system
                in Figma, I care about the full stack of a product — from
                the circuit to the click.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In my freshman year, I co-founded a hardware startup building a pocket retro camera
                with instant wireless transfer, competed in hackathons, and
                spent more time than I should admit thinking about accessible
                interfaces.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not building, I'm probably thinking about industrial
                design, reading about how things are made, or taking apart
                something to see how it works.
              </p>
            </FadeIn>

            {/* Resume button */}
            <FadeIn delay={0.3}>
              <div className="pt-2">
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-accent text-accent-foreground font-display font-semibold text-lg glow-accent transition-all"
                  aria-label="View resume (opens PDF)"
                >
                  <FileText size={15} aria-hidden="true" />
                  View Resume
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </motion.a>
              </div>
            </FadeIn>
          </div>

          {/* Right: socials */}
          <div className="space-y-4">
            <FadeIn delay={0.15}>
              <p className="text-lg font-mono text-muted-foreground uppercase tracking-widest mb-5">
                Find me on
              </p>
            </FadeIn>
            {SOCIALS.map((s,i) => {
              const Icon = s.icon
              return (
              <FadeIn key={s.label} delay={0.2 + i * 0.08}>
                <motion.a
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-accent/30 transition-all"
                  aria-label={`${s.label}: ${s.handle}`}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{
                      background: s.bg,
                      border: `1px solid ${s.border}30`,
                    }}
                  >
                    <Icon
                      size={18}
                      style={{ color: s.color }}
                      aria-hidden="true"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="font-display font-semibold text-lg text-foreground">
                      {s.label}
                    </div>
                    <div className="text-xs font-mono text-foreground truncate mt-0.5">
                      {s.handle}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={15}
                    className="text-muted-foreground group-hover:text-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0"
                    aria-hidden="true"
                  />
                </motion.a>
              </FadeIn>
            )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}