import axios from "axios";
const apiUrl = "https://akabab.github.io/superhero-api/api/all.json";
const rootUrl =
  process.env.NODE_ENV === "production"
    ? "/api/v1"
    : "http://localhost:8000/api/v1";
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
export const fetchSuperHero = () => {
  return fetchSuperHeros("get", apiUrl);
};

export const registerUser = (obj) => {
  return apiCall("post", registerEP, obj);
};

export const loginUser = (obj) => {
  return apiCall("post", loginEP, obj);
};

// ==================== Save Favorite in DataBase===================

export const saveFavorite = (obj) => {
  return apiCall("post", favoriteEP, obj);
};

export const getFavoriteList = async () => {
  try {
    const { _id } = JSON.parse(window.sessionStorage.getItem("user"));
    const { data } = await axios.get(favoriteEP, {
      headers: {
        Authorization: _id,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const updateFavoriteList = async (updateData) => {
  try {
    const { _id } = JSON.parse(window.sessionStorage.getItem("user"));
    const { data } = await axios.put(favoriteEP, updateData, {
      headers: {
        Authorization: _id,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const deleteFavList = async (id) => {
  try {
    const { _id } = JSON.parse(window.sessionStorage.getItem("user"));
    const { data } = await axios.delete(favoriteEP + "/" + id, {
      headers: {
        Authorization: _id,
      },
    });
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
