import { TbRobot, TbWorldWww, TbBulb, TbLayout } from "react-icons/tb"


export default function Services(){
    return(
        <section id="services" className="py-16">
            <p className="text-xs text-neutral-600 tracking-widest uppercase mb-2">
                Servicios
            </p>

            <h2 className="text-2xl font-medium text-neutral-100 mb-10">
                ¿En qué puedo ayudarte?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl">

                {/*Tarjeta 1*/}
                <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                    
                    <TbLayout size={22} className="text-blue-400" />
                    <h3 className="text-sm font-medium text-neutral-200">Sitio web a medida</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">Desarrollo de sitios modernos, rápidos y responsive para negocios locales y profesionales independientes </p>
                    <p className="text-xs text-neutral-600 mt-auto">Para pymes y profesionales</p>
                    
                </div>

                {/*Tarjeta 2*/}
                <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">

                    <TbRobot size={22} className="text-purple-400" />
                    <h3 className="text-sm font-medium text-neutral-200">Automatización de procesos repetitivos</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">Diseño de procesos automatizados, que reducen tareas repetitivas y aumentan la eficiencia operativa</p>
                    <p className="text-xs text-neutral-600 mt-auto">Para empresas y pymes</p>

                </div>

                {/*Tarjeta 3*/}
                <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">
                    
                    <TbWorldWww size={22} className="text-green-400" />
                    <h3 className="text-sm font-medium text-neutral-200">Webscraping y extracción de datos</h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">Extraigo datos relevantes de sitios web para análisis o reportes</p>
                    <p className="text-xs text-neutral-600 mt-auto">Para empresas con necesidades de datos</p>

                </div>

                {/*Tarjeta 4*/}
                <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800 hover:border-neutral-700 transition-colors">

                    <TbBulb size={22} className="text-yellow-400" />
                    <h3 className="text-sm font-medium text-neutral-200">Optimización de tareas </h3>
                    <p className="text-xs text-neutral-500 leading-relaxed">Identifico oportunidades de mejoras en procesos digitales y propongo soluciones escalables</p>
                    <p className="text-xs text-neutral-600 mt-auto">Para negocios en crecimiento</p>

                </div>

            </div>

        </section>
    );
} 