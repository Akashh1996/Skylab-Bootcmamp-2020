const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  address: { type: String },
});

module.exports = model('users', usersSchema);
