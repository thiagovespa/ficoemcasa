
import styled from 'styled-components'

export const StepperContainer = styled.div`
width: 100vw;
height: 100vh;
overflow: hidden;

animation-name: fadeIn;
animation-duration: 1.5s;

@keyframes fadeIn {
  from {opacity: 0}
  to {opacity: 1}
}
`

export const StepBlock = styled.div`
position: absolute;
background-color: #fff;
top: 0;
left: 0;
display: flex;
overflow: hidden;
flex-direction: column;
align-items: center;
justify-content: center;
transition: opacity ease 1s;

opacity: ${props => props.active ? '1' : '0'};
left: ${props => props.active ? '0' : '100vw'};
width: ${props => props.active ? '100vw' : '0'};
height: ${props => props.active ? '100vh' : '0'};
`

export const Logo = styled.img`
width: 30%;
margin-bottom: 3rem;
`

export const Illustration = styled.img`
width: 50%;
margin-bottom: 1rem;
`

export const Title = styled.h2`
font-family: 'Baloo 2', sans-serif;
font-size: 2.5rem;
line-height: 3rem;
color: #FF9962;
width: 60%;
max-width: 19rem;
text-align: center;
margin-bottom: 2rem;
`

export const Text = styled.p`
font-size: 1.6rem;
line-height: 2.5rem;
text-align: center;
padding: 0 10%;
margin-bottom: 2rem;
color: #8C8686;
`
