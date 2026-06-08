import Image from "next/image"
import { Project } from "@/data/projects"

export default function CaseGallery({ project }: { project: Project }) {
  return (
    <div className="mb-12">

      <h2 className="text-lg font-medium text-neutral-100 mb-6">
        Galería
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {project.gallery.map((img, i) => (
          <div key={i} className="flex flex-col gap-2">
            <div className="relative w-full h-48 rounded-lg overflow-hidden border border-neutral-800">
              <Image
                src={img.url}
                alt={img.label || `${project.title} — imagen ${i + 1}`}
                width={600}
                height={400}
                className="object-cover"
              />
            </div>
            {img.label && (
              <p className="text-xs text-neutral-600 text-center">
                {img.label}
              </p>
            )}
          </div>
        ))}
      </div>

    </div>
  )
}