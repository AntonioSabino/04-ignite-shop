import {
  ImageContainer,
  ProductContainer,
  ProductDetails
} from '@/styles/pages/product'

export default function Product() {
  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero alias
          velit sed dicta quibusdam illum quam? In aperiam vero doloribus, vitae
          distinctio aspernatur impedit? Animi quam maxime placeat itaque
          voluptates.
        </p>
      </ProductDetails>

      <button>Comprar agora</button>
    </ProductContainer>
  )
}
