import React, {Suspense} from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"


import {CLASSES_PAGE_ROUTE, FUNCTION_PAGE_ROUTE, FUNCTION_SETTINGS_PAGE_ROUTE} from '@/constants'
import {ThemeProvider} from "styled-components"
import theme from "@/theme"
import Loader from "@/components/function/Loader"
import {Settings} from "@/pages/Settings"
import {useSelector} from "react-redux"
import {DARK_THEME, LIGHT_THEME} from "@/constants/colors"
import {Header} from "@/components/function/Header"
import {HomePage} from "@/pages/homeFunction"
import HomePageClass from "@/pages/homeClass"

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
              path={FUNCTION_SETTINGS_PAGE_ROUTE}
              element={<Settings/>}
            />
            <Route
              path={FUNCTION_PAGE_ROUTE}
              element={<HomePage/>}
            />
            <Route
              path={CLASSES_PAGE_ROUTE}
              element={<HomePageClass/>}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}
