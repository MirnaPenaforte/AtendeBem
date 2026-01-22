import Logo_com_lupa from "../assets/Logo_com_lupa.gif"

export function ClienteOculto() {
    return (
        <section id="ClienteOculto" className="w-full bg-branco-fundo py-20">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="bg-white rounded-[40px] p-8 lg:p-16 flex  lg:flex-row items-center gap-16 shadow-sm border border-beje-secundario/20">
                    
                    <div className="w-full lg:w-1/2">
                        <div className="relative">
                            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-beje-secundario/10 rounded-full blur-3xl"></div>
                            
                            <div className="relative rounded-3xl overflow-hidden border-[12px] border-beje-secundario/10 shadow-2xl">
                                <img 
                                    src={Logo_com_lupa} 
                                    alt="Análise de Cliente Oculto" 
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 space-y-8">
                        <div className="space-y-6">
                             <div className="flex items-center gap-2">
                                <div className="w-12 h-[2px] bg-vermelho-primario"></div>
                                <span className="text-vermelho-primario font-bold tracking-widest uppercase text-sm">
                                        Novidade Exclusiva
                                </span>
                             </div>
                            

                            <h3 className="text-4xl lg:text-4xl font-titulo font-bold text-gray-800 leading-tight">
                                Faça a análise da sua empresa com 
                                <span className="block text-vermelho-primario mt-2">
                                    Cliente Oculto
                                </span>
                            </h3>
                        </div>

                        <p className="font-corpo text-xl text-gray-600 leading-relaxed">
                            Descubra a verdade sobre o seu atendimento. 
                            Nossos especialistas avaliam cada detalhe da experiência 
                            do seu cliente de forma anônima e profissional.
                        </p>

                        <div className="pt-6">
                            <button className="group relative bg-vermelho-primario text-branco-letra font-titulo font-bold py-5 px-12 rounded-2xl shadow-xl hover:shadow-vermelho-primario/20 transition-all duration-300 active:scale-95">
                                <span className="relative z-10">Quero contratar este serviço</span>
                                <div className="absolute inset-0 bg-black/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}