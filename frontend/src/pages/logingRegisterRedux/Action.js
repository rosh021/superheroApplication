import { loginUser } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";
import { setUser } from "./Slice";

export const loginAction = (obj) => async (dispatch) => {
  const data = await loginUser(obj);

  const { status, message, result } = data;

  if (status === "success") {
    window.sessionStorage.setItem("user", JSON.stringify(result));

    dispatch(setUser(data));
  }
  toast[status](message);
};
