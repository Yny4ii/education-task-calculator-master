import React from 'react'

import {HeaderDiv, HeaderTitle, LinkStyle} from "@/components/styles/stylesHeader"
import {CLASSES_PAGE_ROUTE, FUNCTION_PAGE_ROUTE, SETTINGS_PAGE_ROUTE} from "@/constants"

export const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitle>Calculator App</HeaderTitle>
      <LinkStyle to={FUNCTION_PAGE_ROUTE}>Home
      </LinkStyle>
      <LinkStyle to={CLASSES_PAGE_ROUTE}>Classes components
      </LinkStyle>
      <LinkStyle to={SETTINGS_PAGE_ROUTE}>Settings
      </LinkStyle>
    </HeaderDiv>
  )
}

