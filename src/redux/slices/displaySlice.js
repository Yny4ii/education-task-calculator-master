import {createSlice} from '@reduxjs/toolkit'
import {calculator} from "@/compute/compute"

const displaySlice = createSlice({
  name: 'display',
  initialState: {
    expression: "",
    display: "",
    answer: "",
  },
  reducers: {
    removeAllFromDisplay(state) {
      state.display = ""
    },
    removeOneSignFromDisplay(state) {
      if (state.display) {
        state.display = state.display.substring(0, state.display.length - 1)
        state.expression = state.expression.substring(0, state.expression.length - 1)
      }
    },
    addToDisplay(state, action) {
      state.display = [...state.display, action.payload].join('')
    },
    calculateExpression(state) {
      state.display = calculator((state.display))
    },
  },
})

export const {removeAllFromDisplay, removeOneSignFromDisplay, addToDisplay, calculateExpression} = displaySlice.actions
export default displaySlice.reducer
