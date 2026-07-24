import fotoMeiaLua from "../assets/meia-lua.png";
import Mulher from "../assets/imagem mulher.svg";
import Logo from "../assets/Logo.svg";
import CountUp from 'react-countup';

export function Hero() {
  return (
    <section id="Inicio" className="w-full bg-branco-fundo flex flex-col justify-between">
      
      {/* HERO PRINCIPAL */}
      {/* Mobile: flex-col (1 coluna) | Notebook/Desktop (md:): flex-row (2 colunas lado a lado) */}
      <div className="w-full md:h-[calc(100vh-90px)] flex flex-col md:flex-row">

        {/* LADO ESQUERDO: Conteúdo */}
        <div className="w-full md:w-1/2 h-full flex justify-center items-center py-12 px-6 md:px-12">
          {/* Mobile: items-center + text-center (Centralizado)
              Notebook (md:): items-start + text-left (Alinhado à esquerda) */}
          <div className="w-full max-w-xl flex flex-col items-center text-center md:items-start md:text-left gap-6 md:gap-8">

            {/* Logo */}
            <img src={Logo} alt="Logo" className="w-48 md:w-72 h-auto" />

            {/* Título */}
            <h2 className="text-vermelho-primario text-xl md:text-2xl font-medium leading-relaxed">
              Consultoria de rotina,<br className="hidden md:block" /> processos e atendimento
            </h2>

            {/* Botão CTA */}
            <button className="w-full md:w-auto md:px-10 bg-vermelho-primario hover:bg-vermelho-primario/90 text-branco-fundo font-medium py-3 rounded-md">
              Contate-nos
            </button>
          </div>
        </div>

        {/* LADO DIREITO: Imagens */}
        {/* Mobile: hidden (escondido) | Notebook (md:): flex (exibe as imagens à direita) */}
        <div className="hidden md:flex w-full md:w-1/2 h-full relative justify-center items-end overflow-hiddenhidden md:flex w-full md:w-1/2 h-full relative justify-center items-end overflow-hidden">
          {/* Background Meia Lua */}
          <img className="absolute -bottom-16 md:-bottom-24 z-0 w-full object-cover" src={fotoMeiaLua} alt="Fundo" />

          {/* Imagem Mulher */}
          <img className="z-10 object-contain h-full max-h-[85vh]" src={Mulher} alt="Mulher" />
        </div>

      </div>

      {/* SEÇÃO DE ESTATÍSTICAS */}
      <div className="w-full bg-vermelho-primario py-6 px-4">
        {/* Mobile: flex-col (empilhado) | Notebook (md:): flex-row (lado a lado) */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-around gap-6 md:gap-4">

          {/* Item 1 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-branco-fundo">
              +<CountUp end={100} duration={3.5} />
            </h1>
            <p className="text-branco-fundo text-sm md:text-base">Atendimentos</p>
          </div>

          {/* Linha Divisória - Visível apenas no Desktop */}
          <hr className="hidden md:block h-10 border-l border-white/40" />

          {/* Item 2 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-branco-fundo">+1.000</h1>
            <p className="text-branco-fundo text-sm md:text-base">Horas de consultorias</p>
          </div>

          {/* Linha Divisória - Visível apenas no Desktop */}
          <hr className="hidden md:block h-10 border-l border-white/40" />

          {/* Item 3 */}
          <div className="flex flex-col items-center text-center">
            <h1 className="text-2xl md:text-3xl font-bold text-branco-fundo">
              <CountUp end={2} duration={2.5} /> anos
            </h1>
            <p className="text-branco-fundo text-sm md:text-base">Atuação</p>
          </div>

        </div>
      </div>

    </section>
  );
}