import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const aiSearch = (prompt) => {
  return axios.post(`${BASE_URL}/ai/search`, { prompt });
};
