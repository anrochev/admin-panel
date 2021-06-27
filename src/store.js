import { configureStore } from '@reduxjs/toolkit'
import uiReducer from 'features/ui/uiSlice'
import logger from 'redux-logger'
import ordersReducer from 'features/Orders/ordersSlice'

export const store =  configureStore({
  reducer: {
    ui: uiReducer,
    orders: ordersReducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== 'production',
})
