import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from './slice/counterSlice'
import authReducer from './slice/authSlice' 

export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    auth: authReducer,
  },
});
