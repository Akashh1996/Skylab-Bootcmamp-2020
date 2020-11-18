const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = new Schema({
  id: { type: Number },
  'product-name': { type: String },
  'product-image-url': { type: String },
  'header-top-right-text': { type: String },
  'header-top-left-text': { type: String },
  'product-url': { type: String },
  'header-top-right-url': { type: String },
  price: { type: Number },
});

module.exports = model('Products', productSchema);
