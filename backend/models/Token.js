const mongoose = require('mongoose');

/**
 * Represents the token schema for user authentication.
 *
 * @typedef {Object} TokenSchema
 * @property {mongoose.Schema.Types.ObjectId} userId - The ID of the user associated with the token.
 * @property {string} token - The token string.
 * @property {Date} createdAt - The date and time when the token was created.
 */
const tokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
    expires: 3600, /* 1 hour / 3600 seconds */
  },
});

module.exports = mongoose.model('Token', tokenSchema);
