import React from 'react'
import {Calculator} from "@/components/function/Calculator"
import ErrorBoundary from "@/components/class/ErrorBoundary/ErrorBoundary"
import CalculatorClass from "@/components/class/Calculator"

export const HomePage = () => {
  return (
    <ErrorBoundary>
      <CalculatorClass/>
    </ErrorBoundary>
  )
}
