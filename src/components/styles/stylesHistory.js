import styled from 'styled-components'

export const HistoryStyle = styled.div`
  grid-area: history;
  border-left: ${({theme}) => theme.spaces[1]-1}px solid ${({theme}) => theme.colors.secondaryLight};
  display: flex;
  flex-direction: column;

`

export const HistoryExpression = styled.p`
  font-size: ${({theme}) => theme.fontSizes[5]}px;
  margin-bottom: ${({theme}) => theme.spaces[1]+1}px;
`
