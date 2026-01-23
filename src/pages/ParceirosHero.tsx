import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '../components/ui/carousel';
import Logo from "../assets/Logo.svg"
import AgapeApio from "../assets/AgapeApoio.png"
import CacauApoio from "../assets/CacauApoio.png"
import ElasApoio from "../assets/ElasApoio.png"
import SantaFeApoio from "../assets/SantaFeApoio.png"


export function Parceiros() {
    return(
        <div id="Parceiros" className="w-full h-full bg-branco-fundo flex items-center justify-center py-18">
            <div className="w-4/5 flex flex-col items-center justify-center gap-24">
                <h2 className="text-vermelho-primario text-2xl text-center font-bold">Parcerias que fortalecem, conectam<br/>e geram resultados reais.</h2>
                <div className='w-full flex justify-center mb-14 '>
                    <Marquee>
                      <MarqueeFade side="left" />
                      <MarqueeFade side="right" />
                      <MarqueeContent speed={35}>
                        {new Array(10).fill(null).map((_, index) => (
                          <MarqueeItem className="mx-12 flex items-center gap-30" key={index}>
                            <img
                              alt={`Apoiador ${index}`}
                              className="h-32 w-auto rounded-full object-contain transition-all duration-500"
                              src={Logo}
                            />
                            <img
                              alt={`Apoiador ${index}`}
                              className="h-44 w-auto rounded-full object-contain transition-all duration-500"
                              src={AgapeApio}
                            />
                            <img
                              alt={`Apoiador ${index}`}
                              className="h-32 w-auto rounded-full object-contain transition-all duration-500"
                              src={Logo}
                            />
                            <img
                              alt={`Apoiador ${index}`}
                              className="h-44 w-auto rounded-full object-contain transition-all duration-500"
                              src={CacauApoio}
                            />
                            <img
                              alt={`Apoiador ${index}`}
                              className="h-32 w-auto rounded-full object-contain transition-all duration-500"
                              src={Logo}
                            />
                            <img
                              alt={`Apoiador ${index}`}
                              className="h-44 w-auto rounded-full object-contain transition-all duration-500"
                              src={ElasApoio}
                            />
                            <img
                              alt={`Apoiador ${index}`}
                              className="h-32 w-auto rounded-full object-contain transition-all duration-500"
                              src={Logo}
                            />
                            <img
                              alt={`Apoiador ${index}`}
                              className="h-44 w-auto rounded-full object-contain transition-all duration-500"
                              src={SantaFeApoio}
                            />
                          </MarqueeItem>
                        ))}
                      </MarqueeContent>
                    </Marquee>
                </div>
            </div>
        </div>
    )
}