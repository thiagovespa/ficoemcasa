import React from 'react'

import Header from '../../components/Header'
import SubcategorySelection from '../../components/SubcategorySelection'
import Footer from '../../components/Footer'

import { MainTitle } from '../../components/Styled'

const Subcategories = () => {
  return (
    <>
      <Header
        hasBackButton
        headerTitle='Alimentação'
      />
      <MainTitle>
        Escolha a subcategoria
      </MainTitle>
      <SubcategorySelection />
      <Footer />
    </>
  )
}

export default Subcategories
