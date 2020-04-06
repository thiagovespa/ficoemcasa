import React from 'react'

import { List, SubcategoryLink } from './styles'

import restaurante from '../../assets/restaurantes.png'
import lanchonete from '../../assets/lanchonete.png'
import sorvete from '../../assets/sorvete.png'

const SubcategorySelection = () => {
  return (
    <List>
      <li>
        <SubcategoryLink
          to='/produtos'
          image={restaurante}
        >
          <h3>Restaurantes</h3>
        </SubcategoryLink>
      </li>
      <li>
        <SubcategoryLink
          to='/produtos'
          image={lanchonete}
        >
          <h3>Lanchonete</h3>
        </SubcategoryLink>
      </li>
      <li>
        <SubcategoryLink
          to='/produtos'
          image={restaurante}
        >
          <h3>Marmitas</h3>
        </SubcategoryLink>
      </li>
      <li>
        <SubcategoryLink
          to='/produtos'
          image={sorvete}
        >
          <h3>Sorveterias</h3>
        </SubcategoryLink>
      </li>
      <li>
        <SubcategoryLink
          to='/produtos'
          image={sorvete}
        >
          <h3>Doces</h3>
        </SubcategoryLink>
      </li>

    </List>
  )
}

export default SubcategorySelection
