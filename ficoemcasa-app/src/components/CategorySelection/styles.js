import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Background = styled.div`
  background-color: #EEEEEE;
  width: 100%;
  padding: 1.5rem .5rem 3.5rem;
  margin-bottom: -2rem;
  margin-top: 1rem;
  border-radius: 4rem 4rem 0 0;
`

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;

  > li {
    flex: 1 1 40%;
    display: flex;
    justify-content: center;
    margin: 1rem 5%;

    &:nth-child(odd) {
      margin: 1rem 0 1rem 5%;
    }
  }
`

export const CategoryLink = styled(Link)`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 3rem 1.5rem;
  background-color: ${props => props.background};
  border-radius: 3rem;

  > img {
    display: block;
    width: 80%;
    filter: brightness(60%);
  }

  > h3 {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 3rem;
    color: #FFFFFF;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
