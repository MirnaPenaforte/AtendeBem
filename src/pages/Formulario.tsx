import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "../components/ui/button"
import { CardForms } from "../components/ui/cardsForms"

export function Formularios(){

    const[name, setName]= useState("")
    const[cel, setCel] = useState("")
    const[mensg, setMensg] = useState("")
    
    console.log(name)
    
    
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        if (name === "" || cel === "" || mensg === ""){
            alert("Preencha todos os campos");
            return;
        }

        const msg = `Oi, meu nome é ${name}. ${mensg} .`
        const url = `https://wa.me/5598984393030?text=${encodeURIComponent(msg)}`
        console.log("Solicitação enviada com sucesso")

        window.open(url, '_blank')

        setName("")
        setCel("")
        setMensg("")

    }

    function handleChangeName(event:ChangeEvent<HTMLInputElement>){
        //console.log(event.target.value)
        setName(event.target.value)

    }

    function handleChangeCel(event:ChangeEvent<HTMLInputElement>){
        setCel(event.target.value)
    }

    function handleChangeMensg(event:ChangeEvent<HTMLInputElement>){
        setMensg(event.target.value)
    }

    const inputStyle = "w-full bg-gray-100 border border-gray-200 rounded-lg p-4 " +
                       "placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-700";

    return(
        <section className="w-full bg-gray-50 justify-center flex py-18">

            <div className="w-4/5 flex justify-between items-start gap-12">


                <div className="w-1/2 flex flex-col gap-5">
                    <h2 className="text-2xl text-left text-vermelho-primario font-bold">Entre em contato conosco</h2>
                    <CardForms/>
                </div> 

                <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-4 w-4/5 max-w-md mx-auto ">

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-center text-vermelho-primario text-lg font-bold font-inter"> Envie suas dúvidas:
                        <input type="text"  placeholder="Nome" onChange={handleChangeName} value={name} className={inputStyle}/>
                        <input type="text" placeholder="Celular" onChange={handleChangeCel} value={cel} className={inputStyle}/>
                        <input type="text" placeholder="Digite sua mensagem aqui" onChange={handleChangeMensg} value={mensg} className={inputStyle}/>

                        <Button className="bg-vermelho-primario">Enviar</Button>
                    </form>
                </div>
            </div>
        </section>
    )
}
    