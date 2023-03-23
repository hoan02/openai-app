import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://server-ymt3.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
