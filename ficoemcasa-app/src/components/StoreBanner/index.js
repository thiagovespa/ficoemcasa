import React from 'react'

import { ButtonLink } from '../Styled'
import { Banner } from './styles'

import storeImg from '../../assets/cadastrar-lojista.png'

const StoreBanner = () => {
  return (
    <Banner>
      <ButtonLink>
        Cadastre sua loja
      </ButtonLink>
      <img src={storeImg} title='Cadastre sua loja' alt='Cadastre sua loja' />
    </Banner>
  )
}

export default StoreBanner
