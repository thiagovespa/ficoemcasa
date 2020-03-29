import styled from 'styled-components'

export const Background = styled.header`
  background: rgb(247,176,61);
  background: linear-gradient(
    135deg, #e9714d 0%,
    #ef9354 100%
  );
  text-align: center;
  position: relative;
`

export const Logo = styled.img`
  display: inline-block;
  margin: 1rem auto;
  max-width: 5.5rem;
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