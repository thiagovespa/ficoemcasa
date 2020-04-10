import React from 'react'

import { ButtonLink } from '../Styled'
import {
  Wrapper,
  ImageWrapper,
  StoreImage,
  StoreTitle,
  StoreAddress
} from './styles'

const StoreSummary = ({ store }) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <StoreImage src={store.image} alt={store.name} title={store.name} />
      </ImageWrapper>
      <div>
        <StoreTitle>{store.name}</StoreTitle>
        <StoreAddress>{store.address}</StoreAddress>
        <ButtonLink
          background='#78DB56'
          streched
          to='/produtos'
        >
          Ver mais
        </ButtonLink>
      </div>
    </Wrapper>
  )
}

export default StoreSummary
