import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronLeft, FiSearch } from 'react-icons/fi'

import {
  Background,
  BackButton,
  LogoWrapper,
  Logo,
  SearchWrapper,
  SearchInput,
  SearchBtn,
  Title
} from './styles'

import logo from '../../assets/fico-em-casa-logo-branco.svg'

const Header = ({ hasBackButton, headerTitle }) => {
  const [isSearchActive, setSearchActive] = useState(false)

  return (
    <Background isFirstPage={!hasBackButton}>

      {hasBackButton
        ? (
          <BackButton to='/categorias'>
            <FiChevronLeft size={16} />
            Voltar
          </BackButton>
        ) : (
          <LogoWrapper>
            <Link to='/'>
              <Logo src={logo} alt='Fico em casa' title='Fico em casa' />
            </Link>
          </LogoWrapper>
        )}

      {headerTitle && <Title>{headerTitle}</Title>}

      <SearchWrapper>
        <SearchInput
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
          placeholder='O que você procura?'
        />
        <SearchBtn
          isSearchActive={isSearchActive}
        >
          <FiSearch
            size={16}
            color={isSearchActive ? '#e9714d' : '#DAD7D7'}
            style={{ transition: 'all ease .2s .1s' }}
          />
        </SearchBtn>
      </SearchWrapper>
    </Background>
  )
}

export default Header
