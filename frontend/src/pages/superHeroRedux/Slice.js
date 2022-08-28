import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchSuperHero: {},
  oneSuperHero: [],
  knowTheClick: [],
  showModal: false,
  favorite: [],
  clickFromFavorite: [],
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
    setKnowTheClick: (state, { payload }) => {
      state.knowTheClick = payload;
    },
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
    setFavorite: (state, { payload }) => {
      state.favorite = payload;
    },
    setKnowClickFromFavorite: (state, { payload }) => {
      state.clickFromFavorite = payload;
    },
  },
});
const { reducer, actions } = searchSuperHeroSlice;
export const {
  setSearchSuperHero,
  setOneSuperHero,
  setShowModal,
  setKnowTheClick,
  setFavorite,
  setKnowClickFromFavorite,
} = actions;

export default reducer;
