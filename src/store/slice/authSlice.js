import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


 export const loginUser= createAsyncThunk("auth/loginUser",async (payload) => {
  const response = await axios.post("http://localhost:3000/login",payload);
  console.log("🚀 ~ loginUser ~ response:", response)
  return response.data.result;
})

const authSlice = createSlice({
  name: 'auth',
  initialState:{ 
  isLoggedIn: false,
},
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
  },
    extraReducers: builder => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(loginUser.fulfilled, (state, action) => {
  state.isLoggedIn = true;
  if (action.payload?.token) {
    localStorage.setItem("token", action.payload.token);
  } else {
    console.warn("Login succeeded but no token received:", action.payload);
  }
})

        // .addCase(loginUser.rejected, () => {
        //  //Dislay notification 
        //  console.log("Cannot login user");
        // });
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

