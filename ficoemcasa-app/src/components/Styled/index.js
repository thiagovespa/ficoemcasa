import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled.button`
  display: inline-block;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#F7B03D'};
  padding: ${props => props.streched ? ' .8rem 5rem' : ' .8rem 1.3rem'};
  border: none;
  border-radius: 2rem;
  font-family: 'Baloo 2', sans-serif;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  flex: 0 0 auto;
`

export const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#F7B03D'};
  padding: ${props => props.streched ? ' .8rem 5rem' : ' .8rem 1.3rem'};
  border-radius: 2rem;
  font-family: 'Baloo 2', sans-serif;
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  flex: 0 0 auto;
`

export const MainTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.8rem;
  line-height: 35px;
  color: #8B867E;
  text-align: center;
  margin: 0 auto;
`
export const DisableScroll = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`
