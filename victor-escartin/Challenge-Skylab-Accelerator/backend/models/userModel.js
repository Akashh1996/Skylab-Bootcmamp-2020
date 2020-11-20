const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        password: { type: Number },
        isAdmin: { type: Boolean },
        bio: { type: String },
        github_profile:{ type: String },
        photo:{ type: String },
        projects:{ type: String },
        collaboring_in:{ type: String }
      }
);

module.exports = model('users', userSchema);
