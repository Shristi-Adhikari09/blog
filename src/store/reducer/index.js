
import { combineReducers } from "@reduxjs/toolkit";
import blogReducer from "../slice/blog"; 
import authReducer from"../slice/authSlice";

const rootReducer = combineReducers({
  blog: blogReducer,
  auth: authReducer,
});

export default rootReducer;
