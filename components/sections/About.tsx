
import { TbRobot, TbCode} from "react-icons/tb"


export default function About(){
    return(
        <section id="about" className="py-16">
            <p className="text-xs text-neutral-600 tracking-widest uppercase mb-2">Sobre mí</p>
            <h2 className="text-2xl font-medium text-neutral-100 mb-10">Quién soy</h2>

            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-4 max-w-lg">
                    <p className="text-sm text-neutral-500 leading-relaxed">
                        Soy un desarrollador con mas de {""}
                        <span className="text-neutral-300">3 años de experiencia</span>,
                        Comencé en el mundo de la automatización y RPA, y de forma paralela, construí mi camino en el {""}
                        <span className="text-neutral-300">desarrollo web moderno.</span>
                        Hoy combino ambas disciplinas para ofrecer soluciones digitales completas a negocios y profesionales.
                    </p>

                    <p className="text-sm text-neutral-500 leading-relaxed">
                        Me especializo en trabajar {""}
                        <span className="text-neutral-300">directamente con clientes</span>
                        {""} - sin itermediarios. Me interesa entender el problema real detrás de cada proyecto para entregar algo que funcione, no solo que se vea bien.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg">
                    <div className="bg-neutral-900 border border-neutral-900 rounded-lg p-4 flex flex-col gap-2">
                        <TbRobot className="text-purple-400" size={20} />
                        <p className="text-xs font-medium text-neutral-300">
                            Automatización & RPA
                        </p>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                            Impulso la eficiencia empresarial automatizando procesos repetitivos que liberan tiempo y reducen errores.
                        </p>

                    </div>

                     <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 flex flex-col gap-2">
                        <TbCode className="text-purple-400" size={20} />
                        <p className="text-xs font-medium text-neutral-300">
                            Desarrollo Web
                        </p>
                        <p className="text-xs text-neutral-600 leading-relaxed">
                            Sitios y aplicaciones modernas con React y Node.js, con foco en UX y rendimiento real.
                        </p>
                    </div>

                </div>

            </div>
        </section>
        
    );
}