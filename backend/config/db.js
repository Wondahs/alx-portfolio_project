/**
 * Connects to the MongoDB database using the provided MongoDB URI.
 * @async
 * @function connectDB
 * @throws {Error} If the database connection fails.
 */
const mongoose = require('mongoose');
const logger = require('../uploads/logger.js');
require('dotenv').config();

const connectDB = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('Database connection failed', error);
        process.exit(1);
    }
};
module.exports = connectDB;