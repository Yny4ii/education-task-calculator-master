import React, {Suspense} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"


import {CLASSES_PAGE_ROUTE, FUNCTION_PAGE_ROUTE, SETTINGS_PAGE_ROUTE} from '@/constants'
import {ThemeProvider} from "styled-components"
import theme from "@/theme"
import Loader from "@/components/function/Loader"
import {Settings} from "@/components/function/Settings"
import {useSelector} from "react-redux"
import {DARK_THEME, LIGHT_THEME} from "@/constants/colors"
import {Header} from "@/components/function/Header"
import {Calculator} from "@/components/function/Calculator";
import CalculatorClass from "@/components/class/Calculator";

export default () => {
  const selectedTheme = useSelector(state => state.theme.theme)
  return (
    <ThemeProvider
      theme={selectedTheme === 'light' ? {...theme, ...LIGHT_THEME} : {...theme, ...DARK_THEME}}>
      <Suspense fallback={<Loader/>}>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route
              path={SETTINGS_PAGE_ROUTE}
              element={<Settings/>}
            />
            <Route
              path={FUNCTION_PAGE_ROUTE}
              element={<Calculator/>}
            />
            <Route
              path={CLASSES_PAGE_ROUTE}
              element={<CalculatorClass/>}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}
