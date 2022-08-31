import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1rem;
  gap: 0.75rem;
  justify-content: space-between;

  background: ${({ theme }) => theme['gray-500']};
  border: 1px solid ${({ theme }) => theme['gray-400']};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;

  margin-bottom: 0.75rem;
`
export const CheckBoxTitleTask = styled.div`
  display: flex;
  align-items: flex-start;
`
export const CheckBox = styled.button`
  padding-right: 0.8rem;
  border: none;
  background: none;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: none;
  color: ${({ theme }) => theme['blue-dark']};
  :hover {
    color: ${({ theme }) => theme.blue};
  }
`
export const TrashButton = styled.button`
  border: none;
  background: none;
  color: ${({ theme }) => theme['gray-300']};
  border-radius: 4px;
  padding: 0.25rem;
  :hover {
    background: ${({ theme }) => theme['gray-400']};
    color: ${({ theme }) => theme['red-300']};
  }
`
