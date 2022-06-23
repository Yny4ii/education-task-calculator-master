import React, {Suspense} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"


import {HOME_PAGE_ROUTE, SETTINGS_PAGE_ROUTE} from '@/constants'
import {ThemeProvider} from "styled-components"
import theme from "@/theme"
import Loader from "@/components/Loader"
import {HomePage} from "@/pages/Home"
import {Settings} from "@/components/Settings"
import {useSelector} from "react-redux"
import {DARK_THEME, LIGHT_THEME} from "@/constants/colors"

export default () => {
  const selectedTheme = useSelector(state => state.theme.theme)
  return (
    <ThemeProvider
      theme={selectedTheme === 'light' ? {...theme, ...LIGHT_THEME} : {...theme, ...DARK_THEME}}>
      <Suspense fallback={<Loader/>}>
        <BrowserRouter>
          <Routes>
            <Route
              path={HOME_PAGE_ROUTE}
              element={<HomePage/>}
            />
            <Route
              path={SETTINGS_PAGE_ROUTE}
              element={<Settings/>}
            />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ThemeProvider>
  )
}
