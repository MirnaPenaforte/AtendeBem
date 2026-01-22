import { useState, type FormEvent } from "react"
import { Button } from "../components/ui/button"
import { CardForms } from "../components/ui/cardsForms"
import { UserIcon, PhoneIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/outline"

export function Formularios() {

    const [name, setName] = useState("")
    const [cel, setCel] = useState("")
    const [mensg, setMensg] = useState("")

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!name || !cel || !mensg) {
            alert("Preencha todos os campos");
            return;
        }

        const msg = `Oi, meu nome é ${name}. ${mensg} .`
        const url = `https://wa.me/5598987730795?text=${encodeURIComponent(msg)}`

        window.open(url, "_blank")

        setName("")
        setCel("")
        setMensg("")
    }

    const inputWrapper =
        "flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-red-600"

    const inputField =
        "w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 font-medium"

    return (
        <section className="w-full bg-gray-50 flex justify-center py-20">

            <div className="w-4/5 flex justify-between items-start gap-12">

                <div className="w-1/2 flex flex-col gap-5">
                    <h2 className="text-4xl text-vermelho-primario font-bold">
                        Entre em contato conosco
                    </h2>
                    <CardForms />
                </div>

                <div className="flex items-center justify-center bg-white border border-gray-200 rounded-2xl shadow-xl p-8 w-4/5 max-w-md">

                    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                        <h3 className="text-xl font-bold text-vermelho-primario text-center mb-2">
                            Envie suas dúvidas
                        </h3>

                        <div className={inputWrapper}>
                            <UserIcon className="w-6 h-6 text-red-600" />
                            <input
                                type="text"
                                placeholder="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className={inputField}
                            />
                        </div>

                        <div className={inputWrapper}>
                            <PhoneIcon className="w-6 h-6 text-red-600" />
                            <input
                                type="text"
                                placeholder="Celular"
                                value={cel}
                                onChange={(e) => setCel(e.target.value)}
                                className={inputField}
                            />
                        </div>

                        <div className={inputWrapper}>
                            <ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6 text-red-600" />
                            <input
                                type="text"
                                placeholder="Digite sua mensagem"
                                value={mensg}
                                onChange={(e) => setMensg(e.target.value)}
                                className={inputField}
                            />
                        </div>

                        <Button className="bg-vermelho-primario text-white font-semibold py-3 rounded-xl hover:bg-red-700 transition">
                            Enviar
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    )
}