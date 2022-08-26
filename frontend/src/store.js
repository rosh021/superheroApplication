import { configureStore } from "@reduxjs/toolkit";
import loginRegister from "./pages/logingRegisterRedux/Slice";
import searchSuperHero from "./pages/superHeroRedux/Slice";

const store = configureStore({
  reducer: {
    userStore: loginRegister,
    superHero: searchSuperHero,
  },
});

export default store;
