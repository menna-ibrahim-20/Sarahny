const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        min: 6
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [isEmail, 'Please enter a valid email address']
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    token: String
});

module.exports = mongoose.model('User', userSchema);