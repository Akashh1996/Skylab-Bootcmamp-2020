const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const itemSchema = new Schema({
  id: { type: String },
  manufacturer: { type: String },
  price: { type: String },
  'product-name': { type: String },
  'product-type': { type: String },
  'product-url': { type: String },
  'product-image': { type: String },
});

module.exports = model('items', itemSchema);
