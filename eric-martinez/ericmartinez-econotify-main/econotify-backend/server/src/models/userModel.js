const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const user = new Schema({
  displayName: { type: String },
  email: { type: String },
  uid: { type: String },
  userPhoto: { type: String },
  authors: [String],
  readArticles: [String],
});

module.exports = model('users', user);
