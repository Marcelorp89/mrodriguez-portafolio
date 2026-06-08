

import {TbHome, TbUserCode, TbStack2, TbLayoutGrid, TbBriefcase, TbMail, TbBrandGithub, TbBrandLinkedin, TbBrandWhatsapp, TbBrandInstagram, TbStar } from "react-icons/tb";

const navLinks = [
  { href: "#hero",      label: "Inicio",    icon: <TbHome size={16} /> },
  { href: "#about",     label: "Sobre mí",  icon: <TbUserCode size={16} /> },
  { href: "#stack",     label: "Stack",     icon: <TbStack2  size={16} />},
  { href: "#projects",  label: "Proyectos", icon: <TbLayoutGrid  size={16} />},
  { href: "#services",  label: "Servicios", icon: <TbBriefcase  size={16} />},
  { href: "#recomendations",  label: "Referencias", icon: <TbStar   size={16} />},
  { href: "#contact",   label: "Contacto",  icon: <TbMail  size={16} />},
]

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col fixed top-0 left-0 h-screen w-52 bg-neutral-950 border-r border-neutral-900 px-4 py-6 z-40">

      {/* Logo / Nombre */}
      <div className="mb-8">
        <p className="text-sm font-medium text-neutral-100">Marcelo Rodríguez</p>
        <p className="text-xs text-neutral-600 mt-1">Desarrollador Full Stack</p>
      </div>

      {/* Nav links */}
      <nav className="flex flex-col gap-1 flex-1">
        {navLinks.map((link) => (
        <a
            key={link.href}
            href={link.href}
            className="flex items-center gap-3 px-3 py-2 rounded-md text-xs text-neutral-500 hover:text-neutral-200 hover:bg-neutral-900 transition-colors group"
        >
            {link.icon}
            {link.label}
          </a>
        ))}
      </nav>

      {/* Bottom */}
      <div className="border-t border-neutral-900 pt-4 flex flex-col gap-3">
        {/* Badge disponibilidad */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
          </span>
          <span className="text-xs text-green-400">Disponible</span>
        </div>

        {/* Redes sociales */}
        <div className="flex items-center gap-3">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-300 transition-colors">
            <TbBrandGithub  size={16} />
          </a>
          <a href="https://linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-300 transition-colors">
            <TbBrandLinkedin  size={16} />
          </a>
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-300 transition-colors">
            <TbBrandWhatsapp   size={16} />
          </a>
          <a href="instagram" target="_blank" rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-300 transition-colors">
            <TbBrandInstagram    size={16} />
          </a>
        </div>
      </div>

    </aside>
  )
}