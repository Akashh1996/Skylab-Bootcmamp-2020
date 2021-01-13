const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  userName: { type: String },
  profilePic: { type: String },
  country: { type: String },
  favouriteGames: [{
    title: { type: String },
    uniqueKey: { type: String },
  }],
  languages: [{
    title: { type: String },
    uniqueKey: { type: String },
  }],
  email: { type: String },
  uniqueKey: { type: String },
});

module.exports = model('users', userSchema);
