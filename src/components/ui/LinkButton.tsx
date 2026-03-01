'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

interface LinkButtonProps {
  href: string
  icon?: React.ReactNode
  children: React.ReactNode
  label: string
  variant?: 'ghost' | 'primary'
  internal?: boolean
  onClick?: (e: React.MouseEvent) => void
}

export function LinkButton({
  href,
  icon,
  children,
  label,
  variant = 'ghost',
  internal = false,
  onClick,
}: LinkButtonProps) {
  const className = `inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-mono transition-all ${
  variant === 'primary'
    ? 'bg-accent text-accent-foreground hover:bg-background'
    : 'border border-border bg-card text-muted-foreground hover:bg-background hover:border-accent hover:text-accent'
}`

  if (internal) {
    return (
      <motion.div whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }}>
        <Link href={href} aria-label={label} className={className}>
          {icon}
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, y: -1 }}
      whileTap={{ scale: 0.97 }}
      aria-label={label}
      className={className}
      onClick={onClick}
    >
      {icon}
      {children}
    </motion.a>
  )
}