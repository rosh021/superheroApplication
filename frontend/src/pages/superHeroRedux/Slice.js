import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchSuperHero: {},
  oneSuperHero: [],
  knowTheClick: [],
  showModal: false,
  favorite: [],
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
      const objExist = state.favorite.filter((item) => item._id === payload.id);
      if (objExist.length) {
        return;
      }
      const newSet = [...state.favorite, payload];

      localStorage.setItem("favorites", JSON.stringify(newSet));
      state.favorite = newSet;
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
} = actions;

export default reducer;
