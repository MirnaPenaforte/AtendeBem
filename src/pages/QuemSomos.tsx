export function QuemSomos() {
  return (
    /* Reduzido o py do desktop para md:py-12 para enxugar o espaço interno */
    <section id="QuemSomos" className="w-full bg-vermelho-primario flex items-center justify-center px-8 py-10 md:py-12 md:px-12">
      
      {/* CONTAINER PRINCIPAL */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-48">
        
        {/* IMAGEM (Expandida no Desktop) */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img 
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto rounded-3xl object-cover shadow-2xl" 
            src="ceo.jpg" 
            alt="Imagem da CEO segurando a logo da empresa" 
          />
        </div>

        {/* CONTEÚDO DE TEXTO (Expandido e Encorpado no Desktop) */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left gap-6 md:gap-8">
          
          {/* Título */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-branco-letra font-bold tracking-tight">
            Quem Somos
          </h2>

          {/* Parágrafo com fonte maior no desktop para preencher melhor o espaço */}
          <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-branco-letra font-medium md:font-semibold leading-relaxed">
            A Atende Bem é uma consultoria de rotina, processos e atendimento, desenvolvida para organizar o dia a dia, alinhar equipes e transformar o atendimento em uma experiência estratégica, clara e eficiente.
          </p>

        </div>

      </div>

    </section>
  );
}