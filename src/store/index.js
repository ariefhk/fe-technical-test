import counterReducer from "@/store/slices/counter-slice"
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
