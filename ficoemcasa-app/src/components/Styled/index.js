import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

export const Button = styled.button`
  display: inline-block;
  background-color: ${props => props.background ? props.background : '#F7B03D'};
  padding: ${props => props.streched ? '.8rem 5rem' : '.8rem 1.3rem'};
  color: ${props => props.color ? props.color : '#fff'};
  border: none;
  border-radius: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  flex: 0 0 auto;
`

export const ButtonLink = styled(Link)`
  display: inline-block;
  background-color: ${props => props.background ? props.background : '#F7B03D'};
  padding: ${props => props.streched ? '.8rem 5rem' : '.8rem 1.3rem'};
  color: ${props => props.color ? props.color : '#fff'};
  border-radius: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
`

export const GhostButtonLink = styled(Link)`
  display: inline-block;
  background-color: transparent;
  padding: ${props => props.streched ? 'calc(.8rem - 3px) 5rem' : 'calc(.8rem - 3px) 1.3rem'};
  color: ${props => props.color ? props.color : '#EB7D50'};
  border-color: ${props => props.border ? props.border : '#EB7D50'};
  border-width: 3px;
  border-style: solid;
  border-radius: 2rem;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  flex: 0 0 auto;
`

export const MainTitle = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.8rem;
  line-height: 35px;
  color: ${props => props.color ? props.color : '#8B867E'};
  text-align: center;
  margin: 0 auto;
`

export const SecondaryTitle = styled.h2`
  font-family: 'Baloo 2', sans-serif;
  font-size: 2.5rem;
  line-height: 3rem;
  color: ${props => props.color ? props.color : '#FF9962'};
  width: 60%;
  max-width: 19rem;
  text-align: center;
  margin-bottom: 2rem;
`

export const DisableScroll = createGlobalStyle`
  body {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
`
