const mongoose = require('mongoose');
const { isEmail } = require('validator');

const messageSchema = new mongoose.Schema({
    recevierId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        require: true
    },
    senderId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    content:{
        type: String,
        require: true
    },
    isAnonymous:{
        type: Boolean,
        default: false
    }
},
    {timestamps: true});

module.exports = mongoose.model('Message', messageSchema);