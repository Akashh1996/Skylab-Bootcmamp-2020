const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartSchema = new Schema({
  name: { type: String },
  age: { type: Number },
  address: { type: Schema.Types.ObjectId, ref: 'addresses' },
});

module.exports = model('users', cartSchema);
