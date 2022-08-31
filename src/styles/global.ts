import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin : 0;
  padding : 0;
  box-sizing: border-box;
}
:focus {
  outline: none;
  box-shadow: 0  0 0 2px ${(props) => props.theme['purple-dark']};
}
body {
  background: ${({ theme }) => theme['gray-600']};
  color: ${({ theme }) => theme['gray-100']};
}
body,input ,button  {
  font-family:'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  -webkit-font-smoothing: antialiased;
}
button, a  {
  cursor: pointer;
}
`
