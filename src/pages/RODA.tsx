import { RenderVideos } from "../components/RenderVideos"

export function Roda(){
    return(
        <section className="w-full  min-h-screen bg-vermelho-primario flex items-center justify-center py-18 px-8 md:px-20">
    
            <div className="w-4/5 mb-12">
                <h2 className="text-5xl md:text-8xl text-left text-white font-bold leading-none tracking-tighter flex flex-col">
                    <span>R. O.</span>
                    <span>D. A.</span>
                </h2>
            </div>

    
            <div className="w-full flex flex-col md:flex-row items-start justify-between gap-12">
            
            
                <div className="flex-1 text-left">
                    <p className="text-2xl md:text-3xl text-white font-bold mb-6">
                        Rede Orgânica de Diálogo e Atendimento
                    </p>
                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed opacity-90">
                        É uma metodologia baseada na tradição oral e no aprendizado coletivo. 
                        Inspirada nas rodas de quebradeiras de coco, no Tambor de Crioula e no 
                        Bumba Meu Boi, valoriza o diálogo, a escuta e a conexão como base do 
                        atendimento. Um método vivo que transforma comunicação em valor percebido.
                    </p>
                </div>

                <div className="w-full max-w-[350px] aspect-[9/16] overflow-hidden rounded-3xl shadow-2xl border-4 border-white/10 bg-black">
                    <RenderVideos IdVideo={'3FXwD4TULfg'} />
                </div>

            </div>
    </section>
            
    
    )

}