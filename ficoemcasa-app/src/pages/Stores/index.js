import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import StoreSummary from '../../components/StoreSummary'

import { MainTitle } from '../../components/Styled'

import img1 from '../../assets/loja-1.png'
import img2 from '../../assets/loja-2.png'
import img3 from '../../assets/loja-3.png'

const storeData = [
  {
    id: 1,
    name: 'Loja cadastrada 1',
    image: img1,
    address: 'Rua Raul de Carvalho n° 705 - Centro'

  },
  {
    id: 2,
    name: 'Loja cadastrada 2',
    image: img2,
    address: 'Rua Raul de Carvalho n° 705 - Centro'

  },
  {
    id: 3,
    name: 'Loja cadastrada 3',
    image: img3,
    address: 'Rua Raul de Carvalho n° 705 - Centro'

  },
  {
    id: 4,
    name: 'Loja cadastrada 4',
    image: img1,
    address: 'Rua Raul de Carvalho n° 705 - Centro'

  }
]

const Stores = () => {
  return (
    <>
      <Header
        hasBackButton
        headerTitle='Restaurantes'
      />
      <MainTitle>
        Escolha sua loja
      </MainTitle>
      {storeData.map(store => (
        <StoreSummary
          key={store.id}
          store={store}
        />
      ))}
      <Footer />
    </>
  )
}

export default Stores
