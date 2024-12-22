/**
 * @typedef {Object} SignupDTO
 * @property {string} email - Email address of the user (must be unique)
 * @property {string} password - Password of the user (minimum 8 characters)
 */

/**
 * @typedef {Object} LoginDTO
 * @property {string} email - Email address of the user
 * @property {string} password - Password of the user
 */

/**
 * @typedef {Object} User
 * @property {number} id - Unique identifier of the user
 * @property {string} email - Email address of the user
 * @property {string} password - Encrypted password of the user
 * @property {Date} createdAt - The timestamp of when the user was created
 * @property {Date} [updatedAt] - The timestamp of when the user was last updated (optional)
 */

/**
 * @typedef {Object} AuthResponse
 * @property {string} token - JWT authentication token
 */

/**
 * @typedef {Object} ErrorResponse
 * @property {string} error - Error message describing the issue
 */