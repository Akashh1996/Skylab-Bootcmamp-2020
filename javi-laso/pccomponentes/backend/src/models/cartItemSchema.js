const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartItemSchema = new Schema({
  cartList: { type: Object },
});

module.exports = model('carts', cartItemSchema);
