import  fotoMeiaLua  from "../assets/meia-lua.png"
import Mulher from "../assets/imagem mulher.svg"
import Logo from "../assets/Logo.svg"
import CountUp from 'react-countup';


export function Hero() {
  return (
    <section className="w-full h-screen bg-branco-fundo flex flex-col">
      <div id="" className="w-full h-screen flex">
        <div className="w-1/2 h-full bg-branco-fundo flex justify-end">
          <div className="w-4/5 flex flex-col justify-center gap-10">
            <img src={Logo} width={300} alt="" />
            <h2 className="text-vermelho-primario text-2xl">Consultoria de rotina,<br/> processos e atendimento</h2>
            <button className="w-1/3 bg-vermelho-primario">Contate-nos</button>
          </div>
        </div>
        <div className="w-1/2 h-full relative flex justify-center">
          <img className="absolute bottom-0 z-0 w-full" src={fotoMeiaLua}></img>
          <img className="z-10 object-cover h- h-full absolute -bottom-[134px]" src={Mulher} alt="" />
        </div>
       
      </div> 
       <div className="w-full bg-vermelho-primario flex items-center justify-center py-6">
        <div className="flex flex-row w-4/5 gap-4">
          <div className="gap-1.5 flex flex-col">
            <h1 className="font-semibold">7/24</h1>
            <p>Suporte online</p>
          </div>
          <hr className="h-auto border-l-2 border-branco-primario"></hr>
          <div className="gap-1.5 flex flex-col">
            <h1 className="font-semibold">+<CountUp end={100} duration={3.5} /></h1>
            <p>Atendimentos</p>
          </div>
          <hr className="h-auto border-l-2 border-branco-primario"></hr>
          <div className="gap-1.5 flex flex-col">
            <h1 className="font-semibold">+1M</h1>
            <p>Active Patients</p>
          </div>
        </div>
       </div>
    </section>
  )
}