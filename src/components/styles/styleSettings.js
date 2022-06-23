import styled from 'styled-components'

export const ClearHistoryButton = styled.button`
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  margin-left: ${({theme}) => theme.spaces[3]}px;
  margin-top: ${({theme}) => theme.spaces[3]}px;
  padding: ${({theme}) => theme.spaces[2]}px;
  border-radius: ${({theme}) => theme.spaces[4]}px;
  font-weight: bold;
  cursor: pointer;


  &:hover {
    color: ${({theme}) => theme.colors.sixth_color};
  }

  &:active {
    background-color: ${({theme}) => theme.colors.fourth_color};
  }
`


export const Select = styled.select`
  font-size: ${({theme}) => theme.fontSizes[3]}px;
  padding: ${({theme}) => theme.spaces[2]}px;
  border-radius: ${({theme}) => theme.spaces[4]}px;
  font-weight: bold;
  cursor: pointer;
`
