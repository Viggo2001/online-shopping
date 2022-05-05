const mongoose = require('mongoose');
const { isEmail } = require('validator');
const Schema = mongoose.Schema;
const min = 6;

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Please enter email'],
        unique: [true, 'user already exists'],
        lowercase: true,
        validate: [ isEmail, 'Please enter valid email' ]
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        minlength: [min, `Must enter at least ${min} characters`]
    }
}, { timestamps: true });

const Users = mongoose.model('user', UserSchema);
module.exports = Users;