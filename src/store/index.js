import { configureStore } from '@reduxjs/toolkit'
// import counterSlice from './slice/counterSlice'
// import authReducer from './slice/authSlice' 
import  blogSlice  from './slice/blog';
import  authSlice   from './slice/authSlice';



export const store = configureStore({
  reducer: {
    // counter: counterSlice,
    // auth: authReducer,
    blog: blogSlice,
    auth: authSlice,
   },
});
