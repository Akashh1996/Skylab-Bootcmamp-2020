const { Schema, model } = require('mongoose');

const adressesSchema = new Schema({
  street: { type: String },
  number: { type: Number },
  city: { type: String },
  country: { type: String },
});
module.exports = model('adresses', adressesSchema);
