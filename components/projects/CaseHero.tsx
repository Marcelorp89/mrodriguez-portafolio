import Image from "next/image"
import { Project } from "@/data/projects"

export default function CaseHero({ project }: { project: Project }) {
  return (
    <div className="mb-12">

      {/* Categoría */}
      <p className="text-xs text-neutral-600 tracking-widest uppercase mb-3">
        {project.category} · {project.year}
      </p>

      {/* Título */}
      <h1 className="text-3xl font-medium text-neutral-100 leading-tight mb-4">
        {project.title}
      </h1>

      {/* Tagline */}
      {project.tagline && (
        <p className="text-sm text-neutral-500 italic mb-8">
          "{project.tagline}"
        </p>
      )}

      {/* Metadatos */}
      <div className="grid grid-cols-3 gap-4 mb-8 pb-8 border-b border-neutral-900">
        <div>
          <p className="text-xs text-neutral-600 uppercase tracking-widest mb-1">Cliente</p>
          <p className="text-xs text-neutral-300">{project.client}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-600 uppercase tracking-widest mb-1">Rol</p>
          <p className="text-xs text-neutral-300">{project.role}</p>
        </div>
        <div>
          <p className="text-xs text-neutral-600 uppercase tracking-widest mb-1">Stack</p>
          <p className="text-xs text-neutral-300">{project.stack.join(" · ")}</p>
        </div>
      </div>

      {/* Imagen hero */}
      <div className="relative w-full h-72 rounded-xl overflow-hidden">
        <Image
          src={project.heroImage}
          alt={project.title}
          width={800}
          height={450}
          className="object-cover"
          priority
        />
      </div>

      {/* Descripción */}
      <div className="mt-10">
        <h2 className="text-lg font-medium text-neutral-100 mb-3">
          Descripción del proyecto
        </h2>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Challenge */}
      <div className="mt-6 mb-0">
        <h3 className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-2">
          Desafío
        </h3>
        <p className="text-sm text-neutral-500 leading-relaxed">
          {project.challenge}
        </p>
      </div>

    </div>
  )
}