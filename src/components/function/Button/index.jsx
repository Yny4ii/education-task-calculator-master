import React from 'react'
import {ButtonStyle} from '@/components/styles/stylesButton'

export const Button = ({title, onClickButton}) => {
  return (
    <ButtonStyle onClick={onClickButton}>{title}</ButtonStyle>
  )
}
