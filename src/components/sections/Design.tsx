'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FadeIn, StaggerContainer, staggerItem } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Figma, FolderOpen, Radio } from 'lucide-react'
import { DESIGN_PROJECTS } from '@/lib/design'
import type { DesignProject } from '@/lib/design'
import Link from 'next/link'
import { LinkButton } from '../ui/LinkButton'

export function Design() {
  return (
    <section
      id="design"
      className="section-padding bg-background relative"
      aria-labelledby="design-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="D3S1GN"
          title="Design Thinking"
          subtitle="Selected UI/UX and product design — what it looks like before it gets built."
          id="design-heading"
        />

        <div className="space-y-10">
          {/* Remaining designs — 2 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {DESIGN_PROJECTS.map((project, i) => (
              <FadeIn key={project.id} delay={0.1 + i * 0.1}>
                <DesignCard project={project} size="normal" />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


/* ─────────────────────────────────────────
   Project Card
───────────────────────────────────────── */
function DesignCard({
  project,
  size = 'normal',
}: {
  project: DesignProject
  size?: 'large' | 'normal'
}) {
  return (
    <a
      href={`/design/${project.id}`}
      className="block h-full rounded-2xl border border-border bg-card overflow-hidden transition-all group"
    >
      {/* Cover image */}
      <div
        className={`relative overflow-hidden bg-muted ${
          size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/3]'
        }`}
      >
        {project.coverImage ? (
        <>
          <Image
            src={project.coverImage}
            alt={`${project.title} preview`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors duration-300" />
        </>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="text-center">
              <div className="w-10 h-10 rounded-xl bg-border flex items-center justify-center mx-auto mb-2">
                <Figma size={18} className="text-muted-foreground" />
              </div>
              <p className="text-xs font-mono text-muted-foreground">
                Add cover image
              </p>
            </div>
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-6 left-3">
          <span className="px-6 py-3 rounded-full text-lg font-mono bg-background/80 backdrop-blur-sm border border-border text-foreground">
            {project.category}
          </span>
        </div>

        {/* Startup badge */}
        {project.badge && (
          <div className="absolute top-6 right-3">
            <span className="px-6 py-3 rounded-full text-lg font-mono bg-foreground text-background border border-foreground">
              {project.badge}
            </span>
          </div>
        )}
      </div>

      {/* Text content */}
      <div className={`p-5 ${size === 'large' ? 'md:p-6' : ''} flex flex-col gap-3`}>
        <div>
          <h3 className="font-display font-bold text-4xl text-foreground leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-xl text-muted-foreground font-body">
            {project.description}
          </p>
        </div>

        {/* Tool badges */}
<div className="flex flex-wrap gap-1.5" aria-label="Tools used">
  {project.tools.slice(0, 3).map((tool) => (
    <span key={tool} className="tag">{tool}</span>
  ))}
  {project.tools.length > 3 && (
    <span className="text-s text-muted-foreground font-mono">
      +{project.tools.length - 3} more
    </span>
  )}
</div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-2 mt-1">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono bg-accent text-accent-foreground">
            <FolderOpen size={23} />
            View Project
          </span>
          {project.figma && (
            <span
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(project.link, '_blank', 'noopener,noreferrer')
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono border border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground transition-all cursor-pointer"
            >
              <Figma size={23} />
              Figma
            </span>
          )}
          {project.link && (
            <span
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              window.open(project.link, '_blank', 'noopener,noreferrer')
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono border border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground transition-all cursor-pointer"
          >
            <Radio size={23} />
            Live Website
          </span>
          )}
        </div>
      </div>
    </a>
  )
}