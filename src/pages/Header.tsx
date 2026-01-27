import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const menuItems = [
    { href: "#Inicio", label: "Início" },
    { href: "#QuemSomos", label: "Quem Somos" },
    { href: "#Servicos", label: "Serviços" },
    { href: "#ClienteOculto", label: "Cliente Oculto" },
    { href: "#RODA", label: "R. O. D. A." },
    { href: "#Conquistas", label: "Conquistas" },
    { href: "https://wa.me/5598987730795", label: "Contate-nos" },
  ];

  return (
    <header className="w-full h-[80px] sticky top-0 left-0 z-50 bg-branco-fundo flex items-center shadow-md border-b-2">
      <div className={`w-full max-w-[1400px] mx-auto px-4 py-3 flex items-center ${isMobile ? 'justify-end' : 'justify-center'}`}>
        
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            {menuItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-vermelho-primario hover:text-orange-500 font-bold text-lg whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}

        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-vermelho-primario text-4xl p-2"
          >
            {isOpen ? <IoClose /> : <HiMenuAlt3 />}
          </button>
        )}
      </div>

      {isMobile && isOpen && (
        <div className="fixed inset-0 bg-black/50 z-[60]" onClick={() => setIsOpen(false)}>
          <nav 
            className="fixed top-0 right-0 h-full w-64 bg-branco-fundo p-8 shadow-xl"
            onClick={e => e.stopPropagation()}
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-3xl text-vermelho-primario">
              <IoClose />
            </button>
            <ul className="flex flex-col gap-6 mt-12">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    onClick={() => setIsOpen(false)} 
                    className="text-vermelho-primario font-bold text-xl block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}