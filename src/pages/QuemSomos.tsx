import CarolComLogo from "../assets/CarolComLogo.png"


export function QuemSomos() {
    return(
        <section id="QuemSomos" className="w-full h-full bg-vermelho-primario flex items-center justify-center py-18">

            <div className="w-4/5 flex items-center justify-between gap-10">

            
                <div className="w-1/2" >
                    <img className="w-4/5 h-auto rounded-3xl" src={CarolComLogo} alt="Imagem de uma menina segurando a logo da empresa" />
                </div>

                <div className="w-1/2 flex flex-col">
                    <h2 className="text-5xl text-left text-branco-letra font-bold">Quem Somos</h2>
                    <p className="text-2xl text-left text-branco-letra font-semibold mt-6">A Atende Bem é uma consultoria de rotina, processos e atendimento, desenvolvida para organizar o dia a dia, alinhar equipes e transformar o atendimento em uma experiência estratégica, clara e eficiente.</p>
                </div>

            </div>

        </section>
    )

}
