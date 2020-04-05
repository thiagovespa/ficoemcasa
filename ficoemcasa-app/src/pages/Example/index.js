import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ExampleComp = styled.h2`
  color: red;
`

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
      <h1>Inicio</h1>
      <ExampleComp>Eu sou um exemplo de componente</ExampleComp>
      <Navigator to='/categorias'>Categorias</Navigator>
      <Navigator to='/categorias/id'>Subcategorias</Navigator>
      <Navigator to='/bem-vindo'>Onboarding</Navigator>
      <Navigator to='/login'>Login</Navigator>
    </>
  )
}

export default Example
