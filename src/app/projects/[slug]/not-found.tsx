'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'

export default function ProjectNotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
            404
          </p>
          <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Project not found
          </h1>
          <p className="text-muted-foreground mb-8">
            This project doesn&apos;t exist — yet.
          </p>
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft
              size={14}
              className="transition-transform group-hover:-translate-x-1"
            />
            Back to projects
          </Link>
        </motion.div>
      </div>
    </main>
  )
}
