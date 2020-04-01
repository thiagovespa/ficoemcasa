import React, { useState } from 'react'

import { Button, DisableScroll, ButtonLink } from '../../components/Styled'
import {
  StepperContainer,
  StepBlock,
  Logo,
  Illustration,
  Title,
  Text
} from './styles'

import logo from '../../assets/fico-em-casa-logo-laranja.svg'
import highFive from '../../assets/onboarding-high-five.png'
import relax from '../../assets/onboarding-relax.png'

const OnBoarding = () => {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <StepperContainer>

      <StepBlock active={activeStep === 1}>
        <Logo src={logo} />
        <Title>
          Bem vindo ao Fique em Casa
        </Title>
        <br />
        <Button
          backgroundColor='#78DB56'
          streched
          onClick={() => setActiveStep(2)}
        >
          Começar
        </Button>
      </StepBlock>

      <StepBlock active={activeStep === 2}>
        <Illustration src={highFive} />
        <Title>
          Objetivo
        </Title>
        <Text>
          Esse aplicativo é gratuito com a finalidade de  você conseguir
          fazer suas compras sem sair de casa, e ajudar o comércio da sua cidade.
        </Text>
        <br />
        <Button
          backgroundColor='#78DB56'
          streched
          onClick={() => setActiveStep(3)}
        >
          Próximo
        </Button>
      </StepBlock>

      <StepBlock active={activeStep === 3}>
        <Illustration src={relax} />
        <Title>
          Como usar
        </Title>
        <Text>
          Escolha o produto que você quer comprar e feche sua compra diretamente com o vendedor pelo whatsapp.
        </Text>
        <br />
        <ButtonLink
          backgroundColor='#78DB56'
          streched
          to='/'
        >
          Próximo
        </ButtonLink>
      </StepBlock>

      <DisableScroll />
    </StepperContainer>
  )
}

export default OnBoarding
