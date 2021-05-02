import axios from 'axios';

let api = axios.create({
    baseURL: "http://localhost/backend/api",
    // baseURL: "https://m3117063.api.isabot.site/api",
    withCredentials: true,
});

export default api;
