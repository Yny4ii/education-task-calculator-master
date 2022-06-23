import styled from "styled-components"

export const KeypadStyle = styled.div`
  grid-area: keypad;
  display: grid;
  justify-items: center;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: ${({theme}) => theme.spaces[2]}px;
  padding: ${({theme}) => theme.spaces[2]}px;
  grid-gap: ${({theme}) => theme.spaces[3]}px;

  & button:nth-child(10) {
    grid-row: 2 / 4;
    grid-column: 5;
  }


`

