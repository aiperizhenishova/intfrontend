import { axiosInstance } from '@shared/api/axios';

const ENDPOINTS = {
    REQUEST_RESET: (userId) => `/password-reset/request/${userId}`,
    RESET_PASSWORD: '/password-reset/reset',
};

export const passwordResetApi = {
    /**
     * Request a password reset for a user
     * @param {number} userId - The ID of the user requesting the reset
     * @returns {Promise<string>} A message confirming the reset email was sent
     */
    async requestPasswordReset(userId) {
        const { data } = await axiosInstance.post(ENDPOINTS.REQUEST_RESET(userId));
        return data;
    },

    /**
     * Reset the user's password
     * @param {Object} resetData - Data required to reset the password
     * @param {string} resetData.token - The reset token
     * @param {string} resetData.newPassword - The new password
     * @returns {Promise<string>} A message confirming the password has been reset
     */
    async resetPassword(resetData) {
        const { data } = await axiosInstance.post(ENDPOINTS.RESET_PASSWORD, resetData);
        return data;
    },
};