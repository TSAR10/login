const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema
(
    {
        email: 
        {
            type: String, 
            lowercase: true, 
            required: [true, "can't be blank"], 
            match: [/\S+@\S+\.\S+/, 'is invalid']
        },
        user_name:
        {
            type: String, 
            lowercase: true,
            required: [true, "can't be blank"], 
            match: [/^[a-zA-Z0-9]+$/, 'is invalid']
        },
        password:
        {
            type: String,
            required: [true, "can't be blank"]
        }
    }
)

module.exports = mongoose.model('User', UserSchema);