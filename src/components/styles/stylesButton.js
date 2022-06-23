import styled from "styled-components"

export const ButtonStyle = styled.button`
  height: 100%;
  width: 100%;
  cursor: pointer;
  border: none;
  font-size: ${({theme}) => theme.fontSizes[4]}px;
  border-radius: ${({theme}) => theme.spaces[2]}px;
  background-color: ${({theme}) => theme.colors.third_color};
  color: ${({theme}) => theme.colors.sixth_color};;
  font-weight: bold;
  text-decoration: none;
  transition: all ease 0.3s;

  &:hover {
    background-color: ${({theme}) => theme.colors.fourth_color};

  }

  &:active{
    transform: scale(0.95);
  }


`

