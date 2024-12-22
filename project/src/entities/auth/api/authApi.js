import { axiosInstance } from '@shared/api/axios';

const ENDPOINTS = {
    SIGNUP: '/auth/signup',
    LOGIN: '/auth/login',
};

export const authApi = {

    async signup(signupData) {
        const { data } = await axiosInstance.post(ENDPOINTS.SIGNUP, signupData);
        return data;
    },


    async login(loginData) {
        const { data } = await axiosInstance.post(ENDPOINTS.LOGIN, loginData);
        return data;
    },
};