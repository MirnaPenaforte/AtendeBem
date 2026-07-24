import LogoBranca from "../assets/Logo-branca.svg"
import { ArrowUpFromDot } from 'lucide-react';
import { Icon } from "@iconify/react";


export function Footer() {
  return (
    <footer className="bg-vermelho-primario text-white font-poppins text-base py-6 px-4 max-sm:px-2">
      {/* Header Footer - Logo + Nav */}
      <div className="flex items-center justify-between w-4/5 max-w-350 mx-auto gap-8 md:flex-nowrap max-sm:flex-col max-sm:w-11/12 max-sm:gap-4">
        
        <a href="#Inicio" className="flex justify-center md:justify-start items-center min-w-[6rem] md:w-auto max-sm:mb-2">
          <img
            src={LogoBranca}
            alt="Logo Atende Bem"
            className="h-auto w-auto max-h-16 max-w-full min-h-12 min-w-[6rem] object-contain transition-transform duration-300 hover:scale-110 max-sm:max-h-12"
          />
        </a>

        <nav className="w-full md:w-auto max-sm:w-full">
          <ul className="flex md:flex-row gap-6 md:gap-10 text-center md:text-left text-lg font-bold font-medium p-0 m-0 list-none justify-end max-sm:justify-center max-sm:gap-4 max-sm:text-base max-sm:flex-col">
            <li><a href="#QuemSomos" className="text-branco-fundo transition-all hover:opacity-80 hover:text-beje-secundario transition-opacity">Sobre</a></li>
            <li><a href="#Inicio" className="text-branco-fundo transition-all hover:opacity-80 hover:text-beje-secundario transition-opacity">Contato</a></li>
            <li><a href="#Parceiros" className="text-branco-fundo transition-all hover:opacity-80 hover:text-beje-secundario transition-opacity">Parceiros</a></li>
          </ul>
        </nav>
      </div>

      {/* Divisor */}
      <hr className="border border-[whitesmoke] my-8 w-[80%] mx-auto md:w-[80%] sm:w-[85%] max-sm:w-[90%]" />

      {/* Footer Bottom - Redes Sociais, Copyright, Botão Topo */}
      <div className="flex justify-between items-center flex-wrap gap-6 w-4/5 max-w-[87.5rem] mx-auto py-4 md:flex-col lg:flex-row max-sm:flex-col max-sm:w-11/12 max-sm:gap-8">
        
        {/* Redes Sociais */}
        <div className="flex justify-center lg:justify-start max-sm:w-full max-sm:order-2">
          <ul className="flex justify-center gap-6 list-none p-0 m-0">
            <li>
              <a href="https://www.instagram.com/atendebemconsultoria?igsh=OW5pM2Fnc3Ric2pj" target="_blank" rel="noopener noreferrer">
                <Icon icon="lucide:instagram" className="text-branco-fundo w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:opacity-80 hover:text-beje-secundario transition-opacity" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5598987730795" target="_blank" rel="noopener noreferrer">
                <Icon icon="akar-icons:whatsapp-fill" className="text-branco-fundo w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:opacity-80 hover:text-beje-secundario transition-opacity" />
              </a>
            </li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-center max-sm:order-1 max-sm:w-full">
          <p className="text-base md:text-lg leading-relaxed max-sm:text-sm">
            Copyright 2025 © Todos os direitos reservados
          </p>
        </div>

        {/* Botão Voltar ao Topo */}
        <div className="flex justify-center lg:justify-end max-sm:w-full max-sm:order-3">
          <a 
            href="#Inicio" 
            className="flex items-center justify-center gap-2 text-white transition-transform duration-300 hover:scale-110 border-0 bg-transparent text-lg max-sm:text-base"
          >
            Voltar ao topo
            <Icon icon="lucide:chevron-up" className="text-branco-fundo w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 hover:opacity-80 hover:text-beje-secundario transition-opacity" />
          </a>
        </div>
      </div>
    </footer>
  );
}