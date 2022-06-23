import React from 'react'
import {Header} from "@/components/Header"
import {useDispatch} from "react-redux"
import {changeTheme} from "@/redux/slices/themeSlice"
import {ClearHistoryButton, Select} from "@/components/styles/styleSettings"
import {clearHistory} from "@/redux/slices/historySlice"

export const Settings = () => {
  const dispatch = useDispatch()
  const toggleTheme = event => {
    dispatch(changeTheme(event.target.value))
  }
  return (
    <React.Fragment>
      <Header/>
      <Select className="select" onChange={toggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </Select>
      <ClearHistoryButton onClick={dispatch(clearHistory())}>Clear history</ClearHistoryButton>
    </React.Fragment>
  )
}
