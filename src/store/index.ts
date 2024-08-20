import { configureStore } from '@reduxjs/toolkit'
import curActiveReducer from './curActiveSlice'

const store = configureStore({
  reducer: {
    curActive: curActiveReducer,
  },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
