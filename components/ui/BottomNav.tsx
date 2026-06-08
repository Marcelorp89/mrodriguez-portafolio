
const bottomLinks = [
  { href: "#hero",     label: "Inicio",    icon: "ti ti-home" },
  { href: "#projects", label: "Proyectos", icon: "ti ti-layout-grid" },
  { href: "#stack",    label: "Stack",     icon: "ti ti-stack-2" },
  { href: "#services", label: "Servicios", icon: "ti ti-briefcase" },
  { href: "#recomendations", label: "Referencias", icon: "ti ti-star" },
  { href: "#contact",  label: "Contacto",  icon: "ti ti-mail" },
]

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 flex md:hidden items-center justify-around bg-neutral-950/90 backdrop-blur-md border-t border-neutral-900 px-2 py-2">
      {bottomLinks.map((link) => (
        <a  
          key={link.href}
          href={link.href}
          className="flex flex-col items-center gap-1 px-3 py-1 text-neutral-600 hover:text-neutral-200 transition-colors"
        >
          <i className={`${link.icon} text-lg`} aria-hidden="true" />
          <span className="text-[10px]">{link.label}</span>
        </a>
      ))}
    </nav>
  )
}