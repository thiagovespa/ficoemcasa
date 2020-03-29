import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi';

import {
  Background,
  Logo,
  SearchInput,
  SearchBtn
} from './styles'

import logo from '../../assets/fico-em-casa-logo.svg'

const Header = () => {
  const [isSearchActive, setSearchActive] = useState(false);

  return (
    <Background>
      <h1>
        <Logo src={logo} alt="Fico em casa" title="Fico em casa" />
      </h1>
      <div>
        <SearchInput
          onFocus={() => setSearchActive(true)}
          onBlur={() => setSearchActive(false)}
          placeholder="O que você procura?"
        />
        <SearchBtn
          isSearchActive={isSearchActive} >
          <FiSearch
            size={16}
            color={isSearchActive ? "#e9714d" : "#DAD7D7"}
            style={{transition: 'all ease .2s .1s' }}
          />
        </SearchBtn>
      </div>
    </Background>
  )
}

export default Header
