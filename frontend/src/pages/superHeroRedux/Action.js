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

export const fetchAllFavorite = () => async (dispatch) => {
  const data = await getFavoriteList();
  console.log(data);
  if (data.status === "success") {
    dispatch(setFavorite(data.result));
  }
};

export const saveMySuperHero = (data) => async (dispatch) => {
  const { _id } = JSON.parse(window.sessionStorage.getItem("user"));

  if (!_id) {
    alert("Please login first");
    return;
  }

  const info = { ...data, userId: _id };

  const result = await saveFavorite(info);
  result.status === "success" && dispatch(fetchAllFavorite());
};
