import React from 'react'
import { FiHome, FiUser, FiShoppingCart } from 'react-icons/fi'

import {
  Container,
  LinkList,
  FooterBtn
} from './styles'

const Footer = () => {
  return (
    <Container>
      <LinkList>
        <li>
          <FooterBtn>
            <FiHome size={18} />
            <span>Inicio</span>
          </FooterBtn>
        </li>
        <li>
          <FooterBtn>
            <FiUser size={18} />
            <span>Perfil</span>
          </FooterBtn>
        </li>
        <li>
          <FooterBtn>
            <FiShoppingCart size={18} />
            <span>Carrinho</span>
          </FooterBtn>
        </li>
      </LinkList>
    </Container>
  )
}

export default Footer
