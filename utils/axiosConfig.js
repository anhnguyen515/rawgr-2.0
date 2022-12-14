import axios from "axios";
import { API_KEY, API_URL } from "./constants";

const axiosClient = axios.create({
  baseURL: API_URL + "/public/v2",
  xsrfCookieName: "csrftoken",
  // withCredentials: true,
  xsrfHeaderName: "X-CSRFToken",
});

axiosClient.interceptors.request.use((config) => {
  // config.headers["Accept"] = "application/json";
  // config.headers["Content-Type"] = "application/json";
  config.headers["Authorization"] = `Bearer ${API_KEY}`;
  return config;
});

export default axiosClient;
