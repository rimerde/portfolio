export interface ProjectSection {
  heading: string
  body: string | string[] | (string | string[])[]
}

export interface Project {
  id: string
  title: string
  tagline: string
  hackathon?: string
  description: string
  problem: string
  stack: string[]
  links: {
    github?: string
    live?: string
    devpost?: string
    article?: string
  }
  coverImage?: string
  coverVideo?: string
  images?: string[]
  badge?: string
  featured?: boolean
  // ── Case study fields (optional) ──────────────────────
  year?: string
  role?: string
  timeline?: string
  context?: string
  sections?: ProjectSection[]
  outcomes?: string[]
  nextSteps?: string[]
}

export interface Skill {
  category: string
  icon: string
  items: string[]
}

export interface Experience {
  id: string
  role: string
  org: string
  orgType: 'startup' | 'university' | 'competition' | 'freelance'
  period: string
  description: string
  highlights: string[]
}
