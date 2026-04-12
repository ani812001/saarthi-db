import axios from "axios";

const BASE_URL = "http://localhost:8080/api";

// ✅ AI Search API
export const aiSearch = (prompt) => {
  return axios.post(`${BASE_URL}/ai/search`, { prompt });
};
