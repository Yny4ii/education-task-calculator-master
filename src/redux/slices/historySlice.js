import {createSlice} from '@reduxjs/toolkit'

const historySlice = createSlice({
  name: 'history',
  initialState: {
    history: [],
  },
  reducers: {
    addExpressionToHistory(state, action) {
      state.history = [...state.history, action.payload.history]
    },
    clearHistory(state){
      state.history = []
    },
  },
})

export const {addExpressionToHistory, clearHistory} = historySlice.actions
export default historySlice.reducer
