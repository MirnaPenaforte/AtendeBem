import { Icon } from "@iconify/react";

export function CardForms() {
    return(
        <>
            <div className="w-4/5 flex flex-col">               
                <div className=" w-full border border-solid border-vermelho-primario h-auto p-4 justify-between flex flex-col md:flex-col mx-auto rounded-2xl">
                    <div className="flex flex-start ">
                        <Icon icon="flowbite:phone-solid" className="text-vermelho-primario font-bold w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-4"/>
                        <p className="text-xl font-bold font-inter text-vermelho-primario text-left">Contatos</p>
                    </div>
                    
                    <p className="text-sm text-left md:text-base md:text-lef font-bold font-inter text-vermelho-primario">(98) 99156-0036</p>
                    <p className="text-sm text-left md:text-base md:text-left font-bold font-inter text-vermelho-primario">recantodojudo@gmail.com</p>
                </div>
            </div>
        </>
    )


}