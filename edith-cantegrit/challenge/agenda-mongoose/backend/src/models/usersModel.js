const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  address: { type: Schema.Types.ObjectId, ref: 'adresses' },
});

module.exports = model('users', usersSchema);
