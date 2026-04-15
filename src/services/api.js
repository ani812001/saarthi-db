import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// 🤖 AI Search
export const aiSearch = (prompt) => {
  return axios.post(`${BASE_URL}/ai/search`, { prompt });
};

// 🔍 Smart Search
export const smartSearch = (params) => {
  return axios.get(`${BASE_URL}/search`, { params });
};
