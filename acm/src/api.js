
import axios from "axios";

const api = axios.create({
  baseURL: "https://acm-v3gp.onrender.com/api",
});

export default api;
