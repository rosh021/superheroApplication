import axios from "axios";

const rootUrl = "http://localhost:8000/api/v1";
const registerEP = rootUrl + "/registerlogin";

const apiCall = async (method, url, data) => {
  try {
    const response = await axios({
      method,
      url,
      data,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const registerUser = (obj) => {
  return apiCall("post", registerEP, obj);
};
