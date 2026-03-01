'use client'

import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight, Radio } from 'lucide-react'
import { getDesignProjectById } from '@/lib/design'
import { FadeIn } from '@/components/ui/FadeIn'
import NextImage from 'next/image'

interface Props {
  params: { slug: string }
}

export default function DesignProjectPage({ params }: Props) {
  const project = getDesignProjectById(params.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-border/60 bg-background/80">
        <div className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href="/#design"
              className="group inline-flex items-center gap-2 text-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              Back to design
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

        {/* Header */}
        <FadeIn>
          <header className="mb-10">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-s font-mono bg-accent/10 text-accent border border-accent mb-6">
              {project.category}
            </span>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-foreground leading-tight mb-4">
              {project.title}
            </h1>
            {project.role && (
            <p className="text-base md:text-lg font-mono text-accent mb-6">
              {project.role}
            </p>
            )}
            <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-10">
              {project.context ?? project.description}
            </p>

          {/* Meta */}
          <div className="flex flex-wrap gap-x-10 gap-y-4 p-6 rounded-2xl border border-border bg-card mb-6">
          {[
            { label: 'Category', value: project.category },
            ...(project.timeline ? [{ label: 'Timeline', value: project.timeline }] : []),
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

          </header>
        </FadeIn>

        {/* Cover image */}
        {project.coverImage && (
          <FadeIn delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-border mb-16 aspect-[16/10] relative bg-muted">
              <Image
                src={project.coverImage}
                alt={`${project.title} cover`}
                fill
                className="object-cover"
              />

              {/* dark gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* overlay button */}
              {project.link && (
                <div className="absolute bottom-4 right-4">
                    <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{scale: 1.05}}
                    whileTap={{scale: 0.97}}
                    onClick={(e) => e.stopPropagation()}
                    className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-background/90 backdrop-blur-sm border border-border text-foreground font-mono text-lg shadow-lg'
                    >
                        <Radio size={18} aria-hidden="true"/>
                        View Live Site
                        <ArrowUpRight size={18} aria-hidden="true" />
                    </motion.a>
                    </div>
              )}
            </div>
          </FadeIn>
        )}

        {/* Case study sections */}
        {project.sections && project.sections.length > 0 && (
          <div className="space-y-14 mb-16">
            {project.sections.map((section, i) => (
              <FadeIn key={section.heading} delay={0.05 * i}>
                <section aria-labelledby={`section-${i}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-lg text-accent/60" aria-hidden="true">
                      0{i + 1}
                    </span>
                    <h2 id={`section-${i}`} className="font-display font-bold text-2xl text-foreground">
                      {section.heading}
                    </h2>
                  </div>
                  
                  {/* Section body */}
                  <div className="pl-8 space-y-4 mb-8">
                    {Array.isArray(section.body) ? (
                      section.body.map((block, j) => {
                        if (Array.isArray(block)) {
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
                          return (
                            <p key={j} className="text-lg text-muted-foreground leading-relaxed font-body">
                              {block}
                            </p>
                          )
                        }
                      })
                    ) : (
                      <p className="text-lg text-muted-foreground leading-relaxed font-body">
                        {section.body}
                      </p>
                    )}
                  </div>

                  {/* Section gallery */}
                  {section.images && section.images.length > 0 && (
                    <div className="-mx-6 md:-mx-[calc((100vw-48rem)/2+1.5rem)]">
                      <div className="relative overflow-hidden border-y border-border bg-muted py-8">
                        <div 
                          className="flex animate-scroll gap-4"
                          style={{ '--image-count': section.images.length } as React.CSSProperties}
                        >
                          {[...section.images, ...section.images].map((src, imgIndex) => (
                            <div
                              key={imgIndex}
                              className="flex-shrink-0 w-[500px] h-[350px] relative rounded-xl overflow-hidden"
                            >
                              <NextImage
                                src={src}
                                alt={`${section.heading} image ${(imgIndex % section.images!.length) + 1}`}
                                fill
                                className="object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </section>
              </FadeIn>
            ))}
          </div>
        )}

        {/* Image gallery */}
        {project.images && project.images.length > 0 && (
          <FadeIn delay={0.1}>
            <div className="mb-16">
              <h2 className="font-display font-bold text-m uppercase tracking-widest text-muted-foreground mb-6">
                Gallery
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.images.map((src, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden border border-border aspect-[4/3] relative bg-muted"
                  >
                    <Image
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        )}

        {/* Outcomes */}
        {project.outcomes && project.outcomes.length > 0 && (
          <FadeIn>
            <div className="p-6 rounded-2xl border border-border bg-card mb-16">
              <h2 className="font-display font-bold text-xl text-foreground mb-5">
                Outcomes & Impact
              </h2>
              <ul className="space-y-3">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3 text-lg text-foreground/80 font-body">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )}

        {/* Bottom nav */}
        <FadeIn delay={0.1}>
          <div className="pt-10 border-t border-border flex items-center justify-between">
            <Link
              href="/#design"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" aria-hidden="true" />
              All design work
            </Link>
            {project.link && (
              
                <a href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Open in Figma
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </FadeIn>

      </article>
    </main>
  )
}