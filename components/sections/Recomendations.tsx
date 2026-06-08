import Link from "next/link"
import { recommendations } from "@/data/recomendations"

export default function Recommendations() {
  return (
    <section id="recommendations" className="py-24 max-w-5xl mx-auto px-6 w-full">
      
      {/* Título Estilo Minimalista / Framer */}
      <div className="mb-20">
        <p className="text-[10px] text-neutral-500 tracking-[0.2em] uppercase mb-3 font-medium">
          Referencias
        </p>
        <h2 className="text-3xl font-normal text-neutral-100 tracking-tight">
          Lo que dicen mis clientes
        </h2>
      </div>

      {/* Grid Principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-32 w-full">
        {recommendations.map((rec, i) => {
          const isLeft = i % 2 === 0;

          // RECUADRO IZQUIERDO: [ TEXTO ] [ VACÍO ]
          if (isLeft) {
            return (
              <div key={i} className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 w-full">
                {/* Contenido del testimonio */}
                <div className="flex flex-col gap-6 w-full">
                  <p className="text-lg md:text-xl text-neutral-200 font-light leading-relaxed">
                    "{rec.quote}"
                  </p>
                  <div className="flex flex-col gap-1 border-t border-neutral-800/60 pt-4">
                    <span className="text-sm font-medium text-[#c5f82a]">{rec.name}</span>
                    <span className="text-xs text-neutral-500 font-light">{rec.role}</span>
                    {rec.projectSlug && (
                      <Link href={`/projects/${rec.projectSlug}`} className="text-xs text-neutral-400 hover:text-white underline decoration-neutral-800 hover:decoration-neutral-400 underline-offset-4 transition-colors mt-2 self-start">
                        Ver {rec.project} ↗
                      </Link>
                    )}
                  </div>
                </div>
                {/* Espacio vacío para empujar el siguiente */}
                <div className="hidden md:block w-full" />
              </div>
            );
          }

          // RECUADRO DERECHO: [ VACÍO ] [ TEXTO ]
          return (
            <div key={i} className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 w-full">
              {/* Espacio vacío a la izquierda */}
              <div className="hidden md:block w-full" />
              
              {/* Contenido del testimonio */}
              <div className="flex flex-col gap-6 w-full">
                <p className="text-lg md:text-xl text-neutral-200 font-light leading-relaxed">
                  "{rec.quote}"
                </p>
                <div className="flex flex-col gap-1 border-t border-neutral-800/60 pt-4">
                  <span className="text-sm font-medium text-[#c5f82a]">{rec.name}</span>
                  <span className="text-xs text-neutral-500 font-light">{rec.role}</span>
                  {rec.projectSlug && (
                    <Link href={`/projects/${rec.projectSlug}`} className="text-xs text-neutral-400 hover:text-white underline decoration-neutral-800 hover:decoration-neutral-400 underline-offset-4 transition-colors mt-2 self-start">
                      Ver {rec.project} ↗
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  )
}