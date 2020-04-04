import React from 'react'
import styled from 'styled-components'

import { Button, ButtonLink, GhostButtonLink, SecondaryTitle } from '../../components/Styled'

import logoImg from '../../assets/fico-em-casa-logo-branco.svg'

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
  
  background: rgb(247,176,61);
  background: linear-gradient(
    135deg, #ee904f 0%,
    #e9734f 100%
  );
`

const Logo = styled.img`
  display: block;
  width: 35%;
  max-width: 25rem;
  margin-top: 5rem;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 16rem;
  justify-content: space-between;
  margin-bottom: 5rem;
`

const Login = () => {
  return (
    <Background>
      <Logo src={logoImg} alt='Fico em Casa' title='Fico em Casa' />
      <SecondaryTitle color='#fff'>
        Entre Agora
      </SecondaryTitle>
      <ButtonContainer>
        <ButtonLink
          to='/'
          background='#fff'
          color='#EB7D50'
        >
          Cadastrar
        </ButtonLink>
        <br />
        <Button
          background='#fff'
          color='#3A79C2'
        >
          Entre pelo Facebook
        </Button>
        <GhostButtonLink
          to='/'
          color='#fff'
          border='#fff'
        >
          Continuar como visitante
        </GhostButtonLink>
      </ButtonContainer>
    </Background>
  )
}

export default Login
