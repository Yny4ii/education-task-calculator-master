import React from 'react'
import {Display} from "@/components/Display"
import {Keypad} from "@/components/Keypad"
import {History} from "@/components/History"

import {CalculatorContainer} from "@/components/styles/stylesCalculator"

export const Calculator = () => {
  return (
    <CalculatorContainer>
      <Display/>
      <Keypad/>
      <History/>
    </CalculatorContainer>
  )
}

