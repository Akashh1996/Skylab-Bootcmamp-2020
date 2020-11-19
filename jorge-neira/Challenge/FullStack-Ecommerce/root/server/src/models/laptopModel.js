const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const laptopSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  'product-name': String,
  'product-model': String,
  'product-part-number': String,
  'product-serie': String,
  'product-image-url': [String],
  price: String,
  'product-general-specs': [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'laptopspec',
    },
  ],
});

module.exports = model('laptop', laptopSchema, 'laptops');
