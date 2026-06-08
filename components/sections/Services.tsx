import { TbRobot, TbWorldWww, TbBulb, TbLayout } from "react-icons/tb";

const SERVICES_DATA = [
  {
    icon: <TbLayout className="text-neutral-400 group-hover:text-blue-400 transition-colors" size={20} />,
    title: "Sitio web a medida",
    description: "Desarrollo de sitios modernos, rápidos y responsive para negocios locales y profesionales independientes.",
    tag: "Para pymes y profesionales"
  },
  {
    icon: <TbRobot className="text-neutral-400 group-hover:text-purple-400 transition-colors" size={20} />,
    title: "Automatización de procesos",
    description: "Diseño de procesos automatizados, que reducen tareas repetitivas y aumentan la eficiencia operativa.",
    tag: "Para empresas y pymes"
  },
  {
    icon: <TbWorldWww className="text-neutral-400 group-hover:text-green-400 transition-colors" size={20} />,
    title: "Webscraping y datos",
    description: "Extraigo datos relevantes de sitios web para análisis, reportes o integraciones de sistemas.",
    tag: "Para empresas"
  },
  {
    icon: <TbBulb className="text-neutral-400 group-hover:text-yellow-400 transition-colors" size={20} />,
    title: "Optimización de tareas",
    description: "Identifico oportunidades de mejoras en procesos digitales y propongo soluciones escalables.",
    tag: "Para negocios"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 max-w-5xl mx-auto px-4">
      {/* Cabecera sutil */}
      <div className="mb-14">
        <p className="text-[10px] text-neutral-500 tracking-[0.2em] uppercase mb-3 font-medium">
          Servicios
        </p>
        <h2 className="text-xl font-normal text-neutral-100 tracking-tight">
          ¿En qué puedo ayudarte?
        </h2>
      </div>

      {/* Lista estilizada estilo Framer */}
      <div className="flex flex-col border-t border-neutral-800/60">
        {SERVICES_DATA.map((service, index) => (
          <div 
            key={index} 
            className="group flex flex-col md:flex-row md:items-start justify-between py-6 border-b border-neutral-800/60 transition-all duration-300 hover:bg-neutral-900/30 px-2 rounded-lg"
          >
            {/* Izquierda: Icono + Título */}
            <div className="flex items-center gap-4 md:w-1/3 mb-2 md:mb-0">
              <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 group-hover:border-neutral-700 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                {service.title}
              </h3>
            </div>

            {/* Centro: Descripción */}
            <div className="md:w-5/12 mb-3 md:mb-0">
              <p className="text-xs text-neutral-400 leading-relaxed font-light">
                {service.description}
              </p>
            </div>

            {/* Derecha: Tag/Target de cliente */}
            <div className="md:w-2/12 flex md:justify-end items-center">
              <span className="text-[11px] text-neutral-500 font-medium tracking-wide bg-neutral-900/50 px-2 py-1 rounded border border-neutral-800/40">
                {service.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}