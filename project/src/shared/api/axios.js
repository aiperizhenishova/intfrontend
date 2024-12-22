import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: 'https://internshipnew-production.up.railway.app/',
    headers: {
        'Content-Type': 'application/json',
    },
});
