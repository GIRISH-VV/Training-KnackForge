import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://10.0.4.111:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;