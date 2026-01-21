import './App.css'
// import { Apresentacao } from './pages/ApresentacaoSect'
import { Footer } from './pages/Footer'
import { Header } from './pages/Header'
import { Hero }  from './pages/Hero-section'
import { Parceiros } from './pages/ParceirosHero'
import { QuemSomos } from './pages/QuemSomos'
import {Formularios} from './pages/Formulario'
import { ClienteOculto } from './pages/ApresentacaoSect'
import { Roda } from './pages/RODA'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Parceiros/>
      <QuemSomos/>
      <ClienteOculto/>
      <Roda/>
      <Formularios/>
      <Footer/>
    </>
  )
}

export default App
