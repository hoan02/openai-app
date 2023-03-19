import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://open-ai-sever.onrender.com/api",
  withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		"Cookie": document.cookie
	}
});


export default newRequest;