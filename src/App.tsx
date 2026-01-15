import './App.css'
import { Apresentacao } from './pages/ApresentacaoSect'
import { Footer } from './pages/Footer'
import { Header } from './pages/Header'
import { Hero }  from './pages/Hero-section'
import { Parceiros } from './pages/ParceirosHero'

function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Parceiros/>
      <Apresentacao/>
      <Footer/>
    </>
  )
}

export default App
