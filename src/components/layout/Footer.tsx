'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { FaInstagram } from 'react-icons/fa6'
import { TfiLinkedin } from 'react-icons/tfi'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Branding */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-display font-bold text-xl">
              <span className="text-accent">{'<'}</span>
              RS
              <span className="text-accent">{'/>'}</span>
            </span>
            <span className="text-m text-muted-foreground font-mono">
              Built with Next.js + Framer Motion
            </span>
          </div>

          {/* Center: Links */}
          <div className="flex items-center gap-4">
            {[
              { href: 'https://github.com/rimerde/', icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com/in/singhrishit', icon: TfiLinkedin, label: 'LinkedIn' },
              { href: 'mailto:rishitsingh@outlook.com', icon: Mail, label: 'Email' },
              { href: 'https://instagram.com/curlyhairbandkid', icon: FaInstagram, label: 'Instagram'}
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Right: Back to top */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-m text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Back to top"
          >
            Back to top
            <ArrowUp size={14} />
          </motion.button>
        </div>

        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Rishit Singh. Designed & built with intention.
          </p>
        </div>
      </div>
    </footer>
  )
}
