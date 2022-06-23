import React from 'react'

import {HeaderDiv, HeaderTitle, LinkStyle} from "@/components/styles/stylesHeader"
import {HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE} from "@/constants"

export const Header = () => {
  return (
    <HeaderDiv>
      <HeaderTitle>Calculator App</HeaderTitle>
      <LinkStyle to={HOME_PAGE_ROUTE}>Home
      </LinkStyle>
      <LinkStyle to={SETTINGS_PAGE_ROUTE}>Settings
      </LinkStyle>
    </HeaderDiv>
  )
}

