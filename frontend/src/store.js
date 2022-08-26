import { configureStore } from "@reduxjs/toolkit";
import loginRegister from "./pages/logingRegisterRedux/Slice";
import superHero from "./pages/superHeroRedux/Slice";

const store = configureStore({
  reducer: {
    userStore: loginRegister,
    superHero: superHero,
  },
});

export default store;
