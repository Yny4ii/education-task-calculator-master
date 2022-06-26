import React from 'react'
import {Display} from "@/components/function/Display"
import {Keypad} from "@/components/function/Keypad"
import {History} from "@/components/function/History"

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

