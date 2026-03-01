import type { Metadata } from 'next'
import { getAllProjectIds, getProjectById } from '@/lib/projects'

export async function generateStaticParams() {
  const ids = getAllProjectIds()
  return ids.map((id) => ({ slug: id }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const project = getProjectById(params.slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.context ?? project.description,
    openGraph: {
      title: `${project.title} — Case Study`,
      description: project.context ?? project.description,
    },
  }
}
