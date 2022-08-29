import styled from 'styled-components'

export const Container = styled.header`
  background: ${(props) => props.theme['gray-700']};
  max-width: 90rem;
  height: 12.5rem;
  display: flex;
  justify-content: center;

  div {
    display: flex;
    align-items: flex-start;
    margin-top: 4.5rem;
    gap: 0.75rem;
  }
`
