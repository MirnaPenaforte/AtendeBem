export function Conquistas() {
  return (
    <section id="Conquistas" className="w-full py-20 bg-branco-fundo">
      
     
        <div className="w-4/5 mx-auto flex flex-col items-center justify-center">

            <h2 className="text-5xl md:text-6xl text-vermelho-primario font-bold mb-32 text-center">
                Conquistas
            </h2>

            
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-22 mb-10">
                
                <img 
                    src="fapema.jpeg" 
                    alt="Logo da Fapema" 
                    className="h-16 md:h-32 w-auto rounded-full border-2 border-vermelho-primario object-contain hover:scale-105 transition-transform duration-300"
                />
                

                
                <img 
                    src="governoMA.jpeg" 
                    alt="Logo do Governo do MA" 
                    className="h-20 md:h-32 w-auto rounded-full border-2 border-vermelho-primario object-contain hover:scale-105 transition-transform duration-300"
                />
                
                <img 
                    src="pisin.jpeg" 
                    alt="Logo do Pisim" 
                    className="h-20 md:h-32 w-auto rounded-full border-2 border-vermelho-primario object-contain hover:scale-105 transition-transform duration-300"
                />

            </div>

        </div>
    </section>
  );
}

