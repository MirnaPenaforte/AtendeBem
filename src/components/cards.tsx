import { Icon } from "@iconify/react";
type CardProps = {
    icone: string;
    header: string;
    text1: string;
    
}
export function Card({icone, header, text1}:CardProps) {
    return(
    <div className="group flex flex-col bg-branco-fundo w-[90%] sm:w-[45%] lg:w-[30%] max-w-sm shrink-0 rounded-2xl py-6 px-5 gap-4 
    border-2 border-vermelho-primario/20 hover:border-vermelho-primario 
    transition-all duration-300 ease-in-out 
    hover:-translate-y-2 hover:shadow-[0_10px_20px_-5px_rgba(141,59,39,0.3)]
    sm:py-8 sm:px-6 md:py-10 md:px-8">
    
    <div className="flex items-center gap-4">
        {/* Círculo do ícone com fundo vermelho suave para contraste */}
        <div className="flex justify-center items-center rounded-full bg-vermelho-primario/10 h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 shrink-0 transition-transform group-hover:scale-110 duration-300">
            <Icon icon={icone} className="text-vermelho-primario w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"/>
        </div>
        
        <h2 className="font-poppins text-vermelho-primario text-lg sm:text-xl md:text-2xl font-bold leading-tight">
            {header}
        </h2>
    </div>

    <div className="p-1 sm:p-2">
        {/* Ajustei o texto para text-left para facilitar a leitura em blocos e aumentei um pouco a fonte base */}
        <p className="text-vermelho-primario/80 font-inter text-xs sm:text-sm md:text-base font-medium leading-relaxed text-left">
            {text1}
        </p>
    </div>
</div>
    );
}