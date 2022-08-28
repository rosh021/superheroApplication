import { toast } from "react-toastify";
import {
  deleteFavList,
  fetchSuperHero,
  getFavoriteList,
  saveFavorite,
  updateFavoriteList,
} from "../../helpers/axiosHelper";
import { setFavorite, setSearchSuperHero } from "./Slice";

export const fetchAllSuperHero = () => async (dispatch) => {
  const result = await fetchSuperHero();

  dispatch(setSearchSuperHero(result));
};

export const fetchAllFavorite = () => async (dispatch) => {
  const data = await getFavoriteList();

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
  console.log(data);

  const info = { ...data, userId: _id };

  const result = await saveFavorite(info);
  result.status === "success" && dispatch(fetchAllFavorite());
};

export const deleteSuperHero = (id) => async (dispatch) => {
  console.log(id);
  const result = await deleteFavList(id);
  result.status === "success" && dispatch(fetchAllFavorite());
  toast[result.status](result.message);
};

export const updateSuperHeroPowerstats = (data) => async (dispatch) => {
  const requestPromise = updateFavoriteList(data);

  toast.promise(requestPromise, { pending: "Please wait..." });

  const result = await requestPromise;
  result.status === "success" && dispatch(fetchAllFavorite());
  toast[result.status](result.message);
};
