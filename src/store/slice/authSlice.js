import { createSlice } from '@reduxjs/toolkit';
import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



//  export const loginUser= createAsyncThunk("auth/loginUser",async (payload) => {
//   const response = await axios.post("http://localhost:3000/login",payload);
//   console.log("🚀 ~ loginUser ~ response:", response)
//   return response.data.result;
// })

export const authApi =createApi({
  baseQuery: fetchBaseQuery ({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (build) => ({
   loginUser: build.mutation({
      query: (payload) => ({
        url: `login`,
        method: 'POST',
        body: payload,
      }),
     
  }),
}),
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
    // extraReducers: builder => {
    //   builder
    //     .addCase(loginUser.pending, (state) => {
    //       state.status = 'loading';
    //     })
    //     .addCase(loginUser.fulfilled, (state, action) => {
    //         state.isLoggedIn = true;
    //         localStorage.setItem("token", action.payload.token);
          
    //     })
    //     .addCase(loginUser.rejected, () => {
    //      //Dislay notification 
    //      console.log("Cannot login user");
    //     });
    // }
})

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

export const {useLoginUserMutation } = authApi

