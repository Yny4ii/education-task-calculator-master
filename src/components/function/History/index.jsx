import React from 'react'
import {HistoryExpression, HistoryStyle} from "@/components/styles/stylesHistory"
import {useSelector} from "react-redux"

export const History = () => {
  const history = useSelector(state => state.history.history)
  return (
    <HistoryStyle>
      {history.map((e, i) => (
        <HistoryExpression key={i}>{e}</HistoryExpression>
      ))}
    </HistoryStyle>
  )
}
