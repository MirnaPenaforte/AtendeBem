import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '../components/ui/carousel';
import Logo from "../assets/Logo.svg"

export function Parceiros() {
    return(
        <div id="Parceiros" className="w-full h-full bg-branco-fundo flex items-center justify-center py-18">
            <div className="w-4/5 flex flex-col items-center justify-center gap-18">
                <h2 className="text-vermelho-primario text-3xl font-bold text-center">Parcerias que fortalecem, conectam<br/>e geram resultados reais.</h2>
                <div className='w-full flex justify-center '>
                    <Marquee>
                      <MarqueeFade side="left" />
                      <MarqueeFade side="right" />
                      <MarqueeContent speed={35}>
                        {new Array(10).fill(null).map((_, index) => (
                          <MarqueeItem className="mx-12 flex items-center justify-center" key={index}>
                            <img
                              alt={`Apoiador ${index}`}
                              className="overflow-visible rounded-full object-cover"
                              src={Logo}
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