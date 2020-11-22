const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  adress: { type: String },
});
module.exports = model('users', userSchema);
