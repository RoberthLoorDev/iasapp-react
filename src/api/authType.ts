import type { AuthResponse } from "../types/auth";
import api from "./axios";

export const authApi = {
     login: (email: string, password: string) => api.post<AuthResponse>("/auth/login", { email, password }),
};
