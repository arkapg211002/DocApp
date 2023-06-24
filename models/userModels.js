const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
        maxLength: [30, 'Your name cannot exceed 30 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
    },
    
    
});

module.exports = mongoose.model('Users', userSchema);
