
import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "../slice/blogSlice"; 
import cartReducer from "../slice/cartSlice";
import authReducer, { authApi } from"../slice/authSlice";
import { blogApi }from "../slice/blogSlice";
const rootReducer = combineReducers({
 // Add the generated reducer as a specific top-level slice
 [blogApi.reducerPath]: blogApi.reducer,
 [authApi.reducerPath]: authApi.reducer,
 blog: blogReducer,
  auth: authReducer,
  cart: cartReducer
});

export default rootReducer;
