import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

const Categoria = () => {
  return (
    <Fragment>
      <Header/>
      <h1>Categoria</h1>
      <Link to='/'>Voltar</Link>
    </Fragment>
  )
}

export default Categoria
