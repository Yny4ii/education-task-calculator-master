import styled from 'styled-components'

export const Card = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({theme}) => theme.colors.white};

  border-radius: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: ${({theme}) => theme.boxShadows[0]};

  padding: ${({theme}) => theme.spaces[4]}px;
`

export const HomePageContainer = styled.div`
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

