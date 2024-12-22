import { axiosInstance } from '@shared/api/axios';

const ENDPOINTS = {
    GET_JOURNAL_ENTRIES: (userId) => `/journal-entries/${userId}`,
    GET_JOURNAL_ENTRY: (userId, id) => `/journal-entries/${userId}/${id}`,
    CREATE_JOURNAL_ENTRY: (userId) => `/journal-entries/${userId}`,
    UPDATE_JOURNAL_ENTRY: (userId, id) => `/journal-entries/${userId}/${id}`,
    DELETE_JOURNAL_ENTRY: (userId, id) => `/journal-entries/${userId}/${id}`,
    UPLOAD_IMAGE: '/journal-entries/images',
    GET_IMAGE: (fileName) => `/journal-entries/images/${fileName}`,
    DELETE_IMAGE: (userId, id, imageId) => `/journal-entries/${userId}/${id}/${imageId}`,
};

export const journalApi = {
    // Fetch all journal entries for a specific user
    async getJournalEntries(userId) {
        const { data } = await axiosInstance.get(ENDPOINTS.GET_JOURNAL_ENTRIES(userId));
        return data;
    },

    // Fetch a specific journal entry by ID
    async getJournalEntry(userId, id) {
        const { data } = await axiosInstance.get(ENDPOINTS.GET_JOURNAL_ENTRY(userId, id));
        return data;
    },

    // Create a new journal entry
    async createJournalEntry(userId, journalData) {
        const { data } = await axiosInstance.post(ENDPOINTS.CREATE_JOURNAL_ENTRY(userId), journalData);
        return data;
    },

    // Update a specific journal entry
    async updateJournalEntry(userId, id, journalData) {
        const { data } = await axiosInstance.put(ENDPOINTS.UPDATE_JOURNAL_ENTRY(userId, id), journalData);
        return data;
    },

    // Delete a specific journal entry
    async deleteJournalEntry(userId, id) {
        await axiosInstance.delete(ENDPOINTS.DELETE_JOURNAL_ENTRY(userId, id));
    },

    // Upload an image to associate with a journal entry
    async uploadImage(file, journalEntryId) {
        const formData = new FormData();
        formData.append('file', file);
        if (journalEntryId) {
            formData.append('journalEntryId', journalEntryId);
        }

        const { data } = await axiosInstance.post(ENDPOINTS.UPLOAD_IMAGE, formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return data;
    },

    // Get a specific image by file name
    async getImage(fileName) {
        const { data } = await axiosInstance.get(ENDPOINTS.GET_IMAGE(fileName), {
            responseType: 'blob', // Get the image file as a blob
        });
        return data;
    },

    // Delete an image associated with a journal entry
    async deleteImage(userId, journalId, imageId) {
        await axiosInstance.delete(ENDPOINTS.DELETE_IMAGE(userId, journalId, imageId));
    },
};