import {create} from 'zustand';
import { axiosInstance } from '../lib/axios';

export const useAuthStore = create((set) => ({
    authUser: null,

    login: async (data) => {
        try {
            const res = await axiosInstance.post("/auth/login", data);
            set({authUser: res.data })
            console.log("Login successful!")
        } catch (error) {
            console.log("Error in log in: " + error.response.data.message)
        }
    }
}));