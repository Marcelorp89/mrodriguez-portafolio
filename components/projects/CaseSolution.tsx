import { Project } from "@/data/projects"

export default function CaseSolution({ project }: { project: Project }) {
  return (
    <div className="mb-12">

      <h2 className="text-lg font-medium text-neutral-100 mb-3">
        Solución
      </h2>
      <p className="text-sm text-neutral-500 leading-relaxed mb-6">
        {project.solution.summary}
      </p>

      <div className="flex flex-col gap-3">
        {project.solution.features.map((feature, i) => (
          <div
            key={i}
            className="bg-neutral-900 border border-neutral-800 rounded-lg p-4"
          >
            <p className="text-xs font-medium text-neutral-300 mb-1">
              {feature.title}
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

    </div>
  )
}