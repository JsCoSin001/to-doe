import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost/pr1/public/api/v1",
});

export default api;
