import React from 'react'

import Header from '../../components/Header'
import StoreBanner from '../../components/StoreBanner'
import Footer from '../../components/Footer'

import { MainTitle } from '../../components/Styled'

const Categoria = () => {
  return (
    <>
      <Header />
      <StoreBanner />
      <MainTitle>
        O que você vai comprar hoje?
      </MainTitle>
      <Footer />
    </>
  )
}

export default Categoria
