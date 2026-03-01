'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FadeIn } from '@/components/ui/FadeIn'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Github, ExternalLink, FolderOpen, Code2 } from 'lucide-react'
import { PROJECTS } from '@/lib/projects'
import type { Project } from '@/types'
import Image from 'next/image'
import { LinkButton } from '@/components/ui/LinkButton'

export function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-muted/30 relative"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
          <SectionHeader
            label="C0D3"
            title="Engineering Work"
            subtitle='Projects that solve real problems.'
            className="mb-0"
            id="projects-heading"
          />

        <div className="space-y-10">
          {/* Remaining projects — 2 column grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project, i) => (
            <FadeIn key={project.id} delay={0.1 + i * 0.1}>
              <ProjectCard project={project} size="normal" />
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
interface ProjectCardProps {
  project: Project
  size?: 'large' | 'normal'
}

function ProjectCard({ project, size = 'normal' }: ProjectCardProps) {
  return (
    <a
      href={`/projects/${project.id}`}
      className="block h-full rounded-2xl border border-border bg-card overflow-hidden transition-all group"
    >
      {/* Cover image */}
      <div className={`relative overflow-hidden bg-muted ${size === 'large' ? 'aspect-[16/9]' : 'aspect-[4/3]'}`}>
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
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-muted to-card">
            <span className="text-3xl" aria-hidden="true">⚡</span>
          </div>
        )}

        {/* Badge */}
        {project.badge && (
          <div className="absolute top-4 left-3">
            <span className="px-6 py-3 rounded-full text-lg font-mono bg-background/75 backdrop-blur-sm border border-border text-foreground">
              {project.badge}
            </span>
          </div>
        )}
      </div>

      {/* Text */}
      <div className={`p-5 ${size === 'large' ? 'md:p-6' : ''} flex flex-col gap-3`}>
        <div>
          <h3 className="font-display font-bold text-4xl text-foreground leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 text-xl text-muted-foreground font-body">
            {project.tagline}
          </p>
        </div>

        {/* Stack badges */}
<div className="flex flex-wrap gap-1.5" aria-label="Technology stack">
  {project.stack.slice(0, 3).map((tech) => (
    <span key={tech} className="tag">{tech}</span>
  ))}
  {project.stack.length > 3 && (
    <span className="text-s text-muted-foreground font-mono">
      +{project.stack.length - 3} more
    </span>
  )}
</div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-2 mt-1">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono bg-accent text-accent-foreground">
            <FolderOpen size={23} />
            View Project
          </span>
          {project.links.github && (
            <span
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(project.links.github, '_blank', 'noopener,noreferrer')
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono border border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground transition-all cursor-pointer"
            >
              <Github size={23} />
              GitHub
            </span>
          )}
          {project.links.live && (
            <span
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(project.links.live, '_blank', 'noopener,noreferrer')
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono border border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground transition-all cursor-pointer"
            >
              <ExternalLink size={23} />
              Website
            </span>
          )}
          {project.links.devpost && (
            <span
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                window.open(project.links.devpost, '_blank', 'noopener,noreferrer')
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono border border-border bg-card text-muted-foreground hover:border-accent/40 hover:text-foreground transition-all cursor-pointer"
            >
              <Code2 size={23} />
              Devpost
            </span>
          )}
        </div>
      </div>
    </a>
  )
}
