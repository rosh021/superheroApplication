import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchSuperHero: {},
};

const loginRegisterSlice = createSlice({
  name: "superHero",
  initialState,
  reducers: {
    setSearchSuperHero: (state, { payload }) => {
      state.searchSuperHero = payload;
    },
  },
});
const { reducer, actions } = loginRegisterSlice;
export const { setSearchSuperHero } = actions;

export default reducer;
