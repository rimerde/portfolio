'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Github, ExternalLink, ArrowUpRight, Code2 } from 'lucide-react'
import { getProjectById } from '@/lib/projects'
import { FadeIn } from '@/components/ui/FadeIn'
import NextImage from 'next/image'
import { ProjectSection } from '@/types'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowDown } from 'lucide-react'
import { div } from 'framer-motion/client'

interface Props {
  params: { slug: string }
}

function CollapsibleSection({ section, index }: { section: ProjectSection; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      {/* Header — always visible, clickable */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-muted/50 transition-colors"
        aria-expanded={open}
        aria-controls={`section-body-${index}`}
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-lg text-accent/60" aria-hidden="true">
            0{index + 1}
          </span>
          <h2 className="font-display font-bold text-xl text-foreground">
            {section.heading}
          </h2>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground flex-shrink-0"
          aria-hidden="true"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      {/* Collapsible body */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`section-body-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-12 pb-4 pt-4 space-y-4 border-t border-border">
            {Array.isArray(section.body) ? (
              section.body.map((block, j) => {
                if (Array.isArray(block)) {
                  // It's a bullet list
                  return (
                    <ul key={j} className="space-y-3">
                      {block.map((item, k) => (
                        <li key={k} className="flex items-start gap-3 text-lg text-muted-foreground leading-relaxed font-body">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                } else {
                  // It's a paragraph
                  return (
                    <p key={j} className="text-lg text-muted-foreground leading-relaxed font-body">
                      {block}
                    </p>
                  )
                }
              })
            ) : (
              // Single paragraph (backwards compatible)
              <p className="text-lg text-muted-foreground leading-relaxed font-body">
                {section.body}
              </p>
            )}
          </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectById(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Top nav bar */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-border/60 bg-background/80">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Back to projects
            </Link>
          </motion.div>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-medium font-mono text-muted-foreground hidden sm:block"
          >
            {project.title}
          </motion.span>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* ── Hero ────────────────────────────────── */}
        <FadeIn>
          <header className="mb-8">
            {project.hackathon && (
              <div className="mb-3">
                <span className="text-base md:text-m font-mono uppercase tracking-widest text-muted-foreground">
                  Hackathon Project
                </span>
                <span className="mx-2 text-muted-foreground/40">•</span>
                <span className="text-base md:text-lg font-mono text-accent">
                  {project.hackathon}
                </span>
              </div>
            )}
            <h1 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-4">
              {project.title}
            </h1>

            {project.badge && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-s font-mono bg-background text-accent border border-accent mb-8">
                {project.badge}
              </span>
            )}

            <p className="text-lg md:text-xl !leading-relaxed text-muted-foreground font-body mb-10">
              {project.context ?? project.description}
            </p>

            {/* Meta */}
            <div className="flex flex-wrap gap-x-10 p-6 rounded-2xl border border-border bg-card">
              {[
                { label: 'Year', value: project.year ?? '—' },
                { label: 'Role', value: project.role ?? '—' },
                { label: 'Timeline', value: project.timeline ?? '—' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest mb-1">
                    {label}
                  </p>
                  <p className="text-lg font-body text-foreground font-medium">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            {/* Links */}
            {(project.links.github || project.links.live || project.links.devpost) && (
              <div className="flex gap-3 mt-6">
                {project.links.github && (
                  <CaseStudyLink href={project.links.github} icon={<Github size={18} />} variant="ghost">
                    View on GitHub
                  </CaseStudyLink>
                )}
                {project.links.live && (
                  <CaseStudyLink href={project.links.live} icon={<ExternalLink size={18} />} variant="primary">
                    Live Demo
                  </CaseStudyLink>
                )}
                {project.links.devpost && (
                  <CaseStudyLink href={project.links.devpost} icon={<Code2 size={18} />} variant="primary">
                    View on Devpost
                  </CaseStudyLink>
                )}
              </div>
            )}
          </header>
        </FadeIn>

        

        {/* ── Cover video / image ─────────────────── */}
        {(project.coverVideo || project.coverImage) && (
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-border mb-16 aspect-video relative bg-muted">
              {project.coverVideo ? (
                project.coverVideo.startsWith('/') ? (
                  <video
                    src={project.coverVideo}
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    aria-label={`${project.title} demo video`}
                  />
                ) : (
                  <iframe
                    src={project.coverVideo}
                    title={`${project.title} demo`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full absolute inset-0"
                  />
                )
              ) : (
                <NextImage
                  src={project.coverImage!}
                  alt={`${project.title} cover`}
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </FadeIn>
        )}

        {/* ── Full stack ──────────────────────────── */}
        <FadeIn delay={0.2}>
          <div className="mb-14">
            <h2 className="font-display font-bold text-m uppercase tracking-widest text-muted-foreground mb-4">
              Full Stack
            </h2>
            <div className="flex flex-wrap gap-2" role="list" aria-label="Technology stack">
              {project.stack.map((tech) => (
                <span key={tech} className="tag" role="listitem">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* ── Divider ─────────────────────────────── */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-4 mb-16" aria-hidden="true">
            <div className="flex-1 h-px bg-border" />
            <span className="text-m font-mono text-muted-foreground uppercase tracking-widest">project journey</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeIn>

        {/* ── Problem callout ──────────────────────── */}
        <FadeIn delay={0.15}>
          <div className="problem-callout relative p-6 rounded-2xl mb-14">
            <div className="problem-callout-label absolute top-0 left-6 -translate-y-1/2 px-3 py-1 rounded-full border">
              <span className="problem-callout-label text-sm font-mono uppercase tracking-widest">
                Core Problem
              </span>
            </div>
            <p className="problem-callout-text text-lg leading-relaxed font-body mt-2">
              {project.problem}
            </p>
          </div>
        </FadeIn>

        {/* ── Case study sections ──────────────────── */}
        {project.sections && project.sections.length > 0 && (
          <div className="space-y-6 mb-16">
            {project.sections.map((section: ProjectSection, i: number) => (
              <FadeIn key={section.heading} delay={0.05 * i}>
                <CollapsibleSection section={section} index={i} />
              </FadeIn>
            ))}
          </div>
        )}

        {/* ── Outcomes ────────────────────────────── */}
        {project.outcomes && project.outcomes.length > 0 && (
          <FadeIn>
            <div className="p-6 rounded-2xl border border-border bg-card mb-10">
              <h2 className="font-display font-bold text-xl text-foreground mb-5">
                Outcomes & Impact
              </h2>
              <ul className="space-y-3" role="list">
                {project.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-start gap-3 text-lg text-foreground/80 font-body"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                      aria-hidden="true"
                    />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )}

        {/* ── Divider ─────────────────────────────── */}
        <FadeIn delay={0.1}>
          <div className="flex items-center gap-4 mb-16" aria-hidden="true">
            <div className="flex-1 h-px bg-border" />
            <span className="text-m font-mono text-muted-foreground uppercase tracking-widest">gallery</span>
            <div className="flex-1 h-px bg-border" />
          </div>
        </FadeIn>

        {/* ── Image gallery ──────────────────────── */}
        {project.images && project.images.length > 0 && (
        <div className="mb-16 -mx-6 md:-mx-[calc((100vw-48rem)/2+1.5rem)]" id="gallery">
          <FadeIn delay={0.1}>
            <div className="relative overflow-hidden border-y border-border bg-muted py-8">
              <div 
                className="flex animate-scroll gap-4"
                style={{ '--image-count': project.images.length } as React.CSSProperties}
              >
                {/* Duplicate images for seamless loop */}
                {[...project.images, ...project.images].map((src, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-[500px] h-[350px] relative rounded-xl overflow-hidden"
                  >
                    <NextImage
                      src={src}
                      alt={`${project.title} screenshot ${(i % project.images!.length) + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      )}

        {/* ── Next steps ──────────────────────────── */}
        {project.nextSteps && project.nextSteps.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="p-6 rounded-2xl border border-dashed border-border bg-card/50 mb-16">
              <h2 className="font-display font-bold text-lg text-foreground mb-5">
                What&apos;s Next
              </h2>
              <ul className="space-y-3" role="list">
                {project.nextSteps.map((step) => (
                  <li
                    key={step}
                    className="flex items-start gap-3 text-lg text-muted-foreground font-body"
                  >
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full bg-border flex-shrink-0"
                      aria-hidden="true"
                    />
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )}

        {/* ── Bottom nav ──────────────────────────── */}
        <FadeIn delay={0.1}>
          <div className="pt-10 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              All projects
            </Link>

            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                View source on GitHub
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </div>
        </FadeIn>
      </article>
    </main>
  )
}

/* ─────────────────────────────────────────
   Link button helper
───────────────────────────────────────── */
function CaseStudyLink({
  href,
  icon,
  children,
  variant = 'ghost',
}: {
  href: string
  icon: React.ReactNode
  children: React.ReactNode
  variant?: 'ghost' | 'primary'
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-lg font-mono transition-all ${
        variant == 'primary'
          ? 'border border-border bg-accent text-accent-foreground hover:bg-background hover:border-accent hover:text-accent'
          : 'border border-border bg-card hover:border-accent hover:text-accent'
      }`}
    >
      {icon}
      {children}
    </motion.a>
  )
}
