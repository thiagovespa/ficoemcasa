import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const List = styled.ul`
  list-style: none;

  li {
    padding: .5rem;
    margin: 1.5rem;
  }
`

export const SubcategoryLink = styled(Link)`
  background-image: linear-gradient(#aaa, #555), ${props => `url(${props.image})`};
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  display: block;
  text-align: center;
  padding: 2.5rem 1rem;
  border-radius: 1rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 25px;
    line-height: 39px;

    color: #FFF; 
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

`
