import axios from "axios";

const api = axios.create({
     baseURL: import.meta.env.VITE_API_URL,
     headers: {
          "Content-Type": "application/json",
     },
     timeout: 10000,
});

// load authorization if is avaliable, request
api.interceptors.request.use((config) => {
     const token = localStorage.getItem("token");
     if (token) {
          config.headers.Authorization = `Bearer ${token}`;
     }
     return config;
});

// load authorization if avaliable, response
api.interceptors.response.use(
     (response) => response,
     (error) => {
          if (error.response?.status === 401) {
               console.warn("Expired session or no authorized");
          }

          if (error.code === "ECONNABORTED") {
               console.error("timeout");
          }

          return Promise.reject(error);
     }
);

export default api;
