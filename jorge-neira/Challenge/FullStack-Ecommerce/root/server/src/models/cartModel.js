const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const cartShema = new Schema({
  quantity: Number,
  price: Number,
});

module.exports = model('carts', cartShema);
