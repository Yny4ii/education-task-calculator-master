import styled from 'styled-components'

export const DisplayStyle = styled.div`
  grid-area: display;
  text-align: right;
  border-bottom: ${({theme}) => theme.spaces[1]-1}px solid ${({theme}) => theme.colors.secondaryLight};
  font-size: ${({theme}) => theme.fontSizes[7]}px;
  height: ${({theme}) => theme.spaces[5]}px;`


