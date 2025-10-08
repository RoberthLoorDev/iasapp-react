export interface Business {
     id: string;
     name: string;
     email: string;
     firstName: string;
     lastName: string;
     isEmailVerified: boolean;
}

export interface AuthResponse {
     message: string;
     data: Business & { accessToken: string };
}
