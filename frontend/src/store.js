import { configureStore } from "@reduxjs/toolkit";
import loginRegister from "./pages/Slice";

const store = configureStore({
  reducer: {
    userStore: loginRegister,
  },
});

export default store;
