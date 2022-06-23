import styled from "styled-components"
import {Link} from "react-router-dom"

export const HeaderDiv = styled.div`
  grid-area: header;
  background-color: ${({theme}) => theme.colors.third_color};
  height: ${({theme}) => theme.size.xs}px;
  align-items: center;
  display: flex;
`
export const HeaderTitle = styled.h1`
  color: ${({theme}) => theme.colors.sixth_color};
`

export const LinkStyle = styled(Link)`
  margin-left: ${({theme}) => theme.spaces[3]+2}px;
  text-decoration: none;
  color: ${({theme}) => theme.colors.fifth_color};
  font-size: ${({theme})=> theme.fontSizes[4]}px;

  &:hover{
    color: ${({theme}) => theme.colors.sixth_color};

  }
`
