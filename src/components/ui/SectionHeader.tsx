import { FadeIn } from '@/components/ui/FadeIn'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
  label: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
  id?: string
}

export function SectionHeader({
  label,
  title,
  subtitle,
  className,
  align = 'left',
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'mb-12 md:mb-16',
        align === 'center' && 'text-center',
        className
      )}
    >
      <FadeIn delay={0}>
        <span className="inline-flex items-center gap-2 font-mono text-lg uppercase tracking-widest text-accent mb-4">
          <span className="w-8 h-px bg-accent inline-block" />
          {label}
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 id={id} className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.2}>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
