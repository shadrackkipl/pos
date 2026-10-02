const mongoose = require("mongoose")
const config = require('./config');

const connectDB = async () => {
    try {
        const mongoUri = config.databaseURI;
        if (!mongoUri) {
            throw new Error('MONGODB_URI is not set. Check the workspace .env file.');
        }

        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
        return conn;
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`);
        throw error;
    }
}

module.exports = connectDB;