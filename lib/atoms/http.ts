import axios from "axios";

axios.defaults.baseURL = "https://yookatale-server-app.onrender.com/api";
// axios.defaults.baseURL = "http://localhost:8000/api";
axios.defaults.headers.post.Accept = "application/json";

export default axios;
