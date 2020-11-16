const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartShema = new Schema({
  cartId: { type: Number },
  productName: { type: String },
  productModel: { type: Object },
  price: { type: Number },
});

module.exports = model('carts', cartShema);
