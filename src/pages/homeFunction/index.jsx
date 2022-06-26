import React from 'react'
import {Calculator} from "@/components/function/Calculator"
import ErrorBoundary from "@/components/class/ErrorBoundary/ErrorBoundary"

export const HomePage = () => {
  return (
    <ErrorBoundary>
      <Calculator/>
    </ErrorBoundary>
  )
}
