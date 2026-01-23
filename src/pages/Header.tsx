export function Header() {
    return (

        <header className="w-full h-[80px] fixed top-0 left-0 z-50 bg-branco-fundo flex items-center justify-center">
            
            <nav>
                <ul className="flex items-center gap-18">
                    
                    <li>
                        <a href="#Inicio" className="hover:text-beje-secundario transition-opacity text-vermelho-primario font-bold text-fonte-titulo text-2xl">
                            Inicio
                        </a>
                    </li>

                    <li>
                        <a href="#QuemSomos" className="hover:text-beje-secundario transition-opacity text-vermelho-primario font-bold text-fonte-titulo text-2xl">
                            Quem Somos
                        </a>
                    </li>
                    
                    <li>
                        <a href="#Servicos" className="hover:text-beje-secundario transition-opacity text-vermelho-primario font-bold text-fonte-titulo text-2xl">
                            Serviços
                        </a>
                    </li>

                    <li>
                        <a href="#ClienteOculto" className="hover:text-beje-secundario transition-opacity text-vermelho-primario font-bold text-fonte-titulo text-2xl">
                            Cliente Oculto
                        </a>
                    </li>

                    <li>

                        <a href="#RODA" className="hover:text-beje-secundario transition-opacity text-vermelho-primario font-bold text-fonte-titulo text-2xl">
                            R. O. D. A.
                        </a>
                    </li>
                    

                    <li>
                        <a href="#Conquistas" className="hover:text-beje-secundario transition-opacity text-vermelho-primario font-bold text-fonte-titulo text-2xl">
                            Conquistas
                        </a>
                    </li>
                    
                    

                    
                    <li>
                        <a 
                            href="https://wa.me/5598987730795" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-beje-secundario transition-opacity text-vermelho-primario font-bold text-fonte-titulo text-2xl"
                        >
                            Contate-nos
                        </a>
                    </li>

                </ul>
            </nav>

        </header>
    );
}