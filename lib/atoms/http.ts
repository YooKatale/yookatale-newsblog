import axios from "axios";

axios.defaults.baseURL = "https://yookatale-server-app.onrender.com";
axios.defaults.headers.post.Accept = "application/json";

export default axios;
