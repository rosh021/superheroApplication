import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchSuperHero: {},
  oneSuperHero: [],
};

const searchSuperHeroSlice = createSlice({
  name: "superHero",
  initialState,
  reducers: {
    setSearchSuperHero: (state, { payload }) => {
      state.searchSuperHero = payload;
    },
    setOneSuperHero: (state, { payload }) => {
      state.oneSuperHero = payload;
    },
  },
});
const { reducer, actions } = searchSuperHeroSlice;
export const { setSearchSuperHero, setOneSuperHero } = actions;

export default reducer;
