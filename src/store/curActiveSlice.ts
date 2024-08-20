import { createSlice } from '@reduxjs/toolkit'

const curActiveSlice = createSlice({
  name: 'curActive',
  initialState: {
    value: '',
  },
  reducers: {
    setCurActive: (state, action) => {
      state.value = action.payload
    },
  },
})

// const curActiveStore = configureStore({
//   reducer: {
//     curActive: curActiveSlice.reducer,
//   },
// })
export default curActiveSlice.reducer

export const { setCurActive } = curActiveSlice.actions
