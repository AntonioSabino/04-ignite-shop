import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'
import camiseta4 from '../assets/camisetas/3.png'
const camisetas = [camiseta1, camiseta2, camiseta3, camiseta4]

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  })

  return (
    <>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {camisetas.map((camiseta, index) => (
          <Product key={index} className="keen-slider__slide">
            <Image src={camiseta} width={520} height={480} alt="" />
            <footer>
              <strong>Camiseta X</strong>
              <span>R$ 79,90</span>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  )
}
