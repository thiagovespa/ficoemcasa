import React from 'react'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ProductDetail from '../../components/ProductDetail'

import img1 from '../../assets/prod1.png'

const product = {
  id: 1,
  title: 'Produto cadastrado',
  description: 'Bacon ipsum dolor amet shoulder voluptate et kielbasa, meatball hamburger bresaola boudin aute. Adipisicing tongue frankfurter spare ribs. Pig fugiat occaecat sed in kielbasa salami excepteur sirloin ut short loin aliquip.',
  value: 18.99,
  image: img1
}

const Product = () => {
  return (
    <>
      <Header
        isMinimal
      />
      <ProductDetail product={product} />
      <Footer />
    </>
  )
}

export default Product
