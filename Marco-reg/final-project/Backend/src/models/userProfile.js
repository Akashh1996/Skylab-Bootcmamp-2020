const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const profileSchema = new Schema({

  userName: { type: String },
  userImage: { type: String },
  userDescription: { type: String },
  userStance: { type: String },
  userCity: { type: String },
  userStyle: { type: String },
  userPhotos: [String],
  email: { type: String },

});

module.exports = model('user', profileSchema);
