import { useState, type FormEvent } from "react"
import { Button } from "../components/ui/button"
import { CardForms } from "../components/ui/cardsForms"
import { 
  UserIcon, 
  PhoneIcon, 
  ChatBubbleOvalLeftEllipsisIcon 
} from "@heroicons/react/24/outline"

export function Formularios() {
  const [name, setName] = useState("")
  const [cel, setCel] = useState("")
  const [mensg, setMensg] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError("")

    if (!name.trim() || !cel.trim() || !mensg.trim()) {
      setError("Preencha todos os campos")
      return
    }

    if (cel.replace(/\D/g, "").length < 11) {
      setError("Celular inválido")
      return
    }

    try {
      setLoading(true)
      const msg = `Oi, meu nome é ${name}. ${mensg}`
      const url = `https://wa.me/5598987730795?text=${encodeURIComponent(msg)}`

      window.open(url, "_blank")

      // Reset form após sucesso
      setName("")
      setCel("")
      setMensg("")
    } catch (err) {
      setError("Erro ao enviar mensagem. Tente novamente.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const inputWrapper =
    "flex items-center gap-3 bg-gray-100 border border-gray-200 rounded-xl px-4 py-3 shadow-sm focus-within:ring-2 focus-within:ring-red-600 transition-all"

  const inputField =
    "w-full bg-transparent outline-none text-gray-700 placeholder-gray-500 font-medium disabled:opacity-60"

  return (
    <section className="w-full bg-gray-50 py-8 md:py-16 lg:py-20 px-4 md:px-6 lg:px-8">
      {/* Grid container responsivo */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        
        {/* COLUNA ESQUERDA - Informações */}
        <div className="flex flex-col gap-6 md:gap-8 justify-start">
          
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold text-vermelho-primario">
            Entre em contato conosco
          </h2>

          {/* Card de Informações */}
          <div className="w-full">
            <CardForms />
          </div>
        </div>

        {/* COLUNA DIREITA - Formulário */}
        <div className="w-full flex items-start">
          <div className="w-full bg-white border border-gray-200 rounded-2xl shadow-xl p-6 md:p-8 lg:p-10">
            
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 md:gap-6">
              
              {/* Título do Formulário */}
              <h3 className="text-xl md:text-2xl font-bold text-vermelho-primario text-center mb-2">
                Envie suas dúvidas
              </h3>

              {/* Mensagem de Erro */}
              {error && (
                <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg text-sm md:text-base font-medium animate-pulse">
                  {error}
                </div>
              )}

              {/* Campo Nome */}
              <div className={inputWrapper}>
                <UserIcon className="w-5 h-5 md:w-5 md:h-5 text-red-600 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputField}
                  disabled={loading}
                  aria-label="Nome completo"
                />
              </div>

              {/* Campo Celular */}
              <div className={inputWrapper}>
                <PhoneIcon className="w-5 h-5 md:w-5 md:h-5 text-red-600 flex-shrink-0" />
                <input
                  type="tel"
                  placeholder="(98) 98973-0795"
                  value={cel}
                  onChange={(e) => setCel(e.target.value)}
                  className={inputField}
                  disabled={loading}
                  aria-label="Número de celular"
                />
              </div>

              {/* Campo Mensagem */}
              <div className={inputWrapper}>
                <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5 md:w-5 md:h-5 text-red-600 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Digite sua dúvida ou mensagem"
                  value={mensg}
                  onChange={(e) => setMensg(e.target.value)}
                  className={inputField}
                  disabled={loading}
                  aria-label="Mensagem"
                />
              </div>

              {/* Botão Submit */}
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-vermelho-primario text-white font-semibold py-3 md:py-3 rounded-xl hover:bg-red-700 active:bg-red-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed text-base md:text-base mt-2"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Enviando...
                  </span>
                ) : (
                  "Enviar"
                )}
              </Button>

              {/* Texto de informação */}
              <p className="text-center text-xs md:text-sm text-gray-500 mt-2">
                Você será redirecionado para o WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}