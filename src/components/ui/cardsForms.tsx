import { Icon } from "@iconify/react";

export function CardForms() {
    return(
       <>
            <div className="w-full flex flex-col max-sm:w-full max-sm:gap-4">               
                <div className="w-full border border-solid border-vermelho-primario h-auto p-4 flex flex-col mx-auto rounded-2xl max-sm:p-3 max-sm:gap-3">
                
                <div className="flex items-center gap-2">
                    <Icon icon="flowbite:phone-solid" className="text-vermelho-primario font-bold w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8"/>
                    <p className="text-xl font-bold font-inter text-vermelho-primario max-sm:text-base">Contatos</p>
                </div>
                
                <p className="text-sm md:text-base font-bold font-inter text-vermelho-primario max-sm:text-xs">(98) 98773-0795</p>
                <p className="text-sm md:text-base font-bold font-inter text-vermelho-primario max-sm:text-xs">carolineatendebem@gmail.com</p>
                <p className="text-sm md:text-base font-bold font-inter text-vermelho-primario max-sm:text-xs">filipeatendebem@gmail.com</p>
                </div>
            </div>
        </>
    )


}