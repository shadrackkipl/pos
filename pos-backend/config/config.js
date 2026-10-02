const path = require('path');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const config = Object.freeze({
    port: process.env.PORT || 8000,
    databaseURI: process.env.MONGODB_URI,
    nodeEnv: process.env.NODE_ENV || 'development'
});

module.exports = config;