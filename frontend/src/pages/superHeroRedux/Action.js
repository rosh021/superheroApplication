import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  fetchSuperHero,
  getFavoriteList,
  saveFavorite,
} from "../../helpers/axiosHelper";
import { setFavorite, setSearchSuperHero } from "./Slice";

export const fetchAllSuperHero = () => async (dispatch) => {
  const result = await fetchSuperHero();

  dispatch(setSearchSuperHero(result));
};

export const saveMySuperHero = (data) => async (dispatch) => {
  const { _id } = JSON.parse(window.sessionStorage.getItem("user"));
  console.log(_id);
  if (!_id) {
    alert("Please login first");
    return;
  }

  const info = { ...data, userId: _id };

  const result = await setFavorite(info);

  toast[result.status](result.message);
};

export const fetchAllFavorite = (id) => async (dispatch) => {
  const { status, result } = await getFavoriteList(id);
};
