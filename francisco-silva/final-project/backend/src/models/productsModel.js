const { Schema, model } = require('mongoose');

const productSchema = new Schema({
  name: { type: String },
  photo: { type: String },
  category: [String],
  price: { type: String },
  quantity: { type: String },
  ingredients: { type: String },
  label: [String],
  description: { type: String },
});

module.exports = model('product', productSchema);
