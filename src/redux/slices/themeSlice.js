import {createSlice} from "@reduxjs/toolkit"

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: 'light',
  },
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload
      console.log(state.theme + 'qweqweqweqweqwe')
    },
  },
})

export const {changeTheme} = themeSlice.actions
export default themeSlice.reducer
