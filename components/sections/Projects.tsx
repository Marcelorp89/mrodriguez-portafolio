import Image from "next/image"
import Link from "next/link"
import { projects } from "@/data/projects"

export default function Projects() {
  return (
    <section id="projects" className="py-16">

      {/* Header */}
      <p className="text-xs text-neutral-600 tracking-widest uppercase mb-2">
        Proyectos
      </p>
      <h2 className="text-2xl font-medium text-neutral-100 mb-10">
        Lo que he construido
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group bg-neutral-900 border border-neutral-800 rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-300"
          >
            {/* Imagen cover */}
            <div className="relative h-44 w-full overflow-hidden">
              <Image
                src={project.coverImage}
                alt={project.title}
                width={600}
                height={300} 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Overlay con flecha al hacer hover */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium">
                  Ver proyecto →
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              {/* Categoría y año */}
              <p className="text-xs text-neutral-600 mb-1">
                {project.category} · {project.year}
              </p>

              {/* Título */}
              <h3 className="text-sm font-medium text-neutral-200 mb-2">
                {project.title}
              </h3>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-neutral-600 bg-neutral-800 border border-neutral-700 px-2 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

    </section>
  )
}