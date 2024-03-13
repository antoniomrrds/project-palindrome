import styled from 'styled-components'

export const ListContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #242824;
  font-style: italic;
`

export const Title = styled.h2`
  color: #0070f3;
  font-size: 24px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.secondaryColor};
`

export const List = styled.ul`
  list-style: none;
  padding: 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`

export const ListItem = styled.li`
  margin: 5px;
  background-color: ${({ theme }) => theme.colors.secondaryColor};
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 8px;
  padding: 10px;
  font-weight: bolder;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
