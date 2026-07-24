import { RenderVideos } from "../components/RenderVideos";

export function Roda() {
  return (
    /* MPT/Padding alinhado ao padrão do QuemSomos: py-24 px-8 (mobile) | md:py-8 md:px-6 (desktop) */
    <section id="RODA" className="w-full bg-vermelho-primario flex items-center justify-center py-24 px-8 md:py-8 md:px-6">
      
      {/* CONTAINER PRINCIPAL */}
      {/* Mobile: flex-col (empilhado) | Desktop (md:): flex-row (lado a lado) */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        
        {/* CARD DO VÍDEO (Primeira visualização no mobile via order-first) */}
        <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] aspect-[9/16] overflow-hidden rounded-3xl shadow-2xl bg-black order-first md:order-last shrink-0">
          <RenderVideos IdVideo={'3FXwD4TULfg'} />
        </div>

        {/* LADO DO TEXTO (Abaixo do vídeo no mobile) */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left gap-6 p-4 md:p-2">
          
          {/* Título */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold leading-none tracking-tighter">
            <span>R. O. D. A.</span>
          </h2>

          {/* Subtítulo */}
          <p className="text-xl sm:text-2xl md:text-3xl text-branco-letra font-bold">
            Rede Orgânica de Diálogo e Atendimento
          </p>

          {/* Parágrafo */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white font-medium leading-relaxed opacity-90 md:text-left">
            É uma metodologia baseada na tradição oral e no aprendizado coletivo. 
            Inspirada nas rodas de quebradeiras de coco, no Tambor de Crioula e no 
            Bumba Meu Boi, valoriza o diálogo, a escuta e a conexão como base do 
            atendimento. Um método vivo que transforma comunicação em valor percebido.
          </p>

        </div>

      </div>

    </section>
  );
}