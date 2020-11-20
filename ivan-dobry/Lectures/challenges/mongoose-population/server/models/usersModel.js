const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  adress: { type: Schema.Types.ObjectId, ref: 'adressesses' },
});

module.exports = model('user', userSchema);
