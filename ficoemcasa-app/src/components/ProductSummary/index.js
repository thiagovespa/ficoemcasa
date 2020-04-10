import React from 'react'

import { ButtonLink } from '../Styled'
import {
  Wrapper,
  ImageWrapper,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ButtonWrapper
} from './styles'

const ProductSummary = ({ product }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <ProductImage src={product.image} alt={product.name} title={product.name} />
      </ImageWrapper>
      <div>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDescription>{product.description}</ProductDescription>
        <ProductPrice>
          {product.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
        </ProductPrice>
        <ButtonWrapper>
          <ButtonLink
            background='#78DB56'
            to='/'
          >
            Quero comprar
          </ButtonLink>
        </ButtonWrapper>
      </div>
    </Wrapper>
  )
}

export default ProductSummary
