import axios from "axios";
const apiUrl = "https://akabab.github.io/superhero-api/api/all.json";
const rootUrl = "http://localhost:8000/api/v1";
const registerEP = rootUrl + "/registerlogin";
const loginEP = registerEP + "/login";

const apiCall = async (method, url) => {
  try {
    const response = await axios({
      method,
      url,
    });

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchSuperHero = async () => {
  return apiCall("get", apiUrl);
};

export const registerUser = (obj) => {
  return apiCall("post", registerEP, obj);
};

export const loginUser = (obj) => {
  return apiCall("post", loginEP, obj);
};
