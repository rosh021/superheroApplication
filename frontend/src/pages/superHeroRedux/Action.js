import { toast } from "react-toastify";
import { fetchSuperHero, saveFavorite } from "../../helpers/axiosHelper";
import { setFavorite, setSearchSuperHero } from "./Slice";

export const fetchAllSuperHero = () => async (dispatch) => {
  const result = await fetchSuperHero();

  dispatch(setSearchSuperHero(result));
};

export const saveMySuperHero = (data) => async (dispatch) => {
  console.log(data);
  const result = await saveFavorite(data);
  dispatch(setFavorite(result));
};
