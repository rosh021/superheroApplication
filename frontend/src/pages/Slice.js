import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const loginRegisterSlice = createSlice({
  name: "loginRegister",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});
