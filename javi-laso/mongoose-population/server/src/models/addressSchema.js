const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
  street: String,
  number: Number,
  city: String,
  country: { type: Schema.Types.ObjectId, ref: 'Country' },
});

module.exports = model('Address', addressSchema);
