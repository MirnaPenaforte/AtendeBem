import { Card } from "../components/cards";

export function Servicos() {
  return (
    <section id="Servicos" className="w-full  md:pr-28 md:pl-28 md:pt-28 bg-branco-fundo">
      
      <div className="w-4/5 mx-auto px-6 flex flex-col justify-center">
        <h2 className="text-5xl md:text-5xl text-vermelho-primario font-bold leading-none tracking-tighter mb-16 text-left">
          Nossos Serviços
        </h2>

        <div className="flex flex-wrap items-stretch justify-center gap-6 md:gap-8">
          
          <Card 
            icone="lucide:route" 
            header="Jornada Do Cliente" 
            text1="Mapeamos e organizamos cada ponto de contato para garantir uma experiência clara, fluida e alinhada do início ao fim." 
          />
 
          <Card 
            icone="hugeicons:account-recovery" 
            header="Recepção Inteligente" 
            text1="Estruturamos postura, comunicação e processos para uma recepção mais segura, ágil e preparada para atender com excelência." 
          />
          
          <Card 
            icone="hugeicons:account-setting-01" 
            header="Rotina e Processos" 
            text1="Organizamos o dia a dia, definindo fluxos, responsabilidades e padrões que trazem clareza, eficiência e consistência." 
          />

        </div>
      </div>
    </section>
  );
}