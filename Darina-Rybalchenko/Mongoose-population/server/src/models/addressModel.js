const { Schema, model } = require('mongoose');

const addressSchema = new Schema({
  street: { type: String },
  number: { type: Number },
  city: { type: String },
  country: { type: Schema.Types.ObjectId, ref: 'countries' },
});

module.exports = model('addresses', addressSchema);
