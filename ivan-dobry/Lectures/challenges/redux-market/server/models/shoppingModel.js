const { Schema, model } = require('mongoose');
// eslint-disable-next-line no-unused-vars
const infoSchema = require('./infoModel');

const shoppingSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  image: { type: String },
  'header-top-right-text': { type: String },
  'header-top-left-text': { type: String },
  'product-url': { type: String },
  'header-top-right-url': { type: String },
  info: { type: Schema.Types.ObjectId, ref: 'infoproducts' },
  price: { type: Number },
});

module.exports = model('cartproducts', shoppingSchema);
