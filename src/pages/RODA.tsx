import { RenderVideos } from "../components/RenderVideos"

export function Roda(){
    return(
        <section id='RODA' className="w-full bg-vermelho-primario flex items-center justify-center py-20 md:px-20">
    

            <div className="max-w-4/5 flex gap-32">
                
                
                <div className="flex-1 text-left w-1/2">
                    <h2 className="text-5xl md:text-6xl text-white font-bold leading-none tracking-tighter flex flex-col mb-10">
                        <span>R. O. D. A.</span>
                    </h2>

                    <p className="text-2xl md:text-3xl text-branco-letra font-bold mb-6">
                        Rede Orgânica de Diálogo e Atendimento
                    </p>

                    <p className="text-xl md:text-2xl text-white font-medium leading-relaxed opacity-90">
                        É uma metodologia baseada na tradição oral e no aprendizado coletivo. 
                        Inspirada nas rodas de quebradeiras de coco, no Tambor de Crioula e no 
                        Bumba Meu Boi, valoriza o diálogo, a escuta e a conexão como base do 
                        atendimento. Um método vivo que transforma comunicação em valor percebido.
                    </p>
                </div>

                
                <div className="w-1/2 max-w-[350px] md:max-w-[400px] aspect-[9/16] overflow-hidden rounded-3xl shadow-2xl bg-black">
                    <RenderVideos IdVideo={'3FXwD4TULfg'} />
                </div>

            </div>
        </section>
    )
}