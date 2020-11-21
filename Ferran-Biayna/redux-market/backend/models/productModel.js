const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  image: { type: String },
  'header-top-right-text': { type: String },
  category: { type: String },
  'header-top-right': { type: String },
  price: { type: String },
});

module.exports = model('products', productSchema);