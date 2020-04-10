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
  HeaderImage,
  Title
} from './styles'

import logo from '../../assets/fico-em-casa-logo-branco.svg'

const Header = ({ hasBackButton, headerTitle, headerImage, isMinimal }) => {
  const [isSearchActive, setSearchActive] = useState(false)

  return (
    <Background isFirstPage={!hasBackButton}>

      {(hasBackButton || isMinimal)
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

      {(headerTitle && !isMinimal) && <Title>{headerTitle}</Title>}

      {!isMinimal && (
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
      )}

      {/* {headerImage && <HeaderImage src={headerImage} />} */}
    </Background>
  )
}

export default Header
