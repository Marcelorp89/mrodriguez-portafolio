import { Project } from "@/data/projects"

export default function CaseResult({ project }: { project: Project }) {
  return (
    <div className="mb-12">

      <h2 className="text-lg font-medium text-neutral-100 mb-6">
        Resultados
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {project.results.map((result, i) => (
          <div
            key={i}
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-4"
          >
            <p className="text-xs font-medium text-neutral-300 mb-1">
              {result.title}
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {result.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}