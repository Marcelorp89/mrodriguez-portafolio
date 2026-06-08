import { Project } from "@/data/projects"

export default function CaseProcess({ project }: { project: Project }) {
  return (
    <div className="mb-12">

      <h2 className="text-lg font-medium text-neutral-100 mb-6">
        Proceso
      </h2>

      <div className="flex flex-col gap-6">

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs text-neutral-500">
              1
            </div>
            <div className="w-px flex-1 bg-neutral-800 mt-2" />
          </div>
          <div className="pb-6">
            <p className="text-xs font-medium text-neutral-300 mb-1">
              Levantamiento & Research
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {project.process.research}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs text-neutral-500">
              2
            </div>
            <div className="w-px flex-1 bg-neutral-800 mt-2" />
          </div>
          <div className="pb-6">
            <p className="text-xs font-medium text-neutral-300 mb-1">
              Diseño & Prototipado
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {project.process.design}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-6 h-6 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-xs text-neutral-500">
              3
            </div>
          </div>
          <div>
            <p className="text-xs font-medium text-neutral-300 mb-1">
              Desarrollo & Implementación
            </p>
            <p className="text-xs text-neutral-600 leading-relaxed">
              {project.process.development}
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}