const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({

  name: { type: String },
  image: { type: String },
  email: { type: String },
  uid: { type: String },
  isAdmin: { type: Boolean },
});

module.exports = model('user', userSchema);
