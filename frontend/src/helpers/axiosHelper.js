import axios from "axios";
const apiUrl = "https://akabab.github.io/superhero-api/api/all.json";
const rootUrl = "http://localhost:8000/api/v1";
const registerEP = rootUrl + "/registerlogin";
const loginEP = registerEP + "/login";
const favoriteEP = rootUrl + "/favorite";

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

const fetchSuperHeros = async (method, url) => {
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
  return fetchSuperHeros("get", apiUrl);
};

export const registerUser = (obj) => {
  return apiCall("post", registerEP, obj);
};

export const loginUser = (obj) => {
  console.log(obj);
  return apiCall("post", loginEP, obj);
};

// ==================== Save Favorite in DataBase===================

export const saveFavorite = (obj) => {
  console.log(obj);
  return apiCall("post", favoriteEP, obj);
};
