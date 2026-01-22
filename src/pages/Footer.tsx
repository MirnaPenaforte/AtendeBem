import LogoBranca from "../assets/Logo-branca.svg"
import { ArrowUpFromDot } from 'lucide-react';


export function Footer() {
  return (
    <footer className="bg-vermelho-primario text-white font-poppins text-base py-6 px-4">
      <div className="flex items-center w-4/5 max-w-350 mx-auto gap-8  md:flex-nowrap">
        
        <a href="#Inicio" className="flex justify-center md:justify-start items-center min-w-[6rem] md:w-auto">
          <img
            src={LogoBranca}
            alt="Logo Recanto"
            className="h-auto w-auto max-h-16 max-w-full min-h-12 min-w-[6rem] object-contain transition-transform duration-300 hover:scale-110"
          />
        </a>

        <nav className="w-full md:w-auto">
          <ul className="flex md:flex-row gap-6 md:gap-10 text-center md:text-left text-lg font-bold font-medium p-0 m-0 list-none justify-end">
            <li><a href="#QuemSomos" className="text-branco-fundo transition-all">Sobre</a></li>
            <li><a href="#Inicio" className="text-branco-fundo transition-all">Contato</a></li>
            <li><a href="#Parceiros" className="text-branco-fundo transition-all">Parceiros</a></li>
          </ul>
        </nav>
      </div>

      <hr className="border border-[whitesmoke] my-8 w-[80%] mx-auto md:w-[80%] sm:w-[85%] max-[480px]:w-[90%]" />

      <div className="flex justify-between items-center flex-wrap gap-6 w-4/5 max-w-[87.5rem] mx-auto py-4  md:flex-col lg:flex-row">
        <div className="flex justify-center lg:justify-start">
          <ul className="flex justify-center gap-6 list-none p-0 m-0">
            <li>
              <a href="https://www.instagram.com/recanto_judo/" target="_blank" rel="noopener noreferrer">
                <img
                  src="/footer-instagram.png"
                  alt="Instagram"
                  className="h-8 w-8 object-contain transition-transform duration-300 hover:scale-110"
                />
              </a>
            </li>
            <li>
              <a href="https://wa.me/5598991560036" target="_blank" rel="noopener noreferrer">
                <img
                  src="/footer-whatsapp.png"
                  alt="WhatsApp"
                  className="h-8 w-8 object-contain transition-transform duration-300 hover:scale-110"
                />
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@vida_vitt" target="_blank" rel="noopener noreferrer">
                <img
                  src="/footer-tiktok.png"
                  alt="Tiktok"
                  className="h-8 w-8 object-contain transition-transform duration-300 hover:scale-110"
                />
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <p className="text-base md:text-lg leading-relaxed">
            Copyright 2025 © Todos os direitos reservados
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 text-white transition-transform duration-300 hover:scale-110 border-0 bg-transparent"
          >
            <p className="text-base md:text-lg leading-relaxed">Voltar ao topo</p>
             <ArrowUpFromDot />
          </button>
        </div>
      </div>
    </footer>
  );
}

