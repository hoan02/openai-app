import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config()

const newRequest = axios.create({
  baseURL: process.env.BASE_URL_SERVER,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default newRequest;
