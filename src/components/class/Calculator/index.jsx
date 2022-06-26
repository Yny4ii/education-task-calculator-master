import React from 'react'
import {CalculatorContainer} from "@/components/styles/stylesCalculator"
import DisplayClass from "@/components/class/Display"
import HistoryClass from "@/components/class/History"
import KeypadClass from "@/components/class/Keypad"

export default class CalculatorClass extends React.Component {
  render() {
    return (
      <CalculatorContainer>
        <DisplayClass/>
        <KeypadClass/>
        <HistoryClass/>
      </CalculatorContainer>
    )
  }
}
