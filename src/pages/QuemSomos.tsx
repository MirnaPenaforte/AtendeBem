import CarolComLogo from "../assets/CarolComLogo.png"


export function QuemSomos() {
    return(
        <section className="w-full h-full bg-vermelho-primario flex items-center justify-center py-18">

            <div className="w-4/5 flex items-center justify-between gap-10">

            
                <div className="w-1/2" >
                    <img className="w-4/5 h-auto rounded-3xl" src={CarolComLogo} alt="Imagem de uma menina segurando a logo da empresa" />
                </div>

                <div className="w-1/2 ">
                    <h2 className="text-[48px] text-center text-branco-letra font-bold">Quem Somos</h2>
                    <p className="text-[24px] text-center text-branco-letra font-bold mt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem obcaecati veniam aperiam laborum, ab assumenda sed iure minus et accusamus quaerat dicta cumque placeat incidunt nobis, numquam accusantium consectetur ad.</p>
                </div>

            </div>

        </section>
    )



}