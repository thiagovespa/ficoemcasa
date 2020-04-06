import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Background = styled.header`
  background: rgb(247,176,61);
  background: linear-gradient(
    135deg, #e9714d 0%,
    #ef9354 100%
  );
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all ease .2s;

  border-radius: ${props => props.isFirstPage ? '0' : '0 0 3rem 0'};
`

export const BackButton = styled(Link)`
  display: flex;
  align-self: flex-start;
  align-items: center;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.6rem;
  padding: 1rem 1rem .5rem;
  color: #fff;
  text-decoration: none;
`

export const LogoWrapper = styled.h1`
  display: block;
  width: 100%;
  text-align: center;
`

export const Logo = styled.img`
  display: inline-block;
  margin: 1rem auto 0;
  max-width: 5.5rem;
  width: 15%;
`

export const SearchWrapper = styled.div`
  width: 100%;
  text-align: center;
`

export const SearchInput = styled.input`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.5rem;
  border: 1px solid #B4B1B1;
  color: #333;
  
  width: 80%;
  padding: 1rem;
  border-radius: 2rem;
  margin-bottom: 2rem;
  transition: all ease .2s;

  :focus {
    width: 100%;
    padding: 2rem;
    border-radius: 0;
    margin-bottom: 0;
  }

  ::placeholder {
    color: #B4B1B1;
  }
`

export const SearchBtn = styled.button`
  border: none;
  background-color: transparent;
  padding: ${props => props.isSearchActive ? '1.9rem 2rem 1.6rem' : '.9rem 1rem .6rem'};
  position: absolute;
  right: ${props => props.isSearchActive ? '0' : '15%'};

  transition: all ease .2s;
`

export const Title = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2.5rem;
  line-height: 3rem;
  margin-bottom: .5rem;
  color: #FFFFFF;
`

export const HeaderImage = styled.img`
  display: inline-block;
  width: 80px;
`
