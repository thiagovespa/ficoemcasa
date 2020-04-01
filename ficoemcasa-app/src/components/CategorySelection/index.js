import React from 'react'

import {
  Background,
  List,
  CategoryLink
} from './styles'

import categoryImg from '../../assets/cat-hamburguer.png'

const CategorySelection = () => {
  return (
    <Background>
      <List>
        <li>
          <CategoryLink
            backgroundColor='#a4a4a4'
          >
            <img src={categoryImg} title='Categoria' alt='Categoria' />
            <h3>Alimentação</h3>
          </CategoryLink>
        </li>
        <li>
          <CategoryLink
            backgroundColor='#ad9153'
          >
            <img src={categoryImg} title='Categoria' alt='Categoria' />
            <h3>Açougue</h3>
          </CategoryLink>
        </li>
        <li>
          <CategoryLink
            backgroundColor='#6b9baf'
          >
            <img src={categoryImg} title='Categoria' alt='Categoria' />
            <h3>Remédios</h3>
          </CategoryLink>
        </li>
        <li>
          <CategoryLink
            backgroundColor='#609f8e'
          >
            <img src={categoryImg} title='Categoria' alt='Categoria' />
            <h3>Água e Gás</h3>
          </CategoryLink>
        </li>
        <li>
          <CategoryLink
            backgroundColor='#ad767a'
          >
            <img src={categoryImg} title='Categoria' alt='Categoria' />
            <h3>Bebidas</h3>
          </CategoryLink>
        </li>
        <li>
          <CategoryLink
            backgroundColor='#81a16a'
          >
            <img src={categoryImg} title='Categoria' alt='Categoria' />
            <h3>Horti-Fruti</h3>
          </CategoryLink>
        </li>
      </List>
    </Background>
  )
}

export default CategorySelection
