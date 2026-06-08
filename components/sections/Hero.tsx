
export default function Hero(){
    return(
        <main>

            <section id="hero">

                <div className="flex items-center gap-2 mb-6 mt-6">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                    </span>

                    <span className="text-xs text-neutral-500 tracking-wide">
                        Disponible a  nuevos proyectos
                    </span>
                </div>
                    
                <h1 className="text-5xl font-medium text-neutral-100 leading-tight tracking-tight mb-6">Hola, soy <br /> 
                    Marcelo Rodríguez <br /> 
                    <span className="text-neutral-500"> - Desarrollador.</span></h1>
                        <p className="text-sm text-neutral-500 leading-relaxed mb-8 max-w-sm">Desarrollador web moderno con React y Node.js. <br />
                            Automatización RPA y soluciones a medida.
                        </p>

                <div className="flex items-center gap-3">

                    <a 
                        href="#proyectos"
                        className="px-5 py-2.5 bg-neutral-100 text-neutral-900 text-sm font-medium rounded-md hover:bg-white transition-colors">
                        Ver proyectos
                    </a>

                    <a 
                    href="#contacto"
                    className="px-5 py-2.5 text-neutral-500 text-sm border border-neutral-800 rounded-md hover:border-neutral-600 hover:text-neutral-300 transition-colors">
                        Contactar
                    </a>

                </div>

                <div className="flex gap-6 mt-10 pt-6 border-t border-neutral-900">

                    <div className="text-xs text-neutral-600">
                    Ubicación <span className="text-neutral-400 ml-1">Santiago, Chile</span>
                    </div>

                    <div className="text-xs text-neutral-600">
                    Stack <span className="text-neutral-400 ml-1">React · Node.js · Python</span>
                    </div>

                    <div className="text-xs text-neutral-600">
                    Foco <span className="text-neutral-400 ml-1">Web + RPA</span>
                    </div>
                    
                </div>

            </section>

        </main>

    );
}