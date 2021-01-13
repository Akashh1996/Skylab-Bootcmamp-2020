const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  uid: { type: String },
  displayName: { type: String },
  email: { type: String },
  photoURL: { type: String },
  favourite: [{ type: Schema.Types.ObjectId, ref: 'pets' }],
});

module.exports = model('users', userSchema);
