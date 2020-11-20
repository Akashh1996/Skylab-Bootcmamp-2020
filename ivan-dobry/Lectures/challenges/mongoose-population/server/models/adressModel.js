const { Schema, model } = require('mongoose');

const adressSchema = new Schema({
  street: { type: String },
  number: { type: Number },
  city: { type: String },
  country: { type: Schema.Types.ObjectId, ref: 'country' },
});

module.exports = model('adressesses', adressSchema);
