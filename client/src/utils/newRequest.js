import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://openai-api-sever.onrender.com/api/",
  withCredentials: true,
  headers: {
    'content-type': 'application/json',
  },
});

export default newRequest;
