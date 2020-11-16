const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const laptopSchema = new Schema({
  id: { type: Number },
  'product-name': { type: String },
  'product-general-specs': { type: Object },
  'product-model': { type: String },
  'product-part-number': { type: String },
  'product-image-url': { type: Array },
  'product-serie': { type: String },
  price: { type: Number },
});

module.exports = model('laptops', laptopSchema);
