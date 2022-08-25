import axios from "axios";
const apiUrl = "https://superheroapi.com/api/1267095494123616/search/";
const rootUrl = "http://localhost:8000/api/v1";
const registerEP = rootUrl + "/registerlogin";
const loginEP = registerEP + "/login";

export const fetchSuperHero = (name) => {
  try {
    return axios.get(apiUrl + name);
  } catch (error) {
    console.log(error);
  }
};

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

export const loginUser = (obj) => {
  return apiCall("post", loginEP, obj);
};
