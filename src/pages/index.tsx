import { styled } from '@/styles'
import { HomeContainer, Product } from '@/styles/pages/home'
import Image from 'next/image'

import camiseta1 from '../assets/camisetas/1.png'
import camiseta2 from '../assets/camisetas/2.png'
import camiseta3 from '../assets/camisetas/3.png'

const camisetas = [camiseta1, camiseta2, camiseta3]

export default function Home() {
  return (
    <>
      <HomeContainer>
        {camisetas.map((camiseta, index) => (
          <Product key={index}>
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
