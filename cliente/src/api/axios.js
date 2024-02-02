import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "http://localhost:3456/api",
  withCredentials: true,
});

export default axiosConfig;
