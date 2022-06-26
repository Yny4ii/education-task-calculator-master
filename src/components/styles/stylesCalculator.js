import styled from 'styled-components'


export const CalculatorContainer = styled.div`
  margin: ${({theme}) => theme.spaces[2]}px;
  height: 86%;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 70% 30%;
  grid-template-areas:
'header header'
    'display history'
    'keypad history';
  ${({theme}) =>
    theme.below.med({
      display: 'flex',
      'flex-direction': 'column',
    })}
`

