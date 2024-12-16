import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://localhost:8001/api/",
  withCredentials: true,
});
export default apiRequest;
