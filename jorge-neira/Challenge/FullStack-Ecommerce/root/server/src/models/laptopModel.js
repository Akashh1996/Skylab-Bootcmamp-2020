const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const productGeneralSpecsSchema = new Schema({
  screen: { type: String },
  cpu: { type: String },
  'memory-ram': { type: String },
  gpu: { type: String },
  os: { type: String },
  color: { type: String },
});

const laptopSchema = new Schema({
  'product-name': { type: String },
  'product-model': { type: String },
  'product-part-number': { type: String },
  'product-serie': { type: String },
  'product-image-url': [String],
  'product-general-specs': {
    type: productGeneralSpecsSchema,
    default: {},
  },
  price: { type: String },
  cart: { type: Schema.Types.ObjectId, ref: 'carts' },
});

module.exports = model('laptops', laptopSchema);
