// services/api.js
import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

export const searchData = (query) => {
  return axios.get(`${BASE_URL}/search?q=${query}`);
};
