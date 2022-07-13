import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  isUserLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.isUserLoggedIn = action.payload.isUserLoggedIn;
    },
    logoutUser: (state) => {
      state.user = initialState.user;
      state.isUserLoggedIn = false;
    },
  },
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
