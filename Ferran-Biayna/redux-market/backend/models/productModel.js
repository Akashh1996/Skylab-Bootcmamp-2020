const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String },
  image: { type: String },
  'header-top-right-text': { type: String },
  category: { type: String },
  'header-top-right': { type: String },
  quantity: { type: Number },
  price: { type: Number },
});

module.exports = model('products', productSchema);
