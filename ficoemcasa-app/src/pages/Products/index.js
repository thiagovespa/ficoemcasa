import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductSummary from '../../components/ProductSummary'

import { MainTitle } from '../../components/Styled'

import storeLogo from '../../assets/loja-1.png'

import img1 from '../../assets/prod1.png'
import img2 from '../../assets/prod2.png'
import img3 from '../../assets/prod3.png'

const productData = [
  {
    id: 1,
    title: 'Produto cadastrado',
    description: 'Lorem Ipsum Sit Dolor amet',
    value: 18.99,
    image: img1, 
  },
  {
    id: 2,
    title: 'Produto cadastrado',
    description: 'Lorem Ipsum Sit Dolor amet',
    value: 18.99,
    image: img2, 
  },
  {
    id: 3,
    title: 'Produto cadastrado',
    description: 'Lorem Ipsum Sit Dolor amet',
    value: 18.99,
    image: img3, 
  },
  {
    id: 4,
    title: 'Produto cadastrado',
    description: 'Lorem Ipsum Sit Dolor amet',
    value: 18.99,
    image: img1, 
  }
]

const Products = () => {
  return (
    <>
      <Header
        hasBackButton
        headerImage={storeLogo}
      />
      <MainTitle>
        Escolha sua loja
      </MainTitle>
      {productData.map(product => (
        <ProductSummary product={product} />
      ))}
      <Footer />
    </>
  )
}

export default Products
