import axios from "axios";
import { baseUrl } from "./base_url";


const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});


axiosInstance.interceptors.request.use(config => {
    const accessToken = auth
})