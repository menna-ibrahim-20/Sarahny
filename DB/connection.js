const mongoose = require('mongoose');

let isConnected = false;

const connection = async () => {
    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 30000,
        });
        isConnected = true;
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
        throw err;
    }
};

module.exports = connection;