const express = require('express');
const config = require('./config/config');
const connectDB = require('./config/database');
const createHttpError = require("http-errors");
const globalErrorHandler = require("./middlewares/globalErrorHandler")
const app = express();

// Root EndPoint
app.get('/', (req, res) => {
    res.json({ message: "Hello Your backend is officially running." });
});

// Global Error Handler

app.use(globalErrorHandler)

// Start serving only after the database connection is ready.
const startServer = async () => {
    try {
        await connectDB();
        app.listen(config.port, () => {
            console.log(`Server is running on port ${config.port}`);
        });
    } catch (error) {
        process.exit(1);
    }
};

startServer();