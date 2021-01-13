const { Schema, model } = require('mongoose');

const user = new Schema({
  uid: { type: String },
  displayName: { type: String },
  email: { type: String },
  photoURL: { type: String },
  favorites: [{ type: Schema.Types.ObjectId, ref: 'videogames' }],
});

module.exports = model('users', user);
