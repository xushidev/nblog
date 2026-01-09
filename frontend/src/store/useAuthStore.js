import {create} from 'zustand';
import { axiosInstance } from '../lib/axios';

export const useAuthStore = create((set) => ({
    authenticated: false,

    login: async (data) => {
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({authenticated: true })
            console.log("Login successful!")
        } catch (error) {
            console.log("Error in log in: " + error.response.data.message)
        }
    },
    
    logout: async () => {
        try {
            await axiosInstance.post("/auth/logout");
            console.log("Logout successful!")
        } catch (error) {
            console.log("Error in log out: " + error.response.data.message)
        }
    }
}));