import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Example = styled.h2`
  color: red;
`

const Navigator = styled(Link)`
  display: block;
  font-size: 2rem;
  text-decoration: none;
  padding: 2rem;
  text-align: center;
  margin-top: 3rem;
  background-color: gray;
`

const Login = () => {
  return (
    <>
      <h1>Inicio</h1>
      <Example>Eu sou um exemplo de componente</Example>
      <Navigator to='/categorias'>Categorias</Navigator>
      <Navigator to='/bem-vindo'>Onboarding</Navigator>
    </>
  )
}

export default Login
