import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  background-color: #FCFCFC;
  position: fixed;
  width: 100%;
  bottom: 0;
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0px -2px 10px rgba(0,0,0,0.15);
`

export const LinkList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0 1rem;

  > li {
    flex: 1 1 auto;
    text-align: center;
  }
`

export const FooterBtn = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #5C5C5B;
  padding: 1.3rem 0 .5rem;
`
