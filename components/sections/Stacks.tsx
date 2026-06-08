
import { stack } from "@/data/stacks"

const categories = ["Frontend", "Backend", "Automatización"] as const

export default function Stack() {
  return (
    <section id="stack" className="py-16">

      <p className="text-xs text-neutral-600 tracking-widest uppercase mb-2">
        Tecnologías
      </p>
      <h2 className="text-2xl font-medium text-neutral-100 mb-10">
        Stack & herramientas
      </h2>

      <div className="flex flex-col gap-8">
        {categories.map((cat) => (
          <div key={cat}>

            {/* Etiqueta categoría */}
            <p className="text-xs text-neutral-600 uppercase tracking-widest mb-3">
              {cat}
            </p>

            {/* Grid items */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {stack
                .filter((item) => item.category === cat)
                .map((item) => (
                  <div
                    key={item.name}
                    className="bg-neutral-900 border border-neutral-800 rounded-lg px-3 py-4 flex flex-col items-center gap-2 hover:border-neutral-700 transition-colors"
                  >
                    {/* Ícono con color */}
                    <div style={{ color: item.color }}>
                      {item.icon}
                    </div>

                    {/* Nombre */}
                    <span className="text-xs text-neutral-500 text-center leading-tight">
                      {item.name}
                    </span>
                  </div>
                ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}