const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const laptopSchema = new Schema({
  'product-name': String,
  'product-model': String,
  'product-part-number': String,
  'product-serie': String,
  'product-image-url': [String],
  price: String,
  generalSpecs: [
    {
      type: Schema.Types.ObjectId,
      ref: 'laptopspec',
    },
  ],
});

module.exports = model('laptop', laptopSchema, 'laptops');
