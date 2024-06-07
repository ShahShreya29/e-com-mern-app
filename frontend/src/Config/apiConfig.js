import axios from "axios";

const API_URL = 'http://localhost:8080/api';


const token = localStorage.getItem("token");
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});

export default api;
