import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #eee;
  padding: 3rem 2rem;
  border-radius: 3rem;
  margin-bottom: 1.5rem;
`
export const ImageWrapper = styled.div`
  flex: 0 0 10rem;
  height: 10rem;
  margin-right: 1rem;
  box-shadow: -2px 4px 5px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  overflow: hidden;
`

export const ProductImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const ProductTitle = styled.h3`
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 2rem;
  margin-bottom: .5rem;
`

export const ProductDescription = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  margin-bottom: 1rem;
`

export const ProductPrice = styled.p`
  font-size: 1.6rem;
  line-height: 2rem;
  font-weight: bold;
  color: #FF3333;
`

export const ButtonWrapper = styled.div`
  margin-top: 1.5rem;
  text-align: right;
`