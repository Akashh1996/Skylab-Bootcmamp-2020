const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String },
    profilePic: { type: String },
    url: { type: String },
});

module.exports = model('users', userSchema);
