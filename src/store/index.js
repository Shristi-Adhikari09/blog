import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from './slice/counterSlice'
// import authReducer from './slice/authSlice' 
import  blogSlice  from './slice/blog';

export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    // auth: authReducer,
    blog: blogSlice

  },
});
