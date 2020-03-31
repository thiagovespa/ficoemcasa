import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

const Categoria = () => {
  return (
    <>
      <Header />
      <h1>Categoria</h1>
      <Link to='/'>Voltar</Link>
      <Footer />
    </>
  )
}

export default Categoria
