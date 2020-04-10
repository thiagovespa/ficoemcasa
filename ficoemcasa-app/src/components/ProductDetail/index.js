import React, { useState } from 'react'
import styled from 'styled-components'

import { Button } from '../Styled'

const ImageWrapper = styled.div`
  width: 99%;
  height: 14rem;
  border-radius: 0 3rem 3rem 0;
  overflow: hidden;
  margin: 2rem 0 1rem;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const ContentWrapper = styled.div`
  padding: 1rem;
`

const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  line-height: 33px;
  color: #000000;
`

const Description = styled.p`
  font-size: 17px;
  line-height: 28px;
  text-align: center;
  color: #949392;
  margin-bottom: 1rem;
`

const Label = styled.label`
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  color: #797878;
`

const QuantitySelectionBlock = styled.div`
  background-color: #eee;
  border: 1px solid #E9E2E2;
  padding: .3rem 1rem;
  border-radius: 3rem;
  margin-top: .5rem;
  width: max-content;
`

const QuantityButton = styled.button`
  font-weight: 500;
  font-size: 23px;
  text-align: center;
  color: #EC8350;
  border: none;
  background: transparent;
  padding: 0 2rem;
`

const QuantityInput = styled.input`
  width: 5rem;
  text-align: center;
  font-weight: 500;
  font-size: 23px;
  color: #EC8350;
  border: none;
  background: transparent;
`

const TextArea = styled.textarea`
  display: block;
  background: #EEEEEE;
  border: 1px solid #E9E2E2;
  border-radius: 3rem;
  line-height: 2.5rem;
  resize: none;
  width: 100%;
  min-height: 10rem;
  padding: 2rem;
`

const ProductDetail = ({ product }) => {
  const [quantity, setQuantity] = useState(1)
  return (
    <>
      <ImageWrapper>
        <img src={product.image} alt={product.title} title={product.title} />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <div>
          <Label>Quantidade</Label>
          <QuantitySelectionBlock>
            <QuantityButton onClick={() => setQuantity(quantity + 1)}>
              +
            </QuantityButton>
            <QuantityInput
              type='number'
              name='quantity'
              value={quantity}
              maxlength='3'
              onChange={event => setQuantity(event.target.value)}
            />
            <QuantityButton onClick={() => setQuantity(quantity - 1)}>
              -
            </QuantityButton>
          </QuantitySelectionBlock>
        </div>
        <br />
        <div>
          <Label>Observações:</Label>
          <TextArea placeholder='Ex: Tirar a cebola, maionese à parte, ponto da carne, etc...' />
        </div>
        <br />
        <Button
          streched
          centered
          background='#78DB56'
        >
          Continuar
        </Button>
      </ContentWrapper>
    </>
  )
}

export default ProductDetail
