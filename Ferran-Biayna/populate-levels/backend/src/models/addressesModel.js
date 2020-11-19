const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartSchema = new Schema({
  street: { type: String },
  number: { type: Number },
  city: { type: String },
  country: { type: Schema.Types.ObjectId, ref: 'countries' },
});

module.exports = model('addresses', cartSchema);
