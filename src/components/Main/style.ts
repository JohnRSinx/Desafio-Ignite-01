import styled from 'styled-components'

export const Container = styled.main`
  max-width: 46rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: -1.6rem;
`
export const FormTask = styled.form`
  display: flex;
  gap: 0.5rem;
  justify-content: center;

  input {
    width: 39.875rem;
    height: 3.375rem;
    line-height: 1.6rem;
    background: ${({ theme }) => theme['gray-500']};
    border: 1px solid ${({ theme }) => theme['gray-700']};
    border-radius: 8px;
    padding: 1rem;
    @media (max-width: 768px) {
      width: auto;
    }
  }
  button {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 8px;
    background: ${({ theme }) => theme['blue-dark']};
    color: ${({ theme }) => theme['gray-100']};
    gap: 0.5rem;
    font-weight: bold;
    border: none;
    transition: background-color 0.1s;

    :hover {
      background: ${({ theme }) => theme.blue};
    }
  }
`
export const CardsContainer = styled.div`
  margin-top: 4rem;
`
export const TitleCards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  p.task {
    color: ${({ theme }) => theme.blue};
    font-weight: bold;
    line-height: 1.6rem;
  }
  p.concludeds {
    color: ${({ theme }) => theme.purple};
    font-weight: bold;
    line-height: 1.6rem;
  }

  span {
    font-weight: bold;
    color: ${({ theme }) => theme['gray-200']};
    background: ${({ theme }) => theme['gray-400']};
    border-radius: 999px;
    padding: 0.125rem 0.5rem;
  }
`
