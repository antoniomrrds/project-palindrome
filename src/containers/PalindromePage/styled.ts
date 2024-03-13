import styled from 'styled-components'

export const Container = styled.div`
  max-width: 800px;
  margin: 10px auto;
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: calc(100dvh - 20px);
`

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: bolder;
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.sizes.small};
  }
`

export const InputContainer = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`

export const InputLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.dark};
`

export const Input = styled.input`
  margin: 15px 0 15px;
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: center;
  font-weight: bolder;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.secondaryColor};
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryColor};
    color: ${({ theme }) => theme.colors.dark};
    border-radius: 10px;
    border: 1px solid ${({ theme }) => theme.colors.dark};
  }
`
