/**
 * @typedef {Object} JournalEntry
 * @property {number} id - Journal entry ID
 * @property {string} title - Title of the journal entry
 * @property {string} content - Content of the journal entry
 * @property {Date} createdAt - Creation timestamp
 * @property {Date} [updatedAt] - Last updated timestamp (optional)
 * @property {number} userId - ID of the user who owns this journal entry
 * @property {string[]} [imageUrls] - Array of associated image URLs (optional)
 */

/**
 * @typedef {Object} CreateJournalEntryDTO
 * @property {string} title - Title of the journal entry
 * @property {string} content - Content of the journal entry
 */

/**
 * @typedef {Object} UpdateJournalEntryDTO
 * @property {string} [title] - New title of the journal entry (optional)
 * @property {string} [content] - New content of the journal entry (optional)
 */

/**
 * @typedef {Object} JournalImage
 * @property {string} id - Unique ID for the image
 * @property {string} fileName - File name of the image
 * @property {string} url - URL for accessing the image
 * @property {number} journalEntryId - The ID of the associated journal entry
 */

/**
 * @typedef {Object} FetchUserJournalEntriesResponse
 * @property {JournalEntry[]} journalEntries - List of journal entries for the user
 */

/**
 * @typedef {Object} UploadJournalImageResponse
 * @property {JournalImage} image - Uploaded image details
 */

/**
 * @typedef {Object} FetchJournalEntryWithImagesResponse
 * @property {JournalEntry} journalEntry - The journal entry
 * @property {JournalImage[]} images - List of associated images
 */

/**
 * @typedef {Object} DeleteResponse
 * @property {boolean} success - Whether the deletion was successful
 * @property {string} message - Additional information about the result
 */