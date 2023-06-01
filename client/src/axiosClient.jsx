import { axios } from "axios";

const axiosClient = axios.create({ baseURL: import.meta.env.VITE_BASE_URL });

axiosClient.interceptors.request.use((config) => {
    config.headers.Authorization =
        "Bearer " + localStorage.getItem("AUTH_TOKEN");
    return config;
});

axiosClient.interceptors.response.use(
    (data) => {
        return data;
    },
    (error) => {
        const { response } = error;
        switch (response) {
            case 401: {
                localStorage.removeItem("AUTH_TOKEN");
                console.log("Redirect to Login!");
                break;
            }
            case 500: {
                console.log("Server Error")
                break;
            }
            default:
                console.log("Unknown error");
        }
        throw error;
    }
);

export default axiosClient;
