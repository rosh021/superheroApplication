import { loginUser } from "../helpers/axiosHelper";
import { toast } from "react-toastify";
import { setUser } from "./Slice";

export const loginAction = (obj) => async (dispatch) => {
  const resultPromise = loginUser(obj);

  toast.promise(resultPromise, {
    pending: "Please Wait....",
  });

  const { status, message, result } = await resultPromise;

  toast[status](message);
  status === "success" && dispatch(setUser(result));
};
