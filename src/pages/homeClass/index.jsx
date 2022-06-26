import React from 'react'
import ErrorBoundary from "@/components/class/ErrorBoundary/ErrorBoundary"
import CalculatorClass from "@/components/class/Calculator"

export default class HomePageClass extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <CalculatorClass/>
      </ErrorBoundary>
    )
  }
}
