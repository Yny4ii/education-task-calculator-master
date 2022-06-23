import React from 'react'

import {HomePageContainer} from './components'
import {Display} from "@/components/Display"
import {History} from "@/components/History"
import {Keypad} from "@/components/Keypad"
import {Header} from "@/components/Header"

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Header/>
      <Display/>
      <Keypad/>
      <History/>
    </HomePageContainer>
  )
}
