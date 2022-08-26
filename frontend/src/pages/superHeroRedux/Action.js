import { toast } from "react-toastify";
import { fetchSuperHero } from "../../helpers/axiosHelper";
import { setSearchSuperHero } from "./Slice";

export const fetchAllSuperHero = (name) => async (dispatch) => {
  const result = await fetchSuperHero();

  dispatch(setSearchSuperHero(result));
};
