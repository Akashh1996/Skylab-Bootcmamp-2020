const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const itemSchema = new Schema({
  id: String,
  manufacturer: String,
  price: String,
  'product-name': String,
  'product-type': String,
  'product-url': String,
  'product-image': String,
  inches: String,
  mhz: String,
  'capacity-gb': String,
});

module.exports = model('Item', itemSchema);
