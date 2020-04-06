import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navigator = styled(Link)`
  display: block;
  font-size: 2rem;
  text-decoration: none;
  padding: 2rem;
  text-align: center;
  margin-top: 1rem;
  background-color: gray;
`

const Example = () => {
  return (
    <>
      <h1>Navegar entre componentes</h1>
      <Navigator to='/bem-vindo'>Onboarding</Navigator>
      <Navigator to='/login'>Login</Navigator>
      <Navigator to='/categorias'>Categorias</Navigator>
      <Navigator to='/categorias/id'>Subcategorias</Navigator>
      <Navigator to='/lojas'>Lojas</Navigator>
      <Navigator to='/produtos'>Produtos</Navigator>
    </>
  )
}

export default Example
