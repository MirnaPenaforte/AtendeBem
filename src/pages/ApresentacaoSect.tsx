import Logo_com_lupa from "../assets/Logo_com_lupa.gif"

export function ClienteOculto() {
  return (
    <section 
      id="ClienteOculto" 
      className="w-full bg-branco-fundo py-12 sm:py-16 md:py-20 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col lg:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16 shadow-sm border border-beje-secundario/20">
          
          {/* COLUNA ESQUERDA - Imagem */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              
              {/* Blur Background - Responsivo */}
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-40 sm:w-48 md:w-56 lg:w-64 h-40 sm:h-48 md:h-56 lg:h-64 bg-beje-secundario/10 rounded-full blur-3xl"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl sm:rounded-2xl md:rounded-3xl lg:rounded-3xl overflow-hidden border-[8px] sm:border-[10px] lg:border-[12px] border-beje-secundario/10 shadow-lg md:shadow-2xl">
                <img 
                  src={Logo_com_lupa} 
                  alt="Análise de Cliente Oculto" 
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA - Conteúdo */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">
            
            {/* Seção de Headers */}
            <div className="space-y-4 sm:space-y-6">
              
              {/* Label com linha */}
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 sm:w-12 h-[2px] bg-vermelho-primario"></div>
                <span className="text-vermelho-primario font-bold tracking-widest uppercase text-xs sm:text-sm">
                  Novidade Exclusiva
                </span>
              </div>

              {/* Título Principal */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-titulo font-bold text-gray-800 leading-tight">
                Faça a análise da sua empresa com 
                <span className="block text-vermelho-primario mt-2 sm:mt-3">
                  Cliente Oculto
                </span>
              </h3>
            </div>

            {/* Descrição */}
            <p className="font-corpo text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 leading-relaxed max-w-prose">
              Descubra a verdade sobre o seu atendimento. 
              Nossos especialistas avaliam cada detalhe da experiência 
              do seu cliente de forma anônima e profissional.
            </p>

            {/* Botão */}
            <div className="pt-4 sm:pt-6 lg:pt-8">
              <button 
                className="group relative w-full sm:w-auto bg-vermelho-primario text-branco-letra font-titulo font-bold py-4 sm:py-5 px-8 sm:px-12 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed text-base sm:text-base"
                type="button"
                aria-label="Contratar serviço de cliente oculto"
              >
                <span className="relative z-10 block">
                  Quero contratar este serviço
                </span>
                <div className="absolute inset-0 bg-black/10 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>

            {/* Informação adicional */}
            <p className="text-xs sm:text-sm text-gray-500 pt-2">
              ✓ Análise completa em até 7 dias | ✓ Relatório detalhado | ✓ Segurança da informação
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}