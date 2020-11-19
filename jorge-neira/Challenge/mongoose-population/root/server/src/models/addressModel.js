const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const addressSchema = new Schema({
  street: String,
  number: Number,
  city: String,
  country: { type: Schema.Types.ObjectId, ref: 'Country' },
});

module.exports = model('Address', addressSchema);
