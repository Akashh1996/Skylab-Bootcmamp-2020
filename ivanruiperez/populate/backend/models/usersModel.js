const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
  age: { type: Number },
  name: { type: String },
  address: { type: Schema.Types.ObjectId, ref: 'addresses' },
});

module.exports = model('users', usersSchema);
