import React from 'react'
import {DisplayStyle} from "@/components/styles/stylesDisplay"
import {useSelector} from "react-redux"

export const Display = () => {
  const display = useSelector(state => state.display.display)
  return (
    <DisplayStyle>
      {display}
    </DisplayStyle>
  )
}


