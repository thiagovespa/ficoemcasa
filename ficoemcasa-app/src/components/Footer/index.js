import React from 'react'
import { FiHome, FiUser, FiShoppingCart } from 'react-icons/fi'

import {
  Container,
  LinkList,
  FooterBtn,
  Spacer
} from './styles'

const Footer = () => {
  return (
    <>
      <Spacer />
      <Container>
        <LinkList>
          <li>
            <FooterBtn to='/'>
              <FiHome size={17} />
              <span>Inicio</span>
            </FooterBtn>
          </li>
          <li>
            <FooterBtn to='/'>
              <FiUser size={17} />
              <span>Perfil</span>
            </FooterBtn>
          </li>
          <li>
            <FooterBtn to='/'>
              <FiShoppingCart size={17} />
              <span>Carrinho</span>
            </FooterBtn>
          </li>
        </LinkList>
      </Container>
    </>
  )
}

export default Footer
