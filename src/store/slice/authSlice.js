import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


 export const loginUser= createAsyncThunk("auth/loginUser",async (payload) => {
  const response = await axios.post("http://localhost:3000/login",payload);
  
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
          localStorage.setItem("token",action.payload.token);
        });
        // .addCase(loginUser.rejected, () => {
        //  //Dislay notification 
        //  console.log("Cannot login user");
        // });
    }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

