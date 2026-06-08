import { projects } from "@/data/projects"
import { notFound } from "next/navigation"
import CaseHero from "@/components/projects/CaseHero"
import CaseProcess from "@/components/projects/CaseProcess"
import CaseSolution from "@/components/projects/CaseSolution"
import CaseGallery from "@/components/projects/CaseGallery"
import CaseResult from "@/components/projects/CaseResult"
import Link from "next/link"

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <article className="py-16 px-6 max-w-2xl">

      <Link
        href="/#projects"
        className="inline-flex items-center gap-2 text-xs text-neutral-600 hover:text-neutral-300 transition-colors mb-10"
      >
        ← Volver a proyectos
      </Link>

      <CaseHero project={project} />
      <CaseProcess project={project} />
      <CaseSolution project={project} />
      <CaseGallery project={project} />
      <CaseResult project={project} />

      <div className="flex gap-3 mt-12 pt-8 border-t border-neutral-900">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-md hover:bg-white transition-colors"
          >
            Ver sitio en vivo →
          </a>
        )}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-neutral-500 text-sm border border-neutral-800 rounded-md hover:border-neutral-600 hover:text-neutral-300 transition-colors"
          >
            Ver código →
          </a>
        )}
      </div>

    </article>
  )
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Marcelo Rodríguez`,
    description: project.description,
  }
}