import { toast } from "react-toastify";
import { fetchSuperHero } from "../../helpers/axiosHelper";

export const searchSuperHero = (batman) => async (dispatch) => {
  const result = await fetchSuperHero(batman);
  dispatch(fetchSuperHero(result));
};
