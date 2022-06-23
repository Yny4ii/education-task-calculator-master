import React from 'react'
import {NUMBERS} from '@/constants/variables'
import {KeypadStyle} from '@/components/styles/stylesKeypad'
import {Button} from "@/components/Button"
import {useDispatch, useSelector} from "react-redux"
import {
  addToDisplay,
  calculateExpression,
  removeAllFromDisplay,
  removeOneSignFromDisplay,
} from "@/redux/slices/displaySlice"
import {addExpressionToHistory} from "@/redux/slices/historySlice"

export const Keypad = () => {
  const dispatch = useDispatch()
  const history = useSelector(state => state.display.display)

  const handleClickKey = event => {
    const key = event.target.textContent
    switch (key) {
      case "CE":
        dispatch(removeOneSignFromDisplay())
        break
      case "=":
        dispatch(calculateExpression())
        dispatch(addExpressionToHistory({history}))
        break
      case "C":
        dispatch(removeAllFromDisplay())
        break
      default:
        dispatch(addToDisplay(key))
        break
    }
  }
  return (
    <KeypadStyle >
      {NUMBERS.map(e => (<Button key={e} title={e}
                                 onClickButton={handleClickKey}/>))}
    </KeypadStyle>
  )
}

