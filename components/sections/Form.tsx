"use client"

import { useState } from "react"

export default function Contact() {

  const [formulario, setFormulario] = useState({
    nombre: "",
    telefono: "",
    email: "",
    mensaje: ""
  })

  const [estadoEnvio, setEstadoEnvio] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const response = await fetch("https://formspree.io/f/mkoewrab", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formulario)
    })

    if (response.ok) {
      setEstadoEnvio("ok")
      setFormulario({ nombre: "", telefono: "", email: "", mensaje: "" })
    } else {
      setEstadoEnvio("error")
    }
  }

  return (
    <section id="contact" className="py-16">

      <p className="text-xs text-neutral-600 tracking-widest uppercase mb-2">
        Contacto
      </p>

      <h2 className="text-2xl font-medium text-neutral-100 mb-10">
        ¿Tienes un proyecto en mente?
      </h2>

      <p className="text-sm font-medium text-neutral-200 mb-1">
        Hablemos
      </p>

      <p className="text-xs text-neutral-500 leading-relaxed">
        Estoy disponible para proyectos freelance. Cuéntame tu idea y te respondo a la brevedad.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">

        {/* Formulario */}
        <div className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 flex flex-col gap-4 mt-4 mb-4">

          <div className="flex flex-col gap-1">
            <label className="text-xs text-neutral-500">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formulario.nombre}
              onChange={handleChange}
              className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-neutral-500">Teléfono</label>
            <input
              type="text"
              name="telefono"
              placeholder="Tu teléfono"
              value={formulario.telefono}
              onChange={handleChange}
              className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-neutral-500">Correo</label>
            <input
              type="email"
              name="email"
              placeholder="tu@email.com"
              value={formulario.email}
              onChange={handleChange}
              className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-neutral-500">Mensaje</label>
            <textarea
              name="mensaje"
              placeholder="Cuéntame sobre tu proyecto..."
              value={formulario.mensaje}
              onChange={handleChange}
              rows={4}
              className="bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2.5 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors w-full resize-none"
            />
          </div>

          {estadoEnvio === "ok" && (
            <p className="text-xs text-green-400">
              ✅ ¡Mensaje enviado correctamente! Te respondo a la brevedad.
            </p>
          )}

          {estadoEnvio === "error" && (
            <p className="text-xs text-red-400">
              ❌ Hubo un error al enviar. Por favor intenta nuevamente.
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="bg-neutral-100 text-neutral-900 text-xs font-medium px-6 py-2.5 rounded-lg hover:bg-white transition-colors mt-auto"
          >
            Enviar mensaje →
          </button>

        </div>

      </div>

    </section>
  )
}