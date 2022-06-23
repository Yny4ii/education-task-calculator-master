import {configureStore, combineReducers} from "@reduxjs/toolkit"
import displaySlice from "@/redux/slices/displaySlice"
import themeSlice from "@/redux/slices/themeSlice"
import historySlice from "@/redux/slices/historySlice"

const rootReducer = combineReducers({
  display: displaySlice,
  theme: themeSlice,
  history: historySlice,
})
export default configureStore({
  reducer: rootReducer,
})
